import requests
from bs4 import BeautifulSoup
import json
from tqdm import tqdm

base_url = 'https://genshin.honeyhunterworld.com'

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

    tables = soup.find_all('table', {'class': 'skill_table'})

    all_data = {"activeSkills": []}

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
                
                all_data["activeSkills"].append({
                    "name": skill_name,
                    "image": skill_image,
                    "description": skill_description,
                    "data": data_dict
                })

    return all_data

def fetch_all_characters_data() -> dict[str, dict[str, dict[str, dict[str, str]]]]:
    with open('../character-paths.json', 'r') as f:
        characters = json.load(f)

    all_data = {}

    for character, name in tqdm(characters.items()):
        data_dict = fetch_character_data(character)
        if data_dict:
            all_data[name] = data_dict

    return all_data

def save_data_to_file(data: dict[str, dict[str, dict[str, dict[str, str]]]]) -> None:
    with open('skill-multipliers.json', 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    all_data = fetch_all_characters_data()
    save_data_to_file(all_data)

    ## test
    # ayaka_data = fetch_character_data('ayaka')
    # print(json.dumps(ayaka_data, indent=4))