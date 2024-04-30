from typing import Dict
from utils.utils import parse_stat_value
import logging

ATTRIBUTE_KEY_MAP = {
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
KEY_MAP = {
    "1": "1/20",
    "20": "20/20",
    "20+": "20/40",
    "40": "40/40",
    "40+": "40/50",
    "50": "50/50",
    "50+": "50/60",
    "60": "60/60",
    "60+": "60/70",
    "70": "70/70",
    "70+": "70/80",
    "80": "80/80",
    "80+": "80/90",
    "90": "90/90",
}

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class DataProcessor:
    def process_weapon_data(self, weapon_data: Dict) -> Dict:
        """
        Processes the weapon data by mapping attribute keys and parsing stat values.

        Args:
            weapon_data (Dict): The weapon data dictionary.

        Returns:
            Dict: The processed weapon data dictionary.
        """
        try:
            new_main_stats = {}
            for key, stats in weapon_data.get('baseStats', {}).items():
                new_key = KEY_MAP.get(key, key)
                new_stats = {}
                for stat_key, value in stats.items():
                    mapped_key = ATTRIBUTE_KEY_MAP.get(stat_key, stat_key)
                    parsed_value = parse_stat_value(value)
                    new_stats[mapped_key] = parsed_value
                new_main_stats[new_key] = new_stats
            weapon_data['baseStats'] = new_main_stats
            return weapon_data
        except Exception as e:
            logger.error(f"Error processing weapon data: {str(e)}")
            raise