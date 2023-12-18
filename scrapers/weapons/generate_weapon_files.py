import json
import os

def sanitize_filename(name):
    return '-'.join(name.replace('(', '').replace(')', '').replace('"', '').replace("'", '').lower().split())

def pascal_case(name):
    return ''.join(word.title() for word in name.replace('(', '').replace(')', '').replace('-', '').replace('"', '').replace("'", '').split())

def generate_weapon_tsx_files(json_path, output_directory):
    with open(json_path, 'r') as file:
        weapons = json.load(file)

    output_directory = os.path.abspath(output_directory)
    os.makedirs(output_directory, exist_ok=True)

    for weapon_name, weapon_data in weapons.items():
        sanitized_name = sanitize_filename(weapon_name)
        filename = f"{sanitized_name}.tsx"
        filepath = os.path.join(output_directory, filename)

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

json_path = 'weapons.json'
output_directory = '../../src/data/weapons'
generate_weapon_tsx_files(json_path, output_directory)
