import requests
from bs4 import BeautifulSoup
import json
from tqdm import tqdm

def fetch_character_stats(character: str) -> dict[str, dict[str, str]]:
    url = f'https://genshin.honeyhunterworld.com/{character}/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    table = soup.find('table', {'class': 'stat_table'})

    rows = table.find_all('tr')
    header = [cell.text for cell in rows[0].find_all('td')[:7]]
    data = [[cell.text for cell in row.find_all('td')[:7]] for row in rows[1:]]

    data_dict = {row[0]: {header[i]: row[i] for i in range(1, len(header))} for row in data}

    return data_dict

def fetch_all_characters_stats() -> dict[str, dict[str, dict[str, str]]]:
    with open('../character-paths.json', 'r') as f:
        characters = json.load(f)

    all_data = {}

    for character, name in tqdm(characters.items()):
        data_dict = fetch_character_stats(character)
        if data_dict is not None:
            all_data[name] = data_dict

    return all_data

def save_data_to_file(data: dict[str, dict[str, dict[str, str]]]) -> None:
    with open('base_stats.json', 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    all_data = fetch_all_characters_stats()
    save_data_to_file(all_data)
