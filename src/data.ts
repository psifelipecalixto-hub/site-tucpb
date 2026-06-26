/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlogArticle, Lesson, Herb, GiraEvent, MemberTask, CurimbaPoint, CurimbaPlaylist } from "./types";

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
  // TRILHA I: A RAIZ
  {
    id: "les-t1-1",
    title: "Sub-Aula 1: O Mistério do Axé e as Três Cores Primordiais",
    category: "TRILHA I: A RAIZ",
    description: "O fluxo da força vital nas polaridades Funfun (Branco/Ancestral), Preto (Matéria) e Vermelho (Movimento/Fogo) nos reinos mineral, vegetal e animal.",
    duration: "45 min",
    instructor: "Babá Felipe",
    date: "12 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Iniciante",
    tags: ["Fundamento", "Energia"]
  },
  {
    id: "les-t1-2",
    title: "Sub-Aula 2: As Leis Universais da Magia Simpática",
    category: "TRILHA I: A RAIZ",
    description: "Domínio prático do Princípio de Correspondência (semelhante produz semelhante) e da Lei do Contágio (vínculos energéticos por objetos e fotos).",
    duration: "40 min",
    instructor: "Babá Felipe",
    date: "15 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Iniciante",
    tags: ["Fundamento", "Magia"]
  },
  {
    id: "les-t1-3",
    title: "Sub-Aula 3: Anatomia Espiritual Iorubá",
    category: "TRILHA I: A RAIZ",
    description: "O entrelaçamento sagrado entre o Ara (corpo), Ojiji (sombra), Okan (coração), Emi (sopro) e Esè (pernas), e a regência dos Orixás nos órgãos.",
    duration: "55 min",
    instructor: "Babá Felipe",
    date: "18 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Intermediário",
    tags: ["Fundamento", "Anatomia"]
  },
  {
    id: "les-t1-4",
    title: "Sub-Aula 4: A Ciência do Ori e os Quatro Cantos",
    category: "TRILHA I: A RAIZ",
    description: "Alinhamento elemental da cabeça física e espiritual (Ori Odé e Ori Inu) através dos quadrantes da testa, nuca e laterais, e o autoconhecimento pelo Espelho de Oxum.",
    duration: "50 min",
    instructor: "Babá Felipe",
    date: "22 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado",
    tags: ["Fundamento", "Ori"]
  },
  {
    id: "les-t1-5",
    title: "Sub-Aula 5: As 256 Encruzilhadas do Destino",
    category: "TRILHA I: A RAIZ",
    description: "O mapeamento das 16x16 ramificações elementais de Ori e o comportamento da alma pelas vias do Ar, Água, Terra e Fogo.",
    duration: "60 min",
    instructor: "Babá Felipe",
    date: "25 de Junho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado",
    tags: ["Fundamento", "Destino"]
  },

  // TRILHA II: O TRONCO
  {
    id: "les-t2-1",
    title: "Sub-Aula 1: O Mito como Modelo e o Reset Ritual",
    category: "TRILHA II: O TRONCO",
    description: "Como a ritualística quebra o tempo profano, acede ao inconsciente atemporal e reatualiza a era primordial para trazer a cura ao presente.",
    duration: "45 min",
    instructor: "Babá Felipe",
    date: "01 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Iniciante",
    tags: ["Fundamento", "Mito"]
  },
  {
    id: "les-t2-2",
    title: "Sub-Aula 2: Anatomia e Passos de uma Gira de Umbanda",
    category: "TRILHA II: O TRONCO",
    description: "A sequência lógica de começo, meio e fim: Preleção/Preparação, Defumação e Purificação, Invocação, Incorporação e o mistério da Desincorporação.",
    duration: "55 min",
    instructor: "Babá Felipe",
    date: "05 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Iniciante",
    tags: ["Fundamento", "Ritual"]
  },
  {
    id: "les-t2-3",
    title: "Sub-Aula 3: Cosmologia e a Teia dos Orixás",
    category: "TRILHA II: O TRONCO",
    description: "O entendimento dos Orixás como fluxos contínuos de energia natural interligados numa grande rede vibracional.",
    duration: "50 min",
    instructor: "Babá Felipe",
    date: "08 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Intermediário",
    tags: ["Fundamento", "Cosmologia"]
  },
  {
    id: "les-t2-4",
    title: "Sub-Aula 4: O Mistério Cósmico do Xirê",
    category: "TRILHA II: O TRONCO",
    description: "A roda sagrada e a dança circular que rege a evolução da matéria através dos 4 elementos fundamentais e as suas 16 divindades.",
    duration: "48 min",
    instructor: "Babá Felipe",
    date: "12 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Intermediário",
    tags: ["Fundamento", "Xirê"]
  },
  {
    id: "les-t2-5",
    title: "Sub-Aula 5: As Sete Energias Arquetípicas no TUCPB",
    category: "TRILHA II: O TRONCO",
    description: "A aplicação litúrgica das forças volitivas: Primerva, Mental, Etérica, Eólica, Ígnea, Hídrica e Telúrica.",
    duration: "65 min",
    instructor: "Babá Felipe",
    date: "15 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado",
    tags: ["Fundamento", "Arquetípica"]
  },

  // TRILHA III: A COPA
  {
    id: "les-t3-1",
    title: "Sub-Aula 1: A Lei do Sacrifício (Ebó) e as Trocas Energéticas",
    category: "TRILHA III: A COPA",
    description: "O segredo litúrgico das trocas e a manipulação do sangue animal (vermelho), mineral (branco) e vegetal (sangue verde das folhas).",
    duration: "50 min",
    instructor: "Babá Felipe",
    date: "20 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Intermediário",
    tags: ["Fundamento", "Ebó"]
  },
  {
    id: "les-t3-2",
    title: "Sub-Aula 2: Classificação e Propósito dos Ebós",
    category: "TRILHA III: A COPA",
    description: "Estruturação e aplicação prática de rituais com finalidade Preventiva, Atrativa, Curativa e de Agradecimento.",
    duration: "45 min",
    instructor: "Babá Felipe",
    date: "23 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Intermediário",
    tags: ["Fundamento", "Prática"]
  },
  {
    id: "les-t3-3",
    title: "Sub-Aula 3: Anatomia do Ebó no Tempo, Espaço e Corpo",
    category: "TRILHA III: A COPA",
    description: "O impacto das fases do dia (alvorada, sol, noite), os locais sagrados de despacho e o magnetismo gerado ao tocar partes específicas do corpo.",
    duration: "60 min",
    instructor: "Babá Felipe",
    date: "27 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado",
    tags: ["Fundamento", "Tempo/Espaço"]
  },
  {
    id: "les-t3-4",
    title: "Sub-Aula 4: Interrogando os Deuses (Obi e Orobo)",
    category: "TRILHA III: A COPA",
    description: "O uso litúrgico das sementes sagradas como canais de comunicação, instrução e confirmação dos trabalhos.",
    duration: "55 min",
    instructor: "Babá Felipe",
    date: "30 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado",
    tags: ["Fundamento", "Oráculo"]
  },
  {
    id: "les-t3-5",
    title: "Sub-Aula 5: Rituais de Firmeza e Defesa de Exu e Ogum",
    category: "TRILHA III: A COPA",
    description: "Execução prática de assentamentos, o mistério das pedras Iyangi, o uso protetor do Mariwô e rituais contra demandas e infortúnios.",
    duration: "70 min",
    instructor: "Babá Felipe",
    date: "02 de Agosto de 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    level: "Avançado",
    tags: ["Fundamento", "Defesa"]
  }
];

export const initialHerbs: Herb[] = [
  // GRUPO 1: OÒGÚN (PARA CURAR E ACALMAR)
  { id: "h1", name: "Colônia", scientificName: "Alpinia zerumbet", orixa: "Oxum e Iemanjá", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "COLO / Acalantar", ritualUse: "O 'Colo de Mãe'. Acalma crises de ansiedade, pânico e histeria.", ofo: '\"Cheiro de Colônia, me dê seu Colo. Acalma a alma, tira o desconsolo. No teu braço eu encontro a paz, A dor de ontem não volta mais.\"', tags: ["Fria", "Feminina"] },
  { id: "h2", name: "Boldo / Tapete de Oxalá", scientificName: "Plectranthus barbatus", orixa: "Oxalá", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "TAPAR (Cobrir) / Macio", ritualUse: "Amortecer choques espirituais. Conectar com o Alto. Limpar a mente (Ori) de pensamentos ruins.", ofo: '\"Tapete de Oxalá, venha me cobrir. Tapa a tristeza, me faz subir. Pisar macio, sentir o chão, Traz o silêncio pro meu coração.\"', tags: ["Fria", "Masculina"] },
  { id: "h3", name: "Manjericão", scientificName: "Ocimum basilicum", orixa: "Oxalá e Oxum", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "MÃO (Toque) / Majestade", ritualUse: "Recompor a aura furada. Tirar o 'baixo astral' sem dar sono. É a erva coringa que corrige qualquer excesso.", ofo: '\"Manjericão que alegra o coração. Tira o peso com tua mão. Limpa a mente, cura a emoção, Deixa leve a minha oração.\"', tags: ["Fria", "Feminina"] },
  { id: "h4", name: "Macaça / Catinga de Mulata", scientificName: "Aeollanthus suaveolens", orixa: "Oxum e Iemanjá", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "AMANSAR / CAÇA (Caçar a paz)", ritualUse: "Erva essencial de Amaci. Tem um perfume que 'amansa' o Santo e traz presença de espírito.", ofo: '\"Macaça cheirosa, amansa a dor. Traz a doçura do meu amor. Prepara a cabeça, prepara o congá, Para o meu Santo poder chegar.\"', tags: ["Fria", "Feminina"] },
  { id: "h5", name: "Alfazema", scientificName: "Lavandula", orixa: "Iemanjá e Oxalá", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "ZELAR / FAZER (Paz)", ritualUse: "A 'Faxina da Alma'. Limpa sem agredir. Harmoniza brigas em casa.", ofo: '\"Alfazema de cheiro, vem zelar. Onde houve briga, tu vais acalmar. Onde houve ódio, tu vais perfumar. Faz a paz neste lar reinar.\"', tags: ["Fria", "Feminina"] },
  { id: "h6", name: "Erva Cidreira / Melissa", scientificName: "Melissa officinalis", orixa: "Oxum", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "CEDER (Relaxar/Entregar)", ritualUse: "Para quem é controlador, tenso e não consegue dormir. Ajuda a 'ceder' ao sono e à incorporação.", ofo: '\"Erva Cidreira, a dor me cede. O medo cede, a insônia cede. Acalma o nervo, amansa a fera, Traz a doçura da primavera.\"', tags: ["Fria", "Feminina"] },
  { id: "h7", name: "Camomila", scientificName: "Matricaria chamomilla", orixa: "Oxum (Ouro) e Caboclas", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "CAMA (Repouso) / MIL (Abundância suave)", ritualUse: "'Cama de Luz'. Acalma crianças agitadas e cura o estômago (o centro das emoções).", ofo: '\"Camomila, prepara a minha cama. Onde a dor queima e a raiva inflama, Tu trazes o mel, tu trazes a calma. Cura o corpo e niná a alma.\"', tags: ["Fria", "Feminina"] },
  { id: "h8", name: "Goiaba", scientificName: "Psidium guajava", orixa: "Obaluaiê e Pretos Velhos", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "GUARDAR / AGARRAR (Segurar)", ritualUse: "Estancar vazamentos de energia. Fecha o corpo contra vampirismo e firma a saúde.", ofo: '\"Folha de Goiaba que sabe prender. Não deixa minha força desaparecer. Guarda meu corpo, fecha a porteira. Cura a doença e a canseira.\"', tags: ["Fria", "Feminina"] },
  { id: "h9", name: "Babosa", scientificName: "Aloe vera", orixa: "Obaluaiê e Oxum", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "BABAR (Besuntar) / ACABAR", ritualUse: "Regeneração completa. Onde a aura está 'queimada', o gel cria uma segunda pele.", ofo: '\"Babosa santa, solta a tua Baba. Onde tu tocas, a ferida acaba. Besunta minha alma, fecha a lesão. Traz a cura com a tua unção.\"', tags: ["Fria", "Feminina"] },
  { id: "h10", name: "Hortelã / Hortelã-Pimenta", scientificName: "Mentha sp.", orixa: "Oxum e Ibeji", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "ALENTAR / CLAREAR", ritualUse: "Tira o cansaço mental. Refresca, mas deixa a pessoa 'ligada' e focada. Também atrai sorte.", ofo: '\"Hortelã verde, cheiro de manhã. Venha meu espírito Alentar. Refresca a cabeça, faz o ar entrar. Tira o calor, pro meu Ori brilhar.\"', tags: ["Fria", "Feminina"] },

  // GRUPO 2: ÀWÚRE (PARA PROSPERAR E BRILHAR)
  { id: "h11", name: "Alecrim", scientificName: "Rosmarinus officinalis", orixa: "Oxalá (Solar) e Caboclos", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "ALEGRIA / Criar", ritualUse: "Antidepressivo. Tira a apatia e acorda a alma.", ofo: '\"Alecrim dourado, sol do jardim. Traga a Alegria e o Ouro pra mim. Tristeza vai embora, a porta se abriu, A sorte na vida agora sorriu.\"', tags: ["Quente", "Masculina"] },
  { id: "h12", name: "Mirra", scientificName: "Commiphora myrrha", orixa: "Oxalá e Pretos Velhos", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "MIRAR (Elevar)", ritualUse: "Sobe a frequência vibratória. Conecta com planos superiores.", ofo: '\"Defumo com Mirra para o alto mirar. Que meus olhos possam a luz enxergar. Mira a verdade, mira o além, Traga do céu todo o bem.\"', tags: ["Quente", "Feminina"] },
  { id: "h13", name: "Folha da Fortuna", scientificName: "Kalanchoe pinnata", orixa: "Orixás da Riqueza / Oxum", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "AFORTUNAR / Tornar", ritualUse: "O 'Efó' da riqueza. Fazer o dinheiro render. Fertilidade de projetos.", ofo: '\"Folha da Fortuna, faça a roda girar. Que o pouco se torne muito a somar. Onde tu brotas, a terra é boa, Traz a fortuna que me abençoa.\"', tags: ["Fria", "Feminina"] },
  { id: "h14", name: "Pèrègún (Dracena) / Peregum Verde", scientificName: "Dracaena fragrans", orixa: "Ogum e Oxóssi", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "PEREGRINAR (Caminhar)", ritualUse: "Emblema de renovação vital e força curadora. Abrir estradas e ajudar a achar o rumo profissional.", ofo: '\"Senhor Peregum, rei do caminho. Eu peregrino e não estou sozinho. Abre a mata para eu passar, Leva meu passo ao meu Orixá.\"', tags: ["Fria", "Masculina"] },
  { id: "h15", name: "Louro", scientificName: "Laurus nobilis", orixa: "Xangô e Ciganos", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "LOUVAR / OURO", ritualUse: "Vitória em disputas, atrair dinheiro, sucesso público.", ofo: '\"Folha de Louro vale Ouro. Traz para mim o teu tesouro. Eu hei de vencer, eu hei de ser louvado. Com a coroa do Rei, eu sou coroado.\"', tags: ["Quente", "Masculina"] },
  { id: "h16", name: "Anis Estrelado", scientificName: "Illicium verum", orixa: "Oxum e Ciganos", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "ANINHAR / ESTRELA", ritualUse: "Potencializa a intuição e o magnetismo pessoal. Torna a pessoa atraente.", ofo: '\"Estrela de cheiro, vem me iluminar. Minha intuição tu vais despertar. Traz o encanto, traz o chamariz, Me faz brilhar e me faz feliz.\"', tags: ["Quente", "Feminina"] },
  { id: "h17", name: "Canela", scientificName: "Cinnamomum verum", orixa: "Orixás do Amor e Ciganos", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "ENCANAR / ELAS", ritualUse: "'O Canal'. Aumenta libido e calor. Tira a frieza da vida.", ofo: '\"Canela fina, cheiro de amor. Encana a sorte, espanta a dor. Traz o dinheiro, traz o calor. Acende a vida com teu sabor.\"', tags: ["Quente", "Feminina"] },
  { id: "h18", name: "Girassol", scientificName: "Helianthus annuus", orixa: "Oxum e Oxalá", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "GIRAR", ritualUse: "Mudar a sorte. Combate a timidez e o isolamento.", ofo: '\"Gira, gira, Girassol. Vira meu rosto para o Sol. A sombra fica atrás, a luz vem na frente. Gira a sorte da minha gente.\"', tags: ["Quente", "Feminina"] },
  { id: "h19", name: "Laranja", scientificName: "Citrus sinensis", orixa: "Oxum e Oxalá", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "ARRANJAR", ritualUse: "Adoçar a vida e facilitar conquistas. Traz recursos.", ofo: '\"Laranja doce, fruto dourado. Traz o recurso que me foi negado. Arranja amor, arranja cliente. Deixa a minha vida contente.\"', tags: ["Quente", "Feminina"] },
  { id: "h20", name: "Gengibre", scientificName: "Zingiber officinale", orixa: "Xangô e Iansã", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "VIBRAR / GERAR", ritualUse: "Esquenta relacionamentos, dá coragem e 'solta a voz'.", ofo: '\"Raiz de fogo, eu te faço chamar. Gengibre forte, faz a vida Vibrar. Aquece o sangue, Gera o calor. Traz o dinheiro e o fogo do amor.\"', tags: ["Quente", "Masculina"] },

  // GRUPO 3: IDÁÀBÒBÒ (PARA LIMPAR E PROTEGER)
  { id: "h21", name: "Arruda", scientificName: "Ruta graveolens", orixa: "Pretos Velhos e Exu", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "ARRUMAR / Rude", ritualUse: "Desintegrar a inveja. Limpeza pesada de ambientes e auras.", ofo: '\"Arruda forte, venha arrumar. O que está torto, tu vais endireitar. Seja rude com o mal, seja forte na lida, Arruma a minha casa e a minha vida.\"', tags: ["Quente", "Feminina"] },
  { id: "h22", name: "Guiné", scientificName: "Petiveria alliacea", orixa: "Oxóssi e Exu", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "GUIAR / Seguir", ritualUse: "'Corta-Inveja'. Bloquear vibrações negativas de pessoas baixas.", ofo: '\"Quem tem Guiné, tem quem o Guie. Guia meus passos longe da dor. Corta a inveja, corta o medo, Onde eu não enxergo, a Guiné é meu segredo.\"', tags: ["Quente", "Masculina"] },
  { id: "h23", name: "Cravo da Índia", scientificName: "Syzygium aromaticum", orixa: "Obaluaiê e Pretos Velhos", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "CRAVAR / TRAVAR", ritualUse: "Limpeza profunda da aura (bactericida astral). Remove miasmas de doença.", ofo: '\"Cravo forte, prego de santo. Tira a doença, desmancha o encanto. Limpa a aura, crava a defesa. Traz a saúde e a firmeza.\"', tags: ["Quente", "Masculina"] },
  { id: "h24", name: "Samambaia", scientificName: "Polypodiopsida", orixa: "Obaluaiê e Caboclos", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "SEMEAR / Espalhar", ritualUse: "Filtro astral. Colocada na porta ou no banho, ela 'chupa' a negatividade.", ofo: '\"Verde Samambaia, venha espalhar. Filtra o veneno que está no ar. Cresce em volta e faz barreira, Protege a casa e a vida inteira.\"', tags: ["Fria", "Feminina"] },
  { id: "h25", name: "Aroeira", scientificName: "Schinus terebinthifolia", orixa: "Exu e Ogum", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "ROER (Destruir)", ritualUse: "'O Trator'. Remove miasmas antigos e grudados na aura.", ofo: '\"Aroeira de tronco forte. Muda o rumo da minha sorte. O mal que gruda, tu hás de roer. A coisa ruim não vai sobreviver.\"', tags: ["Quente", "Masculina"] },
  { id: "h26", name: "Vassourinha de Relógio / Igreja", scientificName: "Sida carpinifolia", orixa: "Iansã e Oxum", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "VARRER", ritualUse: "Sacudimento. Tirar a 'poeira' do dia a dia.", ofo: '\"Vassourinha verde, começa a varrer. Tira a sujeira pra eu não sofrer. Varre a inveja pra fora da porta. O que foi ruim, agora não importa.\"', tags: ["Quente", "Feminina"] },
  { id: "h27", name: "Pitanga", scientificName: "Eugenia uniflora", orixa: "Iansã e Exu", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "TANGAR (Mover)", ritualUse: "Colocar a vida em movimento. Direcionar os caminhos.", ofo: '\"Folha de Pitanga que sabe o caminho. Não me deixe andar sozinho. Tange o meu gado, tange a minha vida. Mostra a estrada, mostra a saída.\"', tags: ["Quente", "Feminina"] },
  { id: "h28", name: "Limão", scientificName: "Citrus limon", orixa: "Exu e Iansã", grupo: "IDÁÀBÒBÒ (Limpeza e Proteção)", verboAtuante: "LIMAR / LIMPAR", ritualUse: "Cortar a 'gordura' astral. Dissolve energias pegajosas.", ofo: '\"Limão azedo, ácido santo. Corta a gordura, desfaz o encanto. O que é áspero, tu vais Limar. O que está sujo, tu vais Limpar.\"', tags: ["Quente", "Masculina"] },

  // GRUPO 4: ÌṢẸ́GUN (JUSTIÇA E CORTE)
  { id: "h29", name: "Espada de São Jorge", scientificName: "Sansevieria trifasciata", orixa: "Ogum", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "GUERREAR / Cortar", ritualUse: "A arma absoluta. Cortar cordões energéticos ruins.", ofo: '\"Tua folha é Espada, teu nome é Lei. Corta a demanda que eu não criei. Aço divino, ferro sagrado, Com tua ponta, estou guardado.\"', tags: ["Quente", "Masculina"] },
  { id: "h30", name: "Dandá da Costa", scientificName: "Cyperus rotundus", orixa: "Exu e Ogum", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "DAR (Bater) / ANDA", ritualUse: "Raiz poderosa para quebrar feitiços enterrados e demandas antigas.", ofo: '\"Raiz de Dandá, rainha da terra. Vence o feitiço, vence a guerra. O mal que mandaram, tu vais quebrar. Faz minha vida voltar a andar.\"', tags: ["Quente", "Feminina"] },
  { id: "h31", name: "Pinhão Roxo", scientificName: "Jatropha gossypiifolia", orixa: "Exu e Xangô", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "OPINHAR (Fincar pé) / Não", ritualUse: "Expulsar obsessores (Egun). Criar campo de força.", ofo: '\"Pinhão Roxo, forte como um pinhão. Ao mal que vier, tu dizes NÃO. Finca tua raiz, segura o chão, Quebra a demanda e a maldição.\"', tags: ["Quente", "Masculina"] },
  { id: "h32", name: "Comigo-Ninguém-Pode", scientificName: "Dieffenbachia seguine", orixa: "Exu", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "PODER", ritualUse: "Defesa suprema. Anula a força do inimigo.", ofo: '\"É Comigo-Ninguém-Pode. E contra meus filhos, ninguém pode. Quem tentar o mal, a força sacode, Pois com a tua magia, a gente tudo pode.\"', tags: ["Quente", "Feminina"] },
  { id: "h33", name: "Mamona", scientificName: "Ricinus communis", orixa: "Exu e Obaluaiê", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "MÃO (Tapa)", ritualUse: "Choque de retorno. Paralisar ações malignas.", ofo: '\"Mamona aberta é mão de defesa. Segura o golpe com tua firmeza. Devolve pra terra o que veio do chão, Para o inimigo com a tua mão.\"', tags: ["Quente", "Feminina"] },
  { id: "h34", name: "Quebra-Pedra", scientificName: "Phyllanthus niruri", orixa: "Xangô e Egunitá", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "QUEBRAR", ritualUse: "Destruir situações 'petrificadas' (dívidas, ódio).", ofo: '\"Erva valente, eu venho te usar. A pedra dura, tu vais quebrar. A doença dura, tu vais quebrar. O caminho fechado, tu vais quebrar.\"', tags: ["Quente", "Masculina"] },
  { id: "h35", name: "Peregum Roxo", scientificName: "Dracaena fragrans", orixa: "Iansã e Egun", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "PEREGRINAR (Mandar embora)", ritualUse: "Encaminhar espíritos mortos (Eguns). Cortar magia negra.", ofo: '\"Peregum Roxo da cor do mistério. Quem não é de luz, leve pro cemitério. Faça o mal peregrinar pra longe. Limpa minha alma, protege meu sangue.\"', tags: ["Quente", "Masculina"] },
  { id: "h36", name: "Desata-Nó", scientificName: "Polygonum sp.", orixa: "Exu e Ogum", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "DESATAR", ritualUse: "Resolver problemas burocráticos e amarrações.", ofo: '\"Erva sagrada de Desata-Nó. Não me deixe na vida só. O nó que amarraram, tu vais desatar. A corda que prende, tu vais estourar.\"', tags: ["Quente", "Masculina"] },
  { id: "h37", name: "Vence-Demanda", scientificName: "Justicia gendarussa", orixa: "Ogum", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "VENCER", ritualUse: "Vitória absoluta contra quem te ataca.", ofo: '\"Vence-Demanda, tu vens pra vencer. Quem está contra mim, há de perder. Ganho a batalha, ganho a guerra. Com a tua força, aqui nessa terra.\"', tags: ["Quente", "Masculina"] },
  { id: "h38", name: "Pimenta", scientificName: "Capsicum", orixa: "Exu e Iansã", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "ARDER / Esquentar", ritualUse: "Acelerador. Queimar energias estagnadas.", ofo: '\"Pimenta vermelha, fogo que arde. Queima o inimigo, não seja covarde. Esquenta o sangue, esquenta o axé. Devolve a força pra quem tem fé.\"', tags: ["Quente", "Feminina"] },
  { id: "h39", name: "Mangueira", scientificName: "Mangifera indica", orixa: "Ogum e Ibeji", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "MANDAR / MANGA (de Espada)", ritualUse: "Autoridade máxima. Liderança e Justiça.", ofo: '\"Folha de Manga, lança do Rei. Eu assumo o comando, eu dito a lei. Onde eu pisar, eu vou Mandar. Onde tu apontas, a vitória há de estar.\"', tags: ["Quente", "Masculina"] },
  { id: "h40", name: "Bambu", scientificName: "Bambusa vulgaris", orixa: "Iansã e Egun", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "BAMBEAR (Tornar frouxo)", ritualUse: "Guerra estratégica. Tirar estabilidade do inimigo.", ofo: '\"Bambu que balança e não cai no chão. Balança o inimigo, tira a visão. Faz o mal Bambear, faz a terra tremer. Só a justiça de Iansã vai valer.\"', tags: ["Quente", "Masculina"] },

  // Extensões da lista anterior (que também são fundamentais)
  { id: "h41", name: "Vitória-Régia", scientificName: "Victoria amazonica", orixa: "Oxum", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "TRIUNFAR", ritualUse: "As folhas funcionam como um poderoso ímã para o triunfo e a superação. A sua energia uterina acolhe e purifica as dores da alma.", ofo: "", tags: ["Fria", "Feminina"] },
  { id: "h42", name: "Flor de Lótus", scientificName: "Nelumbo nucifera", orixa: "Oxum", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "PACIFICAR", ritualUse: "Forte aliado contra adversários. Quando em união mágica com a vitória-régia, combate maldições, infortúnios e hostilidades, trazendo a paz.", ofo: "", tags: ["Fria", "Feminina"] },
  { id: "h43", name: "Folha de Bananeira", scientificName: "Musa", orixa: "Oxalá e Omolu", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "ROMPER", ritualUse: "Instrumento litúrgico fundamental para romper laços com energias negativas. Permite a recuperação imediata e o fortalecimento astral.", ofo: "", tags: ["Fria", "Feminina"] },
  { id: "h44", name: "Folha da Costa (Ewé Iyeyé)", scientificName: "Spondias mombin", orixa: "Oxalá", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "CONCRETIZAR", ritualUse: "A folha da costa possui uma força transformadora única e silenciosa, sendo essencial para concretizar desejos.", ofo: "", tags: ["Fria", "Feminina"] },
  { id: "h45", name: "Caruru (Bredo)", scientificName: "Amaranthus viridis", orixa: "Oxalá e Xangô", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "PROTEGER", ritualUse: "Atua como um verdadeiro escudo contra-ataques astrais. Promove a saúde, a autenticidade e a prosperidade.", ofo: "", tags: ["Fria", "Feminina"] },
  { id: "h46", name: "Folha de Batata-Doce", scientificName: "Ipomoea batatas", orixa: "Oxumaré", grupo: "OÒGÚN (Cura e Paz)", verboAtuante: "ACALMAR", ritualUse: "Com o seu formato de coração, é sinônimo de contentamento e bem-estar. Traz alegria, suavidade e acalma o Ori.", ofo: "", tags: ["Fria", "Feminina"] },
  { id: "h47", name: "Inhame (Folha e Raiz)", scientificName: "Dioscorea sp.", orixa: "Oxalá e Ogum", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "RENOVAR", ritualUse: "Elemento de força vital intensa. É um poderoso atrativo para o progresso, a sustentação e a renovação material.", ofo: "", tags: ["Quente", "Masculina"] },
  { id: "h48", name: "Mariwô (Folha de Dendezeiro)", scientificName: "Elaeis guineensis", orixa: "Ogum", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "REPELIR", ritualUse: "Folha sagrada que veste Ogum. Usada desfiada para repelir espíritos perturbadores e afastar o mal.", ofo: "", tags: ["Quente", "Masculina"] },
  { id: "h49", name: "Abre-Caminho", scientificName: "Justicia gendarussa", orixa: "Ogum", grupo: "ÀWÚRE (Prosperidade)", verboAtuante: "ABRIR", ritualUse: "Remove obstáculos, propiciando vitórias, progresso e a abertura de novas oportunidades.", ofo: "", tags: ["Quente", "Masculina"] },
  { id: "h50", name: "Folha de Fogo", scientificName: "Clidemia hirta", orixa: "Exu", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "QUEIMAR", ritualUse: "Erva excitatória de Exu. Queima energias estagnadas e traz o movimento rápido e a transformação para a vida.", ofo: "", tags: ["Quente", "Masculina"] },
  { id: "h51", name: "Urtiga", scientificName: "Urtica dioica", orixa: "Exu", grupo: "ÌṢẸ́GUN (Combate e Justiça)", verboAtuante: "DESTRUIR", ritualUse: "Erva de Exu, de natureza agressiva e excitatória. Usada para destruir negatividades densas e afastar energias contrárias.", ofo: "", tags: ["Quente", "Masculina"] }
];

export const girasDeCura: GiraEvent[] = [
  { id: "cura-1", date: "Segunda (06/07)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-2", date: "Segunda (13/07)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-3", date: "Segunda (20/07)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-4", date: "Segunda (27/07)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-5", date: "Segunda (03/08)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-6", date: "Segunda (10/08)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-7", date: "Segunda (17/08)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-8", date: "Segunda (24/08)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-9", date: "Segunda (31/08)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-10", date: "Segunda (14/09)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento normal. (07/09 é Feriado Nacional - Independência, não haverá gira).", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-11", date: "Segunda (21/09)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-12", date: "Segunda (28/09)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-13", date: "Segunda (05/10)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-14", date: "Segunda (19/10)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento normal. (12/10 é Feriado Nacional - N. Sra. Aparecida, não haverá gira).", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-15", date: "Segunda (26/10)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-16", date: "Segunda (09/11)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento normal. (02/11 é Feriado Nacional - Finados, não haverá gira).", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-17", date: "Segunda (16/11)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento normal. (15/11 é Feriado Nacional, gira mantida no dia 16).", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-18", date: "Segunda (23/11)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-19", date: "Segunda (30/11)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-20", date: "Segunda (07/12)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "A Confirmar" },
  { id: "cura-21", date: "Segunda (14/12)", title: "Encerramento das Giras de Cura", time: "19:00", description: "Última Gira de Cura do ano.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "Confirmada" }
];

export const initialGiras: GiraEvent[] = [
  {
    id: "gir-1",
    title: "Gira de Marinheiro/Boiadeiro",
    date: "Sábado (27/06)",
    time: "19:00",
    orixaGuide: "Marinheiro / Boiadeiro",
    description: "Gira de atendimento e desenvolvimento com as linhas de Marinheiros e Boiadeiros.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-2",
    title: "Gira de Caboclo/Baiano",
    date: "Sábado (11/07)",
    time: "19:00",
    orixaGuide: "Caboclo / Baiano",
    description: "Atenção: A gira poderá ser cancelada caso o Brasil passe para as quartas de final da Copa. Aguardando confirmação.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "A Confirmar"
  },
  {
    id: "gir-3",
    title: "Festa Exu Mirim",
    date: "Sábado (25/07)",
    time: "19:00",
    orixaGuide: "Exu Mirim",
    description: "Festa em homenagem à linha de Exu Mirim.",
    hasConsultation: false,
    status: "Especial"
  },
  {
    id: "gir-3-5",
    title: "Gira de Malandragem",
    date: "Sábado (08/08)",
    time: "19:00",
    orixaGuide: "Malandros",
    description: "Gira de atendimento com a linha dos Malandros.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-4",
    title: "Festa Exu Lucifer",
    date: "Sábado (22/08)",
    time: "19:00",
    orixaGuide: "Exu Lucifer",
    description: "Grande festividade em homenagem ao nosso guardião Exu Lucifer. Uma noite de muita força, respeito e gratidão à esquerda na lei, com trabalhos de firmeza e encanto (Festa remanejada do dia 08/08).",
    hasConsultation: false,
    status: "Especial"
  },
  {
    id: "gir-5",
    title: "Gira de Caboclo/Boiadeiro",
    date: "Sábado (05/09)",
    time: "19:00",
    orixaGuide: "Caboclo / Boiadeiro",
    description: "Substituindo Exu/Pombogira. Atendimento com Caboclos e Boiadeiros.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-6",
    title: "Festa Erês",
    date: "Sábado (19/09)",
    time: "19:00",
    orixaGuide: "Erês / Ibejada",
    description: "Festa em homenagem às Crianças (Erês).",
    hasConsultation: false,
    status: "Especial"
  },
  {
    id: "gir-7",
    title: "Gira P. Velho/Marinheiro",
    date: "Sábado (03/10)",
    time: "19:00",
    orixaGuide: "Preto Velho / Marinheiro",
    description: "Atendimento com as linhas de Pretos Velhos e Marinheiros.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-8",
    title: "Gira Baiano/Malandro",
    date: "Sábado (17/10)",
    time: "19:00",
    orixaGuide: "Baiano / Malandro",
    description: "Atendimento com as linhas de Baianos e Malandros.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-9",
    title: "Gira Exus Finados",
    date: "Sábado (31/10)",
    time: "19:00",
    orixaGuide: "Exu / Pombagira",
    description: "Gira de esquerda em respeito aos Finados. Limpeza e descarrego.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-10",
    title: "Festa Caboclo P. Branca",
    date: "Sábado (14/11)",
    time: "19:00",
    orixaGuide: "Caboclo Pena Branca",
    description: "Festa em homenagem ao patrono do nosso Templo, Caboclo Pena Branca.",
    hasConsultation: false,
    status: "Especial"
  },
  {
    id: "gir-11",
    title: "Gira P. Velho Encerramento",
    date: "Sábado (28/11)",
    time: "19:00",
    orixaGuide: "Preto Velho",
    description: "Gira de encerramento do ano de atendimentos com os Pretos Velhos.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
  },
  {
    id: "gir-12",
    title: "Festa Zé Pelintra",
    date: "Sábado (12/12)",
    time: "19:00",
    orixaGuide: "Zé Pelintra / Malandros",
    description: "Festa de encerramento com Seu Zé Pelintra.",
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

export const initialPlaylists: CurimbaPlaylist[] = [
  { id: "pl-1", title: "Playlist de Caboclo", guideOrOrixa: "Caboclo", youtubeUrl: "https://www.youtube.com/watch?v=7D6ZM7hu2D8&list=PLlOqOVuQSG_aDjUJjsKXEa_00fmGKIAlZ&pp=gAQB" },
  { id: "pl-2", title: "Playlist de Exu", guideOrOrixa: "Exu", youtubeUrl: "https://www.youtube.com/watch?v=rP4JZf4ZEx0&list=PLlOqOVuQSG_ZSxqokwts3l04GMaZKF-vi&pp=gAQB" },
  { id: "pl-3", title: "Playlist de Pomba Gira", guideOrOrixa: "Pomba Gira", youtubeUrl: "https://www.youtube.com/watch?v=MI4FaYSeh1c&list=PLTMKTJl-SqinZMiZXfxuA4ZvKYHjzVXZg" },
  { id: "pl-4", title: "Playlist de Preto Velho", guideOrOrixa: "Preto Velho", youtubeUrl: "https://www.youtube.com/watch?v=NAXWtSNEoek&list=PLlOqOVuQSG_bGJfiz05AjD_wVceKNWir0&pp=gAQB" },
  { id: "pl-5", title: "Playlist de Ogum", guideOrOrixa: "Ogum", youtubeUrl: "https://www.youtube.com/watch?v=Cso8EuMb1Sc&list=PLTMKTJl-SqimobhNrpFX-sTfWLS3fnl8l&pp=0gcJCbAEOCosWNin" },
  { id: "pl-6", title: "Playlist de Boiadeiro", guideOrOrixa: "Boiadeiro", youtubeUrl: "https://www.youtube.com/watch?v=QH25xWNcsO4&list=PLlOqOVuQSG_araJcq-7n6mNtAGkgvwDkS&pp=gAQB0gcJCbAEOCosWNin" },
  { id: "pl-7", title: "Playlist de Baiano", guideOrOrixa: "Baiano", youtubeUrl: "https://www.youtube.com/watch?v=TsGKIYZl4ms&list=PLlOqOVuQSG_ZLy2ze07ORZYy0vbIOMmAo&pp=gAQB0gcJCbAEOCosWNin" },
  { id: "pl-8", title: "Playlist de Cigano", guideOrOrixa: "Cigano", youtubeUrl: "https://www.youtube.com/watch?v=eKuFioj2xXg&list=PLjosQXRCphFvODse4oy56HDZ0u80TU0Aa" },
  { id: "pl-9", title: "Playlist de Erê", guideOrOrixa: "Erê", youtubeUrl: "https://www.youtube.com/watch?v=K2Bee2rKhgQ&list=PLlOqOVuQSG_bcE-Ag7XfusIuQVRnFQTDj&index=2" },
  { id: "pl-10", title: "Playlist de Marinheiro", guideOrOrixa: "Marinheiro", youtubeUrl: "https://www.youtube.com/watch?v=ufYxW_dtCMM&list=PLTMKTJl-Sqikzlb_Q-BStvkWvFQ4Yo7EP" },
  { id: "pl-11", title: "Playlist de Exu Mirim", guideOrOrixa: "Exu Mirim", youtubeUrl: "https://www.youtube.com/watch?v=lRIQAXyVS_o&list=PLTMKTJl-Sqim1CHjPA3rHS9pBJEvITfJU" },
  { id: "pl-12", title: "Playlist de Malandro", guideOrOrixa: "Malandro", youtubeUrl: "https://www.youtube.com/watch?v=L2d_1MN5DM0&list=PLlOqOVuQSG_YubKj_yOqiuBF-xAJPspi5&pp=gAQB" }
];

export const initialPoints: CurimbaPoint[] = [
  {
    id: "pnt-ogum-1",
    title: "Ponto de Ogum - Pisa na linha de umbanda",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "PISA NA LINHA DE UMBANDA QUE EU QUERO VER\nPISA NA LINHA DE UMBANDA QUE EU QUERO VER\nPISA NA LINHA DE UMBANDA QUE EU QUERO VER\nOGUM IARA\nOGUM MEGÊ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-2",
    title: "Ponto de Ogum - Ogum Iara e Ogum Megê",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "OGUM IARA\nOGUM MEGÊ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-3",
    title: "Ponto de Ogum - Valente guerreiro aqui chegou",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "VALENTE GUERREIRO\nAQUI CHEGOU\nVENCEDOR DE DEMANDAS\nMEU PROTETOR\n\nEM SUA TRAJETÓRIA\nMEU PAI LUTA CONTRA O MAL\nFOI NOS CAMPOS DE BATALHA\nQUE SE TORNOU GENERAL\n\nSALVE OGUM DE RONDA\nSALVE OGUM MEGÊ\nSALVE SEU BEIRA-MAR\nOGUM IARA E OGUM DILÊ\n\nSALVE TODAS FALANGES\nDESSE GLORIOSO GUERREIRO\nQUE VENCE TODAS DEMANDAS\nAQUI DENTRO DO TERREIRO",
    youtubeUrl: "https://www.youtube.com/watch?v=x_9AMAQ9Y4k",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-4",
    title: "Ponto de Ogum - Eu não seria nada se não fosse Ogum",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "[refrão]\nEU NÃO SERIA NADA\nSE NÃO FOSSE OGUM\nPARA ABRIR\nA MINHA ESTRADA [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=s5Uu09J75d8",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-5",
    title: "Ponto de Ogum - Beira-Mar, auê Beira-Mar",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "BEIRA-MAR, AUÊ BEIRA-MAR\nBEIRA-MAR, AUÊ BEIRA-MAR\nBEIRA-MAR, AUÊ BEIRA-MAR\nBEIRA-MAR, AUÊ BEIRA-MAR",
    youtubeUrl: "https://www.youtube.com/watch?v=S2n_6s7Wq5o",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-6",
    title: "Ponto de Ogum - Ogum já jurou bandeira",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "OGUM JÁ JUROU BANDEIRA\nNOS CAMPOS DO HUMAITÁ\nOGUM JÁ VENCEU DEMANDA\nVAMOS TODOS SARAVÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=GieA4Wbfuk0",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-7",
    title: "Ponto de Ogum - Ele venceu a guerra",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "ELE VENCEU A GUERRA\nELE TOCOU CLARIM [2X]\nELE JUROU JUSTIÇA\nELE LUTOU POR MIM\n\n[refrão]\nSÃO DOIS IRMÃOS\nNA MADRUGADA\nSEU OGUM BEIRAMAR E SEU OGUM MATINATA",
    youtubeUrl: "https://www.youtube.com/watch?v=GieA4Wbfuk0",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-8",
    title: "Ponto de Ogum - Beiramar, beirando a areia",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "BEIRAMAR, BEIRANDO A AREIA, SEU\nBEIRAMAR É FILHO DA MAMÃE SEREIA! (X2).\n\nA SUA ESPADA BRILHA NO RAIAR DO DIA,\nSEU BEIRAMAR É FILHO DA VIRGEM MARIA (X2).",
    youtubeUrl: "https://www.youtube.com/watch?v=S2n_6s7Wq5o"
  },
  {
    id: "pnt-ogum-9",
    title: "Ponto de Ogum - Beira rio, Beira mar",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "Beira rio, Beira rio Beira mar o que se ganha\nde Ogum Só Ogum pode tirar (2x) Seu Ogum\nde ronda é quem vem girar Vem trazendo\nfolhas para descarregar (2x)",
    youtubeUrl: "https://www.youtube.com/watch?v=S2n_6s7Wq5o"
  },
  {
    id: "pnt-ogum-10",
    title: "Ponto de Ogum - Estava na beira da praia",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "ESTAVA NA BEIRA DA PRAIA\nMAS QUANDO EU VI\nSETE ONDAS PASSAR [2X]\n\nABRE A PORTA OH GENTE\nQUE AÍ VEM OGUM",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc"
  },
  {
    id: "pnt-ogum-11",
    title: "Ponto de Ogum - Sua bandeira cobre os filhos de Jesus",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "OGUM EM SEU CAVALO CORRE\nE A SUA ESPADA RELUZ\n\n[refrão]\nOGUM, OGUM MEGÊ\nSUA BANDEIRA COBRE OS FILHOS DE JESUS ,\nOGUM IÊ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-ogum-12",
    title: "Ponto de Ogum - Ele vem remando",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "ELE VEM REMANDO\nELE VEM NAVEGANDO\nCOM A SUA CANOA\nQUANDO ELE CHEGA NA PRAIA\n\nA TERRA TODA CLAREIA\nELE É OGUM MATINATA\n\n[refrão]\nSEU MATINATA\nFIRMA SEU PONTO NA AREIA\nQUANDO ELE CHEGA NA PRAIA\nELE É OGUM DA SEREIA [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-13",
    title: "Ponto de Ogum - Senhor das estradas",
    guideOrOrixa: "Ogum",
    type: "Chamada",
    lyrics: "[refrão]\nOH OGUM\nOH OGUM IÊ\nOH OGUM\nOGUM XOROQUÊ\n\nMEU SENHOR DAS ESTRADAS\nOGUM IÊ\nABRA MEUS CAMINHOS\nOGUM IÊ\nMEU SENHOR DA PORTEIRA\nOGUM IÊ\nELE É MEU PAI OGUM XOROQUÊ",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-ogum-14",
    title: "Ponto de Ogum - Nos campos do Humaitá",
    guideOrOrixa: "Ogum",
    type: "Demanda",
    lyrics: "NOS CAMPOS DO HUMAITÁ\nOGUM GUERREOU E VENCEU [2X]\n\nGANHOU DIVISA DE GENERAL\nFOI SÃO JOSÉ E MARIA QUEM DEU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=ZJdFj0v_yD0",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-ogum-15",
    title: "Ponto de Ogum - Se meu pai é Ogum, vencedor de demandas",
    guideOrOrixa: "Ogum",
    type: "Demanda",
    lyrics: "E MEU PAI É OGUM\nVENCEDOR DE DEMANDAS\nELE VEM DE ARUANDA\nPRA SALVAR FILHOS DE UMBANDA\n\nOGUM, OGUM IARA\nOGUM, OGUM IARA\nSALVE OS CAMPOS DE BATALHA\nSALVE A SEREIA DO MAR\n\nOGUM, OGUM IARA\nSARAVÁ OGUM, OGUM IARA",
    youtubeUrl: "https://www.youtube.com/watch?v=GieA4Wbfuk0",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-16",
    title: "Ponto de Ogum - Saravá meu pai",
    guideOrOrixa: "Ogum",
    type: "Demanda",
    lyrics: "OH OGUM IÊ\nSARAVÁ MEU PAI VEM ME VALER [2X]\n\nOH LIVRAI-ME DA DOR, DA PESTE E DA GUERRA\nPROTEÇÃO MEU PAI PRA NOSSA TERRA [2X]\n\nJESSI, JESSI, JESSI É DE PATAKORI OGUM\nJESSI, JESSI, JESSI OGUM MEU PAI\nJESSI, JESSI, JESSI É DE PATAKORI OGUM\nQUEM É FILHO DE OGUM NÃO CAI [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-17",
    title: "Ponto de Ogum - Lanceiro de Oxalá",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "LANCEIRO\nLANCEIRO\nLANCEIRO DE OXALÁ [2X]\n\nBENDITO LOUVADO SEJA\nORA MEU DEUS\nA HORA QUE OGUM NASCEU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-ogum-18",
    title: "Ponto de Ogum - Na lua nova na Umbanda ele é Ogum",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "NA LUA NOVA NA UMBANDA ELE É OGUM\nNA LUA NOVA NA UMBANDA ELE É OGUM\n\nOGUM IÊ\nZAMBI ELE É OGUM\nOGUM IÊ\nZAMBI ELE É OGUM [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-19",
    title: "Ponto de Ogum - Mandei fazer um capacete de penas",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "MANDEI FAZER\nUM CAPACETE DE PENAS\nPARA USAR\nANTES DA ALVORADA\n\nVERMELHO E BRANCO\nVERDE E AZUL\nESSE CAPACETE\nTEM AS CORES DE OGUM [2X]\n\nDE OGUM MEGÊ\nDE OGUM MATINATA\nDE OGUM MEGÊ\nDE OGUM MATINATA\n\nQUANDO USO O CAPACETE\nOUÇO O TOQUE DA ALVORADA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ogum-20",
    title: "Ponto de Ogum - Ele é cavaleiro santo",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "ELE É CAVALEIRO SANTO\nSEU CAVALO É BRANCO\nELE É GENERAL\n\nÉ FORTE\nUSA ARMADURA\nELE É VALENTE\nLUTA CONTRA O MAL",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc"
  },
  {
    id: "pnt-ogum-21",
    title: "Ponto de Ogum - Ogum olha sua bandeira",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "OGUM OLHA SUA BANDEIRA\nÉ BRANCA, É VERDE, É ENCARNADA [2X]\n\nOGUM NOS CAMPOS DE BATALHA\nELE VENCEU A GUERRA\nSEM PERDER SOLDADOS [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-ogum-22",
    title: "Ponto de Ogum - Ogum me disse que dançar nagô é bom",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "OGUM ME DISSE\nQUE DANÇAR NAGÔ É BOM [2X]\n\nQUE DANÇAR NAGÔ É BOM\nQUE DANÇAR NAGÔ É BOM\nQUE DANÇAR NAGÔ É BOM\nQUE DANÇAR NAGÔ É BOM",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc"
  },
  {
    id: "pnt-ogum-23",
    title: "Ponto de Ogum - Bandeira linda de Ogum",
    guideOrOrixa: "Ogum",
    type: "Sustentação",
    lyrics: "BANDEIRA LINDA DE OGUM\nQUE ESTÁ IÇADA LÁ NO HUMAITÁ [2X]\n\nREPRESENTANDO GENERAL DE UMBANDA\nOGUM VENCEU DEMANDA LÁ NO HUMAITÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=MohqdGt0ZYc",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-ogum-24",
    title: "Ponto de Ogum - Selei, selei",
    guideOrOrixa: "Ogum",
    type: "Subida",
    lyrics: "SELEI SELEI\nMEU PAI OGUM JA VAI EMBORA\nSEU CAVALO SELEI [2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=vVj4xPqYn9w",
    rhythm: "Congo"
  },
  {
    id: "pnt-pdf-1",
    title: "EU DEFUMEI FOI COM AS ORDENS DE OXALÁ",
    guideOrOrixa: "Oxalá / Defumação",
    type: "Defumação",
    lyrics: `eu defumei, defumei\ncom as ordens de oxalá\neu defumei, defumei\ncom as ordens de oxalá\n\npra todo o mal\nque aqui se encontra\nohh leva para as ondas do mar [2x]`,
    rhythm: "Samba Cabula",
    youtubeUrl: "https://www.youtube.com/watch?v=7D6ZM7hu2D8" // Placeholder since it's from PDF without specific URL
  },
  {
    id: "pnt-pdf-2",
    title: "CABOCLO SAIU DA MACAIA",
    guideOrOrixa: "Caboclo",
    type: "Defumação",
    lyrics: `CABOCLO SAIU DA MACAIA\nCOM AS ERVAS DA JUREMA NA MÃO\n\nCABOCLO DEFUMOU TERREIRO\nDEFUMOU SEUS FILHOS\nA BANDA DEFUMOU\n\n[refrão]\nDEFUMA, CABOCLO DEFUMA\nCOM AS ERVAS DA JUREMA QUE VOCÊ SEMEOU\n[/refrão] 2X`,
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pdf-3",
    title: "SE O REI DA MATA É OXOSSI",
    guideOrOrixa: "Ogum",
    type: "Defumação",
    lyrics: `SE O REI DA MATA É OXOSSI\nREI DA PEDREIRA É XANGÔ [2x]\n\n[refrão]\nFOI FOI OGUM QUEM MANDOU\nFOI FOI OGUM QUEM MANDOU\nCOM AS ERVAS DA JUREMA\nEU FAZER DEFUMADOR\n[/refrão]`,
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pdf-4",
    title: "CHEIROU, COMO CHEIRA UMBANDA",
    guideOrOrixa: "Umbanda",
    type: "Defumação",
    lyrics: `CHEIROU, COMO CHEIRA UMBANDA...\nUMBANDA CHEIROU GUINÉ [2X]\n\nDEFUMA COM JESUS, MARIA E JOSÉ\nVAMOS DEFUMAR FILHOS DE FÉ. [2X]`
  },
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
  },
  {
    id: "pnt-pdf-5",
    title: "PONTO DE CABOCLO - OXALÁ MANDOU BUSCAR",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "[refrão]\nOXALÁ MANDOU\nELE MANDOU BUSCAR\nOS CABOCLOS DA JUREMA\nLÁ NO JUREMA\n[/refrão]\n\nPAI OXALÁ\nÉ REI DO MUNDO INTEIRO\nJÁ DEU ORDENS PRA JUREMA\nCHAMAR SEUS CAPANGUEIROS [2X]"
  },
  {
    id: "pnt-pdf-6",
    title: "BOIADEIRO - LINDO DIADEMA",
    guideOrOrixa: "Boiadeiro",
    type: "Chamada",
    lyrics: "1- EU VI A MATA SE ABRIR\nE UM GRANDE GUERREIRO PASSAR (2X)\nE ELE VEIO COM UM LINDO DIADEMA\nCHETRUÁ PARA O CABOCLO BOIADEIRO DA JUREMA (2X)\n\n2- QUE LAÇO É ESSE MEU IRMÃO\nQUE TRAZ NO PEITO?\nQUE LAÇO É ESSE MEU IRMÃO\nDO QUE ELE É FEITO? (2X)\n\nOI ESSA LAÇO MEU IRMÃO É CIPÓ\nFOI BOIADEIRO MEU IRMÃO QUE DEU O NÓ (2X)"
  },
  {
    id: "pnt-pdf-7",
    title: "PONTO DE IBEJADA - COCADINHA PRA DOIS",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "DOUM DOUM DOUM MEU SANTINHO\nELE É FILHO DE OXALÁ\nCRSIPIM CRISPINIANO ABRE A RODA\nDEIXA COSMINHO ENTRAR\n\nCOCADINHA PRA DOIS DOIS DOIS\nCOCADINHA PRA DOIS"
  },
  {
    id: "pnt-pdf-8",
    title: "PONTO DE MARIA PADILHA - CHOVEU NA CALUNGA",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "CHOVEU CHOVEU\nSÓ NA CALUNGA QUE NÃO CHOVEU\nCHOVEU CHOVEU\nSÓ NA CALUNGA QUE NÃO CHOVEU\n\nÉ QUE A DONA PADILHA DAS ALMAS\nPRESTA CONTA COM DEUS\nÉ QUE A DONA PADILHA DAS ALMAS\nPRESTA CONTA COM DEUS",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pdf-9",
    title: "PONTO DE EXÚ - DÁ UMA VOLTA LÁ FORA",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "EXÚ _________\nDÁ UMA VOLTA LÁ FORA [2X]\n\nQUEM FOR BOM, BOTA PRA DENTRO\nE QUEM NÃO FOR DEIXA LÁ FORA [2X]",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-boiadeiro-1",
    title: "Ponto de Boiadeiro - Eu vou chamar o povo do sertão",
    guideOrOrixa: "Boiadeiro",
    type: "Chamada",
    lyrics: "EU VOU CHAMAR,\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nO POVO DO SERTÃO EU VOU CHAMAR. [4 VEZES]\n\nEU VOU CHAMAR,\nSEU ZÉ DO LAÇO.\nPARA NESSE TERREIRO TRABALHAR. [2 VEZES]\n\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nO POVO DO SERTÃO EU VOU CHAMAR. [2 VEZES]\n\nEU VOU CHAMAR,\nJOÃO DA ALVORADA.\nPARA NESSE TERREIRO TRABALHAR. [2 VEZES]\n\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nO POVO DO SERTÃO EU VOU CHAMAR. [2 VEZES]\n\nEU VOU CHAMAR,\nMAJOR DO DIA.\nPARA NESSE TERREIRO TRABALHAR. [2 VEZES]\n\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nEU VOU CHAMAR,\nO POVO DO SERTÃO EU VOU CHAMAR. [2 VEZES]\n\nEU VOU CHAMAR,\nSEU ZÉ PILINTRA.\nPARA NESSE TERREIRO TRABALHAR. [2 VEZES]\n\nEU VOU CHAMAR,\nSEU ZÉ BAIANO.\nPARA NESSE TERREIRO TRABALHAR. [2 VEZES]\n\nEU VOU CHAMAR,\nTODOS OS MESTRES.\nPARA NESSE TERREIRO TRABALHAR. [2 VEZES]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-2",
    title: "Ponto de Boiadeiro - A minha boiada é de 31",
    guideOrOrixa: "Boiadeiro",
    type: "Chamada",
    lyrics: "A MINHA BOIADA É DE 31\nA MINHA BOIADA É DE 31\n\nEU JÁ CONTEI\nSÓ TRINTA\nESTÁ FALTANDO UM [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=dURPjTbbPaM",
    rhythm: "Congo"
  },
  {
    id: "pnt-boiadeiro-3",
    title: "Ponto de Boiadeiro - Morena cheguei",
    guideOrOrixa: "Boiadeiro",
    type: "Chamada",
    lyrics: "CHEGUEI MORENA, CHEGUEI\nCHEGUEI VOU FIRMAR AGORA\nFOI NO RONCAR DO TAMBOR QUE EU VIM\nSOU BOIADEIRO, CABOCLO DE SAMBANGOLA\n\nNÃO TENHO PAI NEM MÃE,\nNINGUÉM PRA REZAR POR MIM\nA MINHA MÃE É NOSSA SENHORA\nE O MEU PAI SENHOR DO BONFIM",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-4",
    title: "Ponto de Boiadeiro - Boiadeiro era menino",
    guideOrOrixa: "Boiadeiro",
    type: "Chamada",
    lyrics: "BOIADEIRO ERA MENINO\nBOIADEIRO ERA MENINO\nÉ ELE\nQUE TA COM A PALAVRA\n\nE A PALAVRA DVINA\nÉ DE NOSSA SENHORA [2X]\n\n[refrão]\nJETRUÊ , JETRUÊ, JETRUÁ [2x]\nCADÊ A CORDA DE LAÇAR MEU BOI\nCADÊ A CORDA DE MEU BOI LAÇAR\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-boiadeiro-5",
    title: "Ponto de Boiadeiro - Zé da Campina (Coração de Brasileiro)",
    guideOrOrixa: "Boiadeiro",
    type: "Chamada",
    lyrics: "NO MEIO DA SERRA, EU VI SEU BOIADEIRO.\nHOMEM FORTE E VALENTE, CORAÇÃO DE BRASILEIRO.\nHOMEM FORTE E VALENTE, CORAÇÃO DE BRASILEIRO.\n\nMONTADO EM SEU CAVALO, COM SEU LAÇO NA MÃO.\nDE JALÉCO E CHAPÉU DE COURO, PELAS TERRAS DO SERTÃO.\nDE JALÉCO E CHAPÉU DE COURO, PELAS TERRAS DO SERTÃO.\n\nOLHA LÁ SEU BOIADEIRO, NA LUZ DO ROMPER DA AURORA.\nOLHA LÁ SEU BOIADEIRO, NA LUZ DO ROMPER DA AURORA.\nELE É ZÉ DA CAMPINA, VAQUEIRO DE NOSSA SENHORA.\nELE É ZÉ DA CAMPINA, VAQUEIRO DE NOSSA SENHORA.",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-6",
    title: "Ponto de Boiadeiro - Boiadeiro laçador",
    guideOrOrixa: "Boiadeiro",
    type: "Demanda",
    lyrics: "Lá no sertão, a boiada estourou.\nEu chamei seu Boiadeiro,\nBoiadeiro Laçador\n\nEm cima do seu cavalo\nCom o seu Laço na Mão\nBoiadeiro invocado\nJá correu todo o Sertão\n\nNão tem boi que ele não lace\nCavalo que ele não monte\nNão tem quem já não conheça\nO som do seu grande berrante.",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-7",
    title: "Ponto de Boiadeiro - Meu Grande Mestre Zé Da Virada",
    guideOrOrixa: "Boiadeiro",
    type: "Demanda",
    lyrics: "É CATIMBÓ É CAMARA\nMEU GRANDE MESTRE\nVAI DIZER TEU NOME\nTUA VALENTIA E TRIUNFARÁ\n\nE VEM DESCENDO POR CAMPINAS GRANDES\nE SOBE MORRO PRO GADO LAÇA\nOLHA O VENTO FAZ CURVA NA SERRA\nSEU ZÉ DA VIRADA SEU PONTO RISCA\n\nA TUA FOLHA É CIÊNCIA LINDA\nÉ ALQUIMIA LÁ DO JUREMÁ\nPEGO O CACHIMBO E ASSOPRE\nAO CONTRÁRIO JOGANDO FUMAÇA\nPARA O MAL LEVAR",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-8",
    title: "Ponto de Boiadeiro - João Vaqueiro (Boiadeiro pode mais)",
    guideOrOrixa: "Boiadeiro",
    type: "Demanda",
    lyrics: "EI MENINO, AVISA SEU PATRÃO.\nQUE A ONÇA PEGOU O BOI,\nNA DESCIDA DO GRUTÃO. (EI MENINO)\nEI MENINO, AVISA SEU PATRÃO.\nQUE A ONÇA PEGOU O BOI,\nNA DESCIDA DO GRUTÃO.\n\nMAS AVISA SEU PATRÃO, QUE O BOI ERA FORTE SIM.\nMAS A ONÇA FOI VALENTE, E ACABOU PEGANDO O BOI.\nOLHA A ONÇA PEGA O BOI, PEGA O BOI PEGA UMA BOIADA.\nSÓ NÃO PEGA BOIADEIRO, QUE TEM SUA FACA AFIADA.\nSÓ NÃO PEGA BOIADEIRO, QUE TEM SUA FACA AFIADA.\nOLHA A ONÇA É VALENTE, BOIADEIRO PODE MAIS.\nOLHA A ONÇA É VALENTE, BOIADEIRO PODE MAIS.",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-9",
    title: "Ponto de Boiadeiro - Se tiver cantador",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "SE TIVER CANTADOR\nME AJUDE UM POUQUINHO\nSE TIVER CANTADOR\nME AJUDE UM POUQUINHO\n\nDOIS \"CANTADOR\" É BOM\nO RUIM É CANTAR SOZINHO\nDOIS \"CANTADOR\" É BOM\nO RUIM É CANTAR SOZINHO",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-boiadeiro-10",
    title: "Ponto de Boiadeiro - Nas tranças dos seus cabelos",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "NAS TRANÇAS DOS SEUS CABELOS\nEU BEBI ÁGUA DE GRAVATÁ [2X]\n\nEU BEBI ÁGUA DE GRAVATÁ, SEU BOIADEIRO\nEU BEBI ÁGUA DE GRAVATÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-boiadeiro-11",
    title: "Ponto de Boiadeiro - Lua do Gravatá",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "LUA, OH LUA\nOH LUA DO GRAVATÁ [2X]\n\nOLHA A MENINA NA JANELA\nSEU BOIADEIRO QUER FALAR COM ELA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-boiadeiro-12",
    title: "Ponto de Boiadeiro - Não corte capim aí capineiro",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "NÃO CORTE AÍ CAPINEIRO\nSÓ CORTE QUANDO EU MANDAR [2X]\n\nE RÊ RÊ RÊ RÊ\nE RÊ RÊ RÊ RÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-boiadeiro-13",
    title: "Ponto de Boiadeiro - Chó passarinho, saia da beira da estrada",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "CHO CHO CHO PASSARINHO\nSAIA DA BEIRA DA ESTRADA [2X]\n\nAÍ VAI SEU BOIADEIRO\nTOCANDO A SUA BOIADA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-boiadeiro-14",
    title: "Ponto de Boiadeiro - Quando ele vem pelo rio de contas",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "QUANDO ELE VEM\nVEM PELO RIO DE CONTAS\nQUANDO ELE VAI\nVAI POR AQUELA RUA\n\nOLHA QUE BELEZA\nSEU BOIADEIRO NO CLARÃO DA LUA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-15",
    title: "Ponto de Boiadeiro - Seu boiadeiro por aqui choveu",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "SEU BOIADEIRO POR AQUI CHOVEU\nSEU BOIADEIRO POR AQUI CHOVEU [2X]\n\n[refrão]\nCHUVEU CHUVEU , RELAMPEJOU\nFOI TANTA ÁGUA QUE MEU BOI NADOU\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Congo"
  },
  {
    id: "pnt-boiadeiro-16",
    title: "Ponto de Boiadeiro - Cadê minha corda de laçar meu boi",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "CADÊ MINHA CORDA\nDE LAÇAR MEU BOI\nO MEU BOI FUGIU\nE EU NÃO PRA ONDE FOI [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Congo"
  },
  {
    id: "pnt-boiadeiro-17",
    title: "Ponto de Boiadeiro - Bandolê",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "[refrão]\nBANDOLÊ OLÊ OLÊ\nBANDOLÊ OLÊ OLÁ\nBANDOLÊ SEU BOIADEIRO\nBANDOLÊ OLÊ OLÁ\n\nDA LARANJA EU QUERO UM GOMO\nDO LIMÃO QUERO UM PEDAÇO\nDO CABOCLO BOIADEIRO\nQUERO APENAS UM ABRAÇO",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Congo"
  },
  {
    id: "pnt-boiadeiro-18",
    title: "Ponto de Boiadeiro - Me chamaram de mineiro",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "ME CHAMARAMM DE MINEIRO\nEU NÃO SOU MINEIRO NÃO\n\nMANSADOR DE BURRO BRAVO\nMINEIRO É MEU PATRÃO\n\n[refrão]\nOH MINEIRO EH\nOH MINEIRO AH\nOH MINEIRO EH\nOH MINEIRO AH\n\nMACUMBA BOA COMO A DE MINAS NÃO HÁ\nMACUMBA BOA COM A DE MINAS NÃO HÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-boiadeiro-19",
    title: "Ponto de Boiadeiro - Brado alto",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "SEU BOIADEIRO DEU UM BRADO TÃO ALTO\nTÃO ALTO QUE SE OUVIU LÁ NO ALÉM[2x]\n\nATÉ O PADRE QUE REZAVA NA CAPELA\nSE AJOELHOU E REZOU AMÉM, AMÉM[2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-20",
    title: "Ponto de Boiadeiro - Olha meu camarada",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "OLHA MEU CAMARADA\nCAMARADA MEU (2X)\n\nA UMBANDA É UMA ESCOLA\nDE AMOR E CARIDADE\nAQUI DENTRO EU ENCONTREI\nMINHA FAMÍLIA DE VERDADE\n\nOLHA MEU CAMARADA\nCAMARADA MEU (2X)\n\nBOIADEIRO SAMBADOR\nSAMBA ATÉ DE MADRUGADA\nBOIADEIRO TA DANÇANDO\nA IAÔ JÁ TA CANSADA\n\nOLHA MEU CAMARADA\nCAMARADA MEU (2X)\n\nO BARULHO DO ATABAQUE\nESTREMECE TODO CHÃO\nO OGÃ PASSA PRO COURO\nA BATIDA DO CORAÇÃO\n\nOLHA MEU CAMARADA\nCAMARADA MEU (2X)",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-21",
    title: "Ponto de Boiadeiro - Bóia boiadeiro",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "BÓIA BOIADEIRO\nBOIADEIRO BÓIA (2X)\n\nSE EU CONTAR A MINHA VIDA\nBOIADEIRO CHORA",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-22",
    title: "Ponto de Boiadeiro - Eu tenho meu chapéu de couro",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "EU TENHO MEU CHAPÉU DE COURO\nEU TENHO A MINHA GUIADA\nEU TENHO MEU LENÇO VERMELHO\nPARA TOCAR MINHA VAQUEJADA.",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-23",
    title: "Ponto de Boiadeiro - Boa noite meus senhores",
    guideOrOrixa: "Boiadeiro",
    type: "Sustentação",
    lyrics: "BOA NOITE MEUS SENHORES\nBOA NOITE MEUS SENHORES\nDA LICENÇA PARA UM CAVALEIRO\nDAI-ME LICENÇA PARA UM CAVALEIRO\n\nPORQUE EU MOREI NA MATA SERRADA\nEU MOREI NA MATA SERRADA\nO MEU NOME É CABOCLO VAQUEIRO\nO MEU NOME É CABOCLO VAQUEIRO\n\nQUE DEUS SALVE A CASA SANTA\nQUE DEUS SALVE A CASA SANTA\nONDE DEUS FEZ A MORADA\nONDE DEUS FEZ A MORADA\n\nONDE MORA O CÁLICE BENTO\nONDE MORA O CÁLICE BENTO\nE A HÓSTIA CONSAGRADA\nE A HÓSTIA CONSAGRADA",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  },
  {
    id: "pnt-boiadeiro-24",
    title: "Ponto de Boiadeiro - Adeus rolinha",
    guideOrOrixa: "Boiadeiro",
    type: "Subida",
    lyrics: "ADEUS ROLINHA\nROLINHA MEU AMOR\nADEUS ROLINHA\nBATEU ASAS E VOOU\n\nELE VAI EMBORA\nVAI PRA SUA ALDEIA\nELE VAI EMBORA, CAMARADA\nVAI PRA SUA ALDEIA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08",
    rhythm: "Congo"
  },
  {
    id: "pnt-boiadeiro-25",
    title: "Ponto de Boiadeiro - É hora (Retirada de Boiadeiro)",
    guideOrOrixa: "Boiadeiro",
    type: "Subida",
    lyrics: "É HORA, É HORA\nO GALO CANTA É HORA É HORA (BIS)\n\nSEU BOIADEIRO JÁ VAI EMBORA\nCOM DEUS E NOSSA SENHORA",
    youtubeUrl: "https://www.youtube.com/watch?v=iCcs9shlx08"
  }
];
