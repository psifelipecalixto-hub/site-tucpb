const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');
content = content.replace(/videoUrl: "(https:\/\/www\.youtube\.com\/embed\/([^"]+))",\n\s+imageUrl: "[^"]+"/g, (match, url, id) => {
    return `videoUrl: "${url}",\n    imageUrl: "https://img.youtube.com/vi/${id}/hqdefault.jpg"`;
});
fs.writeFileSync('src/data.ts', content);
console.log("Images updated.");
