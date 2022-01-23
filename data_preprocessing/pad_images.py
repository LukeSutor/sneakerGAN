import os
from PIL import Image

root = 'images/fullsize'

top, bottom = 200, 200

for file in os.listdir(root):
    if(file.endswith(".png")):
        dir = os.path.join(root, file)
        try:
            with open(dir, "rb") as f:
                image = Image.open(f)
                width, height = image.size

                new_height = height + top + bottom

                result = Image.new(
                    image.mode, (width, new_height), (255, 255, 255))
                result.paste(image, (0, top))
                result.save(f"images/fullsize_square/{file}")
        except:
            pass

print("DONE")
