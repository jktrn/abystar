import requests
from bs4 import BeautifulSoup
import json
import os
from tqdm import tqdm
import argparse
import ambr
import asyncio
import aiohttp

base_url = 'https://genshin.honeyhunterworld.com'
current_dir = os.path.dirname(os.path.abspath(__file__))
output_dir = os.path.join(current_dir, "output")
weapons_json_path = os.path.join(current_dir, "..", "..", "src", "data", "weapons", "weapons.json")

async def download_image(url, file_path):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            if response.status == 200:
                with open(file_path, 'wb') as f:
                    while True:
                        chunk = await response.content.read(1024)
                        if not chunk:
                            break
                        f.write(chunk)

async def fetch_paths(api):
    response = await api.fetch_weapons()
    weapon_data = {}

    for weapon in response:
        weapon_id = weapon.id
        weapon_name = weapon.name
        weapon_url = f"i_n{weapon_id}"
        weapon_data[weapon_url] = weapon_name

    sorted_weapon_data = dict(sorted(weapon_data.items(), key=lambda item: item[1]))

    with open('paths.json', 'w') as f:
        json.dump(sorted_weapon_data, f, indent=4)

def fetch_weapon_data(weapon: str) -> dict:
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
    all_data["type"] = data['Family'].split(', ')[1]
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

        all_data["baseStats"] = data_dict

    # Refinements
    affix_table = soup.find('table', {'class': 'affix_table'})
    
    if affix_table:
        rows = affix_table.find_all('tr')
        data = [[cell.text for cell in row.find_all('td')[1:2]] for row in rows[1:]]

        data_list = [{"description": row[0], "level": i + 1} for i, row in enumerate(data)]

        all_data["refinements"] = data_list

    return all_data

def parse_stat_value(value):
    value_str = str(value)
    if value_str.endswith('%'):
        return round(float(value_str.strip('%')) / 100, 5)
    try:
        return round(float(value_str), 5)
    except ValueError:
        return value

key_map = {
    "1": "1/20",
    "20": "20/20",
    "20+": "20/40",
    "40": "40/40",
    "40+": "40/50",
    "50": "50/50",
    "50+": "50/60",
    "60": "60/60",
    "60+": "60/70",
    "70": "70/70",
    "70+": "70/80",
    "80": "80/80",
    "80+": "80/90",
    "90": "90/90",
}

def process_weapon_data(weapon_data):
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

    new_main_stats = {}
    for key, stats in weapon_data.get('baseStats', {}).items():
        new_key = key_map.get(key, key)
        new_stats = {}
        for stat_key, value in stats.items():
            mapped_key = attribute_key_map.get(stat_key, stat_key)
            parsed_value = parse_stat_value(value)
            new_stats[mapped_key] = parsed_value
        new_main_stats[new_key] = new_stats
    weapon_data['baseStats'] = new_main_stats

    return weapon_data

def sanitize_filename(name):
    return '-'.join(name.replace('(', '').replace(')', '').replace('"', '').replace("'", '').lower().split())

def pascal_case(name):
    return ''.join(word.title() for word in name.replace('(', '').replace(')', '').replace('-', '').replace('"', '').replace("'", '').split())

def generate_tsx_file(weapon_data, output_directory):
    weapon_name = weapon_data['name']
    sanitized_name = sanitize_filename(weapon_name)
    filename = f"{sanitized_name}.tsx"
    filepath = os.path.join(output_directory, filename)

    os.makedirs(output_directory, exist_ok=True)

    with open(filepath, 'w', encoding='utf-8') as tsx_file:
        tsx_file.write("import { Weapon } from '@/interfaces/Weapon'\n")
        tsx_file.write("// import { Bonus } from '@/interfaces/Character'\n\n")
        tsx_file.write("""// const weaponBonuses: Bonus[] = [
        // TODO: Implement
        // ]\n\n""")
        
        tsx_file.write(f"const {pascal_case(weapon_name)}: Weapon = {{\n")
        for key, value in weapon_data.items():
            tsx_file.write(f"    {key}: ")
            json.dump(value, tsx_file, indent=4)
            tsx_file.write(",\n")

        tsx_file.write("   // weaponBonuses\n}\n\n")
        tsx_file.write(f"export default {pascal_case(weapon_name)}\n")

def update_weapons_json(weapon_data):
    with open(weapons_json_path, 'r') as json_file:
        existing_data = json.load(json_file)

    weapon_name = weapon_data['name']
    simplified_weapon_data = {
        "name": weapon_data["name"],
        "image": weapon_data["image"],
        "type": weapon_data["type"],
        "rarity": weapon_data["rarity"],
        "implemented": existing_data.get(weapon_name, {}).get("implemented", False)
    }

    if weapon_name in existing_data:
        existing_data[weapon_name].update(simplified_weapon_data)
    else:
        existing_data[weapon_name] = simplified_weapon_data

    sorted_data = dict(sorted(existing_data.items()))

    with open(weapons_json_path, 'w') as json_file:
        json.dump(sorted_data, json_file, indent=4)

async def fetch_images_from_api(api, weapon_name):
    response = await api.fetch_weapons()
    for weapon in response:
        if weapon.name.lower() == weapon_name.lower():
            return weapon.icon
    return None

async def fetch_weapon_images_from_api(api, output_directory):
    response = await api.fetch_weapons()
    pbar = tqdm(response, position=0)
    for weapon in pbar:
        pbar.set_description(f'Fetching {weapon.name}\'s icon')
        
        # Download weapon icon
        icon_url = weapon.icon
        icon_file_name = os.path.basename(icon_url)
        icon_file_path = os.path.join(output_directory, icon_file_name)
        await download_image(icon_url, icon_file_path)

async def main():
    parser = argparse.ArgumentParser(description='Scrape weapon data and generate TSX files.')
    parser.add_argument('weapons', nargs='*', help='Specify one or more weapons to scrape (provide the weapon keys)')
    parser.add_argument('--all', action='store_true', help='Scrape data for all weapons')
    parser.add_argument('--fetch-paths', action='store_true', help='Fetch paths for all weapons')
    parser.add_argument('--fetch-icons', action='store_true', help='Fetch icons for all weapons')
    args = parser.parse_args()

    api = ambr.AmbrAPI()
    await api.start()

    if args.fetch_paths:
        await fetch_paths(api)
        return

    if args.fetch_icons:
        await fetch_weapon_images_from_api(api, output_dir)
        return

    paths_path = os.path.join(current_dir, "paths.json")
    with open(paths_path) as f:
        weapons = {v.lower(): k for k, v in json.load(f).items()}

    if args.weapons:
        for weapon_key in args.weapons:
            weapon_key = weapon_key.lower()
            weapon_path = weapons.get(weapon_key)
            if weapon_path:
                print(f"Fetching data for {weapon_key}")
                data = fetch_weapon_data(weapon_path)
                data = process_weapon_data(data)
                
                icon_url = await fetch_images_from_api(api, data['name'])
                icon_file_name = os.path.basename(icon_url)
                icon_file_path = os.path.join(output_dir, icon_file_name)
                await download_image(icon_url, icon_file_path)
                data['image'] = icon_url
                
                generate_tsx_file(data, output_dir)
                update_weapons_json(data)
            else:
                print(f"Weapon '{weapon_key}' not found in paths.json.")
    elif args.all:
        pbar = tqdm(weapons.items(), position=0)
        for weapon_key, weapon_path in pbar:
            pbar.set_description(f'Fetching {weapon_key}\'s data')
            data_dict = fetch_weapon_data(weapon_path)
            if data_dict:
                data_dict = process_weapon_data(data_dict)
                data_dict['image'] = await fetch_images_from_api(api, data_dict['name'])
                generate_tsx_file(data_dict, output_dir)
                update_weapons_json(data_dict)
    else:
        parser.print_help()

    await api.close()

if __name__ == '__main__':
    asyncio.run(main())