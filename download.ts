import fs from 'fs';
import https from 'https';

const id = '1lpaDYo9r4UINDKCbiX008E1xb4fUZ0em';
const url = `https://drive.google.com/uc?export=download&id=${id}`;

function download(url: string, dest: string) {
  https.get(url, (res) => {
    if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      // Handle redirects
      download(res.headers.location, dest);
    } else {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download completed.');
      });
    }
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error('Error downloading:', err.message);
  });
}

download(url, 'public/gira_esquerda.mp4');
