import logging
from typing import Dict, List, Tuple

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class DataProcessor:
    def parse_cell(self, cell: str) -> str:
        """
        Parses a table cell value and converts it to a percentage if applicable.

        Args:
            cell (str): The table cell value.

        Returns:
            str: The parsed cell value.
        """
        try:
            if any(c.isalpha() for c in cell):
                return cell
            elif '×' in cell:
                value, multiplier = cell.split('×')
                value = float(value.strip().strip('%')) * float(multiplier)
                return f'{value:.2f}%'
            elif '+' in cell:
                values = cell.split('+')
                result = sum(float(value.strip().strip('%')) for value in values)
                return f'{result:.2f}%'
            else:
                return cell
        except Exception as e:
            logger.error(f"Error parsing cell value {cell}: {str(e)}")
            raise

    def parse_row(self, row: List[str]) -> List[Tuple[str, List[str]]]:
        """
        Parses a table row and handles special cases for 'Low/High Plunge DMG'.

        Args:
            row (List[str]): The table row.

        Returns:
            List[Tuple[str, List[str]]]: The parsed row data.
        """
        try:
            key = row[0]
            if key == 'Low/High Plunge DMG':
                low_key = 'Low Plunge DMG'
                high_key = 'High Plunge DMG'
                low_values = [value.split('/')[0].strip() for value in row[1:]]
                high_values = [value.split('/')[1].strip() for value in row[1:]]
                return [(low_key, low_values), (high_key, high_values)]
            else:
                return [(key, row[1:])]
        except Exception as e:
            logger.error(f"Error parsing row {row}: {str(e)}")
            raise
        
    def process_character_data(self, character_data: Dict) -> Dict:
        """
        Processes the character data by mapping attribute keys and parsing stat values.

        Args:
            character_data (Dict): The character data dictionary.

        Returns:
            Dict: The processed character data dictionary.
        """
        try:
            attribute_key_map = {
                'HP': 'Base HP',
                'Atk': 'Base ATK',
                'Def': 'Base DEF',
                'EM': 'Elemental Mastery',
                'ER': 'Energy Recharge',
                'CritRate%': 'CRIT Rate',
                'CritDMG%': 'CRIT DMG',
                'Bonus Atk%': 'Bonus ATK',
                'Bonus Def%': 'Bonus DEF',
                'Bonus HP%': 'Bonus HP',
                'Bonus EM': 'Bonus Elemental Mastery',
                'Bonus ER': 'Bonus Energy Recharge',
                'Bonus CritRate%': 'Bonus CRIT Rate',
                'Bonus CritDMG%': 'Bonus CRIT DMG',
                'Bonus Heal': 'Healing Bonus',
                'Bonus Pyro%': 'Pyro DMG Bonus',
                'Bonus Cryo%': 'Cryo DMG Bonus',
                'Bonus Hydro%': 'Hydro DMG Bonus',
                'Bonus Elec%': 'Electro DMG Bonus',
                'Bonus Anemo%': 'Anemo DMG Bonus',
                'Bonus Geo%': 'Geo DMG Bonus',
                'Bonus Dendro%': 'Dendro DMG Bonus',
                'Bonus Phys%': 'Physical DMG Bonus',
            }

            for level, stats in character_data.get('baseStats', {}).items():
                new_stats = {}
                for key, value in stats.items():
                    mapped_key = attribute_key_map.get(key, key)
                    parsed_value = self.parse_stat_value(value)
                    new_stats[mapped_key] = parsed_value
                character_data['baseStats'][level] = new_stats

            return character_data
        except Exception as e:
            logger.error(f"Error processing character data: {str(e)}")
            raise

    def parse_stat_value(self, value: str) -> float:
        """
        Parses a stat value and converts it to a float if applicable.

        Args:
            value (str): The stat value.

        Returns:
            float: The parsed stat value as a float.
        """
        try:
            value_str = str(value)

            if value_str.endswith('%'):
                return round(float(value_str.strip('%')) / 100, 5)
            try:
                return round(float(value_str), 5)
            except ValueError:
                return value
        except Exception as e:
            logger.error(f"Error parsing stat value {value}: {str(e)}")
            raise