import os
import json
from typing import Dict
from utils.utils import sanitize_filename, pascal_case
import logging

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
WEAPONS_JSON_PATH = os.path.join(CURRENT_DIR, "..", "..", "..", "src", "data", "weapons", "weapons.json")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class FileGenerator:
    def generate_tsx_file(self, weapon_data: Dict, output_directory: str) -> None:
        """
        Generates a TSX file for the given weapon data.

        Args:
            weapon_data (Dict): The weapon data dictionary.
            output_directory (str): The output directory path.
        """
        try:
            weapon_name = weapon_data['name']
            sanitized_name = sanitize_filename(weapon_name)
            filename = f"{sanitized_name}.tsx"
            filepath = os.path.join(output_directory, filename)
            os.makedirs(output_directory, exist_ok=True)

            with open(filepath, 'w', encoding='utf-8') as tsx_file:
                tsx_file.write("import { Weapon } from '@/interfaces/Weapon'\n")
                tsx_file.write("// import { Bonus } from '@/interfaces/Character'\n\n")
                tsx_file.write("""// const weaponBonuses: Bonus[] = [
                // TODO: Implement
                // ]\n\n""")
                tsx_file.write(f"const {pascal_case(weapon_name)}: Weapon = {{\n")
                for key, value in weapon_data.items():
                    tsx_file.write(f"    {key}: ")
                    json.dump(value, tsx_file, indent=4)
                    tsx_file.write(",\n")
                tsx_file.write("   // weaponBonuses\n}\n\n")
                tsx_file.write(f"export default {pascal_case(weapon_name)}\n")
        except Exception as e:
            logger.error(f"Error generating TSX file for {weapon_data['name']}: {str(e)}")
            raise

    def update_weapons_json(self, weapon_data: Dict) -> None:
        """
        Updates the weapons JSON file with the given weapon data.

        Args:
            weapon_data (Dict): The weapon data dictionary.
        """
        try:
            with open(WEAPONS_JSON_PATH, 'r') as json_file:
                existing_data = json.load(json_file)

            weapon_name = weapon_data['name']
            simplified_weapon_data = {
                "name": weapon_data["name"],
                "image": weapon_data["image"],
                "type": weapon_data["type"],
                "rarity": weapon_data["rarity"],
                "implemented": existing_data.get(weapon_name, {}).get("implemented", False)
            }

            existing_data[weapon_name] = existing_data.get(weapon_name, {})
            existing_data[weapon_name].update(simplified_weapon_data)
            sorted_data = dict(sorted(existing_data.items()))

            with open(WEAPONS_JSON_PATH, 'w') as json_file:
                json.dump(sorted_data, json_file, indent=4)
        except Exception as e:
            logger.error(f"Error updating weapons JSON file for {weapon_data['name']}: {str(e)}")
            raise