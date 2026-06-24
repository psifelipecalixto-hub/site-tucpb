/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlogArticle, Lesson, Herb, GiraEvent, MemberTask, CurimbaPoint } from "./types";

export const initialArticles: BlogArticle[] = [
  {
    id: "art-1",
    title: "O Gongá como Portal e Ponto de Força",
    category: "Fundamentos",
    snippet: "Compreenda a ciência espiritual por trás do altar umbandista e sua relevância na irradiação das forças dos Orixás.",
    content: "O Gongá é o coração do terreiro de Umbanda. Muito mais do que um altar com imagens e símbolos, trata-se de um condensador de forças de altíssima vibração, projetado e consagrado pela espiritualidade maior para atuar como um verdadeiro portal dimensional.\n\nCada imagem disposta no Gongá funciona como uma antena captadora de vibrações cósmicas e canalizadora de energias de cura, consolo e proteção. A presença do vaso de flores (vida vegetal e elemento água), das velas (elemento fogo e iluminação), e das pedras e cristais (elemento terra e fixação) formam um ecossistema energético perfeito.\n\nAo se aproximar do Gongá com respeito, humildade e fé, o médium ou o consulente entra em sintonia com a egrégora do Templo, facilitando a recepção de passes, o alinhamento dos chacras e o desfazimento de cargas densas. É o local de respeito máximo, onde reverenciamos a luz de Oxalá e todos os nossos sagrados Orixás.",
    date: "15 de Junho de 2026",
    readTime: "5 min de leitura",
    author: "Dirigente Espiritual",
    iconName: "gonga"
  },
  {
    id: "art-2",
    title: "A Defumação Sagrada e o Poder das Ervas",
    category: "Ervas",
    snippet: "Por que defumamos o terreiro antes dos trabalhos? Conheça os segredos da queima de ervas na limpeza astral.",
    content: "A defumação é uma das práticas litúrgicas mais antigas e importantes dentro do Templo Umbandista Caboclo Pena Branca (TUCPB). Antes do início de qualquer Gira, o cheiro característico do carvão em brasa com ervas sagradas preenche o espaço físico e limpa o ambiente astral.\n\nA queima de elementos vegetais libera o princípio ativo etérico das ervas, que age diretamente sobre as larvas astrais e miasmas que se acumulam no campo energético das pessoas e do ambiente. Ervas quentes como Guiné, Arruda e Alecrim ajudam a dispersar energias de inveja, angústia e negatividade, enquanto resinas como Incenso, Mirra e Benjoim atraem os bons espíritos e sintonizam a paz.\n\nAlém de purificar a atmosfera psíquica do terreiro, a defumação prepara a mente dos médiuns para a concentração necessária à incorporação e ao trabalho de caridade espiritual.",
    date: "10 de Junho de 2026",
    readTime: "6 min de leitura",
    author: "Mãe/Pai de Santo",
    iconName: "ervas"
  },
  {
    id: "art-3",
    title: "Ogum: O Senhor da Lei, da Ordem e dos Caminhos",
    category: "Orixás",
    snippet: "Entenda a vibração de Ogum, o guerreiro que comanda a segurança e as batalhas astrais de nossa caminhada.",
    content: "Na Umbanda, Ogum é o Orixá que rege a Lei Divina, a Ordem e a Execução de todas as coisas. Ele é a força motriz do progresso, a energia que nos impulsiona a vencer demandas e superar as dificuldades da vida cotidiana.\n\nSua vibração é masculina, forte, ativa e enérgica. Ogum rege a linha dos Caboclos de Ogum e atua diretamente na quebra de demandas e na abertura de caminhos materiais e espirituais. No sincretismo religioso brasileiro, é associado a São Jorge, o santo guerreiro.\n\nQuando cantamos para Ogum no terreiro, estamos evocando a força da coragem, a determinação necessária para nos manter no caminho reto e o escudo espiritual que repele as egrégoras de ódio, medo e estagnação. Patacori, Ogum! Ogunhê!",
    date: "05 de Junho de 2026",
    readTime: "4 min de leitura",
    author: "Ogã Curimbeiro",
    iconName: "shield"
  },
  {
    id: "art-4",
    title: "O Caboclo Pena Branca: A Força da Cura da Floresta",
    category: "Guias",
    snippet: "Conheça a história e a egregora de luz do Caboclo Pena Branca, patrono maior de nossa casa espiritual.",
    content: "O Caboclo Pena Branca é uma entidade de altíssima evolução espiritual, que atua na vibração da Linha de Oxóssi (o caçador de almas e provedor da cura pela mata) e na vibração de Oxalá (trazendo a bandeira branca da paz universal).\n\nSua principal característica é a pureza, representada pela lendária pena branca que ostenta em seu cocar. Na egrégora do nosso terreiro, Caboclo Pena Branca é sinônimo de medicina da floresta, desobsessão e esclarecimento doutrinário. Suas consultas trazem passes revigorantes, indicação de banhos de ervas medicinais e uma profunda sensação de acolhimento e renovação.\n\nTrabalhar sob a tutela do Caboclo Pena Branca nos exige o compromisso inabalável com a verdade, com o respeito à natureza e com a caridade exercida de forma gratuita e amorosa.",
    date: "01 de Junho de 2026",
    readTime: "7 min de leitura",
    author: "Dirigente Espiritual",
    iconName: "feather"
  }
];

export const initialLessons: Lesson[] = [
  {
    id: "les-1",
    title: "Módulo I: Introdução à Doutrina de Umbanda",
    category: "Doutrina",
    description: "Estudo sobre as sete linhas de Umbanda, a cosmologia dos Orixás e as leis kármicas que regem as comunicações espirituais.",
    duration: "45 min",
    instructor: "Pai de Santo Felipe",
    date: "12 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo
    level: "Iniciante"
  },
  {
    id: "les-2",
    title: "Toques Fundamentais da Curimba: Samba Cabula e Ijexá",
    category: "Curimba",
    description: "Aula prática para ogãs e médiuns iniciantes. Como sintonizar com o couro do atabaque e conduzir a energia da Gira.",
    duration: "52 min",
    instructor: "Ogã Principal Douglas",
    date: "18 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Iniciante"
  },
  {
    id: "les-3",
    title: "Banhos de Ervas: Preparação, Imantação e Ritualística",
    category: "Ervas e Banhos",
    description: "Diferença entre banhos de cabeça (amaci) e banhos de pescoço para baixo. Classificação das ervas frias, mornas e quentes.",
    duration: "38 min",
    instructor: "Mãe de Santo Clarice",
    date: "20 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Intermediário"
  },
  {
    id: "les-4",
    title: "O Processo de Incorporação e Sintonia Fina do Médium",
    category: "Desenvolvimento",
    description: "Técnicas de respiração, concentração e entrega mental para facilitar o acoplamento áurico e a psicofonia dos Guias.",
    duration: "1h 10min",
    instructor: "Pai de Santo Felipe",
    date: "22 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado"
  }
];

export const initialHerbs: Herb[] = [
  {
    id: "herb-1",
    name: "Arruda",
    scientificName: "Ruta graveolens",
    orixa: "Ogum / Exu",
    ritualUse: "Descarrego de energias densas, inveja e mau-olhado. Muito usada em bate-folhas e defumações.",
    medicinalUse: "Uso externo para alívio de dores reumáticas e varizes.",
    classification: "Morna",
    preparation: "Infusão ou maceração a frio. Usar do pescoço para baixo após banho de higiene."
  },
  {
    id: "herb-2",
    name: "Guiné",
    scientificName: "Petiveria alliacea",
    orixa: "Oxóssi / Ogum",
    ritualUse: "Altamente protetora e cortadora de demandas negativas. Remove cordões energéticos parasitas.",
    medicinalUse: "Uso medicinal tradicional muito restrito devido a toxicidade.",
    classification: "Quente",
    preparation: "Deve ser macerada em água fria. Recomendado o uso exclusivo do pescoço para baixo nas limpezas pesadas."
  },
  {
    id: "herb-3",
    name: "Alecrim",
    scientificName: "Salvia rosmarinus",
    orixa: "Oxalá / Oxóssi",
    ritualUse: "Equilíbrio espiritual, atração de harmonia, alegria e clareza mental. Ótimo para banhos de cabeça (amaci).",
    medicinalUse: "Chá digestivo, tônico capilar e calmante suave.",
    classification: "Fria",
    preparation: "Infusão com água quente. Pode ser derramado em todo o corpo, incluindo a cabeça."
  },
  {
    id: "herb-4",
    name: "Manjericão",
    scientificName: "Ocimum basilicum",
    orixa: "Oxalá",
    ritualUse: "Paz espiritual extrema, alinhamento dos chacras superiores e calmaria mental.",
    medicinalUse: "Antioxidante, melhora a imunidade e combate ansiedade leve.",
    classification: "Fria",
    preparation: "Maceração manual em água morna. Excelente para banhos de amaci antes de deitar."
  },
  {
    id: "herb-5",
    name: "Aroeira",
    scientificName: "Schinus terebinthifolia",
    orixa: "Exu / Ogum",
    ritualUse: "Erva forte para quebra de feitiços pesados e desobsessão. Usada nos banhos de descarrego profundo.",
    medicinalUse: "Ação anti-inflamatória e cicatrizante potente (uso externo).",
    classification: "Quente",
    preparation: "Cozimento das folhas por 5 minutos. Deixar esfriar e aplicar apenas do pescoço para baixo."
  }
];

export const initialGiras: GiraEvent[] = [
  {
    id: "gir-1",
    title: "Gira de Caridade - Caboclos de Pena Branca",
    date: "Próximo Sábado (27/06)",
    time: "17:00",
    orixaGuide: "Caboclos (Mata e Cura)",
    description: "Trabalhos espirituais sob o comando do Caboclo Pena Branca. Passes de cura, desobsessão espiritual e orientações gratuitas.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-2",
    title: "Gira de Preto Velho - Linha de Sabedoria",
    date: "Sábado seguinte (04/07)",
    time: "17:00",
    orixaGuide: "Pretos Velhos (Evolução e Fé)",
    description: "Os vovôs e vovós da Umbanda trazem a sabedoria ancestral, consolo acolhedor e benção com ervas.",
    hasConsultation: true,
    maxConsultations: 80,
    status: "Confirmada"
  },
  {
    id: "gir-3",
    title: "Gira de Guardiões - Esquerda na Lei",
    date: "Sábado (11/07)",
    time: "18:00",
    orixaGuide: "Exus e Pombagiras (Proteção e Caminhos)",
    description: "Sessão dedicada à limpeza pesada do terreiro e desfazimento de demandas negativas. Segurança e caminhos abertos.",
    hasConsultation: true,
    maxConsultations: 50,
    status: "Confirmada"
  },
  {
    id: "gir-4",
    title: "Festa de Oxum - Cachoeiras da Prosperidade",
    date: "Sábado (18/07)",
    time: "16:00",
    orixaGuide: "Mamãe Oxum (Amor e Fertilidade)",
    description: "Gira comemorativa em homenagem a nossa Mãe Oxum. Oferendas florais, orações e passes de prosperidade espiritual.",
    hasConsultation: false,
    status: "Especial"
  }
];

export const initialTasks: MemberTask[] = [
  {
    id: "tsk-1",
    task: "Lavar e arrumar as quartilhas do Gongá",
    assignedTo: "Ana Paula (Médiun)",
    area: "Terreiro / Gongá",
    status: "Pendente",
    date: "Sábado, às 14:00"
  },
  {
    id: "tsk-2",
    task: "Abastecer os defumadores com carvão, mirra e alecrim",
    assignedTo: "João Silva (Cambone)",
    area: "Defumação",
    status: "Em Andamento",
    date: "Sábado, às 15:30"
  },
  {
    id: "tsk-3",
    task: "Preparar a canjica de Oxalá e o café dos Pretos Velhos",
    assignedTo: "Maria Carmo (Cozinha)",
    area: "Cozinha",
    status: "Concluido",
    date: "Sexta-feira"
  },
  {
    id: "tsk-4",
    task: "Ajustar afinação dos atabaques (Rum, Pi e Lê)",
    assignedTo: "Marcos Ogã",
    area: "Curimba",
    status: "Pendente",
    date: "Sábado, às 16:00"
  },
  {
    id: "tsk-5",
    task: "Organizar as fichas de atendimento e recepção de consulentes",
    assignedTo: "Letícia Mendes",
    area: "Portaria / Harmonização",
    status: "Em Andamento",
    date: "Sábado, às 16:15"
  }
];

export const initialPoints: CurimbaPoint[] = [
  {
    id: "pnt-1",
    title: "Hino da Umbanda",
    guideOrOrixa: "Hino Nacional da Umbanda",
    type: "Abertura",
    lyrics: "Refletiu a Luz Divina\nCom todo seu esplendor\nVem do reino de Oxalá\nAonde há paz e amor\n\nLuz que refletiu na terra\nLuz que refletiu no mar\nLuz que veio de Aruanda\nPara tudo iluminar\n\nA Umbanda é paz e amor\nUm mundo cheio de luz\nÉ força que nos dá vida\nE o caminho que nos conduz\n\nAvante filhos de fé\nComo a nossa lei não há\nLevando ao mundo inteiro\nA bandeira de Oxalá!"
  },
  {
    id: "pnt-2",
    title: "Caboclo Pena Branca de Oxóssi",
    guideOrOrixa: "Caboclo Pena Branca",
    type: "Chamada",
    lyrics: "No meio da mata virgem\nEu vi um caboclo bradar\nEle trazia uma pena branca\nPara todo mal desatar\n\nOkê Caboclo!\nEle é Pena Branca, o curador!\nOkê Caboclo!\nSua pena branca traz o amor!\n\nEle vem de Aruanda sagrada\nCom as ordens de Oxalá\nVem salvar filhos de pemba\nVem as mazelas curar!"
  },
  {
    id: "pnt-3",
    title: "Nossa Senhora Defumou Seus Filhos",
    guideOrOrixa: "Defumação",
    type: "Defumação",
    lyrics: "Nossa Senhora defumou seus filhos\nPara todo mal afastar\nEu defumo esta casa d'Umbanda\nPara os bons guias entrar\n\nCheira arruda, guiné e alecrim\nCheira benjoim e alfazema também\nDefumando com as ervas da jurema\nMinha casa fica em paz com o bem!"
  },
  {
    id: "pnt-4",
    title: "Vovó Cambinda não pisa no chão",
    guideOrOrixa: "Pretos Velhos",
    type: "Saudação",
    lyrics: "Vovó Cambinda não pisa no chão\nEla pisa na folha de arruda na mão\n\nAdorei as Almas!\nO cachimbo da vovó tem mironga\nEla vem benzer filhos de Umbanda\nCom sua fumaça de paz na gira!"
  }
];
