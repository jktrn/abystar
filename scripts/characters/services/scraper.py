import os
import json
import logging
import aiohttp
import ambr
import requests
from bs4 import BeautifulSoup
from tqdm import tqdm
from selenium import webdriver
from selenium.webdriver.common.by import By
import chromedriver_autoinstaller
from services.data_processor import DataProcessor
from utils.utils import to_kebab_case, download_image

BASE_URL = 'https://genshin.honeyhunterworld.com'
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(CURRENT_DIR, "..", "output")
PATHS_DIR = os.path.join(CURRENT_DIR, "..", "data", "paths.json")
CHARACTERS_JSON_PATH = os.path.join(CURRENT_DIR, "..", "..", "..", "src", "data", "characters", "characters.json")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class CharacterScraper:
    def __init__(self):
        self.data_processor = DataProcessor()

    def fetch_paths(self) -> None:
        """
        Fetches the paths for all characters from GHH and saves it in a JSON.
        """
        try:
            url = 'https://genshin.honeyhunterworld.com/fam_chars/?lang=EN'
            
            chromedriver_autoinstaller.install()
            driver = webdriver.Chrome()
            driver.get(url)

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
                cells = row.find_all('td')
                if len(cells) > 1:
                    name_cell = cells[1]
                    a_element = name_cell.find('a')
                    if a_element:
                        href = a_element.get('href')
                        character_name = a_element.text
                        if href:
                            character_url = href.split('/')[1]
                            character_data[character_url] = character_name

            sorted_character_data = dict(sorted(character_data.items(), key=lambda item: item[1]))
            unique_character_data = {k: v for k, v in sorted_character_data.items() if list(sorted_character_data.values()).index(v) == list(sorted_character_data.keys()).index(k)}

            with open(PATHS_DIR, 'w') as f:
                json.dump(unique_character_data, f, indent=4)

            driver.quit()
        except Exception as e:
            logger.error(f"Error fetching character paths: {str(e)}")
            raise

    async def fetch_character_data(self, api: ambr.AmbrAPI, character: str) -> dict:
        """
        Fetches a particular characters' data from GHH (provided slug).

        Args:
            api (ambr.AmbrAPI): The Ambr API instance.
            character (str): The character slug.

        Returns:
            dict: The scraped character data.
        """
        try:
            url = f'{BASE_URL}/{character}/'
            page = requests.get(url)
            soup = BeautifulSoup(page.content, 'html.parser')

            all_data = {}

            info_table = soup.find('table', {'class': 'main_table'})
            rows = info_table.find_all('tr')
            data = {row.find_all('td')[0].text: row.find_all('td')[-1].text for row in rows[1:]}

            all_data["name"] = rows[0].find_all('td')[-1].text
            all_data["icon"] = f'/images/characters/{to_kebab_case(all_data["name"])}.png'
            all_data["weapon"] = rows[5].find_all('td')[-1].text.strip()
            all_data["vision"] = data["Vision (Introduced)"]
            if all_data["name"] == "Aloy":
                all_data["rarity"] = 6
            else:
                all_data["rarity"] = len(rows[4].find_all('img'))
            all_data["description"] = data["Description"]
            if "Title" in all_data:
                all_data["title"] = data["Title"]
            all_data["occupation"] = data["Occupation"]

            stats_table = soup.find('table', {'class': 'stat_table'})

            ascension_map = {
                '1': '1/20',
                '20': '20/20',
                '20+': '20/40',
                '40': '40/40',
                '40+': '40/50',
                '50': '50/50',
                '50+': '50/60',
                '60': '60/60',
                '60+': '60/70',
                '70': '70/70',
                '70+': '70/80',
                '80': '80/80',
                '80+': '80/90',
                '90': '90/90'
            }

            rows = stats_table.find_all('tr')
            header = [cell.text for cell in rows[0].find_all('td')[:7]]
            data = [[cell.text for cell in row.find_all('td')[:7]] for row in rows[1:]]

            data_dict = {ascension_map[row[0]]: {header[i]: row[i] for i in range(1, len(header))} for row in data}

            all_data["baseStats"] = data_dict

            tables = soup.find_all('table', {'class': 'skill_table'})
            all_data["talents"] = []
            all_data["passiveSkills"] = []

            for table in tables:
                skill_name_tag = table.find_all('td')[1].find('a')
                
                if skill_name_tag:
                    skill_name = skill_name_tag.text
                    skill_image = BASE_URL + table.find_all('td')[0].find('img')['src'].split('?')[0]
                    skill_description = table.find_all('td')[2].get_text(separator='\n', strip=True)
                    skill_table = table.find('table', {'class': 'skill_dmg_table'})
                    
                    if skill_table:
                        rows = skill_table.find_all('tr')
                        header = [cell.text for cell in rows[0].find_all('td')[:16]]
                        data = [[self.data_processor.parse_cell(cell.text) for cell in row.find_all('td')[:16]] for row in rows[1:]]

                        data_dict = {}
                        for row in data:
                            parsed_rows = self.data_processor.parse_row(row)
                            for key, values in parsed_rows:
                                data_dict[key] = {header[i]: values[i-1] for i in range(1, len(header))}

                        all_data["talents"].append({
                            "name": skill_name,
                            "image": skill_image,
                            "description": skill_description,
                            "data": data_dict
                        })
                    else:
                        all_data["passiveSkills"].append({
                            "name": skill_name,
                            "image": skill_image,
                            "description": skill_description
                        })

            if len(all_data['talents']) == 4:
                del all_data['talents'][2]

            if all_data["name"] != "Traveler":
                all_data["constellations"] = all_data["passiveSkills"][-6:]
                all_data["passiveSkills"] = all_data["passiveSkills"][:-6]

                for i, constellation in enumerate(all_data["constellations"]):
                    constellation["level"] = i + 1

            images = await self.fetch_images_from_api(api, all_data["name"])
            if images:
                all_data["icon"] = images["icon"]
                for i, talent in enumerate(all_data["talents"]):
                    if i < len(images["talents"]):
                        talent["image"] = images["talents"][i]
                for i, passive in enumerate(all_data["passiveSkills"]):
                    if i < len(images["passives"]):
                        passive["image"] = images["passives"][i]
                for i, constellation in enumerate(all_data["constellations"]):
                    if i < len(images["constellations"]):
                        constellation["image"] = images["constellations"][i]

            icon_url = await self.fetch_images_from_api(api, all_data["name"])
            if icon_url:
                icon_file_name = os.path.basename(icon_url["icon"])
                icon_file_path = os.path.join(OUTPUT_DIR, icon_file_name)
                await download_image(icon_url["icon"], icon_file_path)
                all_data["icon"] = f"/images/characters/{icon_file_name}"

            return all_data
        except Exception as e:
            logger.error(f"Error fetching character data for {character}: {str(e)}")
            raise

    def fix_traveler(self, data: dict) -> dict:
        """
        Fixes the Traveler data by splitting it into separate characters based on their element.

        Args:
            data (dict): The Traveler data dictionary.

        Returns:
            dict: The updated Traveler data dictionary.
        """
        try:
            traveler_data = data["Traveler"]

            elements = ["Hydro", "Anemo", "Geo", "Electro", "Dendro"]
            travelers_data = {}

            for i, element in enumerate(elements):
                new_traveler_data = traveler_data.copy()
                new_traveler_data["name"] += f" ({element})"
                new_traveler_data["vision"] = element
                new_traveler_data["weapon"] = "Sword"
                new_traveler_data["rarity"] = 5
                new_traveler_data["talents"] = traveler_data["talents"][i*3:(i+1)*3]
                new_traveler_data["passiveSkills"] = traveler_data["passiveSkills"][i*8:i*8+2]
                new_traveler_data["constellations"] = traveler_data["passiveSkills"][i*8+2:(i+1)*8]

                for j, constellation in enumerate(new_traveler_data["constellations"]):
                    constellation["level"] = j + 1

                travelers_data[new_traveler_data["name"]] = new_traveler_data

            del data["Traveler"]
            data.update(travelers_data)

            sorted_data = {}
            for key in sorted(data.keys()):
                sorted_data[key] = data[key]

            return sorted_data
        except Exception as e:
            logger.error(f"Error fixing Traveler data: {str(e)}")
            raise

    async def fetch_images_from_api(self, api: ambr.AmbrAPI, character_name: str) -> dict:
        """
        Fetches character images from the Ambr API.

        Args:
            api (ambr.AmbrAPI): The Ambr API instance.
            character_name (str): The character name.

        Returns:
            dict: A dictionary containing the character images.
        """
        try:
            response = await api.fetch_characters()
            character_id = None
            for character in response:
                if character.name.lower() == character_name.lower():
                    character_id = character.id
                    break
            
            if character_id:
                detail = await api.fetch_character_detail(character_id)
                images = {
                    "icon": detail.icon,
                    "talents": [],
                    "constellations": [],
                    "passives": []
                }
                for i, constellation in enumerate(detail.constellations):
                    images["constellations"].append(constellation.icon)
                talent_count = 0
                passives = []
                for i, talent in enumerate(detail.talents):
                    if talent_count < 3:
                        if len(detail.talents) == 7 and i == 2:
                            continue
                        images["talents"].append(talent.icon)
                        talent_count += 1
                    elif i < 9:
                        passives.append(talent.icon)
                
                if len(passives) == 3:
                    images["passives"] = [passives[2], passives[0], passives[1]]
                else:
                    images["passives"] = passives
                
                return images
            else:
                return None
        except Exception as e:
            logger.error(f"Error fetching images from API for {character_name}: {str(e)}")
            raise

    async def fetch_character_images(self, api: ambr.AmbrAPI, output_directory: str) -> None:
        """
        Fetches character images from the Ambr API and saves them to the output directory.

        Args:
            api (ambr.AmbrAPI): The Ambr API instance.
            output_directory (str): The output directory path.
        """
        try:
            response = await api.fetch_characters()
            os.makedirs(output_directory, exist_ok=True)
            for character in tqdm(response, position=0, desc='Fetching character icons'):
                icon_url = character.icon
                icon_file_name = os.path.basename(icon_url)
                icon_file_path = os.path.join(output_directory, icon_file_name)
                await download_image(icon_url, icon_file_path)
        except Exception as e:
            logger.error(f"Error fetching character images: {str(e)}")
            raise