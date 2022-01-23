import os
import cv2
from PIL import Image

root = '../images'

corrupted = []

for file in os.listdir(root):
    if(file.endswith(".png")):
        dir = os.path.join(root, file)
        try:
            with open(dir, "rb") as f:
                image = Image.open(f)
                if(image.size != (1400, 1000)):
                    print(dir)
                    print(image.size)
        except:
            corrupted.append(file)
