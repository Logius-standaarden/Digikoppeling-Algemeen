import os
import sys

f = open("./js/config.js", "r", encoding="utf-8")

for line in f:
    if (".pdf" in line) and ("//" not in line):
        start = line.find("\"") + 1
        end = line.find(".pdf") + 4
        name = line[start:end]
        print("Found PDF name: " + name)
        try:
            os.rename("doc.pdf", name)
        except:
            print("Could not rename PDF file")
