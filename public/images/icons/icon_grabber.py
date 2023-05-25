import json
import urllib.request
from tqdm import tqdm

def to_kebab_case(s):
    return s.lower().replace(' ', '-')

with open('../../../src/data/characters/characters.json') as f:
    characters_data = json.load(f)

for character_name in tqdm(characters_data.keys()):
    character_data = characters_data[character_name]
    icon_url = character_data['icon']
    filename = f"{to_kebab_case(character_name)}.png"
    urllib.request.urlretrieve(icon_url, filename)
    character_data['icon'] = f"/images/icons/{filename}"

with open('../../../src/data/characters/characters.json', 'w') as f:
    json.dump(characters_data, f, indent=4)