from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import json

url = 'https://genshin.honeyhunterworld.com/fam_weapon/'

driver = webdriver.Chrome()
driver.get(url)

dropdown = driver.find_element(By.CLASS_NAME, 'sorttable_per_page')
for option in dropdown.find_elements(By.TAG_NAME, 'option'):
    if option.text == '100':
        option.click()
        break

driver.implicitly_wait(10)

soup = BeautifulSoup(driver.page_source, 'html.parser')
table = soup.find('table', {'class': 'weapon_table'})

weapon_data = {}

# Find <a> elements and pair them with their texts as key-value pairs
for row in table.find_all('tr'):
    cells = row.find_all('td')
    if len(cells) > 1:
        name_cell = cells[1]
        a_element = name_cell.find('a')
        if a_element:
            href = a_element.get('href')
            weapon_name = a_element.text
            if href:
                weapon_url = href.split('/')[1]
                weapon_data[weapon_url] = weapon_name

# Sort the dictionary by values/attributes
sorted_weapon_data = dict(sorted(weapon_data.items(), key=lambda item: item[1]))

with open('paths.json', 'w') as f:
    json.dump(sorted_weapon_data, f, indent=4)

driver.quit()
