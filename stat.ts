import fs from 'fs';
try {
  const stats = fs.statSync('public/gira_esquerda.mp4');
  console.log(`Size: ${stats.size} bytes`);
} catch (e) {
  console.log('File not found');
}
