import json
import os

# Function to map base stats keys
def map_base_stats_keys(character_data):
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
            # Map the key using the attributeKeyMap
            mapped_key = attribute_key_map.get(key, key)

            # Add the mapped key-value pair to the new_stats
            new_stats[mapped_key] = value

        # Update the baseStats with the new mapped stats
        character_data['baseStats'][level] = new_stats

    return character_data

def main():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_dir, "characters.json")

    with open(file_path, 'r') as f:
        data = json.load(f)

    # Process each character in the data
    for character_name, character_data in data.items():
        # Map base stats keys for each character
        data[character_name] = map_base_stats_keys(character_data)

    # Write the updated data back to characters.json
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    main()
