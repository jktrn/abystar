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

character_urls = []

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
            if href:
                # Extract the part of the URL between `/` and `/?lang=EN`
                character_url = href.split('/')[1]
                character_urls.append(character_url)

character_urls.sort()

with open('character-paths.txt', 'w') as f:
    for character_url in character_urls:
        f.write(character_url + '\n')

## Temp code to generate a JSON file with empty strings as values

# with open('../character-paths.json', 'w') as f:
#     json.dump({url: "" for url in character_urls}, f, indent=4)

driver.quit()