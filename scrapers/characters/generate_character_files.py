import json
import os

def kebab_case(name):
    clean_name = name.replace('(', '').replace(')', '').lower()
    return '-'.join(clean_name.split())

def pascal_case(name):
    clean_name = name.replace('(', '').replace(')', '')
    return ''.join(word.title() for word in clean_name.split())

def generate_tsx_files(json_path, output_directory):
    with open(json_path, 'r') as file:
        characters = json.load(file)

    os.makedirs(output_directory, exist_ok=True)

    for character_name, char_data in characters.items():
        filename = f"{kebab_case(character_name)}.tsx"
        filepath = os.path.join(output_directory, filename)

        with open(filepath, 'w') as tsx_file:
            tsx_file.write("import { AbilityScaling, Bonus, Character } from '@/interfaces/Character'\n\n")
            tsx_file.write("const abilityScalings: AbilityScaling = {\n// ...\n}\n\n")
            tsx_file.write("const characterBonuses: Bonus[] = [\n// ...\n]\n\n")
            tsx_file.write("const constellationBonuses: Bonus[] = [\n// ...\n]\n\n")
            
            tsx_file.write(f"const {pascal_case(character_name)}: Character = {{\n")
            
            for key, value in char_data.items():
                tsx_file.write(f"    {key}: ")
                json.dump(value, tsx_file, indent=4)
                tsx_file.write(",\n")

            tsx_file.write("    abilityScalings,\n    characterBonuses,\n    constellationBonuses\n}\n\n")
            tsx_file.write(f"export default {pascal_case(character_name)}\n")

json_path = 'characters.json'
output_directory = 'output'
generate_tsx_files(json_path, output_directory)
