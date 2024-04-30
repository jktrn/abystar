import ambr
import argparse
import asyncio
import logging
import os
import json
import tqdm
from services.scraper import CharacterScraper
from services.data_processor import DataProcessor
from services.file_generator import FileGenerator

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(CURRENT_DIR, "output")
PATHS_DIR = os.path.join(CURRENT_DIR, "data", "paths.json")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

async def main():
    """
    Parses CLI arguments and orchestrates the character scraping and file generation process.
    """
    parser = argparse.ArgumentParser(description='Scrape character data and generate TSX files.')
    parser.add_argument('characters', nargs='*', help='Specify one or more characters to scrape (provide the character keys)')
    parser.add_argument('--all', action='store_true', help='Scrape data for all characters')
    parser.add_argument('--fetch-paths', action='store_true', help='Fetch paths for all characters')
    parser.add_argument('--fetch-icons', action='store_true', help='Fetch icons for all characters')
    args = parser.parse_args()

    scraper = CharacterScraper()
    data_processor = DataProcessor()
    file_generator = FileGenerator()

    if args.fetch_paths:
        scraper.fetch_paths()
        return

    with open(PATHS_DIR) as f:
        characters = {v.lower(): k for k, v in json.load(f).items()}

    async with ambr.AmbrAPI() as api:
        if args.fetch_icons:
            await scraper.fetch_character_images(api, OUTPUT_DIR)
            return

        if args.characters:
            for character_key in args.characters:
                character_key = character_key.lower()
                character_path = characters.get(character_key)
                if character_path:
                    print(f"Fetching data for {character_key}")
                    data = await scraper.fetch_character_data(api, character_path)
                    data = data_processor.process_character_data(data)
                    file_generator.generate_tsx_file(data, OUTPUT_DIR)
                    file_generator.update_characters_json(data)
                else:
                    print(f"Character '{character_key}' not found in paths.json. Attempting to refetch paths...")
                    scraper.fetch_paths()
                    with open(PATHS_DIR) as f:
                        characters = {v.lower(): k for k, v in json.load(f).items()}
                    character_path = characters.get(character_key)
                    if character_path:
                        print(f"Fetching data for {character_key}")
                        data = await scraper.fetch_character_data(api, character_path)
                        data = data_processor.process_character_data(data)
                        file_generator.generate_tsx_file(data, OUTPUT_DIR)
                        file_generator.update_characters_json(data)
                    else:
                        print(f"Character '{character_key}' not found after refetching paths.")
        elif args.all:
            for character_key, character_path in tqdm(characters.items(), position=0, desc='Fetching character data'):
                data_dict = await scraper.fetch_character_data(api, character_path)
                if data_dict:
                    data_dict = data_processor.process_character_data(data_dict)
                    file_generator.generate_tsx_file(data_dict, OUTPUT_DIR)
                    file_generator.update_characters_json(data_dict)
                    if data_dict["name"] == "Traveler":
                        travelers_data = scraper.fix_traveler({"Traveler": data_dict})
                        for traveler_name, traveler_data in travelers_data.items():
                            file_generator.generate_tsx_file(traveler_data, OUTPUT_DIR)
                            file_generator.update_characters_json(traveler_data)
        else:
            parser.print_help()

if __name__ == '__main__':
    asyncio.run(main())