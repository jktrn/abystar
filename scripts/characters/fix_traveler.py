import json
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

def fix_traveler():
    # Read the Traveler's data from the characters.json file
    file_path = os.path.join(current_dir, "characters.json")
    with open(file_path, 'r') as f:
        data = json.load(f)
        traveler_data = data["Traveler"]
    
    # Split the Traveler into five separate characters differentiated by their element
    elements = ["Hydro", "Anemo", "Geo", "Electro", "Dendro"]
    travelers_data = {}
    
    for i, element in enumerate(elements):
        new_traveler_data = traveler_data.copy()
        new_traveler_data["name"] += f" ({element})"
        new_traveler_data["vision"] = element
        new_traveler_data["weapon"] = "Sword"
        new_traveler_data["rarity"] = 5
        new_traveler_data["talents"] = traveler_data["talents"][i*3:(i+1)*3]
        new_traveler_data["passiveSkills"] = traveler_data["passiveSkills"][i*8:i*8+2]
        new_traveler_data["constellations"] = traveler_data["passiveSkills"][i*8+2:(i+1)*8]
        
        # Add a `level` integer to each constellation
        for j, constellation in enumerate(new_traveler_data["constellations"]):
            constellation["level"] = j + 1
        
        travelers_data[new_traveler_data["name"]] = new_traveler_data
    
    # Remove the original Traveler data from the characters.json file
    del data["Traveler"]
    
    # Add the fixed Traveler data to the characters.json file
    data.update(travelers_data)

    # Create a new dictionary with the top-level keys sorted in ascending order
    sorted_data = {}
    for key in sorted(data.keys()):
        sorted_data[key] = data[key]

    # Write the sorted data to the test.json file
    with open(file_path, 'w') as f:
        json.dump(sorted_data, f, indent=4)

if __name__ == '__main__':
    fix_traveler()
