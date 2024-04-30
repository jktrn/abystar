import argparse
import asyncio
from services.scraper import WeaponScraper
from services.file_generator import FileGenerator

async def main() -> None:
    parser = argparse.ArgumentParser(description='Scrape weapon data and generate TSX files.')
    parser.add_argument('weapons', nargs='*', help='Specify one or more weapons to scrape (provide the weapon keys)')
    parser.add_argument('--all', action='store_true', help='Scrape data for all weapons')
    parser.add_argument('--fetch-paths', action='store_true', help='Fetch paths for all weapons')
    parser.add_argument('--fetch-icons', action='store_true', help='Fetch icons for all weapons')
    args = parser.parse_args()

    weapon_scraper = WeaponScraper()
    file_generator = FileGenerator()

    if args.fetch_paths:
        await weapon_scraper.fetch_paths()
        return

    if args.fetch_icons:
        await weapon_scraper.fetch_weapon_images()
        return

    if args.weapons:
        for weapon_key in args.weapons:
            await weapon_scraper.process_weapon(weapon_key.lower(), file_generator)
    elif args.all:
        await weapon_scraper.process_all_weapons(file_generator)
    else:
        parser.print_help()

if __name__ == '__main__':
    asyncio.run(main())