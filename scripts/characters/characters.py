import requests
from bs4 import BeautifulSoup
import json
import os
from tqdm import tqdm
import argparse
from selenium import webdriver
from selenium.webdriver.common.by import By
import chromedriver_autoinstaller
import ambr
import asyncio

base_url = 'https://genshin.honeyhunterworld.com'
current_dir = os.path.dirname(os.path.abspath(__file__))
output_dir = os.path.join(current_dir, "output")
characters_json_path = os.path.join(current_dir, "..", "..", "src", "data", "characters", "characters.json")

def fetch_paths():
    """
    Fetches the paths for all characters from GHH and saves it in a JSON.
    """
    url = 'https://genshin.honeyhunterworld.com/fam_chars/?lang=EN'
    
    chromedriver_autoinstaller.install()
    driver = webdriver.Chrome()
    driver.get(url)

    dropdown = driver.find_element(By.CLASS_NAME, 'sorttable_per_page')
    for option in dropdown.find_elements(By.TAG_NAME, 'option'):
        if option.text == '100':
            option.click()
            break

    driver.implicitly_wait(10)

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    table = soup.find('table', {'class': 'genshin_table'})

    character_data = {}

    for row in table.find_all('tr'):
        cells = row.find_all('td')
        if len(cells) > 1:
            name_cell = cells[1]
            a_element = name_cell.find('a')
            if a_element:
                href = a_element.get('href')
                character_name = a_element.text
                if href:
                    character_url = href.split('/')[1]
                    character_data[character_url] = character_name

    sorted_character_data = dict(sorted(character_data.items(), key=lambda item: item[1]))
    unique_character_data = {k: v for k, v in sorted_character_data.items() if list(sorted_character_data.values()).index(v) == list(sorted_character_data.keys()).index(k)}

    with open('paths.json', 'w') as f:
        json.dump(unique_character_data, f, indent=4)

    driver.quit()

def to_kebab_case(string: str) -> str:
    """
    Converts a string to kebab case.
    """
    return string.replace(' ', '-').lower()

def parse_cell(cell: str) -> str:
    """
    Parses a table cell value and converts it to a percentage if applicable.
    """
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
    """
    Parses a table row and handles special cases for 'Low/High Plunge DMG'.
    """
    key = row[0]
    if key == 'Low/High Plunge DMG':
        low_key = 'Low Plunge DMG'
        high_key = 'High Plunge DMG'
        low_values = [value.split('/')[0].strip() for value in row[1:]]
        high_values = [value.split('/')[1].strip() for value in row[1:]]
        return [(low_key, low_values), (high_key, high_values)]
    else:
        return [(key, row[1:])]

async def fetch_character_data(api, character: str) -> dict:
    """
    Fetches a particular characters' data from GHH (provided slug)
    """
    url = f'{base_url}/{character}/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    all_data = {}

    info_table = soup.find('table', {'class': 'main_table'})
    rows = info_table.find_all('tr')
    data = {row.find_all('td')[0].text: row.find_all('td')[-1].text for row in rows[1:]}

    all_data["name"] = rows[0].find_all('td')[-1].text
    all_data["icon"] = f'/images/characters/{to_kebab_case(all_data["name"])}.png'
    all_data["weapon"] = rows[5].find_all('td')[-1].text.strip()
    all_data["vision"] = data["Vision (Introduced)"]
    # Stupid Aloy exception
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

    # Replace all images in all_data with ones grabbed from the API
    images = await fetch_images_from_api(api, all_data["name"])
    if images:
        all_data["icon"] = images["icon"]
        for i, talent in enumerate(all_data["talents"]):
            if i < len(images["talents"]):
                talent["image"] = images["talents"][i]
        for i, passive in enumerate(all_data["passiveSkills"]):
            if i < len(images["passives"]):
                passive["image"] = images["passives"][i]
        for i, constellation in enumerate(all_data["constellations"]):
            if i < len(images["constellations"]):
                constellation["image"] = images["constellations"][i]

    return all_data

def fix_traveler(data):
    """
    Fixes the Traveler data by splitting it into separate characters based on their element.
    """
    traveler_data = data["Traveler"]

    elements = ["Hydro", "Anemo", "Geo", "Electro", "Dendro"]
    travelers_data = {}

    for i, element in enumerate(elements):
        new_traveler_data = traveler_data.copy()
        new_traveler_data["name"] += f" ({element})"
        new_traveler_data["vision"] = element
        new_traveler_data["weapon"] = "Sword"
        new_traveler_data["rarity"] = 5
        new_traveler_data["talents"] = traveler_data["talents"][i*3:(i+1)*3]
        new_traveler_data["passiveSkills"] = traveler_data["passiveSkills"][i*8:i*8+2]
        new_traveler_data["constellations"] = traveler_data["passiveSkills"][i*8+2:(i+1)*8]

        for j, constellation in enumerate(new_traveler_data["constellations"]):
            constellation["level"] = j + 1

        travelers_data[new_traveler_data["name"]] = new_traveler_data

    del data["Traveler"]
    data.update(travelers_data)

    sorted_data = {}
    for key in sorted(data.keys()):
        sorted_data[key] = data[key]

    return sorted_data

def parse_stat_value(value):
    """
    Parses a stat value and converts it to a float if applicable.
    """
    value_str = str(value)

    if value_str.endswith('%'):
        return round(float(value_str.strip('%')) / 100, 5)
    try:
        return round(float(value_str), 5)
    except ValueError:
        return value

def process_character_data(character_data):
    """
    Processes the character data by mapping attribute keys and parsing stat values.
    """
    attribute_key_map = {
        'HP': 'Base HP',
        'Atk': 'Base ATK',
        'Def': 'Base DEF',
        'EM': 'Elemental Mastery',
        'ER': 'Energy Recharge',
        'CritRate%': 'CRIT Rate',
        'CritDMG%': 'CRIT DMG',
        'Bonus Atk%': 'Bonus ATK',
        'Bonus Def%': 'Bonus DEF',
        'Bonus HP%': 'Bonus HP',
        'Bonus EM': 'Bonus Elemental Mastery',
        'Bonus ER': 'Bonus Energy Recharge',
        'Bonus CritRate%': 'Bonus CRIT Rate',
        'Bonus CritDMG%': 'Bonus CRIT DMG',
        'Bonus Heal': 'Healing Bonus',
        'Bonus Pyro%': 'Pyro DMG Bonus',
        'Bonus Cryo%': 'Cryo DMG Bonus',
        'Bonus Hydro%': 'Hydro DMG Bonus',
        'Bonus Elec%': 'Electro DMG Bonus',
        'Bonus Anemo%': 'Anemo DMG Bonus',
        'Bonus Geo%': 'Geo DMG Bonus',
        'Bonus Dendro%': 'Dendro DMG Bonus',
        'Bonus Phys%': 'Physical DMG Bonus',
    }

    for level, stats in character_data.get('baseStats', {}).items():
        new_stats = {}
        for key, value in stats.items():
            mapped_key = attribute_key_map.get(key, key)
            parsed_value = parse_stat_value(value)
            new_stats[mapped_key] = parsed_value
        character_data['baseStats'][level] = new_stats

    return character_data

def kebab_case(name):
    """
    Converts a string to kebab case.
    """
    clean_name = name.replace('(', '').replace(')', '').lower()
    return '-'.join(clean_name.split())

def pascal_case(name):
    """
    Converts a string to Pascal case.
    """
    clean_name = name.replace('(', '').replace(')', '')
    return ''.join(word.title() for word in clean_name.split())

def generate_tsx_file(char_data, output_directory):
    """
    Generates a TSX file for a character with the provided data.
    """
    character_name = char_data['name']
    filename = f"{kebab_case(character_name)}.tsx"
    filepath = os.path.join(output_directory, filename)

    os.makedirs(output_directory, exist_ok=True)

    with open(filepath, 'w') as tsx_file:
        tsx_file.write("import { TalentScaling, Bonus, Character } from '@/interfaces/Character'\n\n")
        tsx_file.write("const talentScalings: TalentScaling = {\n// ...\n}\n\n")
        tsx_file.write("const characterBonuses: Bonus[] = [\n// ...\n]\n\n")
        tsx_file.write("const constellationBonuses: Bonus[] = [\n// ...\n]\n\n")

        tsx_file.write(f"const {pascal_case(character_name)}: Character = {{\n")

        for key, value in char_data.items():
            tsx_file.write(f"    {key}: ")
            json.dump(value, tsx_file, indent=4)
            tsx_file.write(",\n")

        tsx_file.write("    talentScalings,\n    characterBonuses,\n    constellationBonuses\n}\n\n")
        tsx_file.write(f"export default {pascal_case(character_name)}\n")

def update_characters_json(char_data):
    """
    Updates the characters.json file with the provided character data.
    """
    with open(characters_json_path, 'r') as json_file:
        existing_data = json.load(json_file)

    character_name = char_data['name']
    simplified_char_data = {
        "name": char_data["name"],
        "icon": char_data["icon"],
        "weapon": char_data["weapon"],
        "vision": char_data["vision"],
        "rarity": char_data["rarity"],
        "implemented": existing_data.get(character_name, {}).get("implemented", False)
    }

    if character_name in existing_data:
        existing_data[character_name].update(simplified_char_data)
    else:
        existing_data[character_name] = simplified_char_data

    sorted_data = dict(sorted(existing_data.items()))

    with open(characters_json_path, 'w') as json_file:
        json.dump(sorted_data, json_file, indent=4)

async def fetch_images_from_api(api, character_name):
    response = await api.fetch_characters()
    character_id = None
    for character in response:
        if character.name.lower() == character_name.lower():
            character_id = character.id
            break
    
    if character_id:
        detail = await api.fetch_character_detail(character_id)
        images = {
            "icon": detail.icon,
            "talents": [],
            "constellations": [],
            "passives": []
        }
        for i, constellation in enumerate(detail.constellations):
            images["constellations"].append(constellation.icon)
        talent_count = 0
        passives = []
        for i, talent in enumerate(detail.talents):
            if talent_count < 3:
                if len(detail.talents) == 7 and i == 2:
                    continue  # dodge the mona/ayaka sprint
                images["talents"].append(talent.icon)
                talent_count += 1
            elif i < 9:
                passives.append(talent.icon)
        
        # Reorder the passives to be 3, 1, 2
        if len(passives) == 3:
            images["passives"] = [passives[2], passives[0], passives[1]]
        else:
            images["passives"] = passives
        
        return images
    else:
        return None

async def main():
    """
    Parses CLI arguments
    """
    parser = argparse.ArgumentParser(description='Scrape character data and generate TSX files.')
    parser.add_argument('characters', nargs='*', help='Specify one or more characters to scrape (provide the character keys)')
    parser.add_argument('--all', action='store_true', help='Scrape data for all characters')
    parser.add_argument('--fetch-paths', action='store_true', help='Fetch paths for all characters')
    args = parser.parse_args()

    if args.fetch_paths:
        fetch_paths()

    paths_path = os.path.join(current_dir, "paths.json")
    with open(paths_path) as f:
        characters = {v.lower(): k for k, v in json.load(f).items()}

    api = ambr.AmbrAPI()
    await api.start()

    if args.characters:
        for character_key in args.characters:
            character_key = character_key.lower()
            character_path = characters.get(character_key)
            if character_path:
                print(f"Fetching data for {character_key}")
                data = await fetch_character_data(api, character_path)
                data = process_character_data(data)
                generate_tsx_file(data, output_dir)
                update_characters_json(data)
            else:
                print(f"Character '{character_key}' not found in paths.json. Attempting to refetch paths...")
                fetch_paths()
                with open(paths_path) as f:
                    characters = {v.lower(): k for k, v in json.load(f).items()}
                character_path = characters.get(character_key)
                if character_path:
                    print(f"Fetching data for {character_key}")
                    data = await fetch_character_data(api, character_path)
                    data = process_character_data(data)
                    generate_tsx_file(data, output_dir)
                    update_characters_json(data)
                else:
                    print(f"Character '{character_key}' not found after refetching paths.")
    elif args.all:
        pbar = tqdm(characters.items(), position=0)
        for character_key, character_path in pbar:
            pbar.set_description(f'Fetching {character_key}\'s data')
            data_dict = await fetch_character_data(api, character_path)
            if data_dict:
                data_dict = process_character_data(data_dict)
                generate_tsx_file(data_dict, output_dir)
                update_characters_json(data_dict)
                if data_dict["name"] == "Traveler":
                    travelers_data = fix_traveler({"Traveler": data_dict})
                    for traveler_name, traveler_data in travelers_data.items():
                        generate_tsx_file(traveler_data, output_dir)
                        update_characters_json(traveler_data)
    else:
        parser.print_help()

    await api.close()

if __name__ == '__main__':
    asyncio.run(main())