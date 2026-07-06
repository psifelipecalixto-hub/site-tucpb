const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');
data = data.replace(/Umband    audioUrl: "https:\/\/drive\.google\.com\/uc\?export=download&id=1Z6cs2LLF6IKzd_z-QorJ3r6mjaXOvsEq",/, `Umbanda toda a sabedoria mágica e elemental. E com este poderoso amálgama nutricional forjado na escuridão existencial, seu espesso tronco resistirá heroicamente, sem tombar um só centímetro, aos ventos assustadores das adversidades terrenas que caracterizam o karma humano.\\n\\nE, ao final de seu longo ciclo produtivo — que muitas vezes englobará o sacrifício de grande parte da vida biológica e de um mar de lágrimas caídas na esteira para a purificação da alma —, sua enorme e densa copa abrigará amavelmente, sob a sombra divina de suas folhas e galhos, a terrível, lancinante e pesada dor material, moral e existencial dos irmãos sofredores e aflitos que cruzarem as portas abertas do amado terreiro. Apenas o médium forjado nas raízes da Árvore e lapidado pela dor da tempestade será considerado espiritualmente apto a oferecer-lhes, de forma serena e livre da arrogância, os suculentos frutos de uma caridade incondicional. Desta sublime forma, realiza-se na Terra a mais bela, perfeita e comovente alquimia do ser humano, transformado de chumbo e barro à própria faísca, extensão e coroa eterna, luminosa e pulsante do sagrado coração vivo e infinito de Deus Pai Olorum, Zambi e Eledumare, perante toda a eternidade.\`,
    duration: "60 min",
    instructor: "Babá Felipe",
    date: "06 de Julho de 2026",
    videoUrl: "",
    imageUrl: "https://lh3.googleusercontent.com/d/1Z6cs2LLF6IKzd_z-QorJ3r6mjaXOvsEq",
    audioUrl: "https://drive.google.com/uc?export=download&id=1Z6cs2LLF6IKzd_z-QorJ3r6mjaXOvsEq",`);
fs.writeFileSync('src/data.ts', data);
