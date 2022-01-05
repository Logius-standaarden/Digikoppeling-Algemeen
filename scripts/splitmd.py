import os
import sys

# Split markdown files
fnOriginal = "04_content.md"
if not os.path.isfile(fnOriginal):
    fnOriginal = input("Could not find \"04_content.md\", please provide content file name:")
f = open(fnOriginal, "r", encoding="utf-8")
i = 0
replacement = ""
for line in f:
    if line[0:2] == '# ':
        if i > 0:
            copy.close()
        i += 1
        fnCopy = line[2:-1]
        fnCopy = fnCopy.split(":")[0]
        fnCopy = fnCopy.replace("?","")
        fnCopy = fnCopy.replace("/","")
        fnCopy = "ch" + str(i).zfill(2) + "_" + fnCopy + ".md"
        copy = open(fnCopy, "w", encoding="utf-8")
        replacement += "\n<section data-format=\"markdown\" data-include=\"" + fnCopy + "\"></section>"
    if i > 0:
        copy.write(line)
f.close()
copy.close()
os.remove(fnOriginal)

# Edit index.html
html = "index.html"
with open(html, "r") as file :
  data = file.read()

original = "<section data-format=\"markdown\" data-include=\"" + fnOriginal + "\"></section>"
data = data.replace(original, replacement)

with open(html, "w") as file:
  file.write(data)

input("Replaced \"" + fnOriginal + "\" with " + str(i) + " files.")