const fs = require('fs');

let text = fs.readFileSync('mod1_text.txt', 'utf8');

// prepare the text for JSON stringification
const textJson = JSON.stringify(text);

let dataTs = fs.readFileSync('src/data.ts', 'utf8');

const newLesson = `  {
    id: "les-t1-1",
    title: "Módulo 1: O Cambono no TUCPB",
    category: "Estudo",
    description: ${textJson},
    duration: "Módulo 1",
    instructor: "Babá Felipe",
    date: "08 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/Q2O-4HL31Gw",
    imageUrl: "/O_Cambono_no_TUCPB.png",
    pdfUrl: "https://drive.google.com/file/d/1UjjoYlEP40VrvXP2DUhgWvbHoMWBWAAm/view?usp=sharing",
    level: "Todos",
    tags: ["Cambono", "Mediunidade", "Módulo 1"]
  },
`;

const insertIndex = dataTs.indexOf('export const initialLessons: Lesson[] = [') + 'export const initialLessons: Lesson[] = ['.length;
if (insertIndex > 'export const initialLessons: Lesson[] = ['.length - 1) {
    dataTs = dataTs.substring(0, insertIndex) + '\n' + newLesson + dataTs.substring(insertIndex);
    fs.writeFileSync('src/data.ts', dataTs);
    console.log('Successfully added lesson');
} else {
    console.log('Could not find insertion point');
}
