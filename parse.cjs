const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('mod1.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('mod1_text.txt', data.text);
}).catch(console.error);
