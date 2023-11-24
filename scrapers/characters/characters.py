import requests
from bs4 import BeautifulSoup
import json
from tqdm import tqdm
import os
import fix_traveler

base_url = 'https://genshin.honeyhunterworld.com'
icon_url = 'https://genshin-impact.fandom.com/wiki/Character'
current_dir = os.path.dirname(os.path.abspath(__file__))

def to_kebab_case(string: str) -> str:
    return string.replace(' ', '-').lower()

def parse_cell(cell: str) -> str:
    if any(c.isalpha() for c in cell):
        return cell
    elif '×' in cell:
        value, multiplier = cell.split('×')
        value = float(value.strip().strip('%')) * float(multiplier)
        return f'{value:.2f}%'
    elif '+' in cell:
        values = cell.split('+')
        result = sum(float(value.strip().strip('%')) for value in values)
        return f'{result:.2f}%'
    else:
        return cell

def parse_row(row: list[str]) -> list[tuple[str, list[str]]]:
    key = row[0]
    if key == 'Low/High Plunge DMG':
        low_key = 'Low Plunge DMG'
        high_key = 'High Plunge DMG'
        low_values = [value.split('/')[0].strip() for value in row[1:]]
        high_values = [value.split('/')[1].strip() for value in row[1:]]
        return [(low_key, low_values), (high_key, high_values)]
    else:
        return [(key, row[1:])]

def fetch_character_data(character: str) -> dict[str, dict[str, dict[str, str]]]:
    url = f'{base_url}/{character}/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    all_data = {}

    info_table = soup.find('table', {'class': 'main_table'})
    rows = info_table.find_all('tr')
    data = {row.find_all('td')[0].text: row.find_all('td')[-1].text for row in rows[1:]}

    all_data["name"] = rows[0].find_all('td')[-1].text
    all_data["icon"] = f'/images/icons/{to_kebab_case(all_data["name"])}.png'
    all_data["weapon"] = rows[5].find_all('td')[-1].text.strip()
    all_data["vision"] = data["Vision (Introduced)"]
    # Stupid fucking Aloy exception
    if all_data["name"] == "Aloy":
        all_data["rarity"] = 6
    else:
        all_data["rarity"] = len(rows[4].find_all('img'))
    all_data["description"] = data["Description"]
    if "Title" in all_data:
        all_data["title"] = data["Title"]
    all_data["occupation"] = data["Occupation"]

    stats_table = soup.find('table', {'class': 'stat_table'})

    ascension_map = {
        '1': '1/20',
        '20': '20/20',
        '20+': '20/40',
        '40': '40/40',
        '40+': '40/50',
        '50': '50/50',
        '50+': '50/60',
        '60': '60/60',
        '60+': '60/70',
        '70': '70/70',
        '70+': '70/80',
        '80': '80/80',
        '80+': '80/90',
        '90': '90/90'
    }

    rows = stats_table.find_all('tr')
    header = [cell.text for cell in rows[0].find_all('td')[:7]]
    data = [[cell.text for cell in row.find_all('td')[:7]] for row in rows[1:]]

    data_dict = {ascension_map[row[0]]: {header[i]: row[i] for i in range(1, len(header))} for row in data}

    all_data["baseStats"] = data_dict

    tables = soup.find_all('table', {'class': 'skill_table'})
    all_data["talents"] = []
    all_data["passiveSkills"] = []

    for table in tables:
        skill_name_tag = table.find_all('td')[1].find('a')
        
        if skill_name_tag:
            skill_name = skill_name_tag.text
            skill_image = base_url + table.find_all('td')[0].find('img')['src'].split('?')[0]
            skill_description = table.find_all('td')[2].get_text(separator='\n', strip=True)
            skill_table = table.find('table', {'class': 'skill_dmg_table'})
            
            if skill_table:
                rows = skill_table.find_all('tr')
                header = [cell.text for cell in rows[0].find_all('td')[:16]]
                data = [[parse_cell(cell.text) for cell in row.find_all('td')[:16]] for row in rows[1:]]

                data_dict = {}
                for row in data:
                    parsed_rows = parse_row(row)
                    for key, values in parsed_rows:
                        data_dict[key] = {header[i]: values[i-1] for i in range(1, len(header))}

                all_data["talents"].append({
                    "name": skill_name,
                    "image": skill_image,
                    "description": skill_description,
                    "data": data_dict
                })
            else:
                all_data["passiveSkills"].append({
                    "name": skill_name,
                    "image": skill_image,
                    "description": skill_description
                })

    # Deletes the passive sprint skill on Ayaka and Mona
    if len(all_data['talents']) == 4:
        del all_data['talents'][2]

    if all_data["name"] != "Traveler":
        # Move the bottom six skills into the `constellations` array
        all_data["constellations"] = all_data["passiveSkills"][-6:]
        all_data["passiveSkills"] = all_data["passiveSkills"][:-6]

        # Add a `level` integer to each constellation
        for i, constellation in enumerate(all_data["constellations"]):
            constellation["level"] = i + 1

    return all_data

# def fetch_icons():
#     # Fetch character icon from genshin-impact.fandom.com/wiki/Character and add it to the `icon` object
#     page_icon = requests.get(icon_url)
#     soup_icon = BeautifulSoup(page_icon.content, 'html.parser')
#     table_icon = soup_icon.find("table", { "class": "article-table" })
#     trs = table_icon.find_all("tr")
#     icons = {}
#     for tr in trs[1:]:
#         name = tr.find_all("td")[1].text.strip()
#         icon = tr.find("td").find("img")["data-src"].split("revision")[0]
#         icons[name] = icon

#     return icons

def fetch_all_characters_data() -> dict[str, dict[str, dict[str, dict[str, str]]]]:
    paths_path = os.path.join(current_dir, "paths", "paths.json")
    with open(paths_path) as f:
        characters = json.load(f)

    all_data = {}

    pbar = tqdm(characters.items(), position=0)
    for character, name in pbar:
        pbar.set_description(f'Fetching {name}\'s data')
        data_dict = fetch_character_data(character)
        if data_dict:
            all_data[name] = data_dict

    # icons = fetch_icons()
    # for name, data in all_data.items():
    #     if name in icons:
    #         data["icon"] = icons[name]

    return all_data

def save_data_to_file(data: dict[str, dict[str, dict[str, dict[str, str]]]]) -> None:
    file_path = os.path.join(current_dir, "characters.json")
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    # Comment this out if you want to test with a single character
    all_data = fetch_all_characters_data()
    save_data_to_file(all_data)
    # fix_traveler.fix_traveler()

    # Uncomment these if you want to test a single character
    # ayaka_data = fetch_character_data('ayaka')
    # print(json.dumps(ayaka_data, indent=4))