import os
from PIL import Image

root = 'images/fullsize_square'

corrupted = []

for file in os.listdir(root):
    if(file.endswith(".png")):
        dir = os.path.join(root, file)
        try:
            with open(dir, "rb") as f:
                image = Image.open(f)

                result = image.resize((256, 256))
                result.save(f"images/256/{file}")
        except:
            pass

print("DONE")
