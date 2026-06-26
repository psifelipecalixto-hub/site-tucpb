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
  },
  {
    id: "pnt-caboclo-1",
    title: "Ponto de Caboclo - Oxalá mandou buscar",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "[refrão]\nOXALÁ MANDOU\nELE MANDOU BUSCAR\nOS CABOCLOS DA JUREMA\nLÁ NO JUREMA\n[/refrão]\n\nPAI OXALÁ\nÉ REI DO MUNDO INTEIRO\nJÁ DEU ORDENS PRA JUREMA\nCHAMAR SEUS CAPANGUEIROS [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY"
  },
  {
    id: "pnt-caboclo-2",
    title: "Ponto de Caboclo - Estrela lá no céu brilhou",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "ESTRELA LÁ NO CÉU BRILHOU\nE AS MATAS ESTREMECEU [2X]\n\nAONDE ANDA CAPAMGUEIRO DA JUREMA\nQUE ATÉ AGORA NÃO APARECEU [2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-3",
    title: "Ponto de caboclo - Eu andei, andei, andei",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "EU ANDEI\nANDEI\nANDEI, ANDEI, ANDEI\n\nPRA ENCONTRAR ______________\nNESSA ALDEIA REAL [4X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-caboclo-4",
    title: "CABOCLA JUREMA - Ô JUREMÊ Ô JUREMA",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "Ô JUREMÊ Ô JUREMA\nSUA FOLHA CAIU SERENA Ô JUREMA\nDENTRO DESSE GONGÁ\n\nÔ JUREMÊ Ô JUREMÁ\nSUA FOLHA CAIU SERENA Ô JUREMA\nDENTRO DESSE GONGÁ\n\nSUA FOLHA CAIU SERENA Ô JUREMA\nDENTRO DESSE GONGÁ\nELA É CABOCLA JUREMA\nAQUI E EM QUALQUER LUGAR\n\nSUA FOLHA CAIU SERENA Ô JUREMA\nDENTRO DESSE GONGÁ\nELA É CABOCLA JUREMA\nAQUI E EM QUALQUER LUGAR",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-5",
    title: "Ponto de Cabocla Jurema - Caiu uma folha na Jurema",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "CAIU UMA FOLHA NA JUREMA\nVEIO O SERENO E MOLHOU\nCAIU UMA FOLHA NA JUREMA\nVEIO O SERENO E MOLHOU\n\nE DEPOIS VEIO O SOL\nENXUGOU ENXUGOU\nE AS SUA MATA\nSE ABRIU TODA EM FLÔR\n\nE DEPOIS VEIO O SOL\nENXUGOU ENXUGOU\nE AS SUA MATA\nSE ABRIU TODA EM FLÔR",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-6",
    title: "Ponto de Caboclo - Eu já mandei fazer 3 capacetes de pena",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "EU JÁ MANDEI FAZER\nTRÊS CAPACETES DE PENAS [2X]\n\nUM É DA IARA\nOUTRO É DA JANAÍNA\nE OUTRO É DA JUREMA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-caboclo-7",
    title: "Ponto de Caboclo - Entrei nas matas sem pedir licença",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "ENTREI NAS MATAS SEM PEDIR LICENÇA\nSÓ PRA VER A FORÇA QUE A JUREMA TEM [2X]\n\nJUREMA OH MINHA MÃE\nJUREMA OH MINHA MÃE\nJUREMA OH MINHA MÃE\nJUREMA...",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-8",
    title: "Ponto de Caboclo - Cabocla Jurema da mata virgem",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "NO MEIO DA MATA VIRGEM\nUMA LINDA CABOCLA EU VI [2X]\n\n[refrão]\nCOM SEU SAIOTE\nCHEIO DE PENA\nELA É JUREMA\nFILHA DE TUPÍ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo"
  },
  {
    id: "pnt-caboclo-9",
    title: "Ponto de Caboclo - Hoje tem alegria no terreiro do meu pai",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "HOJE TEM ALEGRIA\nNO TERREIRO DO MEU PAI\nSARAVÁ DONA JUREMA\nQUE ELA É CHEFE DE GONGÁ\n\n[refrão]\nEMBALA EU BABÁ\nEMBALA EU\nEMBALA EU BABÁ\nEMBALA EU\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-10",
    title: "Ponto de Caboclo - Cabocla Iara",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "EU VI UMA MORENA SENTADA NA BEIRA DA PRAIA\nELA PETEAVA SEUS CABELOS AO LUAR [2X]\n\nMAS QUE CABOCLA É ESSA\nÉ A CABOCLA IARA\nELA DESCEU O RIO TODO\nATÉ CHEGAR AO MAR",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-11",
    title: "Ponto de Cabocla Jupira - Estava na beira do rio",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "ESTAVA NA BEIRA DO RIO\nOUVI UM CABOCLO ASSOBIAR [2X]\n\nACORDA JUPIRA, ACORDA JUPIRA ACORDA\nVEM TRABALHAR [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-12",
    title: "Ponto de Caboclo - Okê Caboclo, chama seu Cobra Coral",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "OKÊ CABOCLO\nCHAMA SEU COBRA CORAL\nOKÊ CABOCLO\nCHAMA SEU COBRA CORAL\n\nABRE OS TRABALHOS\nNA MATA VIRGEM\nCHAMA SEU COBRA CORAL\nABRE OS TRABALHOS\nNA MATA VIRGEM\nCHAMA SEU COBRA CORAL",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-13",
    title: "Ponto de Caboclo - Caçador na beira do caminho",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "CAÇADOR NA BEIRA DO CAMINHO\nNÃO ME MATE ESSA CORAL NA ESTRADA\nELA ABANDONOU SUA CHOUPANA\nNO ROMPER DA MADRUGADA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-14",
    title: "Ponto de Caboclo - Cobra Coral é caboclo",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "COBRA CORAL É CABOCLO\nCOBRA CORAL É CABOCLO\n\nELE MORA LÁ NAS MATAS\nJUNTO COM ARRANCA-TOCO [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-15",
    title: "Ponto de Caboclo - Louvação ao Caboclo Pena Branca",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "NÃO TEM DISTÂNCIA\nNÃO IMPORTA O CAMINHO\nNÃO HÁ FRONTEIRAS\nQUE POSSA ME IMPEDIR\n\nSEJA ONDE FOR\nEU VOU LOUVAR ESSE CABOCLO\nQUE ME CRIOU\nE ME ENSINOU A LHE SEGUIR\n\nLÁ NA ALDEIA ONDE OS TAMBORES TOCAM\nREÚNE MOÇO, VELINHO E CRIANÇA\nCLAREIA LUA CLAREIA, CLAREIA A ALDEIA DE SEU PENA BRANCA\nCLAREIA LUA CLAREIA\nQUEM CRÊ NESSE CABOCLO NÃO PERDE A CONFIANÇA\nOKÊ CABOCLO\n\n[refrão]\nOKÊ CABOCLO\nSEUS FILHOS QUEREM LHE AGRADECER\nOKÊ CABOCLO\nSENHOR DA MATA VIRGEM\nVENHA SEMPRE ME VALER\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-caboclo-16",
    title: "Ponto de Caboclo - O seu saiote é branco (Pena Branca)",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "[refrão]\nO SEU SAIOTE É BRANCO\nÉ DA COR DO DIA [2X]\n\nSEU CAPACETE É FEITO [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-17",
    title: "Ponto de Caboclo - 7 flechas no gongá",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "E RÊ RÊ\nCABOCLO 7 FLECHAS NO GONGÁ\nE RÊ RÊ\nCABOCLO 7 FLECHAS NO GONGÁ\n\nSARAVÁ SEU 7 FLECHAS\nQUE ELE É O REI DA MATA\nCOM A SUA BODOQUE ATIRA (Ô PARANGA)\nSUA FLECHA MATA [2X]\n\nE RÊ RÊ\nCABOCLO 7 FLECHAS NO GONGÁ\nE RÊ RÊ\nCABOCLO 7 FLECHAS NO GONGÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-18",
    title: "Ponto de Caboclo - Foi numa tarde serena",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "FOI NUMA TARDE SERENA\nLÁ NAS MATAS DA JUREMA\nEU VI UM CABOCLO BRADAR\nFOI NUMA TARDE SERENA\nLÁ NAS MATAS DA JUREMA\nEU VI UM CABOCLO BRADAR\n\n[refrão]\nKIOOOOO\nKIO KIO KIO KIERA\n\nTODA MATA ESTÁ EM FESTA\nSARAVÁ SEU SETE FLECHAS\nQUE ELE É REI DA FLORESTA\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-19",
    title: "CABOCLO FLECHEIRO - VOCÊS ESTÃO VENDO AQUELE MEU CABOCLO",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "VOCÊS \"TÃO\" VENDO AQUELE MEU CABOCLO\nESTÁ EM CIMA DAQUELE LAJEDO\nOLHANDO O TEMPO PARA NÃO CHOVER\nPEDINDO A LUA PRA SAIR MAIS CEDO\n\nOQUÊ, CABOCLO\nOQUÊ, CABOCLO FLECHEIRO\n\nE TODA A TRIBO DESSE MEU CABOCLO\nADORA O CANTO DE UM ROUXINOL\nDE MANHÃ CEDO PEDE AO SEU FLECHEIRO\nCAÇAR A EMA AO ROMPER DO SOL",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-caboclo-20",
    title: "Ponto de Caboclo - Como é tão lindo assistir festa na mata",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "COMO É TÃO LINDO\nASSISTIR FESTA NA MATA\nOUVIR O SOM DAS CASCATAS\nE O LINDO CANTO DO SABIÁ\n\nQUE NOITE LINDA\nLINDA NOITE DE LUAR\nFOI NO CLARÃO DA LUA\nQUE EU VI, SEU FLECHEIRO PASSAR\n\nA MATA ESTÁ EM FESTA\nTODA COBERTA DE FLORES\nATÉ OS PASSARINHOS CANTAVAM, MEUS CABOCLOS\nMAS ELES CANTAM EM SEU LOUVOR\n\nÔÔÔô OH QUE BELEZA\nôÔÔÔ QUANTO ESPLENDOR\nCOMO É BOM TER A CERTEZA\nQUE O SEU FLECHEIRO\nÉ MEU PROTETOR [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-21",
    title: "CABOCLO DA MATA - ASSOVIA ASSOVIA, ELE ASSOVIOU",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "ASSOVIA ASSOVIA\nELE É ASSOVIOU\nASSOVIA ASSOVIA\nELE É ASSOVIOU\n\nCADÊ O CABOCLO DA MATA\nQUE AINDA NÃO CHEGOU\nCADÊ O CABOCLO DA MATA\nQUE AINDA NÃO CHEGOU",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-22",
    title: "Ponto de Caboclo - Quando o meu tambor rufar (Caboclo Tupinambá)",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "QUANDO O MEU TAMBOR RUFAR\nEU SINTO A PRESENÇA DE TUPINAMBÁ\nQUANDO O MEU TAMBOR RUFAR\nEU SINTO A PRESENÇA DE TUPINAMBÁ\n\nDEIXA A NOITE CAIR\nVEJA UMA ESTRELA BRILHAR\nA MACÁIA ESTAVA EM FESTA\nPRA TUPINAMBÁ CHEGAR\n\nELE É CABOCLO\nELE VEM CAÇAR\nELE É GUERREIRO\nELE É TUPINAMBÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-23",
    title: "Ponto de Caboclo - Caboclo Arranca-toco , Jurema e Caçador",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "[refrão]\nÔoooo\nÓ que beleza o clarão da lua no Juremá\nCaboclo Arranca Toco, Jurema e Caçador\nSaindo para caçar\nÔooooo\n[/refrão]\n\nArranca Toco com sua lança dourada\nPede licença a Zambi quando sai para caçar\nDona Jurema com saiote de pena\nSeu arco e sua flecha\nReza prece a Oxalá\nSeu Caçador avistou a linda ema\nBelo pássaro de pena\nNo tronco do Juremá\nKio kio okê ô Juremá\nNão mate a ema, deixe a ema passar",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-24",
    title: "CABOCLO - NA MATA VIRGEM UMA CORAL PIOU",
    guideOrOrixa: "Caboclo",
    type: "Sustentação",
    lyrics: "NA MATA VIRGEM UMA CORAL PIOU\nELE ATIROU A SUA FLECHA CERTEIRA\nNA MATA VIRGEM UMA CORAL PIOU\nELE ATIROU A SUA FLECHA CERTEIRA\n\nELE ATIROU\nELE ATIROU\nELE ATIROU\nATIRA CABOCLO LÁ NAS MATAS DA JUREMA",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo"
  },
  {
    id: "pnt-caboclo-25",
    title: "Ponto de Caboclo - Sucurí jibóia como vêm beirando o mar",
    guideOrOrixa: "Caboclo",
    type: "Sustentação",
    lyrics: "SUCURÍ JIBÓIA\nCOMO VÊM BEIRANDO O MAR\nSUCURÍ JIBÓIA\nCOMO VÊM BEIRANDO O MAR\n\nOLHA COMO BROGOIÔ\nA SUA COBRA-CORAL\nOLHA COMO BROGOIÔ\nA SUA COBRA-CORAL\n\nSEGURA ESSA COBRA\nNÃO DEIXA ELA FUGIR\nO NOME DESSA COBRA\nÉ COBRA SUCURÍ\n\nSEGURA ESSA COBRA\nNÃO DEIXA ELA FUGIR\nO NOME DESSA COBRA\nÉ COBRA SUCURÍ",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo"
  },
  {
    id: "pnt-caboclo-26",
    title: "Ponto de Caboclo - Vestimenta de Caboclo",
    guideOrOrixa: "Caboclo",
    type: "Sustentação",
    lyrics: "VESTIMENTA DE CABOCLO\nÉ SAMAMBAIA, É SAMAMBAIA, É SAMAMBAIA [2X]\n\n[refrão]\nSAIA CABOCLO\nNÃO SE ATRAPALHA\nSAIA DO MEIO\nDA SAMAMBIA\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-27",
    title: "Ponto de Caboclo - Lei Severa nas matas da Jurema",
    guideOrOrixa: "Caboclo",
    type: "Sustentação",
    lyrics: "OH LÁ NAS MATAS\nLÁ DA JUREMA\nOH LÁ NAS MATAS\nLÁ DA JUREMA\n\nÉ UMA LEI SEVERA\nÉ UMA LEI SEM PENA\nÉ UMA LEI SEVERA\nÉ UMA LEI SEM PENA",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Congo de Ouro"
  },
  {
    id: "pnt-caboclo-28",
    title: "Ponto de Caboclo - Ele é caboclo da banda de lá",
    guideOrOrixa: "Caboclo",
    type: "Sustentação",
    lyrics: "ELE É CABOCLO DA BANDA DE LÁ\nELE É CABOCLO DA BANDA DE LÁ\nQUANDO VÊ A COBRA CORRE PRA MATAR\nQUANDO VÊ A COBRA CORRE PRA MATAR\n\nELE ATIROU A SUA FLECHA MAS ERROU\nELE ATIROU A SUA FLECHA MAS ERROU\nSENTOU-SE NA AREIA E POISE A CHORAR\nSENTOU-SE NA AREIA E POISE A CHORAR\n\nQUANDO VÊ A COBRA CORRE PRA MATAR\nQUANDO VÊ A COBRA CORRE PRA MATAR",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY"
  },
  {
    id: "pnt-caboclo-29",
    title: "Ponto de Caboclo - Caboclo Roxo",
    guideOrOrixa: "Caboclo",
    type: "Chamada",
    lyrics: "CABOCLO ROXO\nDA COR MORENA\nELE É OXOSSI\nCAÇADOR LÁ DA JUREMA [2X]\n\nELE JUROU\nE TORNOU A JURAR\nQUANDO OUVIR OS CONCELHOS\nQUE A JUREMA TEM PRA DAR [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-caboclo-30",
    title: "Ponto de Caboclo (Subida) - Já vai já vai meu caboclo já vai",
    guideOrOrixa: "Caboclo",
    type: "Subida",
    lyrics: "JÁ VAI JÁ VAI\nMEU CABOCLO JÁ VAI\nJÁ VAI JÁ VAI\nVAI NA HORA DE DEUS\n\nJÁ VAI JÁ VAI\nMEU CABOCLO JÁ VAI\nJÁ VAI JÁ VAI\nVAI NA HORA DE DEUS\n\nAUÊ AUÁ\nA JUREMA MANDOU LHE CHAMAR\nAUÊ AUÁ\nA JUREMA MANDOU LHE CHAMAR",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Barra-Vento"
  },
  {
    id: "pnt-caboclo-31",
    title: "Ponto de Caboclo - Zoa atabaque",
    guideOrOrixa: "Caboclo",
    type: "Subida",
    lyrics: "ZOA ATABAQUE ZOA\nTODOS OS CABOCLOS VÃO EMBORA[2X]\n\nELE DISSE ADEUS, ATÉ LOGO E ATÉ JÁ\nSE PRECISAREM DELE É SÓ MANDAR CHAMAR [2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=nblyEL4CEzY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-1",
    title: "PRETO-VELHO - SE É DA BAHIA EU QUERO VER DESCER",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "SE É DA BAHIA\nEU QUERO VER DESCER\nSE É DA BAHIA\nEU QUERO VER DESCER\n\nCADÊ VOVÓ\nCADÊ VOCÊ\nCADÊ VOVÓ\nCADÊ VOCÊ",
    youtubeUrl: "https://www.youtube.com/watch?v=DjjgGpFnqJg"
  },
  {
    id: "pnt-pretovelho-2",
    title: "Ponto de Preto-Velho - Lá vem vovó descendo a serra",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "LÁ VEM VOVÓ\nDESCENDO A SERRA COM A SUA SACOLA\nVEM COM SEU PATÚA\nVEM COM A SUA MANDINGA\nELA VEM DE ANGOLA [2X]\n\n[refrão]\nEU QUERO VER VOVÓ\nEU QUERO VER\nEU QUERO VER\nSE FILHO DE PEMBA TEM QUERER [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=DjjgGpFnqJg",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-3",
    title: "Ponto de Preto Velho - Eu vou fazer batuque pra chamar meu protetor",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "EH LUANDA\nEH LUANDA\nTERRA DA MACUMBA, DO BATUQUE DO CANJERÊ\n\nEU VOU CHAMAR VOVÔ\nEU VOU CHAMAR VOVÓ\nEU VOU CHAMAR VOVÔ\nEU VOU CHAMAR VOVÓ",
    youtubeUrl: "https://www.youtube.com/watch?v=u1m8b4r0cM8",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-4",
    title: "PRETO VELHO - PAI MALAQUIAS - O NAVIO DE SÃO SALVADOR",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "O NAVIO DE SÃO SALVADOR\nCHEGOU DA BAHIA TÃO CARREGADO\n\nTROUXE CRAVO\nTROUXE ROSA\nPAI MALAQUIAS QUE VINHA DE LÁ\n\nTROUXE CRAVO\nTROUXE ROSA\nPAI MALAQUIAS QUE VINHA DE LÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-5",
    title: "PRETO VELHO - PAI BENEDITO É PRETO",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "PAI BENEDITO É PRETO Ô SINHADONA\nELE MORA NO ROSEIRAL\nPAI BENEDITO É PRETO Ô SINHADONA\nELE MORA NO ROSEIRAL\n\nELE É PRETO E TEM COROAL, SINHADONA\nELE É CHEFE DE GONGÁ\nELE É PRETO E TEM COROAL, SINHADONA\nELE É CHEFE DE GONGÁ\n\nPAI BENEDITO É PRETO Ô SINHADONA\nELE MORA NO ROSEIRAL\nPAI BENEDITO É PRETO Ô SINHADONA\nELE MORA NO ROSEIRAL\n\nELE É PRETO E TEM COROAL, SINHADONA\nELE É CHEFE DE GONGÁ\nELE É PRETO E TEM COROAL, SINHADONA\nELE É CHEFE DE GONGÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=Qx-35y9w3mI",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-6",
    title: "Ponto de Preto-Velho - Vovó Cambina - Segredo da Lua",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "VOVÓ CAMBINA TEM\nTEM UM SEGREDO DA LUA\nVOVÓ CAMBINA TEM\nTEM UM SEGREDO DA LUA\n\nOLHA SEUS FILHOS VOVÓ\nESSES QUE MORAM NA RUA\nOLHA SEUS FILHOS VOVÓ\nESSES QUE MORAM NA RUA",
    youtubeUrl: "https://www.youtube.com/watch?v=T1z-aHlS-4M",
    rhythm: "Congo"
  },
  {
    id: "pnt-pretovelho-7",
    title: "Ponto de Preto-Velho - Estava dormindo, cambina me chamou",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "ESTAVA DORMINDO\nCAMBINA ME CHAMOU [2X]\n\nACORDA MEU NEGO\nO CATIVEIRO ACABOU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=hO7W5N36_kY",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-8",
    title: "Ponto de Preto-Velho - Negra Cambinda",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "NEGRA CAMBINDA\nNEGRA DA COSTA DO MAR\nNEGRA DA COSTA LINDA\nFILHA DE YALORIXÁ\n\nNA MACUMBA EH\nNA MACUMBA AH\nNA MACUMBA EH\nNA MACUMBA AH\n\nNEGO FUMA\nNEGO DANÇA\nNA BATIDA DO TAMBOR\n\nNEGO BEBE\nSEU MARAFO\nSARAVÁ SEU PROTETOR",
    youtubeUrl: "https://www.youtube.com/watch?v=R9Z8K-HjS50",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-9",
    title: "Ponto de Preto-Velho - Vovó Maria Redonda - Fio, se suncê precisar",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "MARIA CONGA SE EU PEDIR VOCÊ ME DÁ\nMARIA CONGA SE EU PEDIR VOCÊ ME DÁ\n\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ\n\nRÊ RÊ RÊ RÊ\nRÊ RÊ RÊ RÊ RÊ RÁ\n\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=dh0USenVYJI",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-10",
    title: "Ponto de Preto-Velho - Vovo Maria Redonda (Oh lá vem ela)",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "OH LA VEM ELA\nARRASTANDO SUA CHINELA\nAVENTAL TODO BRANCO\nE A COLHER DE PAU NA MAO\n\nELA É COZINHEIRA\nELA É MUCAMBA\nÉ MARIA REDONDA\nQUE SEGURA A NOSSA BANDA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=dh0USenVYJI",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-11",
    title: "Ponto de Preto Velho - Maria Conga se eu pedir você me dá",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "MARIA CONGA SE EU PEDIR VOCÊ ME DÁ\nMARIA CONGA SE EU PEDIR VOCÊ ME DÁ\n\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ\n\nRÊ RÊ RÊ RÊ\nRÊ RÊ RÊ RÊ RÊ RÁ\n\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ\nUM PEDAÇO DO SEU LENÇO PRA FAZER MEU PATUÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=dh0USenVYJI",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-12",
    title: "Ponto de Preto Velho - Meu senhor da Senzala - Pai Joaquim",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "MEU SENHOR DA SENZALA\nMEU SENHORZINHO\nELE VEM CANSADO\nMEU PAI JOAQUIM [2x]\n\nUM GRITO DE LIBERDADE\nNEGRO ECOOU\nQUANDO OXALÁ CHAMOU\nRECEBEU\nTODA PAZ PELA HUMILDADE\nHOJE ELE NOS TRAZ A CARIDADE\n\n[refrão]\nLUANDA\nOH LUANDA\nCOMO É TÃO LINDO\nPAI JOAQUIM EM NOSSA BANDA [2x]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=J3gW-lO2Y2w",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-13",
    title: "Ponto de Preto-Velho - Vovó Catarina",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "ECOOU\nUM CANTO VINDO DE LONGE ECOOU [2X]\n\nEM UM LINDO DIA\nUMA LUZ NO CÉU BRILHOU\nCOM A ESTRELA GUIA\nILUMINADA CHEGOU\n\nA PRETA-VELHA DE ARUANDA LUZ DIVINA\nRECEBEU DE OXALÁ O NOME DE CATARINA [2X]\n\n[refrão]\nÉ LUA CHEIA\nÉ LUA NOVA\nLOUVADA SEJA\nVOVÓ CATARINA DE ANGOLA [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=5V2Vn2_d5oI",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-14",
    title: "Ponto de Preto-Velho - Vovó Benta",
    guideOrOrixa: "Preto Velho",
    type: "Chamada",
    lyrics: "COM O SEU CACHIMBO\nE A PEMBA NA MÃO [2X]\n\nESSA PRETA-VELHA AFRICANA\nTEM BOM CORAÇÃO [2X]\n\nSENTADA NO SEU TOCO\nNINGUÉM SABE A FORÇA QUE ELA TEM\nMAS ELA É MARIA-BENTA\nQUE NA UMBANDA NUNCA FEZ MAL A NINGUÉM [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=1xN3x-8-1kI",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-15",
    title: "Ponto de Baiano - Na Bahia sim é que tem Orobi",
    guideOrOrixa: "Preto Velho",
    type: "Demanda",
    lyrics: "NA BAHIA SIM\nÉ QUE TEM OROBÍ\nÉ QUE TEM OROBÚ [2X]\n\nÉ QUE TEM OROBÍ\nÉ QUE TEM OROBÚ\nPIMENTA DA COSTA\nMACUMBA IÔIÔ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=f7Gg5Yg_W8s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-16",
    title: "Ponto de Preto Velho - Bahia ou Áfria vem cá nos ajudar",
    guideOrOrixa: "Preto Velho",
    type: "Demanda",
    lyrics: "BAHIA OH ÁFRICA\nVEM CÁ, VEM NOS AJUDAR [2X]\n\nFORÇA BAIANA\nFORÇA AFRICANA\nFORÇA DIVINA\nVEM CÁ, VEM CÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Congo"
  },
  {
    id: "pnt-pretovelho-17",
    title: "Ponto de Preto-Velho - Velha Mandingueira",
    guideOrOrixa: "Preto Velho",
    type: "Demanda",
    lyrics: "AUÊ, AUÊ, AUÊ VOVÓ\nVÓ TONINHA VEM DE MINAS\nVEM PRA DESATOR O NÓ\nESSA VELHA MANDINGUEIRA CHEGA COM SEU PATUÁ\nNA SACOLA TRAZ A PEMBA PARA SEU PONTO RISCAR\nSUA BENGALA TEM MAGIA SUA REZA TEM PODER\nVOVÓ CORTA AS DEMANDAS, QUEM DUVÍDA VENHA VER\nREFRÃO\nFUMA CIGARRO DE PALHA COM GALHINHO DE ARRUDA NA MÃO\nMUITOS FILHOS LHE CONSULTÃO E RECEBEM SUA PROTEÇÃO\nATABAQUE FIRMA A GIRA, BATAM PALMAS E VAMOS CANTAR\nVÓ TONIHA SE LEVANTA, SORRIDENTE PRA DANÇAR",
    youtubeUrl: "https://www.youtube.com/watch?v=7YpYd45xYvA",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-18",
    title: "Ponto de Preto-Velho - Minhas Almas",
    guideOrOrixa: "Preto Velho",
    type: "Demanda",
    lyrics: "MINHAS ALMAS\nSANTAS ALMAS\nOLHA A MINHA ORAÇÃO [2X]\n\nOLHA MINHAS SANTAS ALMAS\nOLHA MINHA ORAÇÃO [2X]\n\n[refrão]\nEU LOUVEI LOUVEI\nEU LOUVEI AO SENHOR\nEU LOUVEI AS TERRAS\nDE SÃO SALVADOR\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Congo"
  },
  {
    id: "pnt-pretovelho-19",
    title: "Ponto de Preto-Velho - Lamentos de Preto-Velho",
    guideOrOrixa: "Preto Velho",
    type: "Demanda",
    lyrics: "[refrão]\nIÊ IÊ\nIÊ IÁ\nIÊ IÊ\nIÊ IÊ\nIÊ IÁ\n[refrão]\n\nA MUITO TEMPO SE OUVIA\nUM LAMENTAR DE DOR\nCHORAVA CATIVEIRO\nNÃO BATE MEU SENHOR\n\n[refrão]\nIÊ IÊ\nIÊ IÁ\nIÊ IÊ\nIÊ IÊ\nIÊ IÁ\n[refrão]\n\nHOJE TRÁS SUA MIRONGA\nÉ PRA PROTEGER\nÉ PRA NOS DEFENDER\nCHAMAMOS DE PRETOS-VELHOS\nTRÁS SEU ROSÁRIO PRA BENZER\n\n[refrão]\nIÊ IÊ\nIÊ IÁ\nIÊ IÊ\nIÊ IÊ\nIÊ IÁ\n[refrão]\n\nFOI ZAMBI QUEM MANDOU\nMANDOU EU TRABALHAR OH [2X]\nNÃO CHORA MAIS CATIVEIRO\nNEGRO NÃO VAI MAIS CHORAR\n\n[refrão]\nIÊ IÊ\nIÊ IÁ\nIÊ IÊ\nIÊ IÊ\nIÊ IÁ\n[refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-20",
    title: "Ponto de Preto-Velho - Construi uma casa tão linda",
    guideOrOrixa: "Preto Velho",
    type: "Demanda",
    lyrics: "EU CONSTRUÍ UMA CASA TÃO LINDA\nCOM TIJOLO , CIMENTO E VERGALHÃO [2X]\n\nMAS BATEU CHUVA , BATEU VENDO\nE JOGOU MINHA CASA NO CHÃO [2X]\n\nPRETO-VELHO ME ENSINA\nO QUE EU TENHO QUE FAZER\nPOIS O VENTO NÃO DERRUBA\nNOSSA CASA SAPÊ [2x]\n\n[refrão]\nOH TEM DENDÊ , TEM DENDÊ\nPRETO-VELHO TEM DENDÊ\nNA SUA CASA DE SAPÊ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-21",
    title: "Ponto de Preto-Velho - Numa noite linda, noite de luar",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "NUMA NOITE LINDA\nNOITE DE LUAR\nPRETO-VELHO OROU A ZAMBI\nPRA CATIVEIRO ACABAR\n\nNUMA NOITE LINDA\nNOITE DE LUAR\nPRETO-VELHO OROU A ZAMBI\nPRA CATIVEIRO ACABAR\n\nTRABALHA ZÉ, TRABALHOU\nTRABALHA ZÉ, TRABALHOU\nTRABALHA ZÉ\nQUE O CATIVEIRO ACABOU\n\nTRABALHA ZÉ, TRABALHOU\nTRABALHA ZÉ, TRABALHOU\nTRABALHA ZÉ\nQUE O CATIVEIRO ACABOU",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-22",
    title: "Ponto de Preto-Velho - Atravessa o rio nas costas do jacaré",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "PRETO VELHO QUANDO VEM\nELE NÃO VEM A PÉ\nATRAVESSA O RIO\nNAS COSTAS DO JACARÉ\n\nPRETO-VELHO QUANDO VAI\nELE NÃO VAI A PÉ\nATRAVESSA O RIO\nNAS COSTAS DO JACARÉ [2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Congo"
  },
  {
    id: "pnt-pretovelho-23",
    title: "Ponto de Preto-Velho - Andou andou andou preto-velho trabalhador",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "ANDOU ANDOU ANDOU\nPRETO-VELHO TRABALHADOR\nANDOU ANDOU ANDOU\nPRETO-VELHO TRABALHADOR\n\nPRETO-VELHO DESCEU A SERRA\nOXALÁ FOI QUEM MANDOU\nPRETO-VELHO DESCEU A SERRA\nOXALÁ FOI QUEM MANDOU",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-24",
    title: "Alguém me avisou - Dona Ivone Lara - Preto-Velho",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "FORAM ME CHAMAR\nEU ESTOU AQUI\nO QUE QUE HÁ\nFORAM ME CHAMAR\nEU ESTOU AQUI\nO QUE QUE HÁ\n\nEU VIM DE LÁ\nEU VIM DE LÁ\nPEQUENININHO\nMAS EU VIM DE LÁ\nPEQUENININHO\n\nALGUÉM ME AVISOU\nPRA PISAR NESSE CHÃO\nDEVAGARINHO [2X]\n\n... letra incompleta",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-25",
    title: "Ponto de Preto Velho - Foi lá no cruzeiro das almas",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "FOI LÁ\nNO CRUZEIRO DAS ALMAS\nONDE AS ALMAS FORAM REZAR [2X]\n\nAS ALMAS CHORAM DE ALEGRIA\nQUANDO OS FILHOS SE COMBINAM\nTAMBÉM CHORAM DE TRISTEZA\nQUANDO NÃO QUEREM COMBINAR [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-26",
    title: "Ponto de Preto-Velho - Vovó não quer casca de coco no terreiro",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "VOVÓ NÃO QUER\nCASCA DE COCO NO TERREIRO\nVOVÓ NÃO QUER\nCASCA DE COCO NO TERREIRO\n\nCASCA DE COCO FAZ LEMBRAR\nO TEMPO DO CATIVEIRO [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-pretovelho-27",
    title: "Ponto de Preto-Velho - Preto-Velho não vai a cidade",
    guideOrOrixa: "Preto Velho",
    type: "Sustentação",
    lyrics: "PRETO-VELHO NÃO VAI A CIDADE PORQUE\nANDA DEVAGAR [2X]\n\nANDA DEVAGAR\nÉ DEVAGARINHO\nANDA DEVAGAR\nPRETO-VELHO É DEVAGARINHO [2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-28",
    title: "PRETO-VELHO (subida) - A SINETA DO CÉU BATEU",
    guideOrOrixa: "Preto Velho",
    type: "Subida",
    lyrics: "A SINETA DO CÉU BATEU\nOXALÁ JÁ DIZ QUE É HORA\nA SINETA DO CÉU BATEU\nOXALÁ JÁ DIZ QUE É HORA\n\nEU VOU EU VOU EU VOU\nFICA COM DEUS E NOSSA SENHORA\nEU VOU EU VOU EU VOU\nFICA COM DEUS E NOSSA SENHORA",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Ijexá"
  },
  {
    id: "pnt-pretovelho-29",
    title: "Ponto de Preto-Velho - Tanto sofrimento",
    guideOrOrixa: "Preto Velho",
    type: "Subida",
    lyrics: "CANSADO DE TANTO SOFRIMENTO\nDA MINHA CRUZ CARREGAR\nSUBI LÁ NO MORRO DO CRUZEIRO\n\nEU FUI PEDIR AO PAI PRA TROCAR\nA MINHA QUE ERA LEVE EU DEIXEI NA SUBIDA\nE CHEGANDO LÁ EM CIMA\nCOMECEI A PROCURAR\n\nMAS SÓ HAVIA\nMAIS PESADA E MAIS SOFRIDA\nCONFORMADO E ARREPENDIDO\nCOM A MAIOR EU VOU VOLTAR",
    youtubeUrl: "https://www.youtube.com/watch?v=5c25v61xQ7s",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ere-1",
    title: "Ponto de Erê - Tem bala de coco e peteca",
    guideOrOrixa: "Erê",
    type: "Chamada",
    lyrics: "TEM BALA DE COCO E PETECA\nDEIXA A IBEIJADA BRINCAR [2X]\n\nHOJE É DIA DE FESTA\nIBEIJADA VEM SARAVÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ere-2",
    title: "Ponto de Erê - Na Bahia tem um coco",
    guideOrOrixa: "Erê",
    type: "Chamada",
    lyrics: "NA BAHIA TEM UM COCO\nCOCO QUE FAZ A COCADA\nCOCO QUE FAZ O MANJAR\nPRA DAR PARA A IBEIJADA\n\nDOUM DOUM DOUM DOUM\nCOSME E DAMIÃO\nDOUM DOUM DOUM DOUM\nVEM BRINCAR NO CHÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=q0ARTqzfcA0",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ere-3",
    title: "Ponto de Erê - Cosme e Damião cadê Doum",
    guideOrOrixa: "Erê",
    type: "Chamada",
    lyrics: "COSME E DAMIÃO\nCADÊ DOUM?\nDOUM FOI PASSEAR\nLÁ NO CAVALO DE OGUM\n\nDOIS DOIS SEREIA DO MAR\nDOIS DOIS MAMÃE IEMANJÁ\nDOIS DOIS SEREIA DO MAR\nDOIS DOIS MAMÃE IEMANJÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ere-4",
    title: "Ponto de Erê - Se não me der cocada, vou chorar",
    guideOrOrixa: "Erê",
    type: "Chamada",
    lyrics: "SE NÃO ME DER COCADA\nVOU CHORAR VOU CHORAR VOU CHORAR\n\nEU VOU PEDIR PRA MINHA MÃE\nEU VOU PEDIR PRO MEU PAI\nPRA MANDAR COMPRAR COCADA\nPRA IBEIJADA",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg",
    rhythm: "Samba Cabula"
  },
  {
    id: "pnt-ere-5",
    title: "Ponto de Erê - Mariazinha não ganhou boneca",
    guideOrOrixa: "Erê",
    type: "Chamada",
    lyrics: "MARIAZINHA\nNÃO GANHOU BONECA\nCHORA, CHORA, CHORA\nATÉ GANHAR PETECA",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-6",
    title: "Ponto de Erê - Bota fogo Mariazinha",
    guideOrOrixa: "Erê",
    type: "Chamada",
    lyrics: "BOTA FOGO MARIAZINHA\nBOTA FOGO NO CARVÃO\nMARIAZINHA QUANDO BRINCA\nBOTA FOGO NO CARVÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-7",
    title: "Ponto de Erê - Eu quero doce, eu quero bala",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "EU QUERO DOCE, EU QUERO BALA\nEU QUERO MEL PRA PASSAR NA MINHA CARA\n\nDOCE DOCE DOCE\nDA IBEIJADA\nBALA BALA BALA\nDA IBEIJADA",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-8",
    title: "Ponto de Erê - Antes do sol nascer",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "ANTES DO SOL NASCER\nA IBEIJADA VEM SAUDAR\nOS FILHOS DE FÉ\nLÁ NO GONGÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-9",
    title: "Ponto de Erê - Ele é pequenininho",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "ELE É PEQUENININHO\nMORA NO FUNDO DO MAR\nSUA MADRINHA É A SEREIA\nSEU PADRINHO É BEIRA-MAR\n\nNO FUNDO DO MAR TEM AREIA\nNO FUNDO DO MAR TEM AREIA",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-10",
    title: "Ponto de Erê - Caruru de mamãe",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "CARURÚ DE MAMÃE\nCARURÚ DE MAMÃE\nQUEM COMEU O CARURÚ DE MAMÃE?\n\nFOI SÃO COSME, SÃO DAMIÃO\nFOI SÃO COSME, SÃO DAMIÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-11",
    title: "Ponto de Erê - Cocadinha pra dois (Doum)",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "COCADINHA PRA DOIS\nCOCADA PRA TRÊS\nQUEM QUER COCADA\nCOCADA DE COSME E DAMIÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-12",
    title: "Ponto de Erê - Dia de festa",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "HOJE É DIA DE FESTA\nNO TERREIRO DO MEU PAI\nTEM BOLO, DOCE E GUARANÁ\nA IBEIJADA VEM BRINCAR",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-13",
    title: "Ponto de Erê - Tem cocada (Erê)",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "TEM COCADA NO TERREIRO\nTEM COCADA NO GONGÁ\nDEIXA A IBEIJADA COMER\nDEIXA A IBEIJADA BRINCAR",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-14",
    title: "Ponto de Erê - Ele foi doutor",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "ELE FOI DOUTOR\nELE FOI DOUTOR\nSÃO COSME E SÃO DAMIÃO\nCURA A DOR\nCURA A DOR",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-15",
    title: "Ponto de Erê - Festa no abassá",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "TEM FESTA NO ABASSÁ\nTEM FESTA NO ABASSÁ\nA IBEIJADA DESCEU\nPRA PODER TRABALHAR",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-16",
    title: "Ponto de Erê - 27 de setembro",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "VINTE E SETE DE SETEMBRO\nÉ DIA DE COSME E DAMIÃO\nVAMOS SARAVÁ A IBEIJADA\nCOM MUITA FÉ NO CORAÇÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-17",
    title: "Ponto de Erê - Crianças da sereia",
    guideOrOrixa: "Erê",
    type: "Sustentação",
    lyrics: "AS CRIANÇAS DA SEREIA\nESTÃO BRINCANDO NA AREIA\nCOM AS CONCHINHAS DO MAR\nPRA MAMÃE IEMANJÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-18",
    title: "Ponto de Erê - Andorinha que voa, voa",
    guideOrOrixa: "Erê",
    type: "Subida",
    lyrics: "ANDORINHA QUE VOA, VOA\nANDORINHA QUE VOA, VOA\nVAI LEVAR AS CRIANÇAS\nLÁ PRA ARUANDA, VOA",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-ere-19",
    title: "Ponto de Erê - A onda vai",
    guideOrOrixa: "Erê",
    type: "Subida",
    lyrics: "A ONDA VAI\nA ONDA VEM\nAS CRIANÇAS VÃO EMBORA\nCOM A BENÇÃO DA MAMÃE",
    youtubeUrl: "https://www.youtube.com/watch?v=BXAGXBc-5zg"
  },
  {
    id: "pnt-pombagira-1",
    title: "Ponto de Pombagira - Abre a roda (Deixa a cigana trabalhar)",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "OH ABRE A RODA\nDEIXA A CIGANA TRABALHAR\nOH ABRE A RODA\nDEIXA A CIGANA TRABALHAR\nELA TEM PEITO DE AÇO\nELA TEM PEITO DE AÇO\nE UM CORAÇÃO\nDE UM SABIÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=fZ7V-bjSS4Q"
  },
  {
    id: "pnt-pombagira-2",
    title: "Ponto de Pombagira - Arreda homem que aí vem mulher",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "ARREDA HOMEM QUE AI VEM MULHER (2X)\nELA É A POMBA GIRA ESPOSA DE LUCIFER\nTRANCA RUAS VEM NA FRENTE PRA DIZER QUEM ELA É",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-3",
    title: "Ponto de Pombagira - Maria Padilha das Almas (Choveu, choveu)",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "CHOVEU CHOVEU\nSÓ NA CALUNGA QUE NÃO CHOVEU\nCHOVEU CHOVEU\nSÓ NA CALUNGA QUE NÃO CHOVEU\nÉ QUE A DONA PADILHA DAS ALMAS\nPRESTA CONTA COM DEUS\nÉ QUE A DONA PADILHA DAS ALMAS\nPRESTA CONTA COM DEUS",
    youtubeUrl: "https://www.youtube.com/watch?v=pqiy3dnQog4"
  },
  {
    id: "pnt-pombagira-4",
    title: "Ponto de Pombagira - Pra ser rainha não é só sentar no trono",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "PRA SER RAINHA NÃO É SÓ SENTAR NO TRONO\nPRA SER RAINHA TEM QUE SABER GOVERNAR\nPRA SER RAINHA NÃO É SÓ SENTAR NO TRONO\nPRA SER RAINHA TEM QUE SABER GOVERNAR\nSENTADA NO SEU TRONO\nMANDARAM LHE CHAMAR\nBOA NOITE GENTE\nMARIA PADILHA ESTAVA LÁ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-5",
    title: "Ponto de Pombagira - Salve Maria Padilha",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "PERAMBULAVA PELAS RUAS\nJÁ SEM SABER O QUE FAZER\nPROCURAVA NA NOITE\nUMA SOLUÇÃO PRA TANTA DOR\nSOFRIMENTO E SOLIDÃO\nENTÃO EU CLAMEI AO POVO DA RUA\nQUE ME ENVIASSE NO MOMENTO ALGUMA AJUDA\nPOIS EU JÁ NÃO TINHA FORÇAS PRA CONTINUAR\nQUANDO ME VIREI, VI UMA MULHER\nNA BEIRA DA ESTRADA\nTRAZIA UMA ROSA EM SUA MÃO\nUM FEITIÇO NO OLHAR\nNAQUELA BELA NOITE DE LUAR\nVISLUMBREI SUA DANÇA COM SUA SAIA A RODAR\nEU ME APROXIMEI E LHE PERGUNTEI O QUE ELA FAZIA NA ESTRADA\nELA RESPONDEU: MOÇO, SOU RAINHA, VIM LHE AJUDAR, SOU MARIA PADILHA!\nSALVE MARIA PADILHA!\nQUANDO PRECISEI, OH POMBOGIRA, VOCÊ\nVEIO ME AJUDAR\nTU DESTE OUTRO RUMO A MINHA VIDA\nHOJE EU VENHO TE LOUVAR!",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-6",
    title: "Ponto de Pombagira - Abre essa cova eu quero ver tremer (Maria Padilha das Almas)",
    guideOrOrixa: "Pombagira",
    type: "Chamada",
    lyrics: "ABRE ESSA COVA QUE EU QUERO VER TREMER\nABRE ESSA COVA QUE EU QUERO VER BALANCEAR [2X]\nMARIA PADILHA DAS ALMAS\nO CEMITÉRIO É SEU LUGAR\nÉ NA CALUNGA QUE A PADILHA MORA\nÉ NA CALUNGA QUE A PADILHA VAI GIRAR [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=Czvv8Yo3n7M"
  },
  {
    id: "pnt-pombagira-7",
    title: "Ponto de Pombagira - A Padilha tem um gato",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "A PADILHA TEM UM GATO\nQUE NÃO É DE BRINCADEIRA [2X]\nMEIO-DIA ELE É GATO\nMEIA-NOITE É EXÚ CAVEIRA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-8",
    title: "Ponto de Pombagira - Maria Padilha feiticeira",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "MARIA PADILHA FEITICEIRA, FEITICEIRA\nMARIA PADILHA FEITICEIRA, FEITICEIRA\nMARIA PADILHA DA CALUNGA\nO SEU FEITIÇO NÃO É DE BRINCADEIRA [2X]\nÉ DE QUA QUA QUA\nÉ DE QUA QUA QUA\nÉ DE QUA QUA QUA\nMARIA PADILHA DA CALUNGA\nELA TRABALHA SEM PARAR [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-9",
    title: "Ponto de Pombagira - Padilha, estou lhe chamando",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "PADILHA, PADILHA\nESTOU LHE CHAMANDO [2X]\nMARIA PADILHA TEM UM DEFEITO\nELA BATE O PÉ E SAI ANDANDO [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-10",
    title: "Ponto de Pombagira - Pombo-Gira Padilha das Almas",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "ELA É POMBO-GIRA FORMOSA\nTRABALHA COM UMA ROSA\nE VEM DE LONGE PRA CÁ\nPARA ESSA UMBANDA TÃO LINDA\nCOM A MISSÃO TÃO BONITA\nDE PODER NOS AJUDAR\n[refrão]\nÉ POMBO-GIRA\nPADILHA DAS ALMAS\nPOMBO-GIRA ELA É\nLAROYÊ EXÚ\nA MOJUBÁ A MOJUBÁ\nPEÇA A POMBO-GIRA QUEM TEM FÉ\n[/refrão]\nCOM A SUA SAIA RODADA\nVAIDOSA ENCANTADA\nCONQUISTOU MEU CORAÇÃO\nME OLHE SEMPRE NAS MADRUGADAS\nNÃO DEIXE QUE O MAL ACONTEÇA\nVENHA DAR A PROTEÇÃO\n[refrão]\nÉ POMBO-GIRA\nPADILHA DAS ALMAS\nPOMBO-GIRA ELA É\nLAROYÊ EXÚ\nA MOJUBÁ A MOJUBÁ\nPEÇA A POMBO-GIRA QUEM TEM FÉ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-11",
    title: "Ponto de Pombagira - Maria Padilha, você é a flor perfeita",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "MARIA PADILHA VOCÊ É A FLÔR PERFEITA\nQUE VEM DENTRO DESTA SEITA PARA AQUELES QUE TEM FÉ\nTU ÉS A ROSA QUE PERFUMA A UMBANDA\nVENCEDORA DE DEMANDA COM AMOR E MUITO AXÉ\nMARIA PADILHA\nNÃO ME DEIXA ANDAR SOZINHO\nPONHA A ROSA SEM ESPINHOS\nNOS CAMINHOS ONDE EU PASSAR\nMARIA PADILHA\nNÃO ME DEIXA ANDAR SOZINHO\nPONHA A ROSA SEM ESPINHOS\nNOS CAMINHOS ONDE EU PASSAR\n[refrão]\nOH POMBO-GIRÊ\nOH POMBO-GIRA\nFORME UM TAPETE DE ROSAS\nPRA QUE EU POSSA CAMINHAR\nOH POMBO-GIRÊ\nOH POMBO-GIRA\nFORME UM TAPETE DE ROSAS\nPRA QUE EU POSSA CAMINHAR\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-12",
    title: "Ponto de Pombagira - Tata Mulambo ela mereceu ganhar",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "TATA MULAMBO ELA MERECEU GANHAR\nGANHAR O QUE GANHOU [2X]\nFORAM SETE ROSAS NA CALUNGA\nSETE MARAFOS E UMA SAIA DE CETIM\nMAS COMO TUDO ISSO NÃO BASTASSE\nELA GANHOU UMA COROA DE ATOTÔ\nATOTÔ MEU PAI\nATOTÔ MEU SENHOR\nTATA MULAMBO MERECEU\nO QUE GANHOU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-13",
    title: "Ponto de Pombagira - A bruxa macumbeira chegou (Maria Mulambo)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "A BRUXA MACUMBEIRA CHEGOU\nÉ A MARIA MULAMBO DAS ALMAS TRABALHOU [2X]\nQUANDO ELA VEM COM SUA VASSOURA DE TRAPO\nVEM GIRANDO E GARGALHANDO\nBEBENDO SANGUE DE RATO\nSE NÃO ACREDITA\nVEM ME CONHECER\nEU MORO NA LAMA\nSOU MARIA MULAMBÊ\nA BRUXA MACUMBEIRA CHEGOU\nÉ A MARIA MULAMBO DAS ALMAS TRABALHOU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-14",
    title: "Ponto de Pombagira - Lá vem ela (Maria Mulambo)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "[refrão]\nLÁ VEM ELA OH, CAMINHANDO PELA RUA\nLÁ VEM A MARIA MULAMBO\nCOM TIRIRI\nMARABÔ E TRANCA-RUA [2X]\n[/refrão]\nOH QUE NOITE TÃO BONITA\nCOMO BRILHA O LUAR\nABRAM ALAS MINHA GENTE\nQUE A MULAMBO VAI CHEGAR\nCANTA UM PONTO BEM BONITO\nQUE A MULAMBO VAI DANÇAR\nO TRABALHO DESSA MOÇA\nFAZ A UMBANDA ADMIRAR\n+ refrão\nA LUA BRILHAVA\nTIRIRI BEBIA\nTRANCA-RUA CANTAVA\nMARABÔ SORRIA\nSÃO TODOS EXÚ DE FAMA\nSÃO TODOS EXÚ DE FÉ\nSARAVÁ MARIA MULAMBO\nE TODO EXÚ QUE AQUI VIER",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-15",
    title: "Ponto de Pombagira - Mentira, mentira sim (Maria Padilha)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "MENTIRA, MENTIRA SIM\nTU ENGANA AS MULHERES\nNÃO TENTE MENTIR PRA MIM\nTU ENGANA AS MULHERES\nNÃO TENTE MENTIR PRA MIM\nEU SOU MARIA PADILHA\nSENHORA DA NOITE\nRAINHA DA ENCRUZILHADA\nMENTIRA, MENTISTES SIM (ou me disse sim)\nEU SOU MARIA PADILHA\nSENHORA DA NOITE\nRAINHA DA ENCRUZILHADA\nMENTIRA, MENTISTES SIM (ou me disse sim)",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-16",
    title: "Ponto de Pombagira - Olha a saia dela (Maria Mulambo)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "OLHA A SAIA DELA\nÉ MULAMBO SÓ\nSUA SAIA TEM SETE METROS\nSETE METROS MULAMBO SÓ...",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-17",
    title: "Ponto de Pombagira - Maria Mulambo (Mas oh que rua tão escura)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "MAS OH QUE RUA TÃO ESCURA\nQUE VEM PASSANDO AQUELA MOÇA [2X]\nOH VESTIDINHO DE CHITA ESTALANDO OSSO\nOSSO POR OSSO [2X]\nMAS ELA É A POMBO-GIRA\nMAS ELA É TATA MULAMBO [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-18",
    title: "Ponto de Pombagira - Maria Mulambo - Foi numa noite de luar",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "FOI NUMA NOITE DE LUAR.\nQUE EU ENCONTREI NA ENCRUZA, UMA MOÇA A TRABALHAR.\nFOI NUMA NOITE DE LUAR.\nQUE EU ENCONTREI NA ENCRUZA, UMA MOÇA A TRABALHAR.\nME DEU BOA NOITE, DISSE:\nMOÇO NÃO SE ENGANA.\nEU SOU POMBA GIRA, POUCOS CONHECEM MINHA FAMA.\nMUITOS JÁ TENTARAM JOGAR O MEU NOME NA LAMA.\nHOJE NA CALUNGA CONHECEM MULAMBO DE FAMA!\nFOI NUMA NOITE DE LUAR.\nQUE EU ENCONTREI NA ENCRUZA, UMA MOÇA A TRABALHAR.\nFOI NUMA NOITE DE LUAR.\nQUE EU ENCONTREI NA ENCRUZA, UMA MOÇA A TRABALHAR.\nME DEU BOA NOITE, DISSE:\nMOÇO NÃO SE ENGANA.\nEU SOU POMBA GIRA, POUCOS CONHECEM MINHA FAMA.\nVENHO DA CALUNGA.\nTRABALHAR NA ENCRUZILHADA.\nBEBER MEU MARAFO, FUMAR MEU CIGARRO,\nDAR MINHA GARGALHADA.\nBEBER MEU MARAFO, FUMAR MEU CIGARRO,\nDAR MINHA GARGALHADA.",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-19",
    title: "Ponto de Pombagira - Na porta da calunga (Maria Quitéria)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "[refrão]\nQUI QUI QUI QUI QUI\nQUI QUI QUI QUITÉRIA\nQUI QUI QUI QUI QUI\nQUI QUI QUI QUITÉRIA\n[/refrão]\nELA TRABALHA DE NOITE\nELA TRABALHA NO INFERNO\nNA PORTA DA CALUNGA\nNO MEIO DO CRUZEIRO",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-20",
    title: "Ponto de Pombagira - Se a sua catacumba tem mistério (Rosa Caveira)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "SE A SUA CATACUMBA TEM MISTÉRIO\nMAS ELA É A RAINHA DO CEMITÉRIO [2X]\n[refrão]\nMAS ELA É LOIRA\nDE UM OLHO AZUL\nROSA CAVEIRA\nÉ POMBO-GIRA DE OMULÚ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-21",
    title: "Ponto de Pombagira - Foi em uma estrada velha (Figueira)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "FOI EM UMA ESTRADA VELHA\nNA SUBIDA DE UMA SERRA\nNUMA NOITE DE LUAR\nDE LUAR DE LUAR\nPOMBO-GIRA DA FIGUEIRA\nMOÇA BELA E FACEIRA\nDAVA O SEU GARGALHAR\n[refrão]\nELA É MOJUBÁ\nELA É MOJUBÁ\nELA É MOJUBÁ\nELA É MOJUBÁ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-22",
    title: "Ponto de Pombagira - Rosa Negra",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "É NEGRA , É SOBERANA E PODEROSA\nÉ A MAIS BELA DAS ROSAS QUE ENCANTAM O MEU JARDIM\nLÁ NA CALUNGA É LUZ QUE NOS DÁ CAMINHO\nNUNCA NOS DEIXA SOZINHA\nSEMPRE PRONTA PARA NOS AJUDAR\nÉ RICA DE MAGIA E DE BELEZA\nÉ FONTE DE ALEGRIA\nA ONDE HOUVER TRISTEZA\nSUA MISSÃO É PRATICAR A CARIDADE\nDEMONSTRANDO LEALDADE\nTRABALHANDO PARA O BEM\nAJUDANDO A QUEM PRECISA\nE A QUEM NÃO PRECISA TAMBÉM\nMAS SE VOCÊ NÃO ACREDITA\nUM DIA HÁ DE ACREDITAR\nQUANDO PASSAR PELA CALUNGA\nE A ROSA-NEGRA ESTIVER LÁ [2X]\n[refrão]\nRI QUA QUA QUA\nRI QUA QUA QUA\nÉ POMBO-GIRA ROSA-NEGRA\nNA CALUNGA A GARGALHAR [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-23",
    title: "Ponto de Pombagira - Ciganinha da sandália de pau",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "CIGANINHA, CIGANINHA\nDA SANDÁLIA DE PAU\nCIGANINHA, CIGANINHA\nDA SANDÁLIA DE PAU\nQUANDO ELA BATE O PÉ\nELA TRAZ O BEM E LEVA O MAL\nQUANDO ELA BATE O PÉ\nELA TRAZ O BEM E LEVA O MAL",
    youtubeUrl: "https://www.youtube.com/watch?v=AFvxRlyKvhM"
  },
  {
    id: "pnt-pombagira-24",
    title: "Ponto de Pombagira - Bem que eu lhe avisei pra você não jogar comigo (Cigana)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "BEM QUE EU LHE AVISEI\nPRA VOCÊ NÃO JOGAR\nESSA CARTADA COMIGO [2X]\nVOCÊ PAROU NA DAMA\nE EU PAREI NO VALETE\nAMIGO, VOCÊ NÃO SE ENGANA\nPOMBO-GIRA CIGANA É POMBO-GIRA DE FAMA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=AFvxRlyKvhM"
  },
  {
    id: "pnt-pombagira-25",
    title: "Ponto de Pombagira - Ganhei uma barraca nova (Cigana)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "GANHEI UMA BARRACA NOVA\nFOI A CIGANA QUE ME DEU [2X]\nO QUE É MEU É DA CIGANA\nO QUE É DELA NÃO É MEU [2X]\n[refrão]\nCIGANINHA PUERÊ\nPUERÊ PUERÁ\nCIGANINHA PUERÊ\nPUERÊ PUERÁ\nCIGANINHA PUERÊ\nPUERÊ PUERÁ\nCIGANINHA PUERÊ\nPUERÊ PUERÁ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=BypNnavT79w"
  },
  {
    id: "pnt-pombagira-26",
    title: "Ponto de Pombagira - Cigana da estrada (Vinha caminhando pela rua)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "VINHA CAMINHANDO PELA RUA\nQUANDO UMA MOÇA BONITA EU VI\nVINHA CAMINHANDO PELA RUA\nQUANDO UMA MOÇA BONITA EU VI\nCOM A SUA SANDÁLIA DE PRATA\nSUA SAIA DOURADA\nELA SORRIU PARA MIM\nCOM A SUA SANDÁLIA DE PRATA\nSUA SAIA DOURADA\nELA SORRIU PARA MIM\nEU PERGUNTEI A ELA\nAONDE FICA A SUA MORADA\nELA RESPONDEU PRA MIM ASSIM\nMORO NUMA ESTRADA SEM FIM\n...\nMORO NUMA ESTRADA SEM FIM",
    youtubeUrl: "https://www.youtube.com/watch?v=AFvxRlyKvhM"
  },
  {
    id: "pnt-pombagira-27",
    title: "Ponto de Pombagira - Cigana da estrada (Quem nesse mundo nunca ouviu dizer)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "QUEM NESSE MUNDO NUNCA OUVIU DIZER\nQUEM NESSE MUNDO NUNCA OUVIU FALAR\nQUEM NESSE MUNDO NUNCA OUVIU DIZER\nQUEM NESSE MUNDO NUNCA OUVIU FALAR\nDE UMA CIGANA QUE MORA NAQUELA ESTRADA\nELA TEM SUA MORADA SOB O CLARÃO DO LUAR\nDE UMA CIGANA QUE MORA NAQUELA ESTRADA\nELA TEM SUA MORADA SOB O CLARÃO DO LUAR\nCIGANA DA ESTRADA, FORÇA PODEROSA\nME DÊ PROTEÇÃO E AXÉ CIGANINHA FORMOSA\nCIGANA DA ESTRADA, FORÇA PODEROSA\nME DÊ PROTEÇÃO E AXÉ CIGANINHA FORMOSA",
    youtubeUrl: "https://www.youtube.com/watch?v=AFvxRlyKvhM"
  },
  {
    id: "pnt-pombagira-28",
    title: "Ponto de Pombagira - Cigana (Vinha caminhando a pé)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "VINHA CAMINHANDO A PÉ\nPARA VER SE ENCONTRAVA\nUMA CIGANA DE FÉ\nVINHA CAMINHANDO A PÉ\nPARA VER SE ENCONTRAVA\nUMA CIGANA DE FÉ\nELA PAROU E LEU MINHA MÃO\nE DISSE TODA PURA VERDADE\nEU SÓ QUERIA SABER\nAONDE MORA A POMBO-GIRA CIGANA\nEU SÓ QUERIA SABER\nAONDE MORA A POMBO-GIRA CIGANA",
    youtubeUrl: "https://www.youtube.com/watch?v=AFvxRlyKvhM"
  },
  {
    id: "pnt-pombagira-29",
    title: "Ponto de Pombagira - Não mexa com ela não",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "NÃO MEXA COM ELA NÃO\nELA É PONTA DE AGULHA\nQUEM MEXER COM A _______________\nVAI PARAR NA SEPULTURA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-30",
    title: "Ponto de Pombagira - Na minha casa não tem porta nem janela",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "NA MINHA CASA NÃO TEM PORTA NEM JANELA\nO QUE É DE BOM O VENTO TRÁS O QUE É DE RUIM O VENTO LEVA [2X]\nÔHHH ÔHH ÔHH\nA DONA DA CASA CHEGOU ÔHHH ÔHH ÔHH\nA DONA DA CASA CHEGOU",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-31",
    title: "Ponto de Pombagira - Eu juro que vou matar essa andorinha",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "EU JURO QUE VOU MATAR\nESSA ANDORINHA\nEU JURO QUE VOU MATAR\nESSA MULHER [2X]\nESSA MULHER\nESTA FAZENDO ARRUAÇA\nNA MINHA CALUNGA\nEU VOU MATAR ESSA MULHER [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-32",
    title: "Ponto de Pombagira - Dói dói dói",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "DÓI DÓI DÓI DÓI DÓI\nUM AMOR FAZ SOFRER\nDOIS AMORES\nFAZ CHORAR [2X]\n[refrão]\nQUEM É VOCÊ\nPRA DEITAR NA MINHA CAMA\nPAPAGAIO COME MILHO\nPERIQUITO LEVA FAMA\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-33",
    title: "Ponto de Pombagira - Vai ter volta",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "E VAI TER VOLTA , E VAI TER VOLTA\nQUANDO EU ESTAVA NO CHÃO VOCÊ ME ABANDONOU, NÃO É PRAGA MAIS\nUM DIA AINDA VOU VÊ SUA DOR\nEU FALO PRA VOCÊ QUERIDO\nEU NUNCA ANDEI SOZINHA\nPOIS TENHO DONA MULAMBO\nQUE ANDA EM MEUS CAMINHOS\nQUANDO EU TAVA NA AMARGURA\nFOI ELA QUEM ME AJUDOU\nSALVE POMBA GIRA MENINA QUE TIROU A MINHA DOR\nVOU PROCURAR UM NOVO AMOR\nSOZINHA NÃO VOU FICAR\nSALVE POMBA GIRA CIGANA QUE REINA\nEM MEU CAMINHAR\nA TRAIÇÃO QUE TU ME DEU\nAGUENTEI COM MUITA DOR\nMAIS NÃO TEM PROBLEMAS\nO MUNDO SEMPRE DA VOLTAS MEU AMOR\nENTREGUEI PRA ROSA CAVEIRA COM ELA VOCÊ NÃO PODE , TU VAI CONHECER A CAPETA DONA DA MORTE",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-34",
    title: "Ponto de Pombagira - Ela gosta do amarelo",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "ELA GOSTA DO AMARELO\nELA GOSTA DO AMARELO\nMAS É OURO QUE ELA QUER\nELA GOSTA DO AMARELO\nELA GOSTA DO AMARELO\nMAS É OURO QUE ELA QUER\nBRILHOU O SOL\nBRILHOU A LUA\nERA TANTO OURO\nESPALHADO PELA RUA\nBRILHOU O SOL\nBRILHOU A LUA\nERA TANTO OURO\nESPALHADO PELA RUA",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-35",
    title: "Ponto de Pombagira - Foi condenada pela lei da Inquisição",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "FOI CONDENADA PELA LEI DA INQUISIÇÃO\nPARA SER QUEIMADA VIVA SEXTA-FEIRA DA PAIXÃO [2X]\nO PADRE REZAVA E O POVO ACOMPANHAVA\nQUANTO MAIS O FOGO ARDIA\nELA DAVA GARGALHADA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-36",
    title: "Ponto de Pombagira - Pombo-Gira é de Maceió",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "POMBO-GIRA AUÊ AUÊ\nPOMBO-GIRA É DE MACEIÓ [2X]\nONDE MORA A POMBO-GIRA\nELA MORA EM MACEIÓ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-37",
    title: "Ponto de Pombagira - Disseram que mataram a pombo-gira",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "DISSERAM QUE MATARAM A POMBO-GIRA\nMAS MENTIRA, ELA NÃO MORREU\nO VENTO SOPROU NA ENCRUZILHADA\nE COM UMA GARGALHADA, ELA APARECEU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-38",
    title: "Ponto de Pombagira - Eu matei, eu soltei pombo",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "EU MATEI, EU SOLTEI POMBO\nEU QUERO VER POMBO-GIRA [2X]\nRÉU RÉU RÉU\nRÉU RÉU OHH [2X]\nA CARRUAGEM QUEBROU NA ESTRADA\nA POMBO-GIRA É ABUSADA\nE ELA VAI A PÉ",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-39",
    title: "Ponto de Pombagira - Quando eu era menina",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "QUANDO EU ERA MENINA\nEU FUI LARGADA\nNA PORTA DE UM CABARÉ\nMENINA VOLTA PRA CASA\nAQUI NÃO ENTRA CRIANÇA\nAQUI SÓ ENTRA MULHER\n[refrão]\nDIZ ALELUIA\nDIZ ALELUIA\nEU VOU MOSTRAR QUEM É CRIANÇA\nMAS TAMBÉM É MULHER DA RUA\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-40",
    title: "Ponto de Pombagira - É uma casa de pombo-gira",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "É UMA CASA DE POMBO\nÉ DE POMBO-GIRA\nÉ UMA CASA DE POMBO\nÉ DE POMBO-GIRA\n[refrão]\nAUÊ AUÊ\nAUÊ AUÁ\nAUÊ AUÊ\nAUÊ AUÁ\nÉ POMBO-GIRA É MOJUBÁ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-41",
    title: "Ponto de Pombagira - Deu meia-noite a lua se escondeu",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "Deu meia-noite\nA lua se escondeu\nLá na encruzilhada dando a sua gargalhada\nPombo-gira apareceu\n[refrão]\nAlaruê , Alaruê , AlaruêêeÊê…\nEmojubá, emojubá, emojubááá…\nEle é odara , dando a sua gargalhada\nQuem tem fé nessa lebara\nÉ só pedir que ele dá\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-42",
    title: "Ponto de Pombagira - Beba, beba, beba na porta de um botequim",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "BEBA BEBA BEBA BEBA\nBEBA BEBA BEBA BEBA\nNA PORTA DE UM BOTEQUIM\nBEBA BEBA BEBA BEBA\nBEBA BEBA BEBA BEBA\nNA PORTA DE UM BOTEQUIM\nELA BEBE SIM\nNINGUÉM TEM NADA COM ISSO\nELA BEBE O SEU MARAFO\nE AINDA FAZ O SEU FEITIÇO\nELA BEBE SIM\nNINGUÉM TEM NADA COM ISSO\nELA BEBE O SEU MARAFO\nE AINDA FAZ O SEU FEITIÇO",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-43",
    title: "Ponto de Pombagira - A pombo-gira girou",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "A POMBO-GIRA GIROU\nGIROU E MANDOU AVISAR [2X]\nQUE HOJE TEM FESTA NA CALUNGA\nTEM CLARÃO DA LUA PRA QUEM CHEGAR\nQUE HOJE TEM FESTA NA ENCRUZA\nTEM CLARÃO DA LUA PRA QUEM CHEGAR",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-44",
    title: "Ponto de Pombagira - Pombagira é mulher (Na boca de quem não presta)",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "POMBAGIRA É MULHER\nDE DOMINGO ATE SEGUNDA (BIS)\nNA BOCA DE QUEM NAO PRESTA\nPOMBAGIRA É VAGABUNDA\nOH GIRE, GIRE\nOH GIRE, GIRÁ\nELA TEM SETE MARIDOS\nMAS NAO PODE SE CASAR (BIS)",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-45",
    title: "Ponto de Pombagira - De vermelho e negro",
    guideOrOrixa: "Pombagira",
    type: "Sustentação",
    lyrics: "\" DE VERMELHO E NEGRO, VESTINDO A NOITE O MISTÉRIO TRAZ\nDE COLAR DE OURO, BRINCO DOURADO A PROMESSA FAZ\nSE É PRECISO IR, VOCE PODE IR FAÇA O QUE QUISER\nMAS CUIDADO AMIGO ELA É BONITA, ELA É MULHER (2X)\nE NO CANTO DA RUA, ZOMBANDO\nZOMBANDO, ZOMBANDO ESTÁ\nELA É MOÇA BONITA, OH GIRANDO\nOH GIRANDO,OH GIRANDO LÁ (2X)\nOH GIRANDO LÁ,OH LELE\nOH GIRANDOLA, OH LALA\nOH GIRANDO LÁ,OH LELE\nOH GIRANDOLA, OH LALA (2X)",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-pombagira-46",
    title: "Ponto de Pombagira - Acabou, seu marafo acabou (Subida)",
    guideOrOrixa: "Pombagira",
    type: "Subida",
    lyrics: "ACABOU\nSEU MARAFO ACABOU\nFECHOU\nO CABARÉ FECHOU [2X]\n[refrão]\nCAMINHA POMBO-GIRA CAMINHA\nESTÁ NA HORA DE CAMINHAR [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=O3ciguSZduE"
  },
  {
    id: "pnt-exu-1",
    title: "Ponto de Exú - Lá na porteira eu deixei meu sentinela",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "LÁ NA PORTEIRA\nEU DEIXEI UM SENTINELA (2X)\nEU DEIXEI SEU (NOME DO EXU)\nTOMANDO CONTA DA CANCELA (2XX)\nLÁ NA PORTEIRA\nEU DEIXEI OS SENTINELAS (2X)\nEU DEIXEI EXUS E POMBA GIRAS\nTOMANDO CONTA DA CANCELA (2X)",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-2",
    title: "Ponto de Exú - Olha quem vem lá no portão",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "OLHA QUEM VEM LÁ NO PORTÃO\nDE CAPA E CARTOLA E PÉ NO CHÃO [2X]\nSERÁ SEU __________\nSERÁ , SERÁ\nSERÁ SEU __________\nSERÁ , SERÁ\nSERÁ SEU __________\nSERÁ , SERÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-3",
    title: "Ponto de Exú - Dá uma volta lá fora",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "EXÚ _________\nDÁ UMA VOLTA LÁ FORA [2X]\nQUEM FOR BOM , BOTA PRA DENTRO\nE QUEM NÃO FOR DEIXA LÁ FORA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-4",
    title: "Ponto de Exú - Estava passando pela encruza",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "ESTA PASSANDO PELA ENCRUZA\nEU AVISTEI UM VULTO\nE PERGUNTEI\nQUEM ERA\n[refrão]\nQUEM ERA\nQUEM ERA\nERA MARIA MULAMBO\nE TRANCA-RUA NA CANCELA [2x]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-5",
    title: "Ponto de Exú - Exú Tiriri (Essa é uma história que aconteceu comigo)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "ESSA É UMA HISTÓRIA, QUE ACONTECEU COMIGO\nANDAVA PELA RUA, E NO CAMINHO SÓ PERIGO\nEU NÃO TINHA PAZ, EU NÃO TINHA VERDADE\nNOS CAMINHOS DA AMARGURA, BUSCAVA FELICIDADE\nFOI ENTÃO QUE NO MEIO DA ENCRUZA\nAVISTEI UM HOMEM COM TRIDENTE NA MÃO.\nME DISSE MOÇO, NÃO TEMAS O PERIGO\nPOIS EXÚ É CAMINHO, ESTOU AQUI PRA LHE AJUDAR.\nQUANDO PRECISAR É SÓ CHAMAR POR MIM\nSOU SEU AMIGO, GUARDIÃO EU ME CHAMO TIRIRI\nQUANDO PRECISAR É SÓ CHAMAR POR MIM\nSOU SEU AMIGO, GUARDIÃO EU ME CHAMO TIRIRI\nÉ TIRIRI, REI DA ENCRUZA\nÉ TIRIRI, REI DA CALUNGA\nSEU TIRIRI, É REI EM QUALQUER LUGAR\nQUE NÃO HÁ PORTAS FECHADAS, QUANDO VEM PRA TRABALHAR.\nÉ TIRIRI, REI DA ENCRUZA.\nÉ TIRIRI, REI DA CALUNGA.\nSEU TIRIRI, É REI EM QUALQUER LUGAR.\nQUE NÃO HÁ PORTAS FECHADAS, QUANDO VEM PRA TRABALHAR.",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-6",
    title: "Ponto de Exú - Na encruzilhada eu louvei Exú (Tiriri)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "NA ENCRUZILHADA EU LOUVEI EXÚ\nLEVEI MARAFO, UM CHARUTO E UMA VELA\nCANTEI UM PONTO PRO EXÚ TIRIRI\nE O QUE EU VI FOI A COISA MAIS BELA\nEU VI UMA LUZ\nOUVI UMA GARGALHADA\nE COM SUA CAPA\nTIRIRI É QUEM CHEGAVA\nELE É MEU AMIGO\nÉ MEU GUARDIÃO\nCONFIO EM TIRIRI\nBOTO MINHA VIDA EM SUAS MÃOS [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-7",
    title: "Ponto de Exú - Festa do Exú Tiriri",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "É MEIA NOITE EM PONTO E O GALO CANTOU\nÉ MEIA NOITE EM PONTO E O GALO CANTOU\nCANTOU PRA ANUNCIAR QUE TIRIRI CHEGOU\nCANTOU PRA ANUNCIAR QUE TIRIRI CHEGOU\nELE VEM DA CALUNGA\nDE CAPA E CARTOLA\nE TRIDENTE NA MÃO\nESSE EXÚ DE FÉ\nÉ QUEM NOS TRÁS O AXÉ\nE NOS DÁ PROTEÇÃO\nELE É EXÚ ODARA\nE VEM PRA TRABALHAR\nCOM SEU PUNHAL ELE CURA\nELE CORTA DEMANDA, ELE SALVA, ELE CURA, EXÚ É MOJUBÁ\nLAROYÊ EXÚ\nEXÚ A MOJUBA\nEU PERGUNTEI A ELE O QUE É EXÚ\nELE VEIO ME FALAR [2X]\nEXÚ É CAMINHO, É ENERGIA, É VIDA, É DETERMINAÇÃO\nÉ CUMPRIDOR DA LEI, EXÚ É ESPERTO, EXÚ É GUARDIÃO\nEXÚ TRABALHO, É ALEGRIA VELOZ, EXÚ É VIVER\nÉ A MAGIA, É O ENCANTO\nÉ O FOGO NO SANGUE, NA VEIA VIBRANDO, EXÚ É LAZER\nLAROYÊ EXÚ\nEXÚ A MOJUBA\nTRAZ SUA FALANGE\nEXÚ TIRIRI PARA TRABALHAR [2X]\nVEM SEU TRANCA-RUAS, MARIA PADILHA E EXÚ MARABÔ\nSETE ENCRUZILHADAS, SEU ZÉ PILINTRA AQUI CHEGOU\nMARIA MULAMBO, MARIA FARRAPO E DONA FIGUEIRA\nDONA SETE SAIAS, POMBO-GIRA MENINA E ROSA VERMELHA\nSETE CATACUMBAS, EXÚ CAVEIRA FIRMA O PONTO AQUI\nE O EXÚ CAPA PRETA ANUNCIOU A FESTA DO EXÚ TIRIRI",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-8",
    title: "Ponto de Exú - Sete Encruzilhadas (Ogum mandou louvar Exú)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "OGUM MANDOU LOUVAR EXÚ\nLAROIÊ, LAROIÊ, LAROIÊ, LAROIÊ [2X]\nELE É TATA NA CALUNGA\nELE É BAMBA NA ENCRUZA\nLAROIÊ, LAROIÊ, LAROIÊ, LAROIÊ\nSUA CAPA É PRETA E ENCARNADA\nLAROIÊ, LAROIÊ, LAROIÊ, LAROIÊ\nELE É MEU AMIGO\nÉ SETE ENCRUZILHADAS\nLAROIÊ, LAROIÊ, LAROIÊ, LAROIÊ\nOGUM MANDOU LOUVAR EXÚ\nLAROIÊ, LAROIÊ, LAROIÊ, LAROIÊ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-9",
    title: "Ponto de Exú - O sino tocou (Sete Encruzilhadas)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "O SINO TOCOU, LÁ NA CALUNGA,\nA LUA CLAREOU.\nSAUDANDO ESSE EXÚ.\nGUARDIÃO DA ENCRUZILHADA E MEU PROTETOR.\nO SINO TOCOU, LÁ NA CALUNGA,\nA LUA CLAREOU.\nSAUDANDO ESSE EXÚ.\nGUARDIÃO DA ENCRUZILHADA E MEU PROTETOR.\nLÁ NA CALUNGA. ELE FAZ A SUA LEI.\nMAS É A MEIA-NOITE NA ENCRUZA.\nQUE ELE É O REI.\nSALVE A SUA CAPA ENCARNADA.\nMEU GUARDIÃO, SEU SETE ENCRUZILHADAS.\nSALVE ESSE EXÚ DE UMBANDA.\nQUE VEM NA NOSSA GIRA,\nCORTAR AS DEMANDAS.\nO SINO TOCOU, LÁ NA CALUNGA,\nA LUA CLAREOU.\nSAUDANDO ESSE EXÚ\nGUARDIÃO DA ENCRUZILHADA E MEU PROTETOR.\nCOM SUA CAPA ELE ME COBRE.\nCOM SEU TRIDENTE ME DEFENDE.\nCOM SEU PUNHAL, ELE FAZ A SUA CURA\nE QUEBRA AS CORRENTES.\nCOM SUA BENGALA E CARTOLA.\nEM MEUS CAMINHOS ME APÓIA.\nCOM ELE NÃO TEMO O PERIGO.\nCOM SEU SETE ENCRUZILHADAS,\nNÃO ESTOU SOZINHO.\nO SINO TOCOU, LÁ NA CALUNGA,\nA LUA CLAREOU.\nSAUDANDO ESSE EXÚ.\nGUARDIÃO DA ENCRUZILHADA E MEU PROTETOR.\nO SINO TOCOU, LÁ NA CALUNGA,\nA LUA CLAREOU.\nSAUDANDO ESSE EXÚ.\nGUARDIÃO DA ENCRUZILHADA E MEU PROTETOR.\nLÁ NA CALUNGA ELE FAZ A SUA LEI.\nMAS É A MEIA-NOITE NA ENCRUZA.\nQUE ELE É O REI.\nSALVE A SUA CAPA ENCARNADA.\nMEU GUARDIÃO, SEU SETE ENCRUZILHADAS.\nSALVE ESSE EXÚ DE UMBANDA.\nQUE VEM NA NOSSA GIRA.\nCORTAR AS DEMANDAS.\nO SINO TOCOU, LÁ NA CALUNGA,\nA LUA CLAREOU.\nSAUDANDO ESSE EXÚ\nGUARDIÃO DA ENCRUZILHADA E MEU PROTETOR.\nCOM SUA CAPA ELE ME COBRE.\nCOM SEU TRIDENTE ME DEFENDE.\nCOM SEU PUNHAL, ELE FAZ A SUA CURA\nE QUEBRA AS CORRENTES.\nCOM SUA BENGALA E CARTOLA.\nEM MEUS CAMINHOS ME APÓIA.\nCOM ELE NÃO TEMO O PERIGO.\nCOM SEU SETE ENCRUZILHADAS,\nNÃO ESTOU SOZINHO.",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-10",
    title: "Ponto de Exú - Dizem que Exú só bebe e dá risada (Sete Encruzilhadas)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "DIZEM QUE EXU SÓ BEBE E DÁ RISADA\nMAS ELE É EXU\nÉ REI DAS SETE ENCRUZILHADAS\nA SUA GIRA É FORTE\nNÃO TEM CAÇOADA\nDEPOIS DA HORA GRANDE\nVAI GIRAR NA ENCRUZILHADA (BIS)",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-11",
    title: "Ponto de Exú - Oi Sete, Sete Encruzilhada",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "OI SETE, OI SETE, OI SETE ENCRUZILHADA\nTOMA CONTA E PRESTA CONTA\nNO ROMPER DA MADRUGADA (BIS)",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-12",
    title: "Ponto de Exú - Odara (Morador da encruzilhada)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "ODARA\nMORADOR DA ENCRUZILHADA\nFIRMA SEU PONTO\nCOM SETE FACAS CRUZADAS\nFILHO DE UMBANDA PEDE COM FÉ\nA SEU SETE ENCRUZILHADAS\nELE DÁ O QUE VOCÊ QUER (BIS)",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-13",
    title: "Ponto de Exú - Ô Luar, Ô Luar (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "Ô LUAR Ô LUAR\nÔ LUAR\nELE É DONO DA RUA\nÔ LUAR Ô LUAR\nÔ LUAR\nELE É DONO DA RUA\nQUEM COMETEU AS SUAS FALTAS\nPEÇA PERDÃO A TRANCA-RUAS\nQUEM COMETEU AS SUAS FALTAS\nPEÇA PERDÃO A TRANCA-RUAS\nTANTO SANGUE DERRAMADO (Ô LUAR)\nEM CIMA DO FRIO CHÃO\nONDE MORA TRANCA-RUAS\nMORA LÁ NO MEU PORTÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=yq3nEz77q1E"
  },
  {
    id: "pnt-exu-14",
    title: "Ponto de Exú - Melhor que Tranca-Rua das Almas não há",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "[refrão]\nLAROIYÊ EXU AMOJUBÁ\nMELHOR QUE TRANCA-RUAS DAS ALMAS NÃO HÁ\nLAROIYÊ EXU AMOJUBÁ\nMELHOR QUE TRANCA-RUAS DAS ALMAS NÃO HÁ\n[/refrão]\nDE CAPA E CARTOLA CAMINHA NA MADRUGADA\nANDARILHO DA ESTRADA SEMPRE COMBATENDO O MAL\nSEU TRANCA RUA MEU AMIGO E CAMARADA,\nDANDO FORTE GARGALHADA, ME LIBRA DE TODO MAL\n[refrão]\nLAROIYÊ EXU AMOJUBÁ\nMELHOR QUE TRANCA-RUAS DAS ALMAS NÃO HÁ\nLAROIYÊ EXU AMOJUBÁ\nMELHOR QUE TRANCA-RUAS DAS ALMAS NÃO HÁ\n[/refrão]\nSETE MARAFOS COLOQUEI NA ENCRUZILHADA\nSETE VELAS E CHARUTO, TAMBÉM LEVEI UM PADÊ\nA MEIA NOITE EU CHAMEI POR SEU TRANCA RUA\nOUVI FORTE GARGALHADA E ELE VEIO ME VALER\n[refrão]\nLAROIYÊ EXU AMOJUBÁ\nMELHOR QUE TRANCA-RUAS DAS ALMAS NÃO HÁ\nLAROIYÊ EXU AMOJUBÁ\nMELHOR QUE TRANCA-RUAS DAS ALMAS NÃO HÁ\n[/refrão]\nFAÇO UM PEDIDO NO MEIO DA ENCRUZILHADA\nA TRANCA RUA DAS ALMAS, ANTES DO GALO CANTAR.\nSE O GALO CANTA, É SINAL QUE TA NA HORA,\nFIRMA GIRA MEU OGÃN QUE TRANCA-RUAS VAI EMBORA",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-15",
    title: "Ponto de Exú - Tranca-Rua é ordenança de Ogum",
    guideOrOrixa: "Exú",
    type: "Chamada",
    lyrics: "MEIA-NOITE TRANCA-RUA NA ENCRUZA\nPROTEGE QUEM TÁ NA RUA\nDAS MALADAS\nQUE VIER\nCORTA O PERIGO\nAJUDA E FAZ A CARIDADE\nQUEM INSISTE ELE ENCARA\nE AMANSA UM POR UM\n[refrão]\nTRANCA-RUA É ORDENANÇA DE OGUM\nTRANCA-RUA É ORDENANÇA DE OGUM\nTRANCA-RUA É ORDENANÇA DE OGUM\nTRANCA-RUA É ORDENANÇA DE OGUM\n[/refrão]\nÉ TRANCA-RUA\nÉ TRANCA-RUA\nÉ TRANCA-RUA O MEU PROTETOR\nÉ TRANCA-RUA\nÉ TRANCA-RUA\nÉ TRANCA-RUA O MEU PROTETOR\n[refrão]\nTRANCA-RUA É ORDENANÇA DE OGUM\nTRANCA-RUA É ORDENANÇA DE OGUM\nTRANCA-RUA É ORDENANÇA DE OGUM\nTRANCA-RUA É ORDENANÇA DE OGUM\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-16",
    title: "Ponto de Exú - Ele é capitão da encruzilhada (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "ELE É CAPITÃO DA ENCRUZILHADA\nELE É, MAS ELE É\nORDENANÇA DE OGUM [2X]\nSUA DIVISA QUEM LHE DEU FOI OXALÁ\nSUA COROA QUEM LHE DEU FOI OMULÚ\nSALVE O SOL\nSALVE A ESTRELA\nSALVE A LUA\nSARAVÁ SEU TRANCA-RUA QUE É DONO A GIRA\nNO MEIO DA RUA [2X]\nENAÊ EMOJUBÁ\nENAÊ EMOJUBÁ\nSARAVÁ SEU TRANCA-RUA\nQUE É DONO DA GIRA NO MEIO DA RUA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-17",
    title: "Ponto de Exú - Ele nasceu em Mato Grosso (Tranca-Rua de Embaré)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "ELE NASCEU EM MATO-GROSSO\nELE NASCEU EM MATO-GROSSO\nE SE CRIOU EM NAZARÉ\nELE É FILHO DE UM XAVANTE\nÉ NETO DE UM NAVEGANTE\nÉ TRANCA-RUA DE EMBARÉ\nÉ OU NÃO É\nSEU TRANCA-RUA DE EMBARÉ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-18",
    title: "Ponto de Exú - Deu um clarão na encruzilhada (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "DEU UM CLARÃO NA ENCRUZILHADA\nE DO CLARÃO SURGIU UM GARGALHADA [2X]\nNÃO ERA O SOL\nNÃO ERA A LUA\nO QUE BRILHAVA\nERA O MESTRE TRANCA-RUAS [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-19",
    title: "Ponto de Exú - Dono do meu caminho (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "QUANDO O SOL AQUI NÃO MAIS BRILHAR\nQUANDO A LUA SEU CLARÃO REFLETIR\nÉ SINAL QUE ESTÁ NA HORA\nÉ ELE QUE CHEGA AGORA JÁ DEU MEIA-NOITE\nTRANCA-RUA CHEGOU AQUI [2X]\nJUROU AMAR ALGUÉM NA ENCRUZILHADA\nJUROU FAZER O BEM DE MADRUGADA\nPEDE COM FÉ\nCOMPANHEIRO E AMIGO LEAL\nQUE QUEBRA FEITIÇO E TAMBÉM DESFAZ O MAL\nE TODA VEZ QUE NA RUA EU CAMINHAR\nE OUVIR AO LONGE SUA VOZ A ECOAR\nTENHO CERTEZA QUE AGORA NÃO ANDO SOZINHO\nSEU TRANCA-RUA É DONO DO MEU CAMINHO [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-20",
    title: "Ponto de Exú - Se quiser me ver, suba no barranco Zé (Tranca-Rua de Embaré)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "SE QUISER ME VER\nSUBA NO BARRANCO ZÉ\nO HOMEM É\nTRANCA-RUA DE EMBARÉ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-21",
    title: "Ponto de Exú - Eu amei alguém (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "EU AMEI ALGUÉM\nE ESSE ALGUÉM NÃO AMOU NINGUÉM [2X]\n[refrão]\nEU AMEI O SOL\nEU AMEI A LUA\nMAS NA ENCRUZILHADA\nEU AMEI SEU TRANCA-RUA\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-22",
    title: "Ponto de Exú - O sino da igrejinha (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "O SINO DA IGREJINHA\nFAZ BELÉM, BLÉM, BLOM [2X]\nDEU MEIA-NOITE O GALO JÁ CANTOU\nSEU TRANCA-RUAS QUE É DONO DA GIRA\nOH CORRE GIRA\nQUE OGUM MANDOU [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-23",
    title: "Ponto de Exú - Quando passar na encruzilhada (Tranca-Ruas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "QUANDO PASSAR NA ENCRUZILHADA\nN'AO SE ESQUEÇA DE OLHAR PRA TRÁS [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-24",
    title: "Ponto de Exú - Ventou no canavial (Marabô)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "VENTOU NO CANAVIAL\nUM TROVÃO LÁ NO CÉU ECOOU\nVENTOU NO CANAVIAL\nUM TROVÃO LÁ NO CÉU ECOOU\nSALVE IANSÃ E XANGÔ\nSALVE A COROA DO EXÚ MARABÔ\nSALVE IANSÃ E XANGÔ\nSALVE A COROA DO EXÚ MARABÔ",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-25",
    title: "Ponto de Exú - O Bruxo (Marabô)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "À meia noite,\nAo cair da madrugada,\nGalo canta, é a alvorada\nPia itatuité.\nNem sei de onde começou a caminhada:\nEncruza, calunga, estrada…?\nVenha de onde vier\nEle é o mago, o senhor das oferendas,\nO homem das velhas lendas\nQue fazem o sague gelar;\nEle é o bruxo que faz cura, faz feitiço,\nEm macumba de catiço.\nEna Ena Mojubá!\n[refrão]\nExu Marabô.\nExu Marabô ôh ôh\nExu Marabô\nExu Mrabô\nEle, Elebara.\nEle Alarô\nExu Marabô\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-26",
    title: "Ponto de Exú - Foi nas almas que eu conheci Marabô",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "FOI NAS ALMAS\nNAS ALMAS QUE EU CONHECI MACUMBA [2X]\nFOI , OH FOI NAS ALMAS\nQUE EU CONHECI NAGÔ\nFOI, OH FOI NAS ALMAS\nQUE EU CONHECI MARABÔ",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-27",
    title: "Ponto de Exú - Deu meia-noite na terra e no mar (Meia-Noite)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "DEU MEIA-NOITE NA TERRA E NO MAR\nDEU NO MATO\nNA CALUNGA\nEM TODO LUGAR\nDEU MEIA-NOITE NA TERRA E NO MAR\nDEU NO MATO\nNA CALUNGA\nEM TODO LUGAR\nSEU MEIA-NOITE NÃO TEM HORA PRA CHEGAR\nQUANDO CHEGA MEIA-NOITE\nCHEGA EM QUALQUER LUGAR\nSEU MEIA-NOITE NÃO TEM HORA PRA CHEGAR\nQUANDO CHEGA MEIA-NOITE\nCHEGA EM QUALQUER LUGAR",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-28",
    title: "Ponto de Exú - É a hora, é chegada a hora (Caveira)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "É A HORA\nÉ CHEGADA A HORA\nDE FIRMAR NOSSA PORTEIRA\nCOM A FORÇA DA FALANGE DOS CAVEIRAS [2X]\nVAMOS TODOS BATER PALMAS\nPARA QUANDO EXÚ CHEGAR\nQUERO VER SUA GARGALHADA\nATÉ O DIA CLAREAR\nELE VEM DO CEMITÉRIO\nELE VEM LÁ DA CALUNGA\nSARAVÁ JOÃO CAVEIRA\nE SEU SETE CATACUMBAS\n[refrão]\nÉ A HORA\nÉ CHEGADA A HORA\nDE FIRMAR NOSSA PORTEIRA\nCOM A FORÇA DA FALANGE DOS CAVEIRAS [2X]\n[/refrão]\nO PRIMEIRO ENVIADO É O SEU TATA CAVEIRA\nVOU CHAMAR EXÚ VELUDO (qualquer exú)\nE TAMBÉM SETE PORTEIRAS\nTODOS ELES MENSAGEIROS\nDO NOSSO PAI OMULÚ\nPOR ISSO HOJE A NA GIRA\nVAMOS SARAVÁ EXÚ\n[refrão]\nÉ A HORA\nÉ CHEGADA A HORA\nDE FIRMAR NOSSA PORTEIRA\nCOM A FORÇA DA FALANGE DOS CAVEIRAS [2X]\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-29",
    title: "Ponto de Exú - Portão de ferro, cadeado de madeira (Caveira)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "PORTÃO DE FERRO\nCADEADO DE MADEIRA\nPORTÃO DE FERRO\nCADEADO DE MADEIRA\nÉ NA PORTA DO CEMITÉRIO\nONDE MORA EXÚ CAVEIRA\nÉ NA PORTA DO CEMITÉRIO\nONDE MORA EXÚ CAVEIRA",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-30",
    title: "Ponto de Exú - Folha da bananeira (Caveira)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "Ê, Caveira, firma seu ponto na folha da bananeira,\nExú Caveira! (x2)\nQuando o galo canta é madrugada,\nFoi Exú na encruzilhada, batizado com dendê.\nRezo uma oração de traz pra frente,\nEu queimo fogo e a chama ardente aquece Exú , Ô Laroiê.\nEu ouço a gargalhada do Diabo,\nÉ Caveira, o enviado do Príncipe Lúcifer.\nÉ ele quem comanda o cemitério,\nCatacumba tem mistério, seu feitiço tem axé. Ê Caveira!\nÊ, Caveira, afirma ponto na folha da bananeira, Exú Caveira! (x2)\nNa Calunga, quando ele aparece,\nCredo e cruz, eu rezo prece pra Exú, dono da rua.\nSinto a força deste momento,\nE firmo o meu pensamento nos quatros cantos da rua.\nE peço a ele que me proteja,\nOnde quer que eu esteja ao longo desta caminhada.\nConfio em sua ajuda verdadeira,\nEle é Exú Caveira, Senhor das Encruzilhadas. Ê Caveira !\nÊ, Caveira, afirma ponto na folha da bananeira, Exú Caveira! (x2)",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-31",
    title: "Ponto de Exú - Morte na porteira (Caveira)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "[refrão]\nSE MATAR O BOI\nMATA NA PORTEIRA\nSE MATAR O BOI\nMATA NA PORTEIRA\nCOME A CARNE TODA\nE DEIXA O OSSO PRO CAVEIRA\nCOME A CARNE TODA\nE DEIXA O OXXO PRO CAVEIRA\n[/refrão]\nA PORTEIRA É LARGA\nDEIXA O BOI PASSAR\nSE ELE NÃO MORRER AQUI\nMORRE EM QUALQUER LUGAR",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-32",
    title: "Ponto de Exú - Mosca varejeira (Caveira)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "EH PUERÊ\nEH PUERÁ [2X]\nOLHA MOSCA VAREJEIRA\nSALVE EXÚ CAVEIRA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-33",
    title: "Ponto de Exú - No corredor do cemitério (Sete Catacumbas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "NO CORREDOR DO CEMITÉRIO\nEU AVISTEI SETE CATACUMBAS [2X]\nELE PULAVA NUM PÉ SÓ\nPULANDO DE TUMBA EM TUMBA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-34",
    title: "Ponto de Exú - Quem está dormindo acorda (Lúcifer)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "QUEM ESTÁ DORMINDO ACORDA\nQUEM ESTÁ SENTADO FICA EM PÉ [2X]\nÉ HORA\nÉ HORA\nÉ HORA\nDE SALVAR SEU LÚCIFER [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-35",
    title: "Ponto de Exú - Pinga fogo lá no alto",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "PINGA FOFO LÁ NO ALTO\nPINGA FOGO LÁ NA SERRA [2X]\nABRE A PORTEIRA MINHA GENTE\nEXÚ PINGA FOGO ESTÁ NA TERRA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-36",
    title: "Ponto de Exú - Me cobre com a sua capa (Sete Capas)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "SEU SETE CAPAS\nME COBRE COM A SUA CAPA\nQUEM TEM SUA CAPA ESCAPA\nQUEM TEM SUA CAPA ESCAPA\nA SUA CAPA É UM MANTO DE CARIDADE\nSUA CAPA COBRE TUDO SÓ NÃO COBRE A FALSIDADE [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-37",
    title: "Ponto de Exú - Na estrada tem um ganga (Sete Porteiras)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "NA ESTRADA TEM UM GANGA\nGANGA NÃO LEVA CARREIRA [2X]\nQUANDO A DEMANDA É GRANDE\nCHAMA POR SETE PORTEIRAS [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-38",
    title: "Ponto de Exú - Debaixo daquela figueira",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "DEBAIXO DAQUELA FIGUEIRA\nFIZERAM UM FEITIÇO PRA ME DERRUBAR\nDEBAIXO DAQUELA FIGUEIRA\nFIZERAM UM FEITIÇO PRA ME DERRUBAR\nNO DIA DA FESTA EU VOU LÁ\nNO DIA DA FESTA EU VOU LÁ\nNO DIA DA FESTA EU VOU LÁ\nNO DIA DA FESTA EU VOU LÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-39",
    title: "Ponto de Exú - Plantei jiló, nasceu quiabo (Quimbanda)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "PLANTEI JILÓ\nNASCEU QUIABO\nPLANTEI JILÓ\nNASCEU QUIABO\nQUE FAMÍLIA É ESSA?\nÉ A FAMÍLIA DO DIABO\nQUE FAMÍLIA É ESSA?\nÉ A FAMÍLIA DO DIABO",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-40",
    title: "Ponto de Exú - Bode preto bé bé (Quimbanda)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "MEU BODE PRETO BÉ BÉ\nAFIRMA PONTO QUEM TEM\nMEU BODE PRETO BÉ BÉ\nAFIRMA PONTO QUEM TEM\nMEU EXÚ TÁ VIRADO NA LINHA DO CÃO\nDERRUBA INIMIGO NO CHÃO\nMEU EXÚ TÁ VIRADO NA LINHA DO CÃO\nDERRUBA INIMIGO NO CHÃO",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-41",
    title: "Ponto de Exú - Estava dormindo na porteira do gongá",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "ESTAVA DORMINDO NA PORTEIRA DO GONGÁ\nESTAVA DORMINDO NA PORTEIRA DO GONGÁ\nQUEM TEM INIMIGO NÃO DORME\nLEVANTA PRA TRABALHAR\nQUEM TEM INIMIGO NÃO DORME\nLEVANTA PRA TRABALHAR",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-42",
    title: "Ponto de Exú - Não mexa com o povo da calunga",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "NÃO MEXA COM O POVO DA CALUNGA\nNÃO MEXA COM O POVO DA CALUNGA\nA COVA PODE SER RASA MAS A TERRA É PROFUNDA\nA COVA PODE SER RASA MAS A TERRA É PROFUNDA\nNÃO É BRINCADEIRA PENSE BEM ANTES DE ENTRAR\nTEM GUARDIÃO NA PORTEIRA\nSENTINELA A VIGIAR\nPRESTE ATENÇÃO NO CAMINHO QUE ESCOLHER\nPODE NÃO HAVER RETORNO\nQUANDO SE ARREPENDER\nNÃO MEXA COM O POVO DA CALUNGA\nNÃO MEXA COM O POVO DA CALUNGA\nA COVA PODE SER RASA MAS A TERRA É PROFUNDA\nA COVA PODE SER RASA MAS A TERRA É PROFUNDA\nTOME CUIDADO COM AQUILO QUE PEDIR\nPOIS PERDE A TRANQUILIDADE\nQUEM VIVE PRA DESTRUIR\nNÃO FAÇA AOS OUTROS\nO QUE NÃO QUER RECEBER\nPOIS O MAL SE TORNA O DOBRO\nQUANDO VOLTA PRA VOCÊ\nNÃO MEXA COM O POVO DA CALUNGA\nNÃO MEXA COM O POVO DA CALUNGA\nA COVA PODE SER RASA MAS A TERRA É PROFUNDA\nA COVA PODE SER RASA MAS A TERRA É PROFUNDA",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-43",
    title: "Ponto de Exú - Me disseram que essa casa ia cair",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "ME DISSERAM QUE ESSA CASA IA CAIR\nME DISSERAM QUE ESSA CASA IA CAIR\nMAS ELA É MADEIRA\nQUE NÃO DÁ CUPIM [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-44",
    title: "Ponto de Exú - Diabo velho eu vou cortar seu chifre",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "DIABO VELHO EU VOU CORTAR SEU CHIFRE\nVOU CORTAR SEU RABO E DAR PRA EXÚ COMER [2X]\nDA SUA LÍNGUA VOU FAZER CHICOTE\nPRA BATER NAS COSTAS DE QUEM FALA MAL DE MIM [2X]\n[refrão]\nFALA MAL DE MIM, SÓ NÃO FALA POR DE TRÁS\nFALA MAL DE MIM, SÓ NÃO FALA POR DE TRÁS\nPEGA ELA DIABO, PEGA ELA SATANÁS\nPEGA ELA DIABO, PEGA ELA SATANÁS\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-45",
    title: "Ponto de Exú - Santo Antônio de batalha",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "SANTA ANTÔNIO DE BATALHA\nFAZ DE MIM BATALHADOR\nCORRE GIRA SANTO ANTÔNIO\nTRANCA-RUA E MARABÔ [2X]\nSANTA ANTÔNIO DE BATALHA\nFAZ DE MIM BATALHADOR\nCORRE GIRA SANTO ANTÔNIO\nTRANCA-RUA E MARABÔ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-46",
    title: "Ponto de Exú - Bate no couro Ogan pra Exú (Sustentação)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "BATE NO COURO OGAN PRA EXÚ\nDIZENDO LA LA Ê LA LA Ô\nBATE NO COURO OGAN PRA EXÚ\nDIZENDO LA LA Ê LA LA Ô\nÊ LA LA Ê LA LA Ô\nÊ LA LA Ê LA LA Ô\nÊ LA LA Ê LA LA Ô\nÊ LA LA Ê LA LA Ô\nCAVUCA MURUNDÚ QUE MURUNDÚ É FUNDO\nEU VOU BUSCAR ESSE DIABO LÁ NO FIM DO MUNDO\nCAVUCA MURUNDÚ QUE MURUNDÚ É FUNDO\nEU VOU BUSCAR ESSE DIABO LÁ NO FIM DO MUNDO",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-47",
    title: "Ponto de Exú - Exú pede licença",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "OGUM EXÚ PEDE LICENÇA\nPARA O POVO ARRIAR\nOGUM EXÚ PEDE LICENÇA\nPARA O POVO ARRIAR\nMAS ELE É UM EXÚ GUERREIRO\nVEM TRAZENDO FORÇAS PARA ESSE TERREIRO\nMAS ELE É UM EXÚ GUERREIRO\nVEM TRAZENDO FORÇAS PARA ESSE TERREIRO",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-48",
    title: "Ponto de Exú - Exú a lala ô, a mojúba",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "EXÚ A LALA Ô\nA LALA Ô A MOJUBÁ\nEXÚ A LALA Ô\nA LALA Ô A MOJUBÁ\nSEU TRANCA-RUA [EXÚ] É DA QUERÊ QUERÊ\nMARIA PADILHA [POMBO-GIRA] É DA QUERÊ QUERÁ\nEXÚ CAVEIRA É DA QUERÊ QUERÊ\nMARIA MULAMBO É DA QUERÊ QUERÁ\nEXÚ A LALA Ô\nA LALA Ô A MOJUBÁ\nEXÚ A LALA Ô\nA LALA Ô A MOJUBÁ\n[EXÚ] É DA QUERÊ QUERÊ\n[POMBO-GIRA] É DA QUERÊ QUERÁ",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-49",
    title: "Ponto de Exú - Olho grande e braços fortes",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "OLHO GRANDE E BRAÇOS FORTES\nEXÚ VELUDO VEM TRAZENDO A SORTE\nOLHO GRANDE E BRAÇOS FORTES\nEXÚ CAVEIRA VEM TRAZENDO A SORTE",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-50",
    title: "Ponto de Exú - É só pedir com fé",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "[refrão]\nÉ POIS É\nEXÚ DÁ CAMINHO\nÉ SÓ PEDIR COM FÉ\n[/refrão]\nA NOITE É LINDA NO CÉU BRILHA A LUA\nFAÇO UMA ORAÇÃO AO SEU TRANCA-RUAS\nHOMEM VALENTE, MEU PROTETOR\nREI DA ENCRUZILHADA É SEU MARABÔ\nO GALO CANTA DENTRO DA CALUNGA\nSAUDANDO A MAGIA DE SETE CATACUMBAS\nSUAS PALAVRAS SÃO VERDADEIRAS\nQUEM AVISA AMIGO É, DISSE SEU CAVEIRA\n[refrão]\nÉ POIS É\nEXÚ DÁ CAMINHO\nÉ SÓ PEDIR COM FÉ\n[/refrão]\nAO LADO DELE SEI QUE ESTOU SEGURO\nNÃO TENHO NADA A TEMER, ELE É EXÚ VELUDO\nSE ESTOU EM PERIGO, ELE VEM AGIR\nSALVE O EXÚ MENINO, SALVE SEU TIRIRI\nMEUS INIMIGOS NÃO TIRAM MEU SOSSEGO\nTENHO O OMBRO AMIGO DO EXÚ MORCEGO\nE AS MANDINGAS QUE JOGARAM EM MIM\nQUEM CORTOU BRINCANDO FOI EXÚ MIRÍM\nPODE ACREDITAR\nEXÚ VAI LHE AJUDAR\nÉ SÓ PEDIR COM FÉ\nQUE A SUA VIDA VAI MUDAR[2X]\n[refrão]\nÉ POIS É\nEXÚ DÁ CAMINHO\nÉ SÓ PEDIR COM FÉ\n[/refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-51",
    title: "Ponto de Exú - Boa noite (Veludo)",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "QUANDO AMANHECE\nEXÚ VELUDO DÁ BOA NOITE\nQUANDO ANOITECE\nEXÚ VELUDO DÁ BOA NOITE\nBOA NOITE\nBOA NOITE\nBOA NOITE\nEXÚ VELUDO BOA NOITE [2x]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-52",
    title: "Ponto de Exú - Laroyê Exú",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "LAROYÊ EXÚ\nAH LAROYÊ\nLAROYÊ EXÚ\nLAROYÊ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-53",
    title: "Ponto de Exú - Exú pisa no toco",
    guideOrOrixa: "Exú",
    type: "Sustentação",
    lyrics: "EXÚ PISA NO TOCO\nEXÚ PISA NO GALHO\nO GALHO BALANÇA\nEXÚ NÃO CAI, OH GANGA\nEXÚ\nEXÚ PISA NO TOCO\nEM UM GALHO SÓ [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-54",
    title: "Ponto de Exú - Ogum mandou tirar um ponto pra Exú ir embora (Subida)",
    guideOrOrixa: "Exú",
    type: "Subida",
    lyrics: "OGUM MANDOU\nOGUM MANDOU\nTIRAR UM PONTO\nPRA EXÚ IR EMBORA [2X]\nAH É IR AGORA\nÉ IR AGORA\nAH TODOS OS EXÚS\nJÁ VÃO EMBORA [2X]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-55",
    title: "Ponto de Exú - Exú da porteira (Subida)",
    guideOrOrixa: "Exú",
    type: "Subida",
    lyrics: "EXÚ PLANTOU BANANEIRA MEIA-NOITE\nPLANTOU UM GALHO NA BEIRA DO CAMINHO [2X]\nSAI DA FRENTE QUE ESSE CABRA É VALENTE\nDEPOIS DA MEIA-NOITE ELE VIRA FEITICEIRO\nELE VAI GIRAR\nELE VAI GIRAR\nLÁ NA PORTEIRA\nELE VAI GIRAR",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  },
  {
    id: "pnt-exu-56",
    title: "Ponto de Exú - Calunga está lhe chamando (Subida)",
    guideOrOrixa: "Exú",
    type: "Subida",
    lyrics: "[refrão]\nCALUNGA ESTÁ LHE CHAMANDO\nOH FIRMA EXÚ VAI GIRAR\nQUEM TIVER SUAS DEMANDAS\nPEDE COM FÉ QUE ELES VÃO LEVAR [2X]\n[/refrão]\nCAVEIRA TRABALHOU NA UMBANDA\nDONA FIGUEIRA FIRMOU MINHA GIRA\nCOM TRANCA-RUA E SEU TIRIRI\nEXÚ VELUDO E MARIA PADILHA\n+ [refrão]\nPADILHA VAI PARA ENCRUZILHADA\nEXÚ CAVEIRA PRO CEMITÉRIO\nTIRI, EXÚ VELUDO E MARABÔ\nVÃO AMARRANDO A COISA RUIM NO FERRO [2X]\n+ [refrão]",
    youtubeUrl: "https://www.youtube.com/watch?v=R1bkpasSl9M"
  }
];
