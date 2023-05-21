from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import json

url = 'https://genshin.honeyhunterworld.com/fam_chars/?lang=EN'

# Create a new instance of the Chrome driver
driver = webdriver.Chrome()
driver.get(url)

# Find the dropdown element and select the option to display 100 entries
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
    # Find all cells in the row
    cells = row.find_all('td')
    if len(cells) > 1:
        # Get the second cell (the cell in the "Name" column)
        name_cell = cells[1]
        # Find the `a` element within the cell
        a_element = name_cell.find('a')
        if a_element:
            # Extract the `href` attribute of the `a` element
            href = a_element.get('href')
            # Extract the text within the `a` element
            character_name = a_element.text
            if href:
                # Extract the part of the URL between `/` and `/?lang=EN`
                character_url = href.split('/')[1]
                character_data[character_url] = character_name

# Sort the JSON object by value
sorted_character_data = dict(sorted(character_data.items(), key=lambda item: item[1]))

# Don't worry all this does is remove the female traveler :insanity:
unique_character_data = {k: v for k, v in sorted_character_data.items() if list(sorted_character_data.values()).index(v) == list(sorted_character_data.keys()).index(k)}

with open('../character-paths.json', 'w') as f:
    json.dump(unique_character_data, f, indent=4)

driver.quit()
