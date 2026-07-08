const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('temp.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('extracted_text.txt', data.text);
    console.log("Extracted successfully");
}).catch(function(error){
    console.log("Error:", error);
});
