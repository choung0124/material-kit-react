import cv2
import numpy as np
from PIL import Image

def create_heart_mask(height, width):
    """ Creates a heart-shaped mask. """
    heart_mask = np.zeros((height, width), dtype=np.uint8)

    # Create a grid of coordinates
    y, x = np.ogrid[:height, :width]

    # Equation of heart shape
    mask = (x - width // 2)**2 + (y - height // 2)**2 - (height // 2.5)**2
    heart_mask[((x - width // 2)**2 + (13 * (y - height // 2)**2) - (height // 2.5)**2) <= 0] = 255

    return heart_mask

def cut_heart_from_image(image_path, output_path):
    """ Cuts a heart shape from an image. """
    # Load image
    img = cv2.imread(image_path)
    height, width = img.shape[:2]

    # Create a heart mask
    mask = create_heart_mask(height, width)

    # Apply the mask to the image
    heart = cv2.bitwise_and(img, img, mask=mask)

    # Convert to PIL Image for saving with transparency
    heart_pil = Image.fromarray(cv2.cvtColor(heart, cv2.COLOR_BGR2RGB))
    heart_pil.putalpha(Image.fromarray(mask))

    # Save the result
    heart_pil.save(output_path, format='PNG')

# Example usage
cut_heart_from_image('path_to_your_input_image.jpg', 'output_heart_image.png')
