import requests
from bs4 import BeautifulSoup
import json

url = 'https://genshin.honeyhunterworld.com/diluc/'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

table = soup.find('table', {'class': 'skill_dmg_table'})

rows = table.find_all('tr')
header = [cell.text for cell in rows[0].find_all('td')[:16]]
data = [[cell.text for cell in row.find_all('td')[:16]] for row in rows[1:]]

data_dict = {row[0]: {header[i]: row[i] for i in range(1, len(header))} for row in data}

json_data = json.dumps(data_dict, indent=4)
print(json_data)