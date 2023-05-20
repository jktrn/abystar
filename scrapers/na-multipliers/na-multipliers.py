import requests
from bs4 import BeautifulSoup
import json

def parse_cell(cell):
    if '×' in cell:
        value, multiplier = cell.split('×')
        value = float(value.strip().strip('%')) * float(multiplier)
        return f'{value:.2f}%'
    elif '+' in cell:
        values = cell.split('+')
        result = sum(float(value.strip().strip('%')) for value in values)
        return f'{result:.2f}%'
    else:
        return cell

def parse_row(row):
    key = row[0]
    if key == 'Low/High Plunge DMG':
        low_key = 'Low Plunge DMG'
        high_key = 'High Plunge DMG'
        low_values = [value.split('/')[0].strip() for value in row[1:]]
        high_values = [value.split('/')[1].strip() for value in row[1:]]
        return [(low_key, low_values), (high_key, high_values)]
    else:
        return [(key, row[1:])]

def fetch_character_data(character):
    url = f'https://genshin.honeyhunterworld.com/{character}/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    table = soup.find('table', {'class': 'skill_dmg_table'})

    if table:
        rows = table.find_all('tr')
        header = [cell.text for cell in rows[0].find_all('td')[:16]]
        data = [[parse_cell(cell.text) for cell in row.find_all('td')[:16]] for row in rows[1:]]

        data_dict = {}
        for row in data:
            parsed_rows = parse_row(row)
            for key, values in parsed_rows:
                data_dict[key] = {header[i]: values[i-1] for i in range(1, len(header))}

        return data_dict
    else:
        return None

def fetch_all_characters_data():
    characters_url = 'https://api.genshin.dev/characters'
    characters = requests.get(characters_url).json()

    all_data = {}

    for character in characters:
        data_dict = fetch_character_data(character)
        if data_dict is not None:
            all_data[character] = data_dict
            print(f'Finished {character}')

    return all_data

def save_data_to_file(data):
    with open('skill-multipliers.json', 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    all_data = fetch_all_characters_data()
    save_data_to_file(all_data)
