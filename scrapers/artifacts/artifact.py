import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import json
from tqdm import tqdm

baseUrl = 'https://genshin.honeyhunterworld.com'

def separateBonus(string: str):
    index = string.find("4-Piece")
    indices = [9, index]
    parts = [string[i:j] for i,j in zip(indices, indices[1:]+[None])]
    parts[1] = parts[1][9:]
    return parts

def get_artifacts():
    url = f'https://genshin.honeyhunterworld.com/fam_art_set/'

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
    imageSet = {}
    num = 0
    for row in rows:
        imageList = row.find_all('img')
        list = {}
        set = ''
        k = 0
        for image in imageList:
            link = baseUrl + image['src']
            set = image['alt']
            list[k] = link
            k += 1
        imageSet[set] = list
        num += 1


    data = [[cell.text for cell in row.find_all('td')[2:]] for row in rows[1:]]
    header = [[cell.text for cell in row.find_all('td')[1]] for row in rows[1:]]
    data_dict = {}
    index = 0
    for row in data:
        bonusList = separateBonus(row[0])
        bonuses = {}
        bonuses["Set Name"] = ''.join(header[index])
        bonuses["Images"] = imageSet[bonuses["Set Name"]]
        bonuses["2-Piece"] = bonusList[0]
        bonuses["4-Piece"] = bonusList[1]
        data_dict[index] = bonuses
        index += 1
    
    return data_dict

def save_data_to_file(data: dict[str, dict[str, dict[str, str]]]) -> None:
    with open('./scrapers/artifacts/artifacts.json', 'w') as f:
        json.dump(data, f, indent=4)



save_data_to_file(get_artifacts())
