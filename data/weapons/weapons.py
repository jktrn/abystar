import requests
from bs4 import BeautifulSoup
import json
from tqdm import tqdm

base_url = 'https://genshin.honeyhunterworld.com'

def fetch_weapon_data(weapon: str) -> dict[str, dict[str, dict[str, str]]]:
    url = f'{base_url}/{weapon}/'
    with requests.get(url) as page:
        soup = BeautifulSoup(page.content, 'html.parser')

    all_data = {}

    # Main weapon data
    main_table = soup.find('table', {'class': 'main_table'})
    rows = main_table.find_all('tr')
    data = {row.find_all('td')[0].text: row.find_all('td')[-1].text for row in rows[1:]}
    
    all_data["name"] = rows[0].find_all('td')[-1].text
    all_data["image"] = base_url + rows[0].find('img')['src'].split('?')[0]
    all_data["rarity"] = len(rows[2].find_all('img'))
    all_data["description"] = data["Description"]
    
    if "Weapon Affix" in data:
        all_data["effectName"] = data["Weapon Affix"]
        all_data["effectDescription"] = data["Affix Description"]

    # Weapon stats
    stat_table = soup.find('table', {'class': 'stat_table'})
    
    if stat_table:
        rows = stat_table.find_all('tr')
        # fucking broken story quest weapon
        if weapon == 'i_n11420':
            num_cols = 2
        else:
            num_cols = 2 if all_data["rarity"] < 3 else 3
        header = [cell.text for cell in rows[0].find_all('td')[:num_cols]]
        data = [[cell.text for cell in row.find_all('td')[:num_cols]] for row in rows[1:]]

        data_dict = {row[0]: {header[i]: row[i] for i in range(1, len(header))} for row in data}

        all_data["mainStats"] = data_dict

    # Refinements
    affix_table = soup.find('table', {'class': 'affix_table'})
    
    if affix_table:
        rows = affix_table.find_all('tr')
        data = [[cell.text for cell in row.find_all('td')[1:2]] for row in rows[1:]]

        data_list = [{"description": row[0], "level": i + 1} for i, row in enumerate(data)]

        all_data["refinements"] = data_list

    return all_data

def fetch_all_weapons_data() -> dict[str, dict[str, dict[str, str]]]:
    with open('paths/paths.json', 'r') as f:
        weapons = json.load(f)

    all_data = {}

    pbar = tqdm(weapons.items(), position=0)
    for weapon, name in pbar:
        pbar.set_description(f'Fetching data for [{name}]')
        data_dict = fetch_weapon_data(weapon)
        if data_dict:
            all_data[name] = data_dict

    return all_data

def save_data_to_file(data: dict[str, dict[str, dict[str, str]]]) -> None:
    with open('weapons.json', 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    # Comment these if you want to test a single weapon
    all_data = fetch_all_weapons_data()
    save_data_to_file(all_data)

    # Uncomment these if you want to test a single weapon
    # data = fetch_weapon_data('i_n11402') # The Flute
    # print(json.dumps(data, indent=4))
