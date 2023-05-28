import os
import shutil

# Set the directory you want to start from
rootDir = '.'
for dirName, subdirList, fileList in os.walk(rootDir):
    for fname in fileList:
        if "burst" in fname:
            shutil.move(fname, "bursts/" + fname)
        elif "skill" in fname:
            shutil.move(fname, "skills/" + fname)
        elif "constellation" in fname:
            shutil.move(fname, "constellations/" + fname)
        elif "passive" in fname or "sprint" in fname:
            shutil.move(fname, "passives/" + fname)
