const fs = require('fs');
const { createCanvas } = require('canvas');

function generateIcon(size, filename) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#25D366');
    gradient.addColorStop(1, '#128C7E');
    
    // Draw rounded rectangle background
    const radius = size * 0.2;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.fill();
    
    const centerX = size / 2;
    
    // Draw large chat bubble
    const bubbleSize = size * 0.35;
    const bubbleY = size * 0.35;
    
    // White circle for bubble background
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(centerX, bubbleY, bubbleSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw chat bubble shape inside
    ctx.strokeStyle = '#25D366';
    ctx.lineWidth = size * 0.025;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Main bubble rounded rectangle
    const bubbleInnerSize = bubbleSize * 0.65;
    const bubbleLeft = centerX - bubbleInnerSize / 2;
    const bubbleTop = bubbleY - bubbleInnerSize / 2;
    const bubbleRadius = bubbleInnerSize * 0.2;
    
    ctx.beginPath();
    ctx.moveTo(bubbleLeft + bubbleRadius, bubbleTop);
    ctx.lineTo(bubbleLeft + bubbleInnerSize - bubbleRadius, bubbleTop);
    ctx.quadraticCurveTo(bubbleLeft + bubbleInnerSize, bubbleTop, bubbleLeft + bubbleInnerSize, bubbleTop + bubbleRadius);
    ctx.lineTo(bubbleLeft + bubbleInnerSize, bubbleTop + bubbleInnerSize - bubbleRadius);
    ctx.quadraticCurveTo(bubbleLeft + bubbleInnerSize, bubbleTop + bubbleInnerSize, bubbleLeft + bubbleInnerSize - bubbleRadius, bubbleTop + bubbleInnerSize);
    ctx.lineTo(bubbleLeft + bubbleRadius, bubbleTop + bubbleInnerSize);
    ctx.quadraticCurveTo(bubbleLeft, bubbleTop + bubbleInnerSize, bubbleLeft, bubbleTop + bubbleInnerSize - bubbleRadius);
    ctx.lineTo(bubbleLeft, bubbleTop + bubbleRadius);
    ctx.quadraticCurveTo(bubbleLeft, bubbleTop, bubbleLeft + bubbleRadius, bubbleTop);
    ctx.stroke();
    
    // Draw bubble tail
    ctx.beginPath();
    ctx.moveTo(bubbleLeft + bubbleInnerSize * 0.2, bubbleTop + bubbleInnerSize);
    ctx.lineTo(bubbleLeft + bubbleInnerSize * 0.15, bubbleTop + bubbleInnerSize + bubbleInnerSize * 0.15);
    ctx.lineTo(bubbleLeft + bubbleInnerSize * 0.35, bubbleTop + bubbleInnerSize);
    ctx.stroke();
    
    // Draw three dots inside bubble
    const dotRadius = bubbleInnerSize * 0.08;
    const dotY = bubbleY;
    const dotSpacing = bubbleInnerSize * 0.25;
    
    ctx.fillStyle = '#25D366';
    
    // Left dot
    ctx.beginPath();
    ctx.arc(centerX - dotSpacing, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Center dot
    ctx.beginPath();
    ctx.arc(centerX, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Right dot
    ctx.beginPath();
    ctx.arc(centerX + dotSpacing, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw "Whads!" text below bubble
    const textY = size * 0.75;
    const fontSize = size * 0.18;
    
    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add text shadow for better visibility
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = size * 0.015;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = size * 0.01;
    
    ctx.fillText('Whads!', centerX, textY);
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
    console.log(`✅ Generated: ${filename}`);
}

// Generate all icons
console.log('🎨 Generating Whads! icons...\n');

// Create icons directory if it doesn't exist
if (!fs.existsSync('icons')) {
    fs.mkdirSync('icons');
}

generateIcon(32, 'favicon.png');
generateIcon(192, 'icons/icon-192.png');
generateIcon(512, 'icons/icon-512.png');

console.log('\n✨ All icons generated successfully!');

// Made with Bob
