#!/usr/bin/env python3
"""
Generate app icons for Whads PWA
Requires: pip install pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    """Create a WhatsApp-style icon with gradient background"""
    
    # Create image with transparent background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw rounded rectangle with gradient effect
    # Create gradient from #25D366 to #128C7E
    for y in range(size):
        # Calculate color for this row
        ratio = y / size
        r = int(37 + (18 - 37) * ratio)
        g = int(211 + (140 - 211) * ratio)
        b = int(102 + (126 - 102) * ratio)
        color = (r, g, b, 255)
        
        # Draw horizontal line
        draw.line([(0, y), (size, y)], fill=color, width=1)
    
    # Create rounded corners mask
    mask = Image.new('L', (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    radius = int(size * 0.2)
    mask_draw.rounded_rectangle([(0, 0), (size, size)], radius=radius, fill=255)
    
    # Apply mask
    img.putalpha(mask)
    
    # Draw WhatsApp "W" letter
    try:
        # Try to use a bold font
        font_size = int(size * 0.5)
        try:
            font = ImageFont.truetype("arialbd.ttf", font_size)
        except:
            try:
                font = ImageFont.truetype("Arial Bold.ttf", font_size)
            except:
                font = ImageFont.load_default()
    except:
        font = ImageFont.load_default()
    
    # Draw white "W" in center
    text = "W"
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Calculate position to center text
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - int(size * 0.05)
    
    # Draw text with white color
    draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)
    
    # Draw a chat bubble outline
    bubble_size = int(size * 0.6)
    bubble_x = (size - bubble_size) // 2
    bubble_y = (size - bubble_size) // 2
    
    # Save image
    img.save(filename, 'PNG')
    print(f"✓ Created {filename} ({size}x{size})")

def main():
    """Generate all required icons"""
    
    # Create icons directory if it doesn't exist
    icons_dir = 'icons'
    if not os.path.exists(icons_dir):
        os.makedirs(icons_dir)
    
    print("🎨 Generating Whads PWA Icons...")
    print()
    
    # Generate icons
    create_icon(192, os.path.join(icons_dir, 'icon-192.png'))
    create_icon(512, os.path.join(icons_dir, 'icon-512.png'))
    
    print()
    print("✅ All icons generated successfully!")
    print(f"📁 Icons saved to: {os.path.abspath(icons_dir)}")

if __name__ == '__main__':
    try:
        main()
    except ImportError:
        print("❌ Error: Pillow library not found")
        print("📦 Install it with: pip install pillow")
        print()
        print("Alternative: Open generate-icons.html in a browser to download icons manually")

# Made with Bob
