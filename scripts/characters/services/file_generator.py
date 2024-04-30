import os
import json
import logging
from typing import Dict
from utils.utils import kebab_case, pascal_case

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
CHARACTERS_JSON_PATH = os.path.join(CURRENT_DIR, "..", "..", "..", "src", "data", "characters", "characters.json")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class FileGenerator:
    def generate_tsx_file(self, char_data: Dict, output_directory: str) -> None:
        """
        Generates a TSX file for a character with the provided data.

        Args:
            char_data (Dict): The character data dictionary.
            output_directory (str): The output directory path.
        """
        try:
            character_name = char_data['name']
            filename = f"{kebab_case(character_name)}.tsx"
            filepath = os.path.join(output_directory, filename)

            os.makedirs(output_directory, exist_ok=True)

            with open(filepath, 'w') as tsx_file:
                tsx_file.write("import { TalentScaling, Bonus, Character } from '@/interfaces/Character'\n\n")
                tsx_file.write("const talentScalings: TalentScaling = {\n// ...\n}\n\n")
                tsx_file.write("const characterBonuses: Bonus[] = [\n// ...\n]\n\n")
                tsx_file.write("const constellationBonuses: Bonus[] = [\n// ...\n]\n\n")

                tsx_file.write(f"const {pascal_case(character_name)}: Character = {{\n")

                for key, value in char_data.items():
                    tsx_file.write(f"    {key}: ")
                    json.dump(value, tsx_file, indent=4)
                    tsx_file.write(",\n")

                tsx_file.write("    talentScalings,\n    characterBonuses,\n    constellationBonuses\n}\n\n")
                tsx_file.write(f"export default {pascal_case(character_name)}\n")
        except Exception as e:
            logger.error(f"Error generating TSX file for {char_data['name']}: {str(e)}")
            raise

    def update_characters_json(self, char_data: Dict) -> None:
        """
        Updates the characters.json file with the provided character data.

        Args:
            char_data (Dict): The character data dictionary.
        """
        try:
            with open(CHARACTERS_JSON_PATH, 'r') as json_file:
                existing_data = json.load(json_file)

            character_name = char_data['name']
            simplified_char_data = {
                "name": char_data["name"],
                "icon": char_data["icon"],
                "weapon": char_data["weapon"],
                "vision": char_data["vision"],
                "rarity": char_data["rarity"],
                "implemented": existing_data.get(character_name, {}).get("implemented", False)
            }

            if character_name in existing_data:
                existing_data[character_name].update(simplified_char_data)
            else:
                existing_data[character_name] = simplified_char_data

            sorted_data = dict(sorted(existing_data.items()))

            with open(CHARACTERS_JSON_PATH, 'w') as json_file:
                json.dump(sorted_data, json_file, indent=4)
        except Exception as e:
            logger.error(f"Error updating characters JSON file for {char_data['name']}: {str(e)}")
            raise