from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import json
import os

base_url = 'https://genshin.honeyhunterworld.com'
current_dir = os.path.dirname(os.path.abspath(__file__))

def separate_bonus(string: str):
    index = string.find("4-Piece")
    indices = [9, index]
    parts = [string[i:j] for i, j in zip(indices, indices[1:] + [None])]
    parts[1] = parts[1][9:]
    return parts

def get_artifacts():
    url = f'{base_url}/fam_art_set/'

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

    rows = table.find_all('tr')
    
    image_set = {
        row.find_all('img')[0]['alt']: [
            base_url + image['src'] for image in row.find_all('img')
        ] for row in rows if row.find_all('img')
    }

    data = [[cell.text for cell in row.find_all('td')[2:]] for row in rows[1:]]
    header = [[cell.text for cell in row.find_all('td')[1]] for row in rows[1:]]
    
    data_list = []
    
    for row in data:
        bonus_list = separate_bonus(row[0])
        bonuses = {
            "setName": ''.join(header[len(data_list)]),
            "images": image_set[''.join(header[len(data_list)])],
            "twoPiece": bonus_list[0],
            "fourPiece": bonus_list[1]
        }
        data_list.append(bonuses)
    
    return {"artifacts": data_list}

def save_data_to_file(data: dict[str, dict[str, dict[str, str]]]) -> None:
    file_path = os.path.join(current_dir, "artifacts.json")
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    all_data = get_artifacts()
    save_data_to_file(all_data)
