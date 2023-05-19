import requests
from bs4 import BeautifulSoup
import json

# Fetch list of characters from genshin.dev API
characters_url = 'https://api.genshin.dev/characters'
characters = requests.get(characters_url).json()

all_data = {}

# Iterate over list of characters
for character in characters:
    # Fetch data for character from honeyhunterworld.com
    url = f'https://genshin.honeyhunterworld.com/{character}/'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    table = soup.find('table', {'class': 'skill_dmg_table'})

    if table:
        rows = table.find_all('tr')
        header = [cell.text for cell in rows[0].find_all('td')[:16]]
        data = [[cell.text for cell in row.find_all('td')[:16]] for row in rows[1:]]

        data_dict = {row[0]: {header[i]: row[i] for i in range(1, len(header))} for row in data}
        all_data[character] = data_dict
    
    print(f'Finished {character}')

# Save all data to JSON file
with open('skill-multipliers.json', 'w') as f:
    json.dump(all_data, f, indent=4)
