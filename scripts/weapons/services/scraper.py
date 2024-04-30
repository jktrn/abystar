import os
import json
import logging
import aiohttp
import ambr
import requests
from bs4 import BeautifulSoup
from tqdm import tqdm
from services.data_processor import DataProcessor
from utils.utils import download_image

BASE_URL = 'https://genshin.honeyhunterworld.com'
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(CURRENT_DIR, "..", "output")
PATHS_DIR = os.path.join(CURRENT_DIR, "..", "data", "paths.json")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class WeaponScraper:
    def __init__(self):
        self.data_processor = DataProcessor()

    async def fetch_paths(self) -> None:
        """
        Fetches weapon paths from the Ambr API and saves them to a JSON file.
        """
        try:
            async with ambr.AmbrAPI() as api:
                response = await api.fetch_weapons()
                weapon_data = {f"i_n{weapon.id}": weapon.name for weapon in response}
                sorted_weapon_data = dict(sorted(weapon_data.items(), key=lambda item: item[1]))
                with open(PATHS_DIR, 'w') as f:
                    json.dump(sorted_weapon_data, f, indent=4)
        except Exception as e:
            logger.error(f"Error fetching weapon paths: {str(e)}")
            raise

    def fetch_weapon_data(self, weapon: str) -> dict:
        """
        Fetches weapon data from the HoneyHunterWorld website.

        Args:
            weapon (str): The weapon path.

        Returns:
            dict: The scraped weapon data.
        """
        try:
            url = f'{BASE_URL}/{weapon}/'
            with requests.get(url) as page:
                soup = BeautifulSoup(page.content, 'html.parser')

            all_data = {}

            main_table = soup.find('table', {'class': 'main_table'})
            rows = main_table.find_all('tr')
            data = {row.find_all('td')[0].text: row.find_all('td')[-1].text for row in rows[1:]}

            all_data["name"] = rows[0].find_all('td')[-1].text
            all_data["image"] = BASE_URL + rows[0].find('img')['src'].split('?')[0]
            all_data["type"] = data['Family'].split(', ')[1]
            all_data["rarity"] = len(rows[2].find_all('img'))
            all_data["description"] = data["Description"]

            if "Weapon Affix" in data:
                all_data["effectName"] = data["Weapon Affix"]
                all_data["effectDescription"] = data["Affix Description"]

            stat_table = soup.find('table', {'class': 'stat_table'})

            if stat_table:
                rows = stat_table.find_all('tr')
                num_cols = 2 if all_data["rarity"] < 3 else 3
                header = [cell.text for cell in rows[0].find_all('td')[:num_cols]]
                data = [[cell.text for cell in row.find_all('td')[:num_cols]] for row in rows[1:]]
                data_dict = {row[0]: {header[i]: row[i] for i in range(1, len(header))} for row in data}
                all_data["baseStats"] = data_dict

            affix_table = soup.find('table', {'class': 'affix_table'})

            if affix_table:
                rows = affix_table.find_all('tr')
                data = [[cell.text for cell in row.find_all('td')[1:2]] for row in rows[1:]]
                data_list = [{"description": row[0], "level": i + 1} for i, row in enumerate(data)]
                all_data["refinements"] = data_list

            return all_data

        except Exception as e:
            logger.error(f"Error fetching weapon data for {weapon}: {str(e)}")
            raise

    async def fetch_images_from_api(self, weapon_name: str) -> str:
        """
        Fetches weapon images from the Ambr API.

        Args:
            weapon_name (str): The name of the weapon.

        Returns:
            str: The URL of the weapon image.
        """
        try:
            async with ambr.AmbrAPI() as api:
                response = await api.fetch_weapons()
                for weapon in response:
                    if weapon.name.lower() == weapon_name.lower():
                        return weapon.icon
                return None
        except Exception as e:
            logger.error(f"Error fetching images from API for {weapon_name}: {str(e)}")
            raise

    async def fetch_weapon_images(self) -> None:
        """
        Fetches weapon images from the Ambr API and saves them to the output directory.
        """
        try:
            async with ambr.AmbrAPI() as api:
                response = await api.fetch_weapons()
                os.makedirs(OUTPUT_DIR, exist_ok=True)
                for weapon in tqdm(response, position=0, desc='Fetching weapon icons'):
                    icon_url = weapon.icon
                    icon_file_name = os.path.basename(icon_url)
                    icon_file_path = os.path.join(OUTPUT_DIR, icon_file_name)
                    await download_image(icon_url, icon_file_path)
        except Exception as e:
            logger.error(f"Error fetching weapon images: {str(e)}")
            raise

    async def process_weapon(self, weapon_key: str, file_generator) -> None:
        """
        Processes a single weapon by fetching its data, downloading its image, and generating the TSX file.

        Args:
            weapon_key (str): The weapon key.
            file_generator (FileGenerator): The FileGenerator instance.
        """
        try:
            with open(PATHS_DIR) as f:
                weapons = {v.lower(): k for k, v in json.load(f).items()}
            weapon_path = weapons.get(weapon_key)
            if weapon_path:
                logger.info(f"Fetching data for {weapon_key}")
                data = self.fetch_weapon_data(weapon_path)
                data = self.data_processor.process_weapon_data(data)
                icon_url = await self.fetch_images_from_api(data['name'])
                icon_file_name = os.path.basename(icon_url)
                icon_file_path = os.path.join(OUTPUT_DIR, icon_file_name)
                await download_image(icon_url, icon_file_path)
                data['image'] = f"/images/weapons/{icon_file_name}"
                file_generator.generate_tsx_file(data, OUTPUT_DIR)
                file_generator.update_weapons_json(data)
                logger.info(f"Successfully processed {weapon_key}")
            else:
                logger.warning(f"Weapon '{weapon_key}' not found in paths.json.")
        except Exception as e:
            logger.error(f"Error processing weapon {weapon_key}: {str(e)}")
            raise

    async def process_all_weapons(self, file_generator) -> None:
        """
        Processes all weapons by fetching their data, downloading their images, and generating the TSX files.

        Args:
            file_generator (FileGenerator): The FileGenerator instance.
        """
        try:
            with open(PATHS_DIR) as f:
                weapons = json.load(f)
            for weapon_key, weapon_path in tqdm(weapons.items(), position=0, desc='Fetching weapon data'):
                data_dict = self.fetch_weapon_data(weapon_path)
                if data_dict:
                    data_dict = self.data_processor.process_weapon_data(data_dict)
                    data_dict['image'] = await self.fetch_images_from_api(data_dict['name'])
                    file_generator.generate_tsx_file(data_dict, OUTPUT_DIR)
                    file_generator.update_weapons_json(data_dict)
        except Exception as e:
            logger.error(f"Error processing all weapons: {str(e)}")
            raise