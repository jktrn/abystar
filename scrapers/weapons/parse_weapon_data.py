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

def process_weapon_data(weapon_data):
    for level, stats in weapon_data.get('baseStats', {}).items():
        new_stats = {}
        for key, value in stats.items():
            mapped_key = attribute_key_map.get(key, key)
            parsed_value = parse_stat_value(value)
            new_stats[mapped_key] = parsed_value
        weapon_data['baseStats'][level] = new_stats
    return weapon_data

def main():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_dir, "weapons.json")

    with open(file_path, 'r') as f:
        data = json.load(f)

    for weapon_name, weapon_data in data.items():
        data[weapon_name] = process_weapon_data(weapon_data)

    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    main()

# import json
# import os

# def parse_stat_value(value):
#     value_str = str(value)
#     if value_str.endswith('%'):
#         return round(float(value_str.strip('%')) / 100, 5)
#     try:
#         return round(float(value_str), 5)
#     except ValueError:
#         return value

# key_map = {
#     "1": "1/20",
#     "20": "20/20",
#     "20+": "20/40",
#     "40": "40/40",
#     "40+": "40/50",
#     "50": "50/50",
#     "50+": "50/60",
#     "60": "60/60",
#     "60+": "60/70",
#     "70": "70/70",
#     "70+": "70/80",
#     "80": "80/80",
#     "80+": "80/90",
#     "90": "90/90",
# }

# def process_weapon_data(weapon_data):
#     new_main_stats = {}
#     for key, stats in weapon_data.get('baseStats', {}).items():
#         new_key = key_map.get(key, key)
#         new_stats = {}
#         for stat_key, value in stats.items():
#             parsed_value = parse_stat_value(value)
#             new_stats[stat_key] = parsed_value
#         new_main_stats[new_key] = new_stats
#     weapon_data['baseStats'] = new_main_stats
#     return weapon_data

# def main():
#     current_dir = os.path.dirname(os.path.abspath(__file__))
#     file_path = os.path.join(current_dir, "weapons.json")

#     with open(file_path, 'r') as f:
#         data = json.load(f)

#     for weapon_name, weapon_data in data.items():
#         data[weapon_name] = process_weapon_data(weapon_data)

#     with open(file_path, 'w') as f:
#         json.dump(data, f, indent=4)

# if __name__ == '__main__':
#     main()
