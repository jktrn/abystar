import json
import os

def parse_stat_value(value):
    value_str = str(value)

    if value_str.endswith('%'):
        return round(float(value_str.strip('%')) / 100, 5)
    try:
        return round(float(value_str), 5)
    except ValueError:
        return value

def process_character_data(character_data):
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
            parsed_value = parse_stat_value(value)
            new_stats[mapped_key] = parsed_value
        character_data['baseStats'][level] = new_stats

    return character_data

def main():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_dir, "characters_new.json")

    with open(file_path, 'r') as f:
        data = json.load(f)

    for character_name, character_data in data.items():
        data[character_name] = process_character_data(character_data)

    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    main()
