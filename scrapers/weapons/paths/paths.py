from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import json
import time

url = 'https://genshin.honeyhunterworld.com/fam_weapon/'

driver = webdriver.Chrome()
driver.get(url)

weapon_data = {}

def scrape_current_page():
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    table = soup.find('table', {'class': 'weapon_table'})

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

scrape_current_page()

page_count = 1

# Hardcoded; please change accordingly
while page_count < 19:
    try:
        next_td = driver.find_element(By.XPATH, "//td[contains(text(), 'Next')]")

        if next_td.is_displayed():
            next_td.click()
            time.sleep(1)
            scrape_current_page()
            page_count += 1
        else:
            print("Reached the last page.")
            break
    except Exception as e:
        print("No more pages or error occurred:", e)
        break

sorted_weapon_data = dict(sorted(weapon_data.items(), key=lambda item: item[1]))

with open('paths.json', 'w') as f:
    json.dump(sorted_weapon_data, f, indent=4)

driver.quit()
