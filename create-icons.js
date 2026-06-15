// Simple icon generator using Node.js Canvas
// Run with: node create-icons.js
// Or use the generate-icons.html file in a browser

const fs = require('fs');
const path = require('path');

// Create a simple SVG icon
function createSVGIcon(size) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#25D366;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#128C7E;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.5}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">W</text>
</svg>`;
}

// Create icons directory
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
}

// Generate SVG files (can be used as fallback)
fs.writeFileSync(path.join(iconsDir, 'icon-192.svg'), createSVGIcon(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.svg'), createSVGIcon(512));

console.log('✅ SVG icons created!');
console.log('📝 To convert to PNG:');
console.log('   1. Open generate-icons.html in a browser');
console.log('   2. Download the PNG files');
console.log('   3. Save them to the icons/ directory');
console.log('');
console.log('Or use an online SVG to PNG converter with the SVG files in icons/');

// Made with Bob
