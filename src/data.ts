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
  {
    id: "les-t1-1",
    title: "Módulo 1: O Cambono no TUCPB",
    category: "TRILHA I: A RAIZ",
    description: `## Formação de Cambonos — Módulo I\n\n### Fundamentos, Ética e a Postura Sagrada do Cambono\n\nEste primeiro módulo apresenta os fundamentos essenciais para compreender a verdadeira importância do cambono dentro da Umbanda e dos trabalhos espirituais realizados no Templo Umbandista Caboclo Pena Branca.\n\nMuito além de executar tarefas ou auxiliar fisicamente uma Entidade, o cambono exerce uma função sagrada. Ele é o guardião do médium, o acolhedor do consulente, o intérprete das orientações espirituais e a base que contribui para que o trabalho da Entidade aconteça com segurança, equilíbrio e organização.\n\nAo longo deste estudo, o aluno compreenderá o cambono como uma âncora energética, responsável por manter a atenção, a lucidez e o aterramento necessários durante o atendimento espiritual. Também aprenderá que cambonar é uma das mais importantes escolas de desenvolvimento mediúnico, pois ensina, por meio do serviço, valores como humildade, disciplina, responsabilidade e presença de espírito.\n\nO módulo aborda ainda a ética e o sigilo sagrado. Tudo o que é ouvido durante um atendimento pertence àquele momento e deve ser preservado com absoluto respeito. O cambono não julga, não comenta e não expõe as dores do consulente. Sua postura deve ser baseada na empatia, na neutralidade e no acolhimento, reconhecendo o toco como um verdadeiro confessionário espiritual.\n\nOutro ponto fundamental é a atenção plena dentro do terreiro. O cambono precisa permanecer atento ao Guia, ao médium e ao consulente, percebendo necessidades, prevenindo riscos e oferecendo suporte antes, durante e depois dos trabalhos. Também deve traduzir as mensagens da Entidade com clareza e fidelidade, sem alterar, acrescentar ou interpretar de maneira indevida aquilo que foi transmitido.\n\nPor fim, serão estudados os princípios de hierarquia, disciplina e proteção espiritual. O cambono deve respeitar as orientações da casa, comunicar situações inadequadas às chefias e cumprir corretamente os preceitos determinados, cuidando de seu próprio equilíbrio para não interferir negativamente no campo energético do médium que está auxiliando.\n\nEste módulo é um convite à consciência e ao compromisso. Ser cambono é escolher servir com silêncio, atenção, respeito e amor à caridade. É tornar-se a base firme e muitas vezes invisível sobre a qual o trabalho espiritual acontece.\n\nAo concluir este estudo, o aluno deverá compreender que o cambono não ocupa uma função menor: ele é um dos pilares fundamentais do terreiro.\n\nVista o seu branco com responsabilidade, humildade e orgulho. A caridade também acontece por meio das suas mãos.\n\nAxé!\n\n*Conteúdo elaborado com base no material oficial do Módulo I — Fundamentos, Ética e a Postura Sagrada do Cambono, do Templo Umbandista Caboclo Pena Branca.*`,
    duration: "Módulo 1",
    instructor: "Babá Felipe",
    date: "08 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/Q2O-4HL31Gw",
    imageUrl: "https://img.youtube.com/vi/Q2O-4HL31Gw/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1UjjoYlEP40VrvXP2DUhgWvbHoMWBWAAm/view?usp=sharing",
    level: "Todos",
    tags: ["Cambono", "Mediunidade", "Módulo 1"]
  },

  {
    id: "les-t1-2",
    title: "Módulo 2: O Espaço Sagrado, a Preparação e o Arsenal Magístico",
    category: "TRILHA I: A RAIZ",
    description: `## Formação de Cambonos — Módulo II\n\n### O Espaço Sagrado, a Preparação e o Arsenal Magístico\n\nEste segundo módulo apresenta os conhecimentos práticos necessários para que o cambono compreenda o funcionamento do terreiro, prepare-se corretamente para os trabalhos espirituais e organize os instrumentos utilizados pelas Entidades durante os atendimentos.\n\nDepois de estudar a ética, o silêncio e a postura sagrada, o aluno passa a conhecer a dimensão física e energética do terreiro. Na Umbanda, a matéria é um veículo para a manifestação do Axé. Ervas, velas, pembas, fumos, bebidas e outros elementos são utilizados pelas Entidades como instrumentos de limpeza, proteção, equilíbrio e direcionamento das forças espirituais.\n\nAo longo deste estudo, o aluno compreenderá que o terreiro não é apenas um salão onde acontecem as giras. Ele é um organismo vivo, formado por diferentes pontos de força, cada um com uma função específica dentro da estrutura espiritual da casa.\n\nO Congá é apresentado como o grande centro magnético do terreiro, onde estão firmadas as forças dos Orixás e os fundamentos espirituais da casa. O cambono deve reverenciá-lo, respeitar seu espaço e aproximar-se somente quando houver necessidade, orientação da chefia ou solicitação direta de uma Entidade.\n\nA Tronqueira é o ponto de proteção e defesa ligado às forças de Exu e Pombagira. Nesse espaço são trabalhadas e desagregadas energias densas, demandas e cargas trazidas pelos consulentes. Por esse motivo, o cambono não deve tocar nas firmezas sem autorização e precisa manter atenção redobrada durante os trabalhos de Esquerda.\n\nA assistência, local onde os consulentes aguardam atendimento, também faz parte do espaço sagrado. A responsabilidade do cambono começa antes de o consulente chegar ao toco. Manter o ambiente organizado, silencioso e acolhedor contribui para que a pessoa se acalme e comece a receber os benefícios da corrente espiritual desde sua chegada.\n\nO módulo também destaca a importância da preparação pessoal. O cambono participa diretamente da movimentação de energias sutis e, por isso, precisa cuidar de seu corpo, de sua mente e de seu campo espiritual.\n\nOs banhos de defesa e energização são recursos utilizados para limpar, fortalecer e proteger o campo áurico. Ao realizar o banho, o cambono deve manter pensamentos elevados e mentalizar a água retirando as energias negativas, enquanto as propriedades das ervas formam uma proteção ao seu redor.\n\nO preceito também é uma parte fundamental dessa preparação. A abstinência de carne vermelha, álcool e relações sexuais antes da gira não deve ser entendida como castigo, mas como uma tecnologia espiritual. Ela ajuda a reduzir as influências mais densas sobre o corpo, favorece a intuição e dificulta o acoplamento de energias negativas durante os atendimentos.\n\nOutro ensinamento importante deste módulo é a defumação. Esse trabalho representa a união dos elementos da natureza: a Terra está presente nas ervas, o Fogo na brasa e o Ar na fumaça que conduz o Axé das plantas pelo ambiente.\n\nO cambono que realiza a defumação não está apenas movimentando um turíbulo. Ele deve permanecer concentrado e mentalizar a desagregação das energias nocivas. Nos trabalhos de descarrego, a defumação é conduzida dos fundos do terreiro em direção à porta, expulsando as cargas negativas. Nos trabalhos de energização, o movimento parte da entrada em direção ao Congá, conduzindo o Axé para o interior da casa.\n\nO módulo apresenta ainda o chamado arsenal magístico, formado pelos principais elementos que devem estar preparados na bandeja ou no ponto de trabalho da Entidade.\n\nAs velas representam o Fogo direcionado. Elas iluminam caminhos, sustentam firmezas e auxiliam na queima de cordões energéticos negativos. O cambono deve acendê-las no local correto, firmá-las com segurança e observar constantemente para evitar quedas, apagamentos ou acidentes.\n\nA pemba representa o elemento Terra e é utilizada pelas Entidades para riscar pontos, formando circuitos magísticos de atração, proteção, limpeza ou repulsão de energias. O cambono deve disponibilizar as cores necessárias, preservar os pontos riscados e jamais pisar sobre eles.\n\nO fumo, utilizado por meio de charutos, cachimbos ou cigarros, não representa um vício da Entidade. Sua fumaça atua como um instrumento individual de limpeza, absorvendo miasmas e direcionando forças para o campo do consulente. Cabe ao cambono acender o fumo, entregá-lo corretamente, cuidar das cinzas e realizar seu descarte conforme as orientações da casa.\n\nAs bebidas, também chamadas de curiadores, representam o fluido magnético relacionado ao elemento Água. Podem ser usadas pelas Entidades para movimentar cargas, realizar descarregos ou fortalecer energeticamente o médium. O cambono deve servir a quantidade solicitada em recipientes limpos, mantendo atenção ao comportamento físico do médium e comunicando qualquer situação inadequada à chefia.\n\nEste módulo mostra que o trabalho do cambono começa muito antes da incorporação. Preparar o espaço, organizar os materiais, cuidar da limpeza e manter cada elemento no local correto são atitudes que contribuem diretamente para a segurança e a eficiência do atendimento espiritual.\n\nAo concluir este estudo, o aluno deverá reconhecer os principais espaços sagrados do terreiro, compreender a importância do preceito e saber preparar corretamente os instrumentos utilizados pelas Entidades durante as giras.\n\nOrganizar a matéria também é servir ao espírito. Quando existe limpeza, disciplina e preparação, o Axé encontra os caminhos necessários para se manifestar.\n\nAxé!\n\n*Conteúdo elaborado com base no material oficial do Módulo II — O Espaço Sagrado, a Preparação e o Arsenal Magístico, do Templo Umbandista Caboclo Pena Branca.*`,
    duration: "Módulo 2",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/pMF9wTf7jnw",
    imageUrl: "https://img.youtube.com/vi/pMF9wTf7jnw/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1PDHZz3OCVE1fyB7rhLW9DMrT4YR7bGS4/view?usp=drive_link",
    level: "Todos",
    tags: ["Cambono", "Mediunidade", "Módulo 2"]
  },

  {
    id: "les-t1-3",
    title: "Módulo 3: A Dinâmica com as Entidades e o Atendimento no Toco",
    category: "TRILHA I: A RAIZ",
    description: `## Formação de Cambonos — Módulo III\n\n### A Dinâmica com as Entidades e o Atendimento no Toco\n\nEste terceiro módulo apresenta os conhecimentos necessários para que o cambono atue diretamente ao lado das Entidades durante os atendimentos espirituais. Depois de preparar a mente, o corpo e o espaço sagrado, chega o momento de compreender a dinâmica do trabalho no toco, desde a chegada do Guia até o encerramento da incorporação.\n\nCambonar não significa apenas permanecer em pé ao lado do médium. O cambono é o elo entre dois mundos: de um lado, a Entidade que se manifesta com sua linguagem, sua vibração e sua forma particular de trabalhar; do outro, o consulente que chega fragilizado, ansioso ou emocionalmente abalado.\n\nPor isso, o cambono deve desenvolver escuta ativa, atenção, sensibilidade e presença de espírito. O sucesso do atendimento depende da maneira como ele recebe o Guia, acolhe o consulente, traduz as mensagens e ampara o médium durante todo o trabalho.\n\nO primeiro ensinamento deste módulo é o cuidado durante a chegada e a subida da Entidade. A incorporação provoca alterações físicas e energéticas no médium, como tremores, mudanças na respiração, movimentos intensos e transformação da postura corporal.\n\nAo perceber os primeiros sinais de irradiação, o cambono deve posicionar-se próximo ao médium, preferencialmente ao lado ou levemente atrás, mantendo-se preparado para oferecer apoio. Sua função é evitar quedas, proteger a cabeça do médium e proporcionar segurança durante a chegada do Guia.\n\nDepois que a Entidade firmar sua presença, o cambono deve saudá-la conforme a linha de trabalho e pedir sua bênção. Esse gesto estabelece uma relação de respeito, confiança e compromisso entre o cambono e o Guia que será auxiliado.\n\nO mesmo cuidado deve existir durante a desincorporação, também chamada de subida. Quando a Entidade se despede e libera o corpo, o médium pode apresentar tontura, fraqueza ou desorientação. Nesse momento, o cambono deve apoiá-lo pelos braços ou ombros, chamá-lo pelo nome com voz serena e ajudá-lo a retomar a consciência do ambiente. Quando necessário, poderá oferecer água para auxiliar no equilíbrio e no aterramento energético.\n\nO módulo também apresenta as características das principais linhas de trabalho. Cada falange possui uma vibração, uma linguagem e uma maneira particular de movimentar o Axé. Conhecer essas diferenças permite que o cambono se antecipe às necessidades da Entidade e ofereça um atendimento mais eficiente.\n\nOs Caboclos manifestam uma energia forte, objetiva e dinâmica. Seus trabalhos estão ligados à coragem, à ação e à limpeza energética. O cambono que os acompanha precisa ser ágil, atento e pronto para entregar rapidamente ervas, charutos e outros elementos solicitados.\n\nOs Pretos e Pretas Velhas trabalham com paciência, sabedoria, acolhimento e profunda escuta. Geralmente falam de maneira baixa, utilizam metáforas e conduzem o atendimento em um ritmo mais sereno. O cambono deve aproximar-se para ouvi-los, respeitar seu tempo e auxiliar o consulente a compreender suas palavras.\n\nOs Baianos, Boiadeiros e Marinheiros apresentam uma dinâmica marcada pelo movimento, pela alegria e pela quebra da rigidez emocional. Podem utilizar expressões regionais, brincadeiras e verdades transmitidas de forma direta. O cambono deve prestar atenção ao linguajar, aos movimentos corporais e aos curiadores empregados durante os trabalhos.\n\nOs Exus e as Pombagiras atuam com intensidade, firmeza, proteção e profunda capacidade de trabalhar as energias densas da experiência humana. O cambono da Esquerda precisa ter mente limpa, postura segura e absoluto respeito pelo sigilo, pois nesses atendimentos os consulentes podem revelar dores, medos e aspectos muito íntimos de suas vidas.\n\nOutro ponto fundamental deste módulo é a tradução das mensagens espirituais. Algumas Entidades utilizam palavras antigas, regionalismos ou metáforas que podem não ser compreendidas pelo consulente. Nesses casos, o cambono deve explicar a mensagem de maneira simples, clara e acolhedora, preservando exatamente o sentido transmitido pelo Guia.\n\nO cambono nunca deve acrescentar opiniões pessoais, modificar conselhos ou colocar palavras na boca da Entidade. Sua função é servir como intérprete fiel. Caso não tenha compreendido alguma orientação, deve pedir respeitosamente que o Guia repita ou explique novamente.\n\nO atendimento no toco também pode envolver momentos de intensa emoção. Se o consulente começar a chorar compulsivamente ou apresentar sinais de choque emocional, o cambono deve permanecer calmo. Um toque leve e respeitoso no ombro, uma orientação para respirar profundamente e palavras de segurança podem ajudar no processo de estabilização.\n\nNesse momento, o cambono não deve interromper desnecessariamente o trabalho da Entidade. Sua função é acolher e proporcionar segurança para que o consulente expresse sua dor e permita que o atendimento espiritual continue.\n\nO módulo apresenta ainda a importância das anotações, dos pontos riscados e dos receituários. Durante um atendimento, o consulente pode estar tão emocionado que não conseguirá lembrar todas as orientações recebidas. Por isso, todo cambono deve manter um pequeno caderno e uma caneta disponíveis.\n\nQuando a Entidade recomendar um banho, uma vela, uma firmeza ou outro procedimento, o cambono deverá registrar tudo de maneira legível e detalhada. No caso dos banhos de ervas, deve anotar quais plantas serão utilizadas, como serão preparadas, qual será a forma de aplicação e todas as instruções transmitidas pelo Guia.\n\nQuando a Entidade riscar um ponto com pemba e solicitar que ele seja entregue ao consulente, o cambono deverá copiar cada símbolo com exatidão. Um traço acrescentado, retirado ou desenhado incorretamente pode alterar o significado e a finalidade daquele fundamento. A orientação para sua utilização também deve ser registrada exatamente como foi ensinada.\n\nEste módulo mostra que o cambono precisa unir atenção física, sensibilidade espiritual e responsabilidade humana. Ele protege o médium, auxilia a Entidade e acolhe o consulente, garantindo que a comunicação entre esses três pontos aconteça com clareza, segurança e respeito.\n\nAo concluir este estudo, o aluno deverá saber amparar o médium durante a chegada e a subida da Entidade, reconhecer a dinâmica das principais linhas de trabalho, traduzir mensagens sem alterar seu sentido e registrar corretamente as orientações transmitidas no toco.\n\nSer cambono é tornar-se uma ponte segura entre o Guia e o consulente. É ouvir com atenção, traduzir com fidelidade, acolher sem julgamento e servir com respeito.\n\nAxé!\n\n*Conteúdo elaborado com base no material oficial do Módulo III — A Dinâmica com as Entidades e o Atendimento no Toco, do Templo Umbandista Caboclo Pena Branca.*`,
    duration: "Módulo 3",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/XlwP6X25QfA",
    imageUrl: "https://img.youtube.com/vi/XlwP6X25QfA/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/13PJ0rzeY6_OiEQWlUq6PbGSuP0IPPiVs/view?usp=drive_link",
    level: "Todos",
    tags: ["Cambono", "Mediunidade", "Módulo 3"]
  },

  {
    id: "les-t1-4",
    title: "Módulo 4: Elementos Mágicos, Ritualística e a Alquimia de Toco",
    category: "TRILHA I: A RAIZ",
    description: `## Formação de Cambonos — Módulo IV\n\n### Elementos Mágicos, Ritualística e a Alquimia de Toco\n\nEste quarto módulo apresenta os fundamentos práticos da ritualística e da manipulação dos elementos utilizados pelas Entidades durante os atendimentos espirituais. Depois de preparar a postura, o corpo, o espaço sagrado e compreender a dinâmica do trabalho no toco, o cambono passa a estudar com maior profundidade os instrumentos que auxiliam a manifestação e o direcionamento do Axé.\n\nNa Umbanda, magia não deve ser entendida como superstição ou encenação. Ela é a manipulação consciente das forças presentes na natureza. Quando uma Entidade acende uma vela, utiliza uma erva, risca um ponto, sopra a fumaça de um charuto ou movimenta uma bebida, está combinando elementos e frequências para produzir uma ação espiritual específica.\n\nO cambono atua como o instrumentista desse trabalho. Assim como em uma sala de atendimento cada ferramenta precisa estar limpa, preparada e disponível, no toco cada elemento deve ser entregue corretamente e no momento adequado. Para isso, o cambono precisa desenvolver conhecimento, atenção e capacidade de reconhecer a finalidade de cada instrumento solicitado pelo Guia.\n\nO primeiro ensinamento deste módulo é a ciência das velas. A vela representa fisicamente o elemento Fogo e funciona como um ponto de captação, emissão e direcionamento de energia. Sua chama pode iluminar, purificar, movimentar, proteger ou auxiliar na desagregação de forças negativas.\n\nFirmar uma vela não é apenas acendê-la. O cambono deve preparar sua base para evitar quedas, utilizar o fósforo com respeito, descartar corretamente o palito queimado e manter atenção constante à segurança do médium e do consulente. A firmeza também deve ser acompanhada de uma intenção consciente, pois a força mental do cambono contribui para potencializar o trabalho solicitado pela Entidade.\n\nO módulo também ensina que as cores das velas funcionam como filtros de determinadas frequências. Cada cor possui características próprias e pode ser utilizadas para finalidades específicas dentro dos fundamentos do Templo Umbandista Caboclo Pena Branca.\n\nA vela branca representa uma frequência universal de paz, elevação, clareza e purificação. Está relacionada a Oxalá, aos Pretos e Pretas Velhas e ao Anjo da Guarda. Na ausência de outra cor solicitada, pode ser utilizada como substituta por reunir simbolicamente todas as frequências da luz.\n\nA vela azul está relacionada, conforme os fundamentos da casa, à força de Ogum e também às águas de Iemanjá. O azul mais intenso representa disciplina, corte de demandas, ordem e abertura de caminhos. Já o azul mais claro está ligado à tranquilidade, ao acolhimento e à limpeza emocional.\n\nA vela vermelha representa vitalidade, ação, movimento e força. No TUCPB, está relacionada a Iansã e também compõe, ao lado do preto, a frequência da Esquerda. Pode ser utilizada para movimentar energias estagnadas, fortalecer o consulente e auxiliar em trabalhos de defesa ativa.\n\nA vela verde está associada às matas, à cura, à regeneração e ao crescimento. É uma frequência ligada a Oxóssi e aos Caboclos, sendo utilizada em trabalhos de recuperação física, equilíbrio, fartura e expansão do conhecimento.\n\nA vela amarela ou dourada está relacionada ao magnetismo, à doçura, ao amor-próprio, à prosperidade e à cura emocional. Representa a frequência de Oxum e pode ser utilizada para harmonizar sentimentos, relacionamentos e questões ligadas à valorização pessoal.\n\nA vela marrom representa solidez, estrutura, concretização e justiça. Está ligada à força de Xangô e também pode aparecer nos trabalhos de Baianos e Boiadeiros. Sua frequência auxilia no aterramento, na firmeza e na busca pelo equilíbrio diante de situações materiais ou espirituais.\n\nA vela roxa ou lilás está relacionada à transmutação profunda, ao encerramento de ciclos e à transformação de energias densas. É associada às forças de Nanã Buruquê e Obaluaiê ou Omulu, devendo ser manipulada com seriedade e respeito.\n\nA vela preta representa absorção e recolhimento de energias. Não simboliza o mal. Dentro dos fundamentos apresentados, atua como um instrumento capaz de puxar, absorver e anular cargas negativas. É utilizada principalmente nos trabalhos da Esquerda e em determinadas atuações ligadas a Omulu.\n\nO módulo também apresenta as velas bicolores, que combinam duas frequências em um único trabalho. Elas funcionam como uma união de forças, permitindo que a Entidade atue simultaneamente em diferentes aspectos do campo espiritual do consulente.\n\nA vela preta e vermelha combina absorção e vitalidade, sendo muito utilizada nas forças de Exu e Pombagira. Enquanto o preto recolhe as cargas densas, o vermelho movimenta e devolve força ao consulente.\n\nA vela branca e preta representa o equilíbrio entre elevação e aterramento. Está relacionada à sabedoria ancestral, às Almas e às forças de transmutação, podendo ser empregada em trabalhos de cura profunda e desligamento de energias sofredoras.\n\nA vela amarela e preta está associada à força de Oxumaré, à renovação dos ciclos e ao movimento contínuo da vida. O preto absorve aquilo que está estagnado, enquanto o amarelo atrai luz, vitalidade e prosperidade.\n\nA vela azul e rosa representa a pureza, a alegria e a cura do coração. Está ligada à Ibejada, a Cosme e Damião e aos Erês. É utilizada em trabalhos de harmonia familiar, cura emocional, inocência e reconexão com a criança interior.\n\nA vela branca e vermelha está relacionada à Linha dos Malandros. Ela combina clareza espiritual, ética e equilíbrio com coragem, vitalidade e capacidade de agir no mundo material. Pode ser utilizada em trabalhos de abertura de caminhos, proteção e enfrentamento de dificuldades práticas.\n\nOutro ponto central deste módulo é a alquimia das ervas no toco. As folhas possuem características energéticas que podem ser reconhecidas por sua forma, temperatura e polaridade. O cambono precisa conhecer essas diferenças para entregar rapidamente o elemento adequado quando solicitado pela Entidade.\n\nNo bate-folha, também chamado de sacudimento, as ervas são utilizadas para absorver e retirar miasmas e cargas acumuladas no campo do consulente. Depois do procedimento, as folhas encontram-se energeticamente saturadas e devem ser recolhidas imediatamente, sem permanecer no chão ou em locais onde outras pessoas possam tocá-las ou pisar sobre elas.\n\nO descarte deve seguir as orientações da casa, utilizando recipiente apropriado e respeitando a finalidade espiritual do trabalho realizado.\n\nNa preparação dos banhos, o cambono também deve reconhecer os princípios presentes nas folhas. As ervas de formato alongado, pontiagudo ou fálico estão relacionadas a uma atuação mais ativa, quente e cortante. São utilizadas em trabalhos de limpeza intensa, aceleração e quebra de demandas.\n\nAs folhas arredondadas, ovais ou de característica receptiva estão relacionadas a uma atuação mais fria, acolhedora e magnetizadora. São utilizadas para acalmar, nutrir, equilibrar e harmonizar o campo espiritual.\n\nToda receita transmitida pela Entidade deve ser anotada com clareza. O cambono precisa registrar as ervas indicadas, a forma de preparo, a temperatura da água, o modo de aplicação e todas as demais orientações. Também deve identificar quando o banho será preparado por infusão ou por maceração a frio.\n\nO terceiro ensinamento do módulo é o uso da pemba e do ponto riscado. A pemba representa o elemento Terra e é utilizada pelas Entidades para registrar símbolos que funcionam como códigos e circuitos magísticos.\n\nO ponto riscado pode atrair, repelir, proteger, descarregar ou transmutar energias. Ele representa a identidade e a ferramenta de trabalho do Guia. Por isso, o cambono jamais deve pisar sobre o desenho ou permitir que o consulente o faça, exceto quando houver uma orientação direta da própria Entidade.\n\nDurante o trabalho, o cambono deve manter a pemba disponível para que o Guia possa reforçar algum traço apagado. Quando for solicitado que o ponto seja levado pelo consulente, sua cópia deve ser feita com absoluta exatidão. A direção de uma flecha, a quantidade de cruzes e cada linha do desenho possuem significado e não podem ser alteradas.\n\nO módulo também aprofunda o conhecimento sobre o fumo e o curiador, elementos que frequentemente são mal compreendidos por quem não conhece os fundamentos da Umbanda.\n\nO fumo, utilizado por meio de charutos, cachimbos ou cigarros, reúne os elementos Ar e Fogo. Sua fumaça funciona como uma defumação individual e direcionada. A Entidade pode utilizá-la para movimentar, aquecer e desagregar crostas energéticas presentes no campo do consulente.\n\nCabe ao cambono acender o fumo, entregá-lo corretamente, observar a brasa e manter o cinzeiro sempre próximo. Ao final do trabalho, o fumo deve ser apagado e descartado de forma respeitosa, seguindo as orientações da casa.\n\nO curiador, que pode ser água, café, vinho, cachaça ou outra bebida determinada pela Entidade, está relacionado ao elemento Água e à movimentação magnética. No caso das bebidas alcoólicas, a volatilidade auxilia simbolicamente na dispersão de energias densas e também pode ser utilizada para trabalhar o campo do médium.\n\nO cambono deve servir apenas a quantidade solicitada, utilizar copos ou coités limpos e manter as garrafas devidamente organizadas. Também é sua responsabilidade observar os limites físicos do médium.\n\nCaso perceba sinais de embriaguez, perda de equilíbrio ou interferência excessiva da matéria, o cambono deve agir com discrição, podendo diluir a bebida ou comunicar imediatamente a situação ao Pai de Santo ou à chefia responsável. Proteger o corpo do médium também faz parte de sua missão.\n\nEste módulo mostra que a magia acontece nos detalhes. A escolha correta de uma folha, a firmeza de uma vela, a reprodução exata de um ponto e o cuidado com o fumo ou com a bebida podem determinar a segurança e a eficiência do atendimento.\n\nAo concluir este estudo, o aluno deverá compreender a função das cores das velas, reconhecer as polaridades das ervas, respeitar a grafia dos pontos riscados e manipular o fumo e os curiadores com conhecimento, segurança e responsabilidade.\n\nO bom cambono não entrega apenas objetos. Ele compreende a finalidade de cada elemento e prepara os caminhos para que a Entidade realize sua alquimia de cura, proteção e transformação.\n\nAxé!\n\n*Conteúdo elaborado com base no material oficial do Módulo IV — Elementos Mágicos, Ritualística e a Alquimia de Toco, do Templo Umbandista Caboclo Pena Branca.*`,
    duration: "Módulo 4",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/Skcguvdl15c",
    imageUrl: "https://img.youtube.com/vi/Skcguvdl15c/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1WJD6zXz5LBUskVLSEUHHcD-GHdoYeTpO/view?usp=drive_link",
    level: "Todos",
    tags: ["Cambono", "Mediunidade", "Módulo 4"]
  },

  {
    id: "les-t1-5",
    title: "Módulo 5: Gestão de Crise, Demandas e Segurança Espiritual",
    category: "TRILHA I: A RAIZ",
    description: `## Formação de Cambonos — Módulo V\n\n### Gestão de Crise, Demandas e Segurança Espiritual\n\nEste quinto módulo apresenta os conhecimentos necessários para que o cambono atue com segurança, equilíbrio e lucidez diante de situações inesperadas durante os trabalhos espirituais.\n\nAo longo da formação, o aluno estudou a postura ética, a preparação do espaço, a dinâmica com as Entidades e a utilização consciente dos elementos magísticos. Agora, chega ao último pilar desse aprendizado: saber agir quando um atendimento foge do cenário habitual e exige uma resposta rápida, firme e responsável.\n\nO terreiro é um espaço de acolhimento e caridade, mas também pode ser comparado a um pronto-socorro de almas. Muitas pessoas chegam carregando dores emocionais profundas, raiva, medo, desequilíbrios, influências espirituais e energias densas. Nessas situações, o cambono representa a primeira linha de proteção física e energética do médium e do consulente.\n\nDiante de uma crise, o cambono não deve agir pelo medo ou pelo desespero. Sua principal ferramenta é a lucidez. Ele precisa manter-se firme como o elemento Terra, observar o que está acontecendo e seguir as orientações da Entidade e da chefia da casa.\n\nO primeiro ensinamento deste módulo é a identificação dos diferentes tipos de crise no toco. Nem todo choro, tremor ou grito significa uma manifestação espiritual negativa. O cambono precisa desenvolver sensibilidade e discernimento para reconhecer as características de cada situação.\n\nA catarse emocional acontece quando sentimentos reprimidos começam a ser liberados durante o atendimento. A energia acolhedora do Guia pode desfazer as defesas emocionais do consulente, fazendo com que ele chore, trema ou expresse uma dor guardada por muito tempo.\n\nNesse caso, não há necessariamente uma presença espiritual hostil. Existe uma pessoa esvaziando emoções acumuladas. O cambono deve permanecer calmo, oferecer um lenço, realizar um toque leve e respeitoso no ombro e transmitir segurança. Não deve interromper o choro nem dizer que a pessoa precisa se controlar. Sua função é permitir que o Guia conduza o processo de acolhimento.\n\nA interferência espiritual apresenta características diferentes. Ela pode ocorrer quando uma energia hostil ou um espírito endurecido reage à presença e à luz da Entidade que realiza o atendimento. O consulente pode mudar o tom de voz, tornar-se agressivo, tentar levantar-se bruscamente ou ameaçar o médium.\n\nNessa situação, o cambono deve agir rapidamente, mas sem gritar, discutir ou desafiar a manifestação. O confronto verbal pode alimentar ainda mais a energia de conflito. Sua primeira responsabilidade é posicionar-se de maneira protetora entre o consulente e o médium, permitindo que o Guia conduza espiritualmente a situação.\n\nCaso exista risco de agressão física, o cambono deve pedir auxílio a outros trabalhadores ou à segurança da casa. A contenção deve ser realizada somente quando necessária, com firmeza, responsabilidade e cuidado para evitar ferimentos.\n\nO terceiro cenário estudado é a irradiação mediúnica do consulente. Ela acontece quando uma pessoa com sensibilidade mediúnica entra em ressonância com a força espiritual do terreiro e começa a apresentar sinais de transe ou aproximação de uma Entidade de luz.\n\nO consulente pode tremer de forma ritmada, alterar a respiração, realizar movimentos característicos de uma linha espiritual ou perder parcialmente a percepção do ambiente. Entretanto, o toco de atendimento não é um espaço destinado ao desenvolvimento mediúnico. A pessoa está ali para receber auxílio, e não para incorporar.\n\nO cambono deve aproximar-se imediatamente, proteger o corpo do consulente e evitar que ele caia do banco ou se machuque. Não deve gritar, assustá-lo ou tentar interromper a irradiação à força. A Entidade responsável pelo atendimento é quem deve comandar e estabilizar a energia.\n\nDepois da intervenção do Guia, o cambono pode realizar o aterramento por meio de um toque firme nos ombros, chamando o consulente pelo nome e orientando-o a respirar profundamente. Um copo de água também pode ser oferecido para ajudá-lo a recuperar a atenção e a estabilidade.\n\nÉ importante que o consulente saia do terreiro plenamente lúcido. Todas as orientações transmitidas pela Entidade, como banhos de ervas frias para acalmar a coroa, devem ser anotadas com clareza.\n\nO módulo também ensina como lidar com demandas e energias densas, especialmente durante trabalhos de Esquerda ou grandes ritos, nos quais o fluxo de pessoas e a intensidade das cargas espirituais podem aumentar.\n\nO cambono precisa compreender o princípio da afinidade energética. Pensamentos de medo, raiva, curiosidade mórbida ou fascinação pelas manifestações podem fragilizar seu equilíbrio e facilitar a aproximação de energias densas.\n\nSua proteção começa pela neutralidade, pela disciplina mental e pela confiança nos fundamentos da casa. O cambono não deve se envolver emocionalmente com a dor ou com a demanda que está sendo trabalhada. Ele auxilia a Entidade, mas não deve absorver para si o conteúdo energético retirado do consulente.\n\nDurante um descarrego mais intenso, o Guia pode pedir que o cambono se afaste ou pode utilizar fumaça para fortalecer sua proteção. Essas orientações devem ser obedediadas imediatamente. Caso sinta o ambiente pesado, o cambono deve firmar o pensamento no Caboclo Pena Branca, controlar a respiração e manter sua atenção no trabalho.\n\nOutro ensinamento fundamental é a irradiação no próprio cambono. Por também ser médium, ele pode sentir os efeitos da intensa movimentação energética presente no toco.\n\nEntre os sinais possíveis estão tontura, aceleração dos batimentos cardíacos, formigamento nas mãos, alteração da respiração, vontade de fechar os olhos ou sensação de que o corpo está sendo conduzido por outra força.\n\nA regra da casa é clara: o cambono em serviço não incorpora. Naquele momento, sua missão é permanecer lúcido e vigilante. Caso se entregue à incorporação, o médium e a Entidade que estavam sob seus cuidados ficarão sem o apoio necessário.\n\nPara controlar a irradiação, o cambono deve utilizar técnicas de aterramento. Pode pressionar os pés firmemente contra o chão, manter os olhos abertos e respirar profundamente. Também pode beber um pouco de água e pedir mentalmente ao próprio Guia que aguarde, pois está cumprindo uma missão de caridade na matéria.\n\nO módulo apresenta ainda os cuidados necessários durante o fechamento e a purificação após a gira. O trabalho não termina quando os atabaques silenciam ou quando o último consulente deixa o terreiro. A gira somente está concluída quando o espaço foi limpo, os materiais foram recolhidos e os trabalhadores estão em segurança.\n\nErvas utilizadas em descarregos, restos de velas, cinzas de fumo, resíduos de bebidas e outros materiais podem ter absorvido energias retiradas dos consulentes. Por isso, devem ser recolhidos com respeito e utilizando os instrumentos adequados, como vassouras, pás, recipientes próprios ou sacos de papel.\n\nO cambono não deve tocar diretamente em resíduos pesados com as mãos desprotegidas. O descarte deve seguir as orientações da chefia, respeitando os locais e procedimentos determinados pela casa.\n\nA limpeza do terreiro também possui um significado espiritual. Varrer o chão não é apenas retirar sujeira física. Durante a varredura, o cambono deve mentalizar a retirada de todos os resíduos energéticos que permaneceram no ambiente, conduzindo-os para fora da egrégora.\n\nDepois de concluir os trabalhos, o cambono também precisa cuidar de sua purificação pessoal. Ao chegar em casa, deve realizar primeiro seu banho higiênico e, em seguida, quando orientado, utilizar um banho de ervas frias e calmantes.\n\nErvas como boldo, manjericão ou camomila podem ser utilizadas, conforme os fundamentos e as orientações da casa, para acalmar o campo energético, reduzir a agitação provocada pelo trabalho e favorecer um descanso reparador.\n\nEste módulo encerra a formação mostrando que a segurança espiritual depende de conhecimento, disciplina e equilíbrio. O bom cambono não se deixa dominar pelo medo, não age por impulso e não abandona seu posto diante das dificuldades. Ele observa, protege, comunica e confia na autoridade espiritual e hierárquica da casa.\n\nAo concluir este estudo, o aluno deverá saber diferenciar uma catarse emocional, uma interferência espiritual e uma irradiação mediúnica; agir corretamente diante de crises; proteger seu próprio campo energético; controlar a irradiação durante o serviço e realizar o fechamento seguro dos trabalhos.\n\nSer cambono é permanecer firme quando tudo ao redor parece instável. É proteger sem violência, acolher sem medo e servir com lucidez, disciplina e confiança nos Guias e nos fundamentos da casa.\n\n\nA formação termina, mas o verdadeiro aprendizado começa no momento em que o cambono veste o branco, assume seu posto e coloca cada ensinamento a serviço da caridade.\n\nAxé!\n\n*Conteúdo elaborado com base no material oficial do Módulo V — Gestão de Crise, Demandas e Segurança Espiritual, do Templo Umbandista Caboclo Pena Branca.*`,
    duration: "Módulo 5",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/cdhTUGJU3i0",
    imageUrl: "https://img.youtube.com/vi/cdhTUGJU3i0/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1i77d4g2l5Smeto207go054HqcB1b_XAN/view?usp=drive_link",
    level: "Todos",
    tags: ["Cambono", "Mediunidade", "Módulo 5"]
  },

  {
    id: "les-t2-1",
    title: "Módulo 1: Fundamentos e Linguagem",
    category: "TRILHA II: O TRONCO",
    description: `## Módulo 1 — Fundamentos e Linguagem
### Compreendendo a mediunidade entre fé, experiência, ciência e tradição

A mediunidade é uma experiência humana antiga, presente em diferentes povos, culturas e tradições religiosas. Entretanto, antes de estudar incorporação, transe, vidência, psicofonia ou qualquer outra manifestação, é necessário compreender o que estamos chamando de mediunidade e quais linguagens podem ser utilizadas para falar sobre ela.

O primeiro módulo do estudo “Mediunidade — fundamentos, experiência e desenvolvimento na Umbanda” estabelece as bases que acompanharão toda a formação. Seu propósito é oferecer ao estudante uma compreensão ampla, responsável e respeitosa do fenômeno mediúnico, reconhecendo a importância da fé sem transformar a ciência em inimiga da religião e sem utilizar a religião para negar questões relacionadas à saúde mental.

Ao longo deste módulo, estudaremos a mediunidade como experiência espiritual, fenômeno humano, campo de investigação e prática formada dentro de uma comunidade religiosa. Também conheceremos aspectos importantes da história da Umbanda, suas diferentes matrizes e o papel do terreiro na construção da disciplina, do pertencimento e da responsabilidade mediúnica.

### O que você estudará neste módulo

O Módulo 1 acompanha os quatro capítulos da primeira parte do livro:
- O que chamamos de mediunidade
- Três lentes: fé, experiência e ciência
- Umbanda: história, matrizes e diversidade
- O terreiro como comunidade de formação

Esses capítulos formam a base conceitual necessária para compreender os fenômenos, os cuidados e os ensinamentos que serão aprofundados nos módulos seguintes.

### Capítulo 1 — O que chamamos de mediunidade

Antes de classificar uma experiência como incorporação, intuição, vidência ou comunicação espiritual, precisamos fazer uma pergunta fundamental:

**O que exatamente estamos chamando de mediunidade?**

Nas tradições espiritualistas, a mediunidade costuma ser compreendida como a capacidade de perceber, receber ou expressar influências atribuídas a espíritos, guias, ancestrais ou consciências espirituais.

Essa capacidade pode manifestar-se por meio de pensamentos, sensações, movimentos, imagens, palavras, sonhos, alterações de percepção ou estados de transe. Porém, a maneira como cada manifestação é compreendida depende da tradição religiosa, da cultura, da comunidade e da trajetória de quem vive a experiência.

Na psicologia e na antropologia, o interesse pode estar na forma como a experiência é sentida, no contexto em que ela ocorre, nas alterações de consciência, na produção de significado e na relação entre o indivíduo e sua comunidade.

Isso significa que diferentes áreas podem estudar a mesma experiência fazendo perguntas distintas.

A religião pode perguntar:
*Qual entidade está se manifestando e qual é o sentido espiritual dessa comunicação?*

A psicologia pode perguntar:
*Como a pessoa vivencia essa mudança de consciência e quais efeitos ela produz em sua vida?*

A antropologia pode perguntar:
*Como a comunidade reconhece, organiza e interpreta essa experiência?*

A ciência pode observar comportamentos, relatos e atividades cerebrais, mas não consegue determinar, apenas por esses registros, a origem espiritual de uma manifestação. A interpretação espiritual pertence ao campo da fé, da tradição e da experiência religiosa.

#### Uma experiência presente em diferentes culturas

Experiências de mediação com o mundo espiritual aparecem em muitas sociedades ao longo da história. Elas podem ser encontradas:
- no xamanismo;
- nos oráculos da Antiguidade;
- nas tradições proféticas;
- nas religiões africanas;
- nas espiritualidades indígenas;
- nas filosofias orientais;
- no Espiritismo;
- na Umbanda;
- em diversas tradições populares.

Entretanto, a presença de experiências semelhantes não significa que todas sejam iguais.

Um pajé, um oráculo da Antiguidade, um médium de psicografia e um filho de santo em transe pertencem a sistemas culturais e religiosos diferentes. Cada tradição possui sua própria linguagem, seus símbolos, seus métodos de preparação e suas formas de interpretar a experiência.

O ponto de aproximação está na ideia de mediação: uma pessoa estabelece contato, comunicação ou relação com forças, seres, memórias ou dimensões consideradas invisíveis.

### Capítulo 2 — Três lentes: fé, experiência e ciência

Uma lente permite enxergar determinados aspectos de uma realidade, mas não mostra tudo ao mesmo tempo. Para estudar a mediunidade de maneira responsável, precisamos aprender a olhar por diferentes lentes.

Neste módulo, trabalharemos com três:

#### A lente da fé

A lente religiosa interpreta a mediunidade por meio de conceitos como:
- espíritos;
- guias;
- Orixás;
- ancestrais;
- missão;
- caridade;
- desenvolvimento;
- compromisso espiritual.

Para a Umbanda, a mediunidade não é apenas um fenômeno individual. Ela está inserida em uma relação com o sagrado, com as entidades, com a comunidade e com o trabalho de cuidado realizado no terreiro.

A fé procura compreender o sentido espiritual da experiência.

#### A lente da experiência

A segunda lente é a fenomenológica.

Apesar de parecer uma palavra difícil, fenomenologia significa observar e descrever como uma experiência é vivida por quem passa por ela.

Essa lente procura compreender:
- o que o médium sente;
- quais pensamentos aparecem;
- como o corpo reage;
- se há mudanças na percepção;
- o que permanece na memória;
- como a identidade é vivenciada durante o transe;
- quais significados a experiência produz.

Nesse campo, o objetivo inicial não é provar ou negar a presença de um espírito. O primeiro passo é compreender como a experiência acontece para a pessoa.

#### A lente da ciência

A terceira lente investiga aspectos observáveis e comparáveis, como:
- atividade cerebral;
- comportamento;
- saúde mental;
- funcionamento social;
- memória;
- atenção;
- qualidade de vida;
- efeitos psicológicos;
- contexto cultural.

A ciência pode observar o que acontece no cérebro e no comportamento durante determinadas práticas. Contudo, uma imagem cerebral não mostra se uma entidade espiritual está ou não presente. Ela mostra quais regiões do cérebro estão mais ou menos ativas naquele momento.

Por isso, ciência e religião não precisam disputar o mesmo território. Cada uma trabalha com perguntas, métodos e limites diferentes.

#### Mediunidade e saúde mental

Durante muito tempo, experiências religiosas incomuns foram classificadas automaticamente como sinais de doença. Atualmente, a avaliação clínica procura observar critérios mais cuidadosos.

Entre eles estão:
- sofrimento intenso;
- risco para a própria pessoa ou para terceiros;
- perda importante de funcionamento;
- desorganização persistente;
- ausência de controle;
- prejuízo no trabalho, nos estudos ou nas relações;
- dificuldade de integrar a experiência à vida cotidiana.

Uma experiência religiosa reconhecida pela comunidade, vivida de forma voluntária, organizada e acompanhada pode coexistir com boa saúde mental.

Por outro lado, quando há sofrimento, risco ou desorganização persistente, o acompanhamento religioso não deve impedir a procura por profissionais da saúde.

O estudo responsável evita dois extremos:
- A ciência não deve ser usada para humilhar a fé.
- A fé não deve ser usada para esconder ou negar o sofrimento psicológico.

### Capítulo 3 — Umbanda: história, matrizes e diversidade

A Umbanda não surgiu de uma única fonte. Ela se formou no Brasil por meio de encontros, conflitos, adaptações, resistências e criações religiosas.

A narrativa fundacional mais conhecida apresenta o dia 15 de novembro de 1908 como um momento importante para sua organização institucional. Nessa narrativa, Zélio Fernandino de Moraes manifesta o Caboclo das Sete Encruzilhadas, que questiona o preconceito contra entidades apresentadas como indígenas e negros escravizados.

Essa memória possui grande importância religiosa. Entretanto, a história da Umbanda não pode ser reduzida a um único acontecimento.

Antes e depois desse marco, diferentes comunidades, famílias, sacerdotes, terreiros e tradições populares participaram da formação da religião. A Umbanda foi construída coletivamente, em diferentes regiões do Brasil, assumindo múltiplas formas.

#### As matrizes da Umbanda

O livro apresenta cinco grandes matrizes que contribuíram para a formação das diferentes Umbandas:

**Matriz africana e afro-brasileira**
Está presente no culto aos Orixás, na força vital do axé, nos ritmos, nos cantos, nos saberes ancestrais e na presença de entidades como Pretos e Pretas-Velhas.

**Matriz indígena**
Manifesta-se na presença dos Caboclos, na relação com a mata, com as ervas, com os territórios, com os encantados e com diferentes saberes atribuídos aos povos originários.

**Matriz cristã**
Pode ser percebida na presença de Jesus, dos santos, das orações, da caridade e de diferentes formas de sincretismo religioso.

**Matriz espírita ou kardecista**
Contribuiu para a organização de conceitos relacionados à mediunidade, à reencarnação, à evolução espiritual, ao estudo sistematizado e à responsabilidade moral.

**Matriz orientalista e esotérica**
Está presente em algumas vertentes por meio de conceitos como chacras, corpos sutis, energia, magnetismo e práticas de equilíbrio espiritual.

Essas matrizes não aparecem da mesma maneira em todos os terreiros. Algumas casas possuem maior influência africana; outras são mais próximas do Espiritismo; outras fortalecem os elementos indígenas, populares, cristãos ou esotéricos.

Reconhecer essa diversidade não significa afirmar que todas as casas são iguais. Significa compreender que a Umbanda possui diferentes formas de organização e expressão.

Também é necessário estudar o sincretismo com responsabilidade, evitando que as contribuições africanas, afro-brasileiras e indígenas sejam apagadas.

### Capítulo 4 — O terreiro como comunidade de formação

O terreiro não é apenas o lugar onde a manifestação mediúnica acontece. É o espaço onde essa experiência recebe:
- linguagem;
- orientação;
- disciplina;
- limites;
- acompanhamento;
- responsabilidade;
- sentido comunitário.

Uma percepção isolada pode gerar dúvida, ansiedade ou interpretações precipitadas. Dentro de uma comunidade preparada, o médium aprende a observar, estudar, esperar, pedir ajuda e compreender que nem toda impressão interna representa uma orientação espiritual.

#### A gramática ritual de cada casa

Cada terreiro possui uma espécie de gramática ritual: um conjunto de símbolos, regras, funções, hierarquias, fundamentos e formas de cuidado.

Essa gramática ensina ao médium:
- quando falar e quando silenciar;
- como entrar e permanecer na corrente;
- como respeitar as entidades e os dirigentes;
- como cuidar do espaço sagrado;
- como tratar os consulentes;
- como reconhecer seus limites;
- como lidar com dúvidas;
- como receber orientações;
- como exercer a caridade com responsabilidade.

Os terreiros podem diferir quanto ao uso de atabaques, imagens, bebidas, fumo, roupas, assentamentos, elementos naturais e formas de culto. Essa diversidade não significa ausência de organização.

Cada casa constrói seus fundamentos de acordo com sua tradição, sua história e sua comunidade.

#### Pertencimento e disciplina

O desenvolvimento mediúnico não acontece apenas por meio da manifestação de entidades. Ele também ocorre através da convivência.

O médium aprende observando os mais experientes, participando dos trabalhos, cumprindo responsabilidades e reconhecendo que faz parte de algo maior do que sua experiência individual.

A disciplina não deve ser confundida com autoritarismo. Em uma comunidade saudável, ela funciona como proteção.

Ela protege:
- o médium contra a vaidade;
- o consulente contra abusos;
- a entidade contra interpretações irresponsáveis;
- o terreiro contra desorganização;
- a comunidade contra disputas e personalismos.

Desenvolver a mediunidade é também aprender a pertencer, cooperar, ouvir, servir e assumir responsabilidade pelas consequências das próprias palavras e atitudes.

### Objetivos de aprendizagem

Ao concluir este módulo, o estudante deverá ser capaz de:
- compreender diferentes definições de mediunidade;
- reconhecer a mediunidade como experiência presente em diversas culturas;
- diferenciar experiência, descrição e interpretação;
- compreender as lentes religiosa, fenomenológica e científica;
- reconhecer os limites da investigação científica sobre experiências espirituais;
- evitar a patologização automática das práticas religiosas;
- reconhecer situações que exigem acompanhamento profissional;
- compreender a formação plural da Umbanda;
- identificar suas principais matrizes religiosas e culturais;
- reconhecer a diversidade existente entre os terreiros;
- compreender o terreiro como comunidade de formação;
- perceber a importância do pertencimento, da disciplina e da responsabilidade.

### Conceitos centrais do módulo

**Mediunidade**
Capacidade de perceber, receber ou expressar influências atribuídas a espíritos, guias, ancestrais ou consciências espirituais.

**Transe**
Estado de consciência no qual podem ocorrer alterações de percepção, comportamento, movimento, identidade ou expressão.

**Fenomenologia**
Estudo da experiência conforme ela é vivida e descrita pela pessoa.

**Diagnóstico diferencial**
Processo utilizado para distinguir experiências religiosas culturalmente reconhecidas de situações que podem necessitar de acompanhamento clínico.

**Matrizes da Umbanda**
Conjuntos de tradições e saberes africanos, indígenas, cristãos, espíritas, populares e esotéricos que participaram de sua formação.

**Gramática ritual**
Conjunto de regras, símbolos, fundamentos, comportamentos e formas de organização ensinados por uma comunidade religiosa.

**Terreiro Escola**
Espaço de formação espiritual, ética e comunitária no qual o médium aprende por meio do estudo, da convivência, da disciplina e do serviço.

### Questões para reflexão
1. Como a tradição do TUCPB compreende a mediunidade?
2. Por que experiências espirituais semelhantes não devem ser tratadas como se fossem todas iguais?
3. Qual é a diferença entre descrever uma experiência e determinar sua origem?
4. Como fé, experiência e ciência podem dialogar sem que uma tente eliminar a outra?
5. Quais sinais ajudam a diferenciar uma experiência religiosa integrada de uma situação de sofrimento psíquico?
6. Por que a história da Umbanda não pode ser explicada por um único acontecimento?
7. Quais matrizes estão mais presentes na tradição do Templo Umbandista Caboclo Pena Branca?
8. Como reconhecer o sincretismo sem apagar os saberes africanos e indígenas?
9. Quais regras do terreiro protegem o médium, o consulente e a comunidade?
10. Por que pertencimento, disciplina e responsabilidade também fazem parte do desenvolvimento mediúnico?

### Síntese do Módulo 1

A mediunidade não deve ser compreendida apenas como um fenômeno extraordinário. Ela é uma experiência que recebe significado dentro de uma cultura, de uma tradição e de uma comunidade.

A fé oferece sentido espiritual. A experiência revela como o fenômeno é vivido. A ciência investiga seus aspectos observáveis. O terreiro reúne essas dimensões em um caminho de formação, cuidado e responsabilidade.

Antes de aprender a manifestar, o médium precisa aprender a compreender. Antes de falar em nome do sagrado, precisa aprender a ouvir. Antes de buscar fenômenos, precisa desenvolver raízes.

É a partir desses fundamentos que iniciaremos, nos próximos módulos, o estudo da incorporação, do transe, da consciência, do corpo e das diferentes formas de mediunidade.

---
*Obra de referência: Mediunidade — fundamentos, experiência e desenvolvimento na Umbanda*
*Autor: Bàbá Aláàrìnrin Àjò / Pai Felipe de Oxaguian*
*Instituição: Templo Umbandista Caboclo Pena Branca — TUCPB*`,
    duration: "Módulo 1",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/9m9bjwLI90I",
    imageUrl: "https://img.youtube.com/vi/9m9bjwLI90I/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1UJTPo2Wwcm3d280MCkHD8zAkSozG-3Yk/view?usp=drive_link",
    level: "Todos",
    tags: ["Mediunidade", "Módulo 1"]
  },

  {
    id: "les-t2-2",
    title: "Módulo 2: Fenômenos, Corpo e Consciência",
    category: "TRILHA II: O TRONCO",
    description: `## Módulo 2 — Fenômenos, Corpo e Consciência
### Compreendendo a incorporação, o transe, a sintonia e as diferentes formas de mediunidade

Depois de estabelecer os fundamentos da mediunidade, conhecer as três lentes de estudo e compreender o papel formador do terreiro, chegamos ao segundo módulo da nossa jornada.

Agora, o estudo se aproxima dos fenômenos mediúnicos propriamente ditos.

O que acontece durante uma incorporação? O médium permanece consciente? Qual é a participação do corpo? Como diferenciar intuição, psicofonia, vidência e outras formas de percepção? O que a ciência consegue observar durante o transe? Uma imagem cerebral pode provar ou negar a presença de uma entidade?

Essas perguntas exigem cuidado porque a experiência mediúnica não pode ser reduzida a uma única explicação.

Na Umbanda, a incorporação é compreendida como uma relação de sintonia entre médium e entidade. Não se trata de imaginar o corpo como um recipiente vazio, invadido por uma força externa. O médium permanece participante da experiência, oferecendo seu corpo, sua memória, sua linguagem, sua sensibilidade e sua história para que o trabalho espiritual possa se expressar.

Por isso, a manifestação mediúnica é também um aprendizado de consciência, responsabilidade e cooperação.

Neste módulo, estudaremos o transe como experiência espiritual, corporal, psicológica e comunitária. Veremos como o canto, o ritmo, a respiração, os pontos, os gestos e a organização ritual ajudam o médium a entrar, permanecer e sair do estado de trabalho.

Também conheceremos o que pesquisas científicas, incluindo estudos de neuroimagem, conseguem observar sobre esses estados — e, principalmente, quais são os limites dessas observações.

### O que você estudará neste módulo

O Módulo 2 acompanha os cinco capítulos da segunda parte do livro:
- Incorporação, transe e sintonia
- Consciência e coautoria
- Tipos de mediunidade
- Corpo, ritmo, canto e ritual
- O que a ciência consegue observar

Esses capítulos ajudam o estudante a compreender que a mediunidade não acontece somente na mente. Ela envolve corpo, consciência, emoção, memória, linguagem, comunidade, disciplina e contexto ritual.

### Capítulo 5 — Incorporação, transe e sintonia

A incorporação é uma das manifestações mais conhecidas da Umbanda. Ao mesmo tempo, é uma das experiências mais mal compreendidas por quem observa o fenômeno de fora e também por muitos médiuns em início de desenvolvimento.

É comum encontrar a ideia de que incorporar significa perder completamente o controle do corpo ou permitir que uma entidade tome o lugar do médium.

Essa interpretação pode gerar medo, ansiedade e expectativas equivocadas.

Uma maneira mais responsável de compreender a incorporação é por meio do conceito de sintonia.

#### Incorporação como relação

Podemos pensar a incorporação como uma relação entre duas presenças que aprendem a trabalhar em conjunto.

O médium não desaparece. Ele continua oferecendo:
- o corpo;
- o sistema nervoso;
- a voz;
- o vocabulário;
- as lembranças;
- os gestos;
- a sensibilidade;
- a história de vida;
- a formação religiosa;
- as condições emocionais daquele momento.

A entidade, dentro da compreensão espiritual da Umbanda, oferece uma direção, uma identidade de trabalho, uma forma de presença e uma orientação voltada para a caridade.

A manifestação surge dessa relação.

Isso significa que a entidade não se expressa de maneira completamente independente dos recursos do médium. Mesmo quando a experiência é profunda, ela passa pelo corpo, pela mente e pela linguagem de quem incorpora.

Por esse motivo, dois médiuns que trabalham com entidades da mesma linha podem apresentar gestos, tons de voz e formas de aconselhamento diferentes.

Não significa necessariamente que uma entidade seja verdadeira e a outra falsa. Significa que toda comunicação mediúnica passa por instrumentos humanos diferentes.

#### A comparação com a sintonia

Uma comparação frequentemente utilizada é a de um aparelho de rádio.

A emissora transmite um sinal, mas o aparelho precisa estar ajustado para recebê-lo. Se a sintonia estiver instável, haverá ruídos, interrupções ou mistura de frequências.

Entretanto, essa comparação possui limites.

O médium não é um aparelho passivo. Ele sente, interpreta, reage, aprende e participa. Por isso, talvez seja mais adequado imaginar dois músicos aprendendo a tocar juntos.

No início, pode haver desencontro. Com estudo, disciplina e experiência, o trabalho se torna mais harmônico.

A sintonia mediúnica envolve:
- disponibilidade;
- concentração;
- confiança;
- preparação;
- segurança;
- entrega responsável;
- conhecimento dos fundamentos;
- vínculo com a comunidade;
- amadurecimento emocional;
- respeito ao tempo do desenvolvimento.

#### Transe não significa inconsciência obrigatória

O transe é um estado no qual podem ocorrer mudanças na percepção, nos movimentos, na atenção, na identidade e na forma de expressão.

Essas mudanças possuem diferentes intensidades.

Alguns médiuns percebem quase tudo o que acontece. Outros relatam lembranças parciais. Há também pessoas que apresentam pouca recordação de determinados momentos.

Portanto, não existe um único modelo de transe.

A profundidade da experiência pode variar conforme:
- o médium;
- a entidade;
- a linha de trabalho;
- o momento da gira;
- o grau de desenvolvimento;
- o estado físico e emocional;
- a segurança oferecida pelo terreiro;
- as características da própria comunidade.

Ser consciente durante a incorporação não significa estar fingindo.

Da mesma forma, relatar pouca lembrança não comprova automaticamente uma manifestação espiritual.

A qualidade da mediunidade não deve ser medida apenas pelo grau de consciência, mas pela coerência, pela responsabilidade, pelo equilíbrio e pelos frutos produzidos pelo trabalho.

### Capítulo 6 — Consciência e coautoria

Um dos maiores desafios do desenvolvimento mediúnico é compreender a participação do próprio médium na manifestação.

Muitos iniciantes acreditam que qualquer pensamento pessoal invalida a experiência. Outros atribuem às entidades tudo o que falam, sentem ou fazem durante o transe.

Esses dois extremos podem causar dificuldades.

O primeiro gera insegurança permanente:
*“Se eu pensei, então não era a entidade.”*

O segundo pode retirar do médium a responsabilidade:
*“Não fui eu; foi a entidade que falou.”*

O conceito de coautoria ajuda a construir uma compreensão mais madura.

#### O que significa coautoria?

Coautoria significa reconhecer que a manifestação mediúnica ocorre por meio de uma cooperação.

Na interpretação religiosa, há uma influência espiritual. Entretanto, essa influência é expressa através de um ser humano concreto, que possui personalidade, memória, emoções, valores, conhecimento e limites.

A entidade pode inspirar uma orientação, mas as palavras utilizadas pertencem ao repertório do médium.
A entidade pode conduzir determinado gesto, mas o movimento acontece no corpo do médium.
A entidade pode oferecer uma percepção, mas ela será reconhecida e interpretada pela consciência humana.

Isso não reduz o valor espiritual da experiência. Ao contrário, aumenta a responsabilidade de quem serve como instrumento.

#### Consciência não é interferência automática

Durante a incorporação, o médium pode perceber:
- a aproximação da entidade;
- mudanças na respiração;
- alterações no equilíbrio;
- vontade de realizar certos movimentos;
- emoções que parecem diferentes das habituais;
- imagens interiores;
- palavras surgindo antes de serem pronunciadas;
- lembranças do atendimento;
- sensações corporais específicas;
- mudanças na percepção do ambiente.

Nada disso torna a experiência menos legítima.

O médium não precisa apagar a própria consciência para permitir o trabalho espiritual.

O desenvolvimento responsável procura construir uma consciência capaz de acompanhar a experiência sem controlá-la excessivamente e sem abandonar o discernimento.

#### A responsabilidade permanece

Mesmo durante o transe, o médium continua responsável pelo que acontece através de seu corpo e de sua voz.

Essa responsabilidade não significa que ele controla conscientemente cada palavra. Significa que precisa:
- desenvolver equilíbrio;
- respeitar os fundamentos da casa;
- aceitar orientações;
- não usar a entidade para impor opiniões pessoais;
- não justificar agressões ou humilhações;
- não fazer promessas irresponsáveis;
- não apresentar diagnósticos médicos;
- não interferir de maneira abusiva na vida do consulente;
- reconhecer quando está confuso ou emocionalmente fragilizado.

A frase “foi a entidade” não deve servir como proteção contra qualquer questionamento.

Uma comunidade madura avalia os frutos da manifestação.

A presença espiritual deve contribuir para a caridade, para o equilíbrio e para o amadurecimento, e não para alimentar vaidade, medo ou dependência.

#### Animismo e participação humana

Em muitos estudos espiritualistas, o termo animismo é utilizado para descrever conteúdos que surgem da própria alma, da memória, do inconsciente ou da personalidade do médium.

Durante muito tempo, animismo e mediunidade foram apresentados como fenômenos completamente opostos: ou a mensagem viria do espírito, ou viria do médium.

Na prática, essa separação pode ser mais complexa.

Toda manifestação passa pela estrutura humana do médium. Portanto, elementos pessoais podem aparecer na linguagem, nos gestos e na interpretação da experiência.

Isso não significa necessariamente fraude.

A questão mais importante é desenvolver discernimento para reconhecer:
- tendências pessoais;
- expectativas;
- desejos;
- medos;
- opiniões;
- emoções;
- conteúdos espirituais percebidos;
- influências do ambiente;
- ensinamentos recebidos na comunidade.

O objetivo não é alcançar uma pureza impossível, mas aprender a reduzir interferências prejudiciais e ampliar a clareza do trabalho.

### Capítulo 7 — Tipos de mediunidade

A mediunidade pode se manifestar de diferentes maneiras.

Essas classificações ajudam o estudo, mas não devem se transformar em rótulos rígidos. Uma mesma pessoa pode apresentar mais de uma forma de percepção, e suas características podem mudar ao longo do desenvolvimento.

Também é importante compreender que nem toda sensação representa obrigatoriamente uma manifestação espiritual.

O reconhecimento deve ocorrer com tempo, observação, orientação e participação comunitária.

#### Mediunidade de incorporação ou psicofonia

Na incorporação, a influência espiritual se expressa por meio do corpo, dos movimentos, da postura, da voz e do comportamento do médium.

A psicofonia refere-se especialmente à comunicação pela fala.

Durante a manifestação, podem ocorrer alterações em:
- ritmo da fala;
- vocabulário;
- postura;
- expressão facial;
- gestos;
- respiração;
- intensidade emocional;
- modo de aconselhar;
- percepção do ambiente.

Nem toda mudança precisa ser teatral ou intensa.

Uma entidade não é mais elevada porque sua manifestação é mais visível. A qualidade do trabalho não depende de movimentos exagerados, gritos ou demonstrações espetaculares.

#### Mediunidade intuitiva

A intuição pode surgir como uma compreensão rápida, uma ideia, uma frase, uma percepção ou uma orientação interior.

O desafio está em diferenciar intuição mediúnica de pensamentos pessoais.

Essa diferença nem sempre é imediata.

Com o tempo, o médium pode aprender a reconhecer características como:
- modo diferente de organização do pensamento;
- sensação de clareza inesperada;
- conteúdo que não estava sendo elaborado conscientemente;
- percepção acompanhada de determinada presença;
- coerência com os fundamentos da casa;
- confirmação por outros elementos da experiência.

Ainda assim, a intuição deve passar pelo discernimento. Uma ideia não deve ser tratada como ordem espiritual apenas porque surgiu de maneira repentina.

#### Vidência

Vidência é a percepção de imagens, cenas, símbolos, formas, cores ou presenças que não são observadas pelos olhos físicos da maneira habitual.

Ela pode ocorrer:
- com os olhos abertos;
- com os olhos fechados;
- como uma imagem interior;
- durante sonhos;
- durante o transe;
- em momentos de oração ou concentração.

A visão pode ser simbólica, e não literal.

Ver água, por exemplo, não significa necessariamente que exista água física no ambiente. Pode representar limpeza, emoção, movimento, ancestralidade ou outro significado relacionado ao contexto.

Por isso, o médium não deve interpretar toda imagem imediatamente.

Primeiro, deve observar. Depois, buscar compreender.

#### Audiência mediúnica

A audiência é a percepção de palavras, sons, cantos ou mensagens atribuídas ao plano espiritual.

Ela pode ser vivida como:
- som semelhante a uma voz externa;
- frase percebida interiormente;
- palavra que surge com clareza;
- canto ou ponto que aparece espontaneamente;
- orientação breve;
- sensação sonora sem origem física identificada.

Experiências auditivas também podem ocorrer em condições psicológicas e neurológicas. Quando são persistentes, ameaçadoras, desorganizadoras ou provocam sofrimento, é importante buscar avaliação profissional.

O cuidado clínico não precisa negar a espiritualidade.

#### Psicografia

Psicografia é a expressão mediúnica por meio da escrita.

Ela pode ocorrer com diferentes graus de participação consciente. O médium pode perceber as ideias antes de escrevê-las, acompanhar parcialmente a mensagem ou relatar uma escrita mais automática.

Em todos os casos, o texto passa pelas capacidades motoras, linguísticas e culturais de quem escreve.

Uma mensagem escrita não deve ser considerada verdadeira apenas por ter sido produzida em contexto mediúnico. Seu conteúdo precisa ser avaliado com responsabilidade, coerência e ética.

#### Sensitividade ou percepção energética

Algumas pessoas relatam perceber mudanças nos ambientes e nas pessoas por meio de sensações corporais ou emocionais.

Entre os relatos mais comuns estão:
- arrepios;
- calor;
- frio;
- pressão;
- alterações na respiração;
- peso corporal;
- sensação de presença;
- mudança súbita de humor;
- desconforto em determinados espaços;
- sensação de expansão ou tranquilidade.

Essas experiências podem receber interpretação espiritual dentro do terreiro. Contudo, também podem estar relacionadas a ansiedade, cansaço, expectativa, condições ambientais e outros fatores.

O desenvolvimento procura transformar sensibilidade em percepção organizada, evitando conclusões precipitadas.

#### Sonhos e experiências durante o sono

Os sonhos podem ser compreendidos de várias maneiras.

Eles podem expressar:
- memórias;
- emoções;
- conflitos;
- desejos;
- preocupações;
- símbolos culturais;
- processos psicológicos;
- experiências interpretadas religiosamente como encontros ou orientações espirituais.

Nem todo sonho é uma mensagem.

No terreiro, o médium aprende a observar a repetição, a coerência, os efeitos e o contexto antes de atribuir origem espiritual a uma experiência ocorrida durante o sono.

### Capítulo 8 — Corpo, ritmo, canto e ritual

A mediunidade não acontece apenas no pensamento.

O corpo participa de todo o processo.

Respiração, postura, equilíbrio, atenção, movimento, som, ritmo e emoção ajudam a construir o estado ritual no qual a experiência mediúnica acontece.

Por isso, não devemos tratar o corpo como um objeto passivo ou como simples suporte da entidade.

O corpo é memória, linguagem e presença.

#### O corpo aprende

Ao participar repetidamente das giras, o médium aprende corporalmente:
- onde permanecer;
- como respirar;
- como acompanhar os pontos;
- quando se movimentar;
- como reconhecer mudanças internas;
- como sustentar a postura;
- como entrar e sair do estado de trabalho;
- como responder às orientações;
- como respeitar o espaço coletivo.

Parte desse aprendizado não acontece apenas por explicações verbais. Ele é adquirido pela convivência, pela repetição e pela experiência.

O corpo guarda o ritmo da casa.

Com o tempo, determinados sons, cheiros, gestos e cantos podem preparar a atenção para o trabalho espiritual.

#### O papel dos pontos cantados

Os pontos cantados cumprem diferentes funções dentro da Umbanda.

Eles podem:
- organizar a corrente;
- marcar o início e o encerramento de trabalhos;
- identificar linhas e entidades;
- fortalecer o sentimento de pertencimento;
- conduzir a respiração;
- reunir a atenção coletiva;
- favorecer mudanças no estado de consciência;
- transmitir ensinamentos;
- preservar memórias religiosas;
- produzir unidade entre os participantes.

O canto não funciona apenas como música de fundo.

Ele cria um ambiente compartilhado de concentração e significado.

Quando muitas pessoas cantam juntas, seus ritmos respiratórios, movimentos e atenções podem se aproximar. Isso fortalece a experiência comunitária e ajuda a sustentar o trabalho.

#### Atabaques e ritmo

Nas casas que utilizam atabaques, o ritmo possui função ritual, espiritual e corporal.

A repetição rítmica pode favorecer:
- concentração;
- redução da dispersão;
- sincronização dos movimentos;
- mudança da percepção temporal;
- organização da respiração;
- ativação emocional;
- sensação de pertencimento;
- sustentação da corrente mediúnica.

Isso não significa que o ritmo, sozinho, produza a mediunidade.

Ele participa de um conjunto formado por crença, preparação, ambiente, expectativa, memória, corporeidade e fundamento religioso.

#### Gestos e movimentos

As manifestações podem apresentar gestos característicos de determinadas linhas de trabalho.

Caboclos, Pretos-Velhos, Crianças, Exus e outras entidades podem expressar diferentes posturas, movimentos e maneiras de ocupar o espaço.

Esses gestos possuem dimensão simbólica e religiosa. Também são aprendidos e reconhecidos dentro da cultura do terreiro.

Isso não significa que sejam apenas imitação.

A experiência mediúnica acontece dentro de uma linguagem coletiva. O médium aprende essa linguagem ao conviver com a comunidade, assim como uma pessoa aprende gestos, palavras e comportamentos em qualquer tradição cultural.

A manifestação não precisa ser completamente desconhecida para ser significativa.

#### Entrada e saída do transe

O cuidado não deve existir apenas no momento da incorporação.

Também é necessário preparar a entrada e a saída do estado de trabalho.

Antes da gira, o médium pode precisar de:
- repouso;
- alimentação adequada;
- concentração;
- oração;
- organização emocional;
- silêncio;
- preparação ritual;
- orientação da liderança.

Depois do trabalho, pode precisar de:
- desaceleração;
- hidratação;
- descanso;
- conversa;
- reorganização corporal;
- acolhimento;
- avaliação do que foi vivido.

Uma saída desorganizada pode gerar cansaço, confusão ou mal-estar.

Por isso, desenvolvimento mediúnico também significa aprender a retornar plenamente ao estado cotidiano.

### Capítulo 9 — O que a ciência consegue observar

A ciência investiga aspectos observáveis da experiência mediúnica.

Ela pode estudar:
- atividade cerebral;
- atenção;
- memória;
- linguagem;
- movimentos;
- frequência cardíaca;
- respiração;
- respostas emocionais;
- comportamento;
- saúde mental;
- qualidade de vida;
- relações sociais;
- efeitos da prática religiosa.

Esses estudos ajudam a compreender o fenômeno humano, mas não resolvem sozinhos todas as perguntas religiosas.

#### O cérebro durante o transe

Técnicas de neuroimagem procuram identificar mudanças na atividade cerebral durante determinadas tarefas ou estados de consciência.

Entre essas técnicas está o SPECT, sigla em inglês para tomografia computadorizada por emissão de fóton único.

De forma simplificada, o exame acompanha padrões relacionados à circulação sanguínea em diferentes regiões do cérebro. Como áreas mais ativas geralmente necessitam de maior fluxo, os pesquisadores podem comparar mudanças ocorridas durante uma atividade.

É importante compreender que o SPECT não fotografa pensamentos, espíritos ou a consciência.

Ele produz dados sobre padrões fisiológicos associados ao funcionamento cerebral.

#### Estudos com psicografia

Um estudo conhecido utilizou SPECT para observar médiuns durante a produção de textos psicografados.

Os pesquisadores compararam a atividade cerebral durante a psicografia com uma situação de escrita comum.

Entre os resultados relatados, médiuns mais experientes apresentaram redução relativa de atividade em determinadas áreas associadas ao planejamento, ao controle e à produção deliberada da linguagem, mesmo produzindo textos avaliados como mais complexos.

Esse resultado chamou a atenção porque, em uma tarefa comum, seria esperado que uma produção textual complexa exigisse maior participação dessas áreas.

Entretanto, o estudo não demonstrou que espíritos escreveram os textos.

Ele mostrou um padrão cerebral interessante durante a experiência de psicografia e levantou perguntas sobre automatismo, treinamento, controle consciente e estados diferenciados de produção.

#### O que esses exames não conseguem provar

Uma imagem cerebral não consegue determinar sozinha:
- se uma entidade estava presente;
- qual seria a identidade da entidade;
- se a mensagem veio de um espírito;
- se a experiência possui origem exclusivamente psicológica;
- se determinada interpretação religiosa é verdadeira ou falsa.

O cérebro participa de todas as experiências humanas.

Orar, recordar, amar, cantar, sonhar e sentir uma presença espiritual também possuem correspondentes cerebrais.

Encontrar atividade cerebral durante uma experiência não significa que essa experiência seja falsa. Da mesma forma, encontrar um padrão incomum não comprova uma explicação espiritual.

A neurociência descreve aspectos do funcionamento do cérebro. A interpretação do significado da experiência exige diálogo com outras áreas.

#### Transe, treinamento e automatismo

Pessoas treinadas podem realizar tarefas complexas com menor esforço consciente do que iniciantes.

Um músico experiente não precisa pensar em cada movimento dos dedos. Um motorista experiente não planeja conscientemente cada pequena ação. Um dançarino treinado executa sequências complexas com fluidez.

Algo semelhante pode ocorrer em práticas mediúnicas desenvolvidas ao longo de muitos anos.

Isso não resolve a questão da origem espiritual, mas ajuda a compreender como treinamento, repetição, confiança e experiência podem alterar a participação consciente em uma atividade.

#### Ciência e humildade

O estudo científico da mediunidade exige humildade em duas direções.

A ciência precisa reconhecer que nem toda experiência religiosa deve ser automaticamente reduzida a doença, fraude ou imaginação.

A religião precisa reconhecer que uma pesquisa interessante não representa prova definitiva de suas crenças.

Quando ambas respeitam seus limites, o diálogo se torna mais produtivo.

A pergunta científica pode ser:
*O que acontece no cérebro e no comportamento durante o transe?*

A pergunta religiosa pode ser:
*Qual é o significado espiritual dessa experiência dentro da tradição?*

As duas perguntas podem coexistir sem que uma elimine a outra.

### A incorporação na visão do TUCPB

Na visão do Templo Umbandista Caboclo Pena Branca, a incorporação deve ser compreendida como uma relação construída com tempo, disciplina e responsabilidade.

O objetivo do desenvolvimento não é produzir manifestações espetaculares.

É formar médiuns capazes de:
- sustentar o trabalho;
- reconhecer seus limites;
- servir com humildade;
- respeitar a orientação da casa;
- proteger o consulente;
- manter equilíbrio emocional;
- compreender a participação da própria consciência;
- aprender com as entidades;
- transformar a experiência em caridade.

A firmeza de uma manifestação não é medida pelo volume da voz, pela força dos movimentos ou pelo impacto causado em quem observa.

Ela é percebida na coerência, na serenidade, no respeito e nos frutos.

Uma manifestação simples pode ser profundamente significativa. Uma manifestação teatral pode não produzir nenhum crescimento verdadeiro.

O desenvolvimento deve conduzir o médium para além da necessidade de provar sua mediunidade.

#### Cuidados durante o desenvolvimento

O estudante deve evitar algumas atitudes comuns:

**Forçar manifestações**
Tentar produzir movimentos, falas ou sensações para acompanhar outros médiuns pode gerar confusão e ansiedade.
Cada pessoa possui seu próprio tempo.

**Comparar experiências**
Um médium pode sentir calor; outro, frio. Um pode apresentar movimentos intensos; outro, mudanças discretas.
A diferença não indica superioridade.

**Buscar inconsciência**
A perda de memória não deve ser tratada como prova de mediunidade mais elevada.
Consciência pode ser uma forma de proteção e aprendizado.

**Atribuir tudo ao plano espiritual**
Cansaço, medo, expectativa, dor, ansiedade e emoções pessoais também afetam o corpo.
O discernimento cresce quando o médium aprende a considerar diferentes possibilidades.

**Transformar percepção em certeza**
Sentir uma presença não significa conhecer imediatamente sua identidade, sua intenção ou sua mensagem.
Primeiro vem a observação. Depois, o estudo e a confirmação.

**Abandonar a responsabilidade**
O médium não deve usar a entidade para justificar agressividade, invasão, humilhação ou orientação irresponsável.

### Objetivos de aprendizagem

Ao concluir este módulo, o estudante deverá ser capaz de:
- compreender a incorporação como relação de sintonia;
- reconhecer que o médium permanece participante da experiência;
- entender que transe não significa inconsciência obrigatória;
- diferenciar consciência, controle e coautoria;
- compreender a participação humana na manifestação;
- reconhecer diferentes tipos de mediunidade;
- evitar classificações rígidas e conclusões precipitadas;
- compreender o papel do corpo no desenvolvimento;
- reconhecer a importância do canto, do ritmo e do ritual;
- entender que a linguagem mediúnica é aprendida na comunidade;
- compreender o que técnicas de neuroimagem conseguem observar;
- reconhecer os limites científicos dos estudos sobre transe;
- dialogar com a ciência sem reduzir a experiência religiosa;
- avaliar a manifestação por seus frutos éticos e espirituais.

### Conceitos centrais do módulo

**Incorporação**
Manifestação em que a influência espiritual se expressa por meio do corpo, dos movimentos, da voz e da consciência do médium.

**Transe**
Estado de consciência caracterizado por alterações na atenção, na percepção, nos movimentos, na identidade ou na forma de expressão.

**Sintonia**
Processo de aproximação e ajuste entre médium e entidade, construído por meio de preparação, confiança, disciplina e experiência.

**Coautoria**
Participação conjunta da influência espiritual e dos recursos humanos do médium na produção da manifestação.

**Animismo**
Expressão de conteúdos provenientes da memória, da personalidade, das emoções ou da vida interior do próprio médium.

**Psicofonia**
Comunicação mediúnica realizada por meio da fala.

**Psicografia**
Comunicação ou produção mediúnica realizada por meio da escrita.

**Vidência**
Percepção de imagens, formas, símbolos ou presenças não observadas pelos olhos físicos de maneira habitual.

**Audiência mediúnica**
Percepção de sons, palavras ou mensagens atribuídas ao plano espiritual.

**Sensitividade**
Percepção corporal, emocional ou intuitiva de ambientes, pessoas ou presenças.

**SPECT**
Técnica de neuroimagem que fornece informações indiretas sobre padrões de circulação sanguínea e atividade cerebral.

**Automatismo**
Realização de uma ação com menor participação do planejamento consciente, frequentemente relacionada a treinamento, repetição ou estados diferenciados de consciência.

### Questões para reflexão
1. Por que a incorporação não deve ser compreendida como simples possessão do corpo?
2. O que significa afirmar que médium e entidade trabalham em sintonia?
3. Por que a consciência não invalida uma manifestação mediúnica?
4. De que maneira a memória, a linguagem e a história do médium participam da comunicação?
5. O que o conceito de coautoria ensina sobre responsabilidade?
6. Como diferenciar participação humana de fraude?
7. Quais formas de mediunidade você já observou ou estudou?
8. Por que as classificações mediúnicas não devem se tornar rótulos rígidos?
9. Como o canto e o ritmo ajudam a organizar a experiência ritual?
10. De que maneira o corpo aprende a linguagem do terreiro?
11. O que um exame de neuroimagem pode mostrar durante o transe?
12. Por que uma imagem cerebral não prova nem nega a presença de uma entidade?
13. Quais riscos existem quando o médium atribui todas as suas emoções ao plano espiritual?
14. Por que a intensidade dos movimentos não determina a qualidade de uma incorporação?
15. Quais frutos devem ser observados para avaliar o amadurecimento mediúnico?

### Atividade de observação

Durante uma gira ou atividade de desenvolvimento, observe silenciosamente:
- sua respiração;
- mudanças na postura;
- alterações na atenção;
- emoções presentes antes do trabalho;
- sensações corporais;
- influência do canto;
- efeito do ritmo;
- pensamentos que aparecem;
- momentos de ansiedade;
- momentos de serenidade;
- facilidade ou dificuldade para retornar ao estado cotidiano.

Depois da atividade, registre suas percepções sem classificá-las imediatamente.

Em vez de escrever:
*“Era determinada entidade.”*

Prefira inicialmente:
*“Percebi alteração na respiração, vontade de curvar o corpo, sensação de serenidade e uma imagem interior relacionada a determinada linha.”*

Essa forma de registro ajuda a separar experiência e interpretação.

Com o tempo, a orientação da casa, a repetição e a coerência poderão ajudar na compreensão.

### Síntese do Módulo 2

A mediunidade é vivida por meio do corpo e da consciência.

Na incorporação, o médium não desaparece. Ele participa da manifestação, oferecendo os recursos humanos através dos quais o trabalho espiritual se expressa.

Por isso, a consciência não deve ser vista como inimiga da mediunidade.

Ela pode funcionar como espaço de aprendizado, discernimento e responsabilidade.

O corpo aprende a linguagem do terreiro. O canto reúne a comunidade. O ritmo organiza a atenção. O ritual estabelece limites e cria condições para que a experiência aconteça com segurança.

As diferentes formas de mediunidade ajudam a compreender a diversidade das manifestações, mas não devem servir para alimentar disputas ou hierarquias.

A ciência pode observar mudanças no cérebro, no comportamento e na experiência. Porém, seus instrumentos não determinam sozinhos o significado espiritual do fenômeno.

O estudo maduro reconhece os limites de cada linguagem.

A mediunidade não se fortalece pelo espetáculo, mas pela sintonia. Não se torna confiável pela perda de consciência, mas pela qualidade dos frutos. Não amadurece somente quando a entidade se manifesta, mas quando o médium aprende a observar, servir, discernir e assumir responsabilidade.

No próximo módulo, estudaremos o desenvolvimento mediúnico como processo contínuo, aprofundando os temas da ética, da caridade, da saúde mental e do cuidado com o consulente.

---
*Obra de referência: Mediunidade — fundamentos, experiência e desenvolvimento na Umbanda*
*Autor: Bàbá Aláàrìnrin Àjò / Pai Felipe de Oxaguian*
*Instituição: Templo Umbandista Caboclo Pena Branca — TUCPB*`,
    duration: "Módulo 2",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/EiLrLvBesEk",
    imageUrl: "https://img.youtube.com/vi/EiLrLvBesEk/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1UJTPo2Wwcm3d280MCkHD8zAkSozG-3Yk/view?usp=drive_link",
    level: "Todos",
    tags: ["Mediunidade", "Módulo 2"]
  },

  {
    id: "les-t2-3",
    title: "Módulo 3: Desenvolvimento, Ética e Cuidado",
    category: "TRILHA II: O TRONCO",
    description: `## Módulo 3 — Desenvolvimento, Ética e Cuidado
### O amadurecimento mediúnico como caminho de responsabilidade, equilíbrio e serviço

Depois de compreender os fundamentos da mediunidade e estudar os fenômenos relacionados à incorporação, ao transe, ao corpo e à consciência, chegamos a uma etapa essencial da formação: o desenvolvimento mediúnico.

Desenvolver a mediunidade não significa apenas aprender a incorporar, perceber entidades ou manifestar diferentes formas de sensibilidade espiritual. O verdadeiro desenvolvimento envolve a formação integral do médium.

Ele alcança:
- o comportamento;
- a disciplina;
- o equilíbrio emocional;
- a capacidade de escutar;
- o cuidado com a palavra;
- a relação com a comunidade;
- o respeito ao consulente;
- o discernimento entre experiência espiritual e sofrimento psicológico;
- a responsabilidade pelas consequências do trabalho realizado.

Uma manifestação intensa não é necessariamente uma manifestação madura. Um médium pode apresentar movimentos fortes, mudanças marcantes na voz ou grande facilidade de incorporação e ainda precisar desenvolver humildade, equilíbrio, responsabilidade e capacidade de convivência.

Por outro lado, uma pessoa cuja mediunidade se expressa de maneira discreta pode realizar um trabalho profundo, seguro e transformador.

O amadurecimento não é medido pelo espetáculo. Ele é reconhecido pela estabilidade, pela coerência e pelos frutos produzidos.

Neste módulo, estudaremos o desenvolvimento mediúnico como processo contínuo. Também refletiremos sobre ética, caridade, responsabilidade e saúde mental, compreendendo que o cuidado espiritual não deve excluir o cuidado psicológico, médico ou social quando esses acompanhamentos forem necessários.

### O que você estudará neste módulo

O Módulo 3 acompanha os três capítulos da terceira parte do livro:
- Desenvolvimento mediúnico
- Ética, caridade e responsabilidade
- Saúde mental e discernimento

Esses capítulos mostram que a formação do médium não termina quando uma entidade se manifesta. Na verdade, a manifestação é apenas uma parte de um caminho mais amplo de estudo, cuidado, autoconhecimento e serviço.

### Capítulo 10 — Desenvolvimento mediúnico

O desenvolvimento mediúnico é um processo de aprendizagem.

Ele não deve ser compreendido como uma busca apressada por fenômenos, nem como uma competição para descobrir quem incorpora primeiro, quem sente mais ou quem apresenta manifestações mais visíveis.

Cada médium possui uma história, um corpo, uma sensibilidade, uma formação e um tempo próprios.

Por isso, não existe um único modelo de desenvolvimento que funcione da mesma maneira para todas as pessoas.

#### Desenvolvimento não é fabricação de fenômenos

Uma das maiores confusões no início da caminhada é acreditar que o médium precisa produzir alguma manifestação para demonstrar que possui mediunidade.

Essa expectativa pode fazer com que a pessoa:
- force movimentos;
- imite manifestações observadas em outros médiuns;
- interprete qualquer sensação como presença espiritual;
- tenha medo de permanecer consciente;
- sinta vergonha por não incorporar rapidamente;
- confunda ansiedade com aproximação de entidade;
- crie gestos para corresponder às expectativas do grupo.

O desenvolvimento responsável não exige que o médium prove nada.

Ele ensina a observar.

Antes de classificar uma sensação, é necessário percebê-la com calma. Antes de atribuir uma fala a uma entidade, é necessário aprender a diferenciar intuição, emoção, memória e influência do ambiente.

O médium não deve buscar fenômenos. Deve preparar-se para servir quando e como sua mediunidade puder contribuir.

#### O tempo de cada pessoa

Alguns médiuns percebem sua sensibilidade desde a infância. Outros começam a reconhecer determinadas experiências na vida adulta.

Algumas pessoas apresentam facilidade para a incorporação. Outras desenvolvem primeiro a intuição, a percepção energética, os sonhos ou a capacidade de sustentação da corrente.

Há também médiuns cuja principal contribuição não será uma manifestação visível.

Eles podem atuar por meio de:
- oração;
- sustentação;
- canto;
- toque;
- organização;
- acolhimento;
- cambonagem;
- estudo;
- cuidado com o espaço;
- assistência à comunidade.

A mediunidade não deve ser reduzida à incorporação.

Do mesmo modo, o valor de uma pessoa dentro do terreiro não pode ser definido pela forma como sua sensibilidade se manifesta.

#### Desenvolvimento como educação da sensibilidade

Uma sensibilidade sem orientação pode gerar confusão. O médium pode captar emoções do ambiente, perceber alterações corporais ou ter experiências interiores sem saber como interpretá-las.

O desenvolvimento ajuda a transformar sensação em percepção organizada.

Esse processo envolve aprender a perguntar:
- O que eu senti?
- Quando começou?
- Qual era meu estado emocional?
- Isso acontece apenas no terreiro?
- Houve mudança depois do ponto cantado?
- A sensação permaneceu após o encerramento?
- Já vivi algo semelhante antes?
- Minha interpretação foi confirmada?
- Estou atribuindo sentido espiritual cedo demais?
- Preciso conversar com a liderança?

Com o tempo, a observação diminui a ansiedade e fortalece o discernimento.

#### Estudo, prática e convivência

O desenvolvimento mediúnico não acontece apenas durante a gira.

Ele é formado por três dimensões inseparáveis:

**Estudo**
O estudo oferece linguagem, referências e critérios para compreender as experiências.
Ele ajuda o médium a não depender exclusivamente de sensações ou opiniões pessoais.

**Prática**
A prática permite observar como os ensinamentos funcionam no corpo, no ritual e na convivência.
É na experiência que o médium aprende a reconhecer aproximações, limites, dificuldades e responsabilidades.

**Convivência**
A convivência mostra que a mediunidade não é uma experiência isolada.
O médium aprende observando, escutando, ajudando, recebendo correções e assumindo tarefas dentro da comunidade.

Sem convivência, a experiência pode tornar-se excessivamente individual e sujeita a interpretações sem confirmação.

#### Autoconhecimento

Desenvolver a mediunidade também significa conhecer a própria humanidade.

O médium precisa reconhecer:
- suas inseguranças;
- seus desejos;
- suas expectativas;
- sua necessidade de aprovação;
- seus medos;
- seus conflitos;
- suas opiniões;
- seus limites;
- suas tendências emocionais;
- suas dificuldades de relacionamento.

Quanto menos a pessoa conhece a si mesma, maior é o risco de confundir conteúdos pessoais com orientações espirituais.

O autoconhecimento não elimina a participação humana. Ele torna essa participação mais consciente e responsável.

#### Disciplina sem autoritarismo

A disciplina é necessária porque a prática mediúnica envolve outras pessoas.

Uma palavra dita durante um atendimento pode influenciar decisões familiares, afetivas, profissionais, religiosas e de saúde.

Por isso, o médium precisa aprender a respeitar:
- horários;
- funções;
- orientações;
- fundamentos;
- limites da casa;
- organização da corrente;
- momentos de silêncio;
- responsabilidades assumidas.

Disciplina não deve significar humilhação, medo ou submissão cega.

Uma liderança saudável orienta, explica, corrige e protege. Ela não usa a autoridade espiritual para controlar a vida pessoal dos integrantes.

Da mesma forma, o médium deve aprender a receber correções sem transformar toda orientação em ofensa.

#### Desenvolvimento é continuidade

Não existe um ponto em que o médium possa afirmar que terminou completamente seu desenvolvimento.

A experiência muda com:
- o tempo;
- a idade;
- o amadurecimento emocional;
- as responsabilidades assumidas;
- as entidades com as quais trabalha;
- as mudanças na comunidade;
- os desafios da vida.

Desenvolver-se é continuar aprendendo.

Quanto maior a responsabilidade espiritual, maior deve ser a disposição para estudar, revisar atitudes e reconhecer limites.

### Capítulo 11 — Ética, caridade e responsabilidade

A mediunidade coloca o médium em uma posição de confiança.

Durante um atendimento, o consulente pode revelar dores, medos, conflitos, perdas e situações íntimas. Muitas vezes, ele procura o terreiro em um momento de fragilidade.

Isso exige cuidado.

A ética não é um detalhe do trabalho mediúnico. Ela é parte do fundamento.

Sem ética, a sensibilidade pode transformar-se em instrumento de vaidade, manipulação ou abuso.

#### O que é ética mediúnica?

Ética mediúnica é o conjunto de princípios que orienta a maneira como o médium utiliza sua sensibilidade e participa dos trabalhos espirituais.

Ela envolve:
- respeito;
- responsabilidade;
- sigilo;
- humildade;
- prudência;
- honestidade;
- cuidado com a palavra;
- respeito à liberdade do consulente;
- reconhecimento dos próprios limites;
- compromisso com o bem-estar da comunidade.

A ética não depende apenas da intenção.

Uma pessoa pode acreditar que está ajudando e, ainda assim, produzir medo, dependência ou sofrimento.

Por isso, não basta querer fazer o bem. É necessário aprender a cuidar.

#### Caridade não é poder

Na Umbanda, a caridade ocupa lugar central. Contudo, ela não deve ser confundida com posição de superioridade.

O médium não está acima do consulente.

Ele não é proprietário da verdade, da entidade ou do destino de quem procura atendimento.

A caridade verdadeira não humilha, não controla e não transforma a fragilidade do outro em fonte de prestígio.

Ela procura:
- acolher;
- escutar;
- orientar com cuidado;
- fortalecer a autonomia;
- respeitar a dignidade;
- aliviar o sofrimento quando possível;
- encaminhar para outros cuidados quando necessário.

#### O cuidado com a palavra

Uma frase dita em nome de uma entidade pode ter grande peso para quem a recebe.

Por isso, o médium deve evitar declarações que:
- anunciem tragédias;
- estabeleçam datas para acontecimentos;
- imponham decisões;
- estimulem rompimentos precipitados;
- criem medo de espíritos ou demandas;
- prometam cura garantida;
- determinem abandono de tratamento;
- afirmem diagnósticos;
- culpem a pessoa por seu sofrimento;
- gerem dependência do médium ou do terreiro.

Mesmo quando uma percepção parece clara, sua comunicação precisa ser cuidadosa.

É diferente dizer:
*“Você precisa abandonar imediatamente essa relação porque algo ruim acontecerá.”*

E dizer:
*“Talvez seja importante observar como essa relação tem afetado sua segurança, sua dignidade e seu equilíbrio. Procure apoio e reflita com cuidado antes de tomar uma decisão.”*

A segunda forma preserva a autonomia e evita transformar uma percepção em sentença.

#### Sigilo e privacidade

O que é revelado durante um atendimento não deve tornar-se assunto de conversa.

O médium não deve compartilhar detalhes sobre o consulente para:
- demonstrar sua mediunidade;
- divertir outras pessoas;
- buscar reconhecimento;
- contar histórias;
- justificar comentários;
- criar curiosidade dentro da comunidade.

O sigilo protege a dignidade da pessoa atendida e a confiança no trabalho espiritual.

Existem situações de risco em que a liderança ou profissionais responsáveis precisam ser procurados. Fora dessas situações, a intimidade deve ser preservada.

#### Limites da orientação espiritual

O atendimento religioso pode oferecer acolhimento, reflexão e direção espiritual. No entanto, ele não substitui todas as outras formas de cuidado.

O médium não deve atuar como:
- médico sem formação;
- psicólogo sem formação;
- advogado sem formação;
- assistente social sem formação;
- investigador;
- autoridade sobre decisões pessoais;
- controlador da vida do consulente.

Uma entidade pode orientar uma pessoa a cuidar de sua saúde. Isso é diferente de prescrever medicamentos ou determinar a interrupção de um tratamento.

Pode incentivar diálogo e reflexão. Isso é diferente de ordenar decisões familiares.

Pode sugerir proteção e prudência. Isso é diferente de criar medo permanente.

#### Abuso espiritual

O abuso espiritual acontece quando símbolos, crenças, entidades ou posições religiosas são usados para controlar, intimidar ou explorar alguém.

Alguns sinais de abuso incluem:
- exigir obediência absoluta;
- ameaçar consequências espirituais;
- proibir questionamentos;
- controlar relacionamentos;
- exigir dinheiro ou favores em troca de proteção;
- usar informações íntimas contra a pessoa;
- justificar humilhações como ensinamento;
- afirmar que somente uma liderança possui acesso à verdade;
- impedir acompanhamento médico ou psicológico;
- criar dependência emocional e espiritual.

Nenhuma posição dentro do terreiro coloca alguém acima da responsabilidade ética.

A autoridade religiosa deve existir para servir, orientar e proteger.

#### Relações afetivas e poder

É necessário cuidado especial quando existe diferença de autoridade entre dirigente, médium, cambono, estudante ou consulente.

A posição espiritual não deve ser usada para obter:
- envolvimento afetivo;
- acesso sexual;
- vantagens financeiras;
- trabalho gratuito forçado;
- favores pessoais;
- submissão emocional.

Consentimento pode ser prejudicado quando existe medo de punição espiritual ou dependência religiosa.

Por isso, relações de poder precisam ser reconhecidas e tratadas com transparência e responsabilidade.

#### Dinheiro e trabalho espiritual

Cada comunidade organiza suas necessidades materiais de maneira diferente.

O terreiro possui despesas, responsabilidades e formas de manutenção. O problema não está necessariamente na existência de contribuições, mas na exploração da vulnerabilidade.

A pessoa não deve ser levada a acreditar que:
- somente receberá ajuda se pagar;
- sua proteção depende de um valor;
- uma entidade exige pagamento pessoal;
- o aumento da contribuição garantirá resultado espiritual;
- a falta de dinheiro provocará punição.

Transparência é fundamental.

Quando houver contribuições, elas precisam ser explicadas com clareza e separadas de ameaças ou promessas.

#### Responsabilidade coletiva

A ética não é responsabilidade apenas do dirigente.

Toda a comunidade precisa participar da construção de um ambiente seguro.

Isso inclui:
- observar práticas inadequadas;
- acolher quem relata sofrimento;
- não proteger abusos por amizade;
- respeitar procedimentos;
- encaminhar situações para a liderança;
- reconhecer quando a própria liderança precisa ser questionada;
- evitar fofocas;
- proteger crianças, adolescentes e pessoas vulneráveis.

Uma comunidade saudável não confunde silêncio com lealdade.

### Capítulo 12 — Saúde mental e discernimento

Experiências espirituais e questões de saúde mental podem apresentar elementos semelhantes.

Uma pessoa pode:
- ouvir vozes;
- sentir presenças;
- ter sonhos intensos;
- perceber mudanças na identidade;
- experimentar alterações de consciência;
- apresentar movimentos involuntários;
- sentir medo ou perseguição;
- interpretar acontecimentos como mensagens.

Essas experiências podem receber sentidos diferentes conforme o contexto, a cultura, a história da pessoa e os efeitos produzidos em sua vida.

Por isso, não é responsável afirmar que toda experiência incomum é doença.

Também não é responsável afirmar que todo sofrimento psicológico é mediunidade.

O discernimento exige atenção ao contexto e às consequências.

#### Experiência religiosa não é doença automática

Uma experiência mediúnica vivida dentro de uma tradição pode coexistir com equilíbrio e qualidade de vida.

Alguns elementos que sugerem maior integração são:
- a experiência possui sentido dentro da cultura da pessoa;
- ocorre em contexto ritual organizado;
- existe algum grau de controle;
- a pessoa consegue iniciar e encerrar a prática;
- não há prejuízo significativo na vida cotidiana;
- a experiência produz pertencimento e crescimento;
- o médium aceita orientação;
- existe acompanhamento comunitário;
- não há risco para si ou para terceiros;
- a pessoa mantém vínculos, responsabilidades e autocuidado.

Esses elementos não servem como diagnóstico, mas ajudam a observar a maneira como a experiência está integrada à vida.

#### Sinais de sofrimento que exigem atenção

Algumas situações indicam necessidade de cuidado profissional, especialmente quando há:
- sofrimento intenso;
- medo permanente;
- perda de sono por vários dias;
- incapacidade de trabalhar ou estudar;
- abandono do autocuidado;
- desorganização da fala;
- confusão persistente;
- comportamentos de risco;
- agressividade;
- ideias de perseguição;
- isolamento extremo;
- uso prejudicial de álcool ou outras substâncias;
- pensamentos de morte;
- vontade de ferir a si ou outra pessoa;
- perda importante de contato com a realidade;
- vozes que ordenam comportamentos perigosos;
- piora rápida e intensa do estado emocional.

Nessas situações, a pessoa precisa ser acolhida e encaminhada para avaliação profissional.

O encaminhamento não significa negar a dimensão espiritual de sua experiência.

Significa reconhecer que o cuidado humano pode exigir diferentes formas de apoio.

#### Religião e tratamento profissional

Tratamento psicológico ou psiquiátrico não é sinal de fraqueza espiritual.

Da mesma forma, utilizar medicamentos prescritos não significa impedir o desenvolvimento mediúnico.

A interrupção de medicamentos deve ser decidida exclusivamente com o profissional responsável.

O terreiro pode oferecer:
- acolhimento;
- oração;
- escuta;
- pertencimento;
- orientação espiritual;
- apoio comunitário.

Profissionais da saúde podem oferecer:
- avaliação;
- diagnóstico;
- acompanhamento clínico;
- psicoterapia;
- medicação quando necessária;
- manejo de crises;
- prevenção de riscos.

Essas formas de cuidado podem coexistir.

#### Discernimento e humildade

Discernimento não é capacidade de ter certeza sobre tudo.

É a capacidade de observar, comparar, esperar, investigar e reconhecer quando não sabemos.

O médium maduro não precisa explicar imediatamente toda experiência.

Ele pode dizer:
*“Ainda não compreendi.”*
*“Preciso observar novamente.”*
*“Vou conversar com a liderança.”*
*“Talvez exista também uma questão emocional.”*
*“Essa situação precisa de acompanhamento profissional.”*
*“Não tenho segurança para orientar.”*
*“Minha percepção pode estar influenciada pelo meu estado pessoal.”*

Essa postura não enfraquece a mediunidade. Ela demonstra responsabilidade.

#### Fatores que influenciam a experiência

O estado do médium pode ser afetado por:
- falta de sono;
- fome;
- desidratação;
- estresse;
- luto;
- conflitos;
- ansiedade;
- depressão;
- uso de substâncias;
- medicamentos;
- doenças físicas;
- alterações hormonais;
- sobrecarga de trabalho;
- expectativas religiosas;
- pressão do grupo.

Esses fatores precisam ser considerados antes que tudo seja atribuído ao plano espiritual.

Uma experiência pode possuir significado religioso e, ao mesmo tempo, ser influenciada pelas condições do corpo e da mente.

#### Crise espiritual e crise psicológica

Algumas pessoas passam por períodos de intensa transformação religiosa. Podem questionar antigas crenças, sentir mudanças na percepção e procurar novo sentido para a vida.

Esses períodos podem ser vividos como crises espirituais.

No entanto, quando a crise provoca risco, desorganização profunda ou perda importante de funcionamento, ela também precisa ser avaliada clinicamente.

O objetivo não é escolher entre “espiritual” ou “psicológico” de forma apressada.

O objetivo é cuidar da pessoa inteira.

#### O médium não é terapeuta

Durante o atendimento, o médium pode acolher relatos de:
- depressão;
- ansiedade;
- violência;
- abuso;
- luto;
- dependência;
- conflitos familiares;
- pensamentos de morte;
- traumas.

Ele deve escutar com respeito, mas não assumir uma função para a qual não possui formação.

O médium não deve:
- diagnosticar;
- prescrever;
- prometer cura;
- investigar traumas de maneira invasiva;
- obrigar a pessoa a revelar detalhes;
- responsabilizar espiritualmente a vítima;
- sugerir abandono de tratamento;
- conduzir sozinho situações de risco.

Quando necessário, deve procurar a liderança e orientar a busca por atendimento especializado.

#### Saúde mental do próprio médium

O cuidado não se dirige apenas ao consulente.

O médium também precisa observar sua própria saúde mental.

A dedicação ao terreiro não elimina a necessidade de descanso, lazer, relações saudáveis e acompanhamento profissional.

Alguns sinais de sobrecarga são:
- irritabilidade;
- exaustão;
- dificuldade para dormir;
- medo constante;
- sensação de obrigação permanente;
- incapacidade de afastar-se do trabalho;
- culpa por descansar;
- vontade de salvar todas as pessoas;
- dificuldade de separar a vida pessoal do terreiro;
- perda de prazer em outras atividades.

Servir não significa destruir-se.

O cuidado com o próprio corpo e com a própria mente faz parte da responsabilidade espiritual.

### Desenvolvimento mediúnico na visão do TUCPB

Na visão do Templo Umbandista Caboclo Pena Branca, o desenvolvimento mediúnico deve formar pessoas responsáveis, e não apenas manifestações impressionantes.

O trabalho do terreiro procura fortalecer:
- disciplina;
- estudo;
- convivência;
- humildade;
- responsabilidade;
- autoconhecimento;
- respeito;
- equilíbrio;
- serviço;
- compromisso com a caridade.

A mediunidade não deve afastar a pessoa da realidade.

Ela deve ajudá-la a viver com maior consciência de suas relações, escolhas e responsabilidades.

Um médium em amadurecimento aprende que:
- nem toda sensação é comunicação;
- nem toda intuição é orientação;
- nem toda manifestação é madura;
- nem toda dificuldade é demanda;
- nem todo sofrimento é mediunidade;
- nem toda correção é perseguição;
- nem toda autoridade está acima de questionamentos;
- nem toda palavra precisa ser dita;
- nem toda percepção precisa ser comunicada.

A sabedoria mediúnica também se expressa naquilo que o médium escolhe não fazer.

#### O desenvolvimento como cultivo

Podemos comparar o desenvolvimento mediúnico ao cultivo de uma árvore.

Não é possível puxar uma planta para fazê-la crescer mais rápido.

O crescimento depende de:
- terra adequada;
- raízes firmes;
- água;
- luz;
- tempo;
- cuidado;
- proteção;
- poda;
- equilíbrio.

Da mesma forma, o médium precisa de fundamentos, convivência, experiência e tempo.

Uma árvore que cresce sem raízes pode cair diante do primeiro vento forte.

Uma mediunidade desenvolvida apenas para produzir fenômenos pode não suportar conflitos, responsabilidades e frustrações.

O desenvolvimento verdadeiro fortalece as raízes antes de exibir a copa.

### Princípios para um desenvolvimento seguro

**Não tenha pressa**
A pressa aumenta a ansiedade e dificulta o discernimento.

**Não se compare**
Cada médium possui uma forma e um tempo de aprendizagem.

**Não busque espetáculo**
A intensidade da manifestação não determina sua qualidade.

**Aceite orientação**
O desenvolvimento exige escuta e disposição para corrigir atitudes.

**Preserve sua autonomia**
Nenhuma liderança deve controlar completamente sua vida pessoal.

**Cuide do corpo**
Sono, alimentação, hidratação e acompanhamento médico influenciam o equilíbrio.

**Cuide da mente**
Buscar apoio psicológico não diminui a fé.

**Respeite o consulente**
Quem procura ajuda não deve ser transformado em objeto de poder.

**Reconheça seus limites**
Dizer “não sei” pode ser uma atitude profundamente ética.

**Observe os frutos**
A prática deve produzir responsabilidade, caridade, equilíbrio e amadurecimento.

### Objetivos de aprendizagem

Ao concluir este módulo, o estudante deverá ser capaz de:
- compreender o desenvolvimento mediúnico como processo contínuo;
- reconhecer que desenvolvimento não significa fabricação de fenômenos;
- respeitar o tempo e a forma de manifestação de cada pessoa;
- compreender a importância do estudo, da prática e da convivência;
- reconhecer o autoconhecimento como parte do discernimento;
- diferenciar disciplina de autoritarismo;
- compreender os princípios da ética mediúnica;
- cuidar da palavra durante o atendimento;
- preservar sigilo, privacidade e dignidade;
- reconhecer limites da orientação espiritual;
- identificar sinais de abuso espiritual;
- compreender a importância da autonomia do consulente;
- diferenciar experiência religiosa integrada de sofrimento desorganizador;
- reconhecer sinais que exigem avaliação profissional;
- compreender que religião e tratamento podem coexistir;
- cuidar da saúde mental do próprio médium;
- avaliar o desenvolvimento pelos frutos, e não pelo espetáculo.

### Conceitos centrais do módulo

**Desenvolvimento mediúnico**
Processo de formação espiritual, ética, emocional, corporal e comunitária por meio do qual o médium aprende a compreender, organizar e utilizar sua sensibilidade com responsabilidade.

**Discernimento**
Capacidade de observar uma experiência, considerar diferentes possibilidades e evitar conclusões precipitadas.

**Ética mediúnica**
Conjunto de princípios que orienta o uso responsável da mediunidade e o cuidado com o consulente, a comunidade e o próprio médium.

**Caridade**
Ação de cuidado voltada ao bem do outro, realizada sem humilhação, controle, exploração ou busca de superioridade.

**Sigilo**
Compromisso de preservar informações pessoais e íntimas compartilhadas durante atendimentos ou atividades religiosas.

**Autonomia**
Direito da pessoa de tomar decisões sobre sua própria vida sem coerção, manipulação ou ameaça espiritual.

**Abuso espiritual**
Uso de crenças, entidades, símbolos ou posições religiosas para controlar, intimidar, explorar ou violentar alguém.

**Diagnóstico diferencial**
Processo clínico utilizado para avaliar diferentes causas possíveis de uma experiência ou conjunto de sintomas.

**Saúde mental**
Condição relacionada ao equilíbrio emocional, à capacidade de lidar com desafios, manter relações, realizar atividades e cuidar de si.

**Encaminhamento**
Orientação para que a pessoa procure atendimento profissional ou institucional adequado quando a situação ultrapassa os limites do cuidado religioso.

**Sobrecarga**
Estado de desgaste físico ou emocional provocado por excesso de responsabilidades, falta de descanso e dificuldade de estabelecer limites.

### Questões para reflexão
1. O que diferencia desenvolvimento mediúnico de busca por fenômenos?
2. Por que cada médium deve respeitar o próprio tempo?
3. Como estudo, prática e convivência se complementam?
4. De que forma o autoconhecimento reduz interferências prejudiciais?
5. Qual é a diferença entre disciplina e autoritarismo?
6. Por que a intenção de ajudar não é suficiente para garantir uma conduta ética?
7. Como uma palavra dita durante o atendimento pode afetar o consulente?
8. Quais orientações ultrapassam os limites do trabalho mediúnico?
9. Por que o sigilo é importante?
10. Como reconhecer sinais de abuso espiritual?
11. Qual é a diferença entre caridade e controle?
12. Quando uma experiência religiosa pode coexistir com boa saúde mental?
13. Quais sinais indicam que uma pessoa precisa de avaliação profissional?
14. Por que o tratamento psicológico ou psiquiátrico não deve ser visto como falta de fé?
15. Como o médium pode cuidar da própria saúde mental?
16. Por que dizer “não sei” pode ser uma atitude ética?
17. Quais frutos indicam amadurecimento mediúnico?
18. Que atitudes precisam ser fortalecidas no desenvolvimento realizado pelo TUCPB?

### Atividade de autoavaliação

Leia cada afirmação e reflita com honestidade sobre sua caminhada.
- Consigo receber uma correção sem interpretá-la imediatamente como perseguição?
- Sinto necessidade de demonstrar minha mediunidade?
- Comparo minhas manifestações com as de outras pessoas?
- Atribuo todas as minhas emoções ao plano espiritual?
- Consigo reconhecer quando estou cansado ou sobrecarregado?
- Respeito a privacidade de quem procura atendimento?
- Consigo dizer que não sei?
- Tenho dificuldade para separar minhas opiniões pessoais das orientações espirituais?
- Aceito a possibilidade de procurar ajuda profissional?
- Minha participação no terreiro melhorou minhas relações fora dele?
- Tenho desenvolvido mais paciência, responsabilidade e humildade?
- Estou servindo ou buscando reconhecimento?

Essa atividade não deve ser utilizada para produzir culpa.

Seu objetivo é favorecer o autoconhecimento e identificar pontos que precisam de cuidado.

### Estudo de situações

**Situação 1 — A promessa**
Durante um atendimento, um médium afirma que o consulente receberá uma grande quantia de dinheiro em determinada data.
*Reflexão*: A promessa cria expectativa e pode influenciar decisões. O médium não possui controle sobre o futuro e não deve transformar percepção em garantia. Uma orientação responsável deve fortalecer prudência e autonomia.

**Situação 2 — Interrupção de tratamento**
Uma pessoa relata que utiliza medicação psiquiátrica. O médium afirma que o medicamento bloqueia sua mediunidade e recomenda que ela pare de tomá-lo.
*Reflexão*: Essa conduta é perigosa e ultrapassa os limites do atendimento religioso. Nenhum medicamento deve ser interrompido sem orientação do profissional responsável.

**Situação 3 — A correção**
Um médium é orientado pela liderança a reduzir determinados movimentos durante a manifestação. Ele conclui que a casa está impedindo o trabalho de sua entidade.
*Reflexão*: A orientação pode estar relacionada à segurança, à organização ou ao amadurecimento. O médium deve escutar, dialogar e avaliar antes de interpretar a correção como perseguição.

**Situação 4 — O segredo**
Depois de um atendimento, o médium conta a outros integrantes detalhes íntimos do consulente para demonstrar que a entidade revelou informações verdadeiras.
*Reflexão*: Mesmo que a informação tenha surgido durante a manifestação, a exposição viola o sigilo e transforma a dor da pessoa em instrumento de reconhecimento.

**Situação 5 — O sofrimento**
Uma pessoa relata ouvir vozes ameaçadoras durante todo o dia, não consegue dormir, abandonou o trabalho e acredita que precisa obedecer a todas as ordens recebidas.
*Reflexão*: A situação apresenta sinais de sofrimento e risco. A pessoa precisa de acolhimento, apoio da família quando possível e avaliação profissional. O terreiro não deve tratar o caso apenas como desenvolvimento mediúnico.

### Síntese do Módulo 3

Desenvolver a mediunidade é desenvolver a pessoa.

A manifestação espiritual não pode ser separada da ética, do equilíbrio e da responsabilidade.

O médium amadurece quando aprende a observar antes de afirmar, escutar antes de orientar e reconhecer limites antes de assumir uma função que não lhe pertence.

A caridade não transforma o médium em dono da vida do consulente. Ela exige respeito à autonomia, cuidado com a palavra e proteção da dignidade.

A ética impede que a mediunidade seja utilizada para criar medo, dependência, controle ou exploração.

A saúde mental também faz parte do cuidado espiritual.

Uma experiência religiosa integrada pode contribuir para pertencimento, sentido e qualidade de vida. Entretanto, quando há sofrimento intenso, risco ou desorganização, é necessário buscar acompanhamento profissional.

A fé não precisa competir com a psicologia ou com a medicina. O cuidado pode ser compartilhado.

Na visão do TUCPB, a maturidade mediúnica não é medida pela intensidade da incorporação, pela quantidade de entidades ou pelo impacto provocado no público.

Ela é reconhecida na qualidade dos frutos:
- mais humildade;
- mais equilíbrio;
- mais responsabilidade;
- mais respeito;
- mais discernimento;
- mais capacidade de servir;
- menos vaidade;
- menos necessidade de provar;
- menos medo;
- menos dependência.

O desenvolvimento verdadeiro fortalece as raízes antes de apresentar a copa.

No próximo módulo, aprofundaremos as filosofias africanas e afro-diaspóricas, estudando conceitos como Ubuntu, ancestralidade, Kalunga, tempo espiralar, corpo-arquivo, Orí, axé, Exu e encruzilhada.

---
*Obra de referência: Mediunidade — fundamentos, experiência e desenvolvimento na Umbanda*
*Autor: Bàbá Aláàrìnrin Àjò / Pai Felipe de Oxaguian*
*Instituição: Templo Umbandista Caboclo Pena Branca — TUCPB*`,
    duration: "Módulo 3",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/Zqt5LtCmK5I",
    imageUrl: "https://img.youtube.com/vi/Zqt5LtCmK5I/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1UJTPo2Wwcm3d280MCkHD8zAkSozG-3Yk/view?usp=drive_link",
    level: "Todos",
    tags: ["Mediunidade", "Módulo 3"]
  },

  {
    id: "les-t2-4",
    title: "Módulo 4: Ancestralidade Africana e Afro-Diaspórica",
    category: "TRILHA II: O TRONCO",
    description: `## Módulo 4 — Ancestralidade Africana e Afro-Diaspórica
### Comunidade, memória, corpo, tempo e força vital na compreensão da mediunidade

Nos módulos anteriores, estudamos os fundamentos da mediunidade, os fenômenos relacionados ao transe e à incorporação e os princípios de ética, cuidado e saúde mental que devem acompanhar o desenvolvimento mediúnico.

Agora, avançamos para uma mudança importante de perspectiva.

Grande parte das explicações ocidentais sobre a mediunidade começa pelo indivíduo. Pergunta-se o que acontece na mente do médium, como seu cérebro funciona, quais alterações aparecem em seu comportamento e quais experiências ele relata.

As filosofias africanas e afro-diaspóricas nos convidam a ampliar essa visão.

Nessa perspectiva, a pessoa não existe de forma isolada. Ela é constituída por suas relações com a comunidade, com os mais velhos, com os ancestrais, com o território, com a espiritualidade e com aqueles que ainda virão.

O corpo não é apenas um instrumento biológico. Ele também é memória, história, linguagem e presença ancestral.

O tempo não é apenas uma linha que começa no passado, atravessa o presente e segue em direção ao futuro. Ele pode ser compreendido como movimento espiralar, no qual aquilo que veio antes continua participando daquilo que somos agora.

A ancestralidade, por sua vez, não é apenas lembrança de pessoas que morreram. Ela representa continuidade, pertencimento, responsabilidade e transmissão de conhecimentos.

Neste módulo, a mediunidade será estudada a partir de conceitos como:
- Ubuntu;
- comunidade ampliada;
- ancestralidade;
- Kalunga;
- tempo espiralar;
- corpo-arquivo;
- oralidade;
- Orí;
- axé;
- Exu;
- encruzilhada.

Esses conceitos não pertencem a uma única cultura africana e não devem ser tratados como se todo o continente africano possuísse uma religião ou uma filosofia uniforme.

A África reúne muitos povos, línguas, territórios, histórias e sistemas de conhecimento. Por isso, este estudo não procura criar uma suposta “filosofia africana única”. Seu objetivo é apresentar algumas perspectivas africanas e afro-diaspóricas que ajudam a compreender a mediunidade para além do individualismo e das explicações exclusivamente ocidentais.

### O que você estudará neste módulo

O Módulo 4 acompanha os três capítulos da quarta parte do livro:
- Ubuntu e comunidade ampliada
- Kalunga, tempo espiralar e corpo-arquivo
- Orí, axé, Exu e encruzilhada

Esses capítulos mostram que a mediunidade não acontece apenas dentro do indivíduo. Ela nasce e recebe sentido em uma rede formada por comunidade, corpo, ancestralidade, memória, território e forças espirituais.

### Capítulo 13 — Ubuntu e comunidade ampliada

A palavra Ubuntu tornou-se conhecida por expressões como:
*“Eu sou porque nós somos.”*

Essa tradução ajuda a iniciar a compreensão do conceito, mas não esgota sua profundidade.

Ubuntu está ligado a uma visão de humanidade construída por meio das relações. Nessa perspectiva, ninguém se torna plenamente pessoa sozinho.

Nossa identidade é formada pela convivência, pelo cuidado, pela responsabilidade e pela participação em uma comunidade.

Isso significa que a existência individual não é negada, mas compreendida como parte de uma rede maior.

#### A pessoa como relação

Em uma visão individualista, a pessoa costuma ser apresentada como uma unidade independente.

Primeiro existiria o indivíduo. Depois, ele estabeleceria relações com outras pessoas.

A perspectiva comunitária modifica essa ordem.

Ela nos convida a perceber que já nascemos dentro de relações:
- recebemos um nome;
- aprendemos uma língua;
- somos cuidados por outras pessoas;
- herdamos histórias;
- recebemos valores;
- ocupamos um território;
- aprendemos gestos, crenças e comportamentos;
- somos reconhecidos por uma comunidade.

Portanto, não existimos primeiro para depois nos relacionarmos.

Existimos porque fomos recebidos, cuidados, nomeados e reconhecidos em uma rede de relações.

A frase “eu sou porque nós somos” não significa que a pessoa deva perder sua individualidade. Significa que sua individualidade é construída em comunidade.

#### Comunidade ampliada

Nas perspectivas ancestrais e religiosas africanas, a comunidade pode ser mais ampla do que o conjunto das pessoas vivas.

Ela pode incluir:
- os ancestrais;
- os que vieram antes;
- os mais velhos;
- as crianças;
- os que ainda nascerão;
- as divindades;
- as forças da natureza;
- os seres espirituais;
- o território;
- a memória coletiva.

Essa compreensão transforma a relação entre vivos e mortos.

A morte não rompe completamente o vínculo com a comunidade. A pessoa que parte pode continuar presente na memória, nos ensinamentos, nos nomes, nos costumes, nos gestos e nas práticas transmitidas.

Em determinadas tradições, alguns mortos passam a ocupar uma posição ancestral. Isso não significa que toda pessoa falecida seja automaticamente cultuada como ancestral.

A ancestralidade envolve reconhecimento, vínculo, continuidade e responsabilidade.

#### Ancestralidade não é apenas passado

É comum imaginar os ancestrais como figuras pertencentes exclusivamente ao passado.

Entretanto, a ancestralidade também atua no presente.

Ela aparece:
- nos nomes que carregamos;
- nas histórias de família;
- nos hábitos;
- nos modos de falar;
- nas músicas;
- nos alimentos;
- nas práticas religiosas;
- nas formas de resistência;
- nos conhecimentos transmitidos;
- nas maneiras de cuidar;
- nas marcas inscritas no corpo e na memória.

Os ancestrais não são importantes apenas porque viveram antes. Eles são importantes porque aquilo que construíram continua participando da comunidade.

A ancestralidade também se relaciona ao futuro.

Aquilo que fazemos hoje será recebido por aqueles que virão depois de nós.

Por isso, a relação ancestral produz responsabilidade.

A pergunta deixa de ser apenas:
*“O que eu desejo para minha vida?”*

E passa a incluir:
*“O que minhas escolhas entregam à comunidade e às próximas gerações?”*

#### Ubuntu e mediunidade

Quando a mediunidade é observada por uma perspectiva comunitária, ela deixa de ser compreendida apenas como uma capacidade individual.

O médium não é proprietário de um poder.

Sua sensibilidade é formada e orientada dentro de uma comunidade.

Ele aprende:
- com os mais velhos;
- com as entidades;
- com a corrente mediúnica;
- com os fundamentos da casa;
- com os consulentes;
- com seus erros;
- com a memória do terreiro;
- com as responsabilidades do serviço.

A manifestação não pertence somente ao médium.

Ela acontece em uma rede.

O ponto cantado sustenta. O atabaque organiza. O cambono acompanha. A liderança orienta. A corrente oferece firmeza. O consulente participa do encontro. A entidade se manifesta por meio de uma linguagem construída comunitariamente.

Por isso, a mediunidade não deve ser tratada como espetáculo pessoal.

Quanto mais o médium se percebe como centro absoluto do trabalho, maior é o risco de afastar-se da perspectiva comunitária.

#### A comunidade como proteção

A comunidade não existe apenas para confirmar experiências.

Ela também precisa:
- orientar;
- questionar;
- estabelecer limites;
- observar os frutos;
- corrigir excessos;
- acolher dificuldades;
- proteger pessoas vulneráveis;
- preservar os fundamentos;
- impedir abusos.

O médium isolado pode interpretar todas as suas sensações sem contraponto.

Dentro de uma comunidade responsável, suas experiências podem ser observadas e acompanhadas ao longo do tempo.

A correção comunitária não deve destruir a autonomia da pessoa, mas ajudá-la a amadurecer.

#### O perigo do individualismo espiritual

O individualismo espiritual aparece quando alguém acredita que:
- não precisa de orientação;
- sua entidade está acima das regras;
- suas percepções não podem ser questionadas;
- sua mediunidade é superior;
- a comunidade existe para servi-lo;
- o trabalho depende exclusivamente de sua presença;
- qualquer correção representa perseguição;
- seus desejos pessoais são ordens espirituais.

Esse comportamento transforma a mediunidade em instrumento de vaidade.

Na perspectiva de Ubuntu, o valor da pessoa não desaparece, mas é colocado em relação com o bem coletivo.

O médium amadurece quando compreende que sua capacidade só encontra sentido pleno quando contribui para o equilíbrio da comunidade.

### Capítulo 14 — Kalunga, tempo espiralar e corpo-arquivo

O modo como compreendemos o tempo influencia a maneira como interpretamos a vida, a morte, a memória e a ancestralidade.

Na visão ocidental moderna, o tempo costuma ser representado como uma linha:
passado → presente → futuro

Nessa imagem, o passado ficou para trás, o presente acontece agora e o futuro ainda não existe.

As perspectivas africanas e afro-diaspóricas podem apresentar outras formas de compreender essa relação.

Uma delas é a imagem do tempo espiralar.

#### O tempo espiralar

Uma espiral passa novamente por direções semelhantes, mas nunca retorna exatamente ao mesmo ponto.

Essa imagem ajuda a compreender como acontecimentos, histórias e memórias podem reaparecer em novos contextos.

O passado não está morto.

Ele continua atuando:
- nas estruturas sociais;
- nos costumes;
- nas desigualdades;
- nas religiões;
- nas formas de resistência;
- na memória coletiva;
- nos gestos transmitidos;
- nos traumas;
- nas conquistas;
- nas celebrações;
- nos conhecimentos preservados.

O tempo espiralar não significa repetição automática.

Significa continuidade com transformação.

Uma tradição pode ser transmitida e, ao mesmo tempo, adaptar-se a novas realidades.

Uma música pode preservar ritmos antigos e receber novos instrumentos.

Um ensinamento pode atravessar gerações e ganhar outras formas de expressão.

A memória volta, mas volta transformada.

#### Mediunidade e tempo espiralar

A experiência mediúnica aproxima tempos diferentes.

Quando uma entidade se apresenta com a linguagem de um Preto-Velho, de uma Preta-Velha, de um Caboclo ou de outra linha de trabalho, a manifestação não deve ser entendida como simples reprodução histórica.

Há uma atualização simbólica e espiritual.

O passado é trazido ao presente para produzir orientação, cura, memória, crítica e ensinamento.

A experiência mediúnica pode tornar visíveis memórias que a sociedade tentou apagar.

Na presença dos Pretos e Pretas-Velhas, por exemplo, aparecem histórias de sofrimento, resistência, sabedoria, cuidado, sobrevivência e reconstrução.

Essas entidades não devem ser reduzidas a caricaturas da escravidão.

Sua presença pode transformar marcas de violência em linguagem de dignidade, memória e cuidado.

O tempo espiralar permite compreender que a ancestralidade não está parada em um passado distante. Ela participa do presente e ajuda a construir outros futuros.

#### Kalunga: travessia, limite e continuidade

Kalunga é um conceito presente em diferentes tradições de matriz banto e pode assumir significados diversos conforme o povo, a língua e o contexto.

Por isso, não deve ser reduzido a uma tradução única.

Kalunga pode estar relacionado a ideias como:
- mar;
- grande água;
- imensidão;
- fronteira;
- travessia;
- passagem;
- mundo dos ancestrais;
- relação entre vida e morte;
- transformação.

Na história da diáspora africana, o mar possui um significado profundamente ambivalente.

Ele foi caminho de violência, separação e morte durante o tráfico transatlântico de pessoas escravizadas.

Ao mesmo tempo, tornou-se espaço de memória, travessia, comunicação e reconstrução religiosa.

A grande água separa, mas também liga territórios.

Ela representa distância, perda, passagem e continuidade.

#### A linha entre os mundos

Kalunga pode ser imaginada como uma fronteira entre dimensões.

Entretanto, uma fronteira não é necessariamente uma parede absoluta.

Ela pode ser um lugar de contato.

O nascimento e a morte são passagens. O sonho pode ser compreendido como travessia. O transe pode ser vivido como aproximação entre dimensões. A água pode marcar limpeza, transformação, nascimento e retorno.

Essa imagem ajuda a compreender a mediunidade como relação entre mundos que não estão totalmente separados.

O médium atua simbolicamente em uma zona de passagem.

Ele não abandona completamente o mundo cotidiano, mas também não permanece limitado a ele.

Por isso, o trabalho exige preparação e retorno.

Toda travessia precisa de orientação.

#### O corpo-arquivo

Um arquivo guarda documentos, registros e memórias.

Quando falamos em corpo-arquivo, não estamos afirmando que o corpo funcione como uma biblioteca imóvel.

O corpo registra experiências de maneira viva.

Ele guarda:
- gestos;
- posturas;
- ritmos;
- dores;
- habilidades;
- medos;
- formas de proteção;
- modos de dançar;
- modos de rezar;
- maneiras de cuidar;
- marcas de violência;
- memórias familiares;
- aprendizados comunitários.

Nem tudo o que o corpo sabe pode ser explicado por palavras.

Uma pessoa pode aprender um ritmo antes de conhecer sua história. Pode reproduzir um gesto que observou durante anos. Pode sentir segurança ao ouvir determinado canto. Pode reagir corporalmente a uma lembrança mesmo sem conseguir narrá-la completamente.

O corpo não é apenas objeto da memória. Ele é um modo de lembrar.

#### O corpo na tradição oral

Em culturas marcadas pela oralidade, o conhecimento não depende exclusivamente de livros.

Ele é transmitido por meio de:
- histórias;
- cantos;
- provérbios;
- danças;
- rituais;
- gestos;
- silêncio;
- convivência;
- repetição;
- observação;
- participação.

A oralidade não significa ausência de conhecimento organizado.

Ela representa outra forma de guardar e transmitir saberes.

Quando um ponto cantado é repetido em diferentes gerações, ele carrega memória.

Quando um gesto ritual é ensinado pela observação, o corpo participa da transmissão.

Quando um mais velho conta uma história, ele não transmite apenas informações. Ele oferece experiência, ritmo, interpretação e presença.

#### Oralitura

O conceito de oralitura ajuda a pensar a inscrição de conhecimentos no corpo, na voz e na performance.

A memória não é transmitida apenas pela palavra escrita. Ela se manifesta na forma de cantar, dançar, narrar, caminhar e realizar o ritual.

A oralitura é uma escrita que acontece na presença.

Ela utiliza:
- a voz como registro;
- o corpo como suporte;
- o ritmo como organização;
- a repetição como preservação;
- a performance como transmissão;
- a comunidade como guardiã.

Na Umbanda, muitos conhecimentos são aprendidos dessa maneira.

O médium observa como os mais velhos se comportam, como cuidam dos elementos, como recebem uma entidade, como encerram um trabalho e como se relacionam com a comunidade.

O ensinamento é vivido antes de ser completamente explicado.

#### O transe como memória corporal

Durante o transe, o corpo pode expressar movimentos, posturas e ritmos associados a uma linha espiritual.

Parte dessa expressão pode ser compreendida religiosamente como influência da entidade.

Ao mesmo tempo, ela acontece em um corpo que aprendeu a linguagem do terreiro.

Essas duas dimensões não precisam ser tratadas como inimigas.

A participação da memória corporal não anula o sentido espiritual da experiência.

Toda manifestação ocorre por meio de uma linguagem possível para o médium e reconhecível pela comunidade.

O corpo não é obstáculo à espiritualidade.

Ele é o lugar onde a experiência se torna presença.

### Capítulo 15 — Orí, axé, Exu e encruzilhada

Os conceitos de Orí, axé e Exu estão ligados principalmente a tradições iorubás e afro-diaspóricas.

Eles não devem ser retirados de seus contextos apenas para se tornarem metáforas genéricas.

Neste módulo, serão apresentados como caminhos de compreensão, respeitando sua profundidade religiosa e filosófica.

#### Orí: cabeça, direção e singularidade

A palavra Orí pode ser traduzida inicialmente como “cabeça”, mas seu significado ultrapassa a cabeça física.

Orí pode estar relacionado à dimensão pessoal da existência, à direção, ao destino, à consciência e à singularidade de cada ser.

É por meio de Orí que a pessoa realiza sua caminhada.

Essa compreensão mostra que a espiritualidade não apaga a individualidade.

Mesmo pertencendo à comunidade, cada pessoa possui:
- uma história;
- uma direção;
- capacidades;
- desafios;
- escolhas;
- responsabilidades;
- um modo particular de realizar sua existência.

O médium não deve copiar o caminho de outro médium.

Sua formação precisa respeitar seu Orí, sua trajetória e sua responsabilidade pessoal.

#### Orí e discernimento

Quando alguém atribui todas as decisões às entidades, corre o risco de abandonar a própria responsabilidade.

O conceito de Orí recorda que a pessoa também precisa pensar, escolher, avaliar e responder por suas ações.

A entidade pode orientar, mas não deve substituir completamente a consciência.

A liderança pode aconselhar, mas não deve possuir a vida do integrante.

A comunidade pode oferecer fundamentos, mas a pessoa continua responsável por sua caminhada.

Cuidar de Orí também significa cuidar:
- da mente;
- do equilíbrio;
- das escolhas;
- da direção;
- da saúde;
- da dignidade;
- da capacidade de decidir;
- da relação consigo mesma.

A espiritualidade não deve destruir a autonomia.

Ela deve contribuir para uma vida mais consciente.

#### Axé: força de realização

Axé é frequentemente traduzido como energia, mas essa palavra pode ser insuficiente.

Axé pode ser compreendido como força vital, potência, capacidade de realização e princípio que permite que algo aconteça.

O axé circula.

Ele pode ser transmitido, fortalecido, cuidado e compartilhado por meio de:
- palavras;
- gestos;
- alimentos;
- folhas;
- águas;
- cantos;
- objetos consagrados;
- relações;
- rituais;
- bênçãos;
- presença comunitária.

Essa circulação não deve ser reduzida a uma eletricidade invisível.

O axé envolve relação, fundamento e finalidade.

Uma palavra possui força porque é pronunciada por alguém, em determinado contexto, com intenção e responsabilidade.

Um elemento ritual possui valor porque está inserido em uma tradição e em uma rede de significados.

#### Axé e responsabilidade

Toda força precisa de direção.

A mediunidade pode ser compreendida como uma forma de potência, mas a potência, sozinha, não garante o bem.

Uma pessoa pode possuir grande sensibilidade e utilizá-la de maneira irresponsável.

Pode ter facilidade de manifestação e alimentar vaidade.

Pode reconhecer elementos da vida do consulente e usar essa percepção para criar dependência.

Por isso, o axé precisa ser acompanhado de ética.

Não basta perguntar:
*“Quanta força existe nessa manifestação?”*

Também é necessário perguntar:
*“Para onde essa força está sendo conduzida?”*
*“Quais frutos ela produz?”*
*“Ela fortalece ou enfraquece a comunidade?”*
*“Ela promove autonomia ou dependência?”*

O axé amadurecido transforma potência em cuidado.

#### Exu: movimento, comunicação e relação

Exu é uma divindade fundamental em tradições iorubás e afro-diaspóricas.

Sua imagem foi profundamente distorcida pelo colonialismo e por interpretações cristãs racistas, que o associaram indevidamente ao diabo.

Essa equivalência é incorreta.

Exu não corresponde ao diabo cristão.

Ele está relacionado a dimensões como:
- movimento;
- comunicação;
- linguagem;
- troca;
- circulação;
- caminho;
- transformação;
- abertura;
- relação;
- imprevisibilidade;
- encruzilhada.

Exu coloca as coisas em movimento.

Sem movimento, não há encontro. Sem comunicação, não há comunidade. Sem troca, não há circulação de axé.

#### Exu e linguagem

Toda comunicação envolve interpretação.

Uma palavra pode aproximar ou afastar. Pode cuidar ou ferir. Pode abrir caminhos ou criar conflitos.

Exu recorda que nenhuma mensagem chega sem passar por mediações.

Na prática mediúnica, isso é muito importante.

Uma percepção espiritual precisa ser transformada em linguagem.

Nesse processo, podem surgir:
- escolhas de palavras;
- diferenças culturais;
- limites do vocabulário;
- emoções;
- expectativas;
- ambiguidades;
- interpretações pessoais.

A comunicação mediúnica não é um transporte neutro de informação.

Ela acontece em uma encruzilhada entre entidade, médium, consulente, comunidade e contexto.

Por isso, o cuidado com a palavra também é cuidado com Exu enquanto princípio de comunicação e movimento.

#### A encruzilhada

A encruzilhada é o lugar onde os caminhos se encontram.

Ela representa:
- escolha;
- possibilidade;
- encontro;
- conflito;
- dúvida;
- mudança;
- negociação;
- abertura;
- responsabilidade.

Na encruzilhada, não existe apenas um caminho visível.

A pessoa precisa observar, interpretar e escolher.

Por isso, a encruzilhada é uma imagem importante para o conhecimento.

Aprender não significa apenas receber respostas.

Também significa permanecer diante de possibilidades, reconhecer limites e decidir com responsabilidade.

#### Mediunidade como encruzilhada

A mediunidade pode ser compreendida como uma encruzilhada entre diferentes dimensões:
- corpo e espírito;
- indivíduo e comunidade;
- memória e presente;
- visível e invisível;
- experiência e interpretação;
- liberdade e responsabilidade;
- tradição e transformação;
- fé e investigação.

O médium encontra diferentes caminhos de interpretação.

Uma sensação pode possuir elementos espirituais, emocionais, corporais e culturais ao mesmo tempo.

O discernimento não consiste em eliminar rapidamente todas as possibilidades até restar uma resposta única.

Consiste em permanecer na encruzilhada tempo suficiente para compreender o que está acontecendo.

#### Exu e o perigo das respostas fáceis

O pensamento colonial frequentemente procura classificações fixas:
- verdadeiro ou falso;
- sagrado ou profano;
- espiritual ou psicológico;
- consciente ou inconsciente;
- tradição ou mudança.

A encruzilhada mostra que a realidade pode ser mais complexa.

Uma experiência pode ser espiritual e corporal.
Uma tradição pode preservar fundamentos e adaptar formas.
Um médium pode estar consciente e, ainda assim, viver uma experiência profunda.
Uma orientação pode conter uma percepção válida e precisar de cuidado na maneira de ser comunicada.

Exu desorganiza certezas excessivamente rígidas e obriga o pensamento a movimentar-se.

#### Exu não é desordem sem responsabilidade

Reconhecer Exu como movimento e abertura não significa defender ausência de limites.

Toda encruzilhada exige escolhas.
Toda comunicação possui consequências.
Todo movimento produz transformações.

Por isso, Exu também nos ensina responsabilidade.

O médium precisa responder pelo caminho que escolhe ao transformar uma percepção em palavra ou atitude.

#### Descolonizar a compreensão da mediunidade

Descolonizar não significa rejeitar todo conhecimento produzido no Ocidente.

Significa questionar a ideia de que apenas uma forma de conhecimento possui valor.

Durante muito tempo, práticas africanas e afro-diaspóricas foram classificadas como:
- superstição;
- atraso;
- feitiçaria;
- ignorância;
- desordem;
- doença;
- primitivismo.

Essas classificações não foram neutras.

Elas serviram para justificar perseguições, proibições e violências contra povos africanos e comunidades de terreiro.

Descolonizar o estudo da mediunidade exige reconhecer que essas tradições produziram conhecimentos complexos sobre:
- corpo;
- comunidade;
- saúde;
- natureza;
- ancestralidade;
- memória;
- ética;
- linguagem;
- espiritualidade;
- cuidado.

Isso não significa que toda prática esteja acima de críticas.

Toda comunidade humana pode produzir erros, conflitos e abusos.

A diferença é que a crítica não deve partir do preconceito nem da ideia de que essas tradições são inferiores.

#### Ancestralidade e Umbanda

A Umbanda foi construída em um país marcado pela diáspora africana, pela escravização, pelo racismo e pela resistência de comunidades negras.

Por isso, não é possível compreender plenamente a religião apagando suas matrizes africanas e afro-brasileiras.

A presença de Pretos e Pretas-Velhas, Orixás, ritmos, pontos, ervas, defumações e diferentes formas de culto carrega memórias de sobrevivência e reconstrução.

Esses elementos não devem ser tratados apenas como decoração espiritual.

Eles estão ligados a histórias de pessoas que preservaram saberes mesmo diante de perseguições.

Reconhecer essa história significa respeitar:
- os mais velhos;
- as comunidades tradicionais;
- os terreiros;
- as línguas de origem;
- os contextos culturais;
- os conhecimentos transmitidos;
- as lutas contra o racismo religioso.

A valorização da ancestralidade não deve transformar a África em uma imagem exótica ou idealizada.

Ela deve promover estudo, respeito, reconhecimento e responsabilidade.

#### A afroperspectiva na formação mediúnica

A afroperspectiva modifica algumas perguntas tradicionais sobre a mediunidade.

Em vez de perguntar apenas:
*“O que está acontecendo dentro do médium?”*

Também podemos perguntar:
*“Quais relações tornam essa manifestação possível?”*
*“Qual memória essa entidade atualiza?”*
*“Como o corpo aprendeu essa linguagem?”*
*“Que responsabilidade essa experiência produz para a comunidade?”*
*“Quais ancestrais e tradições estão sendo reconhecidos?”*
*“Que futuro está sendo construído por meio desse trabalho?”*

Essa mudança impede que a mediunidade seja reduzida a um fenômeno isolado.

Ela passa a ser compreendida como relação entre tempos, corpos, memórias e comunidades.

### Objetivos de aprendizagem

Ao concluir este módulo, o estudante deverá ser capaz de:
- compreender a pessoa como ser constituído em relação;
- reconhecer o sentido comunitário do conceito de Ubuntu;
- compreender a comunidade como rede que inclui vivos, ancestrais e futuras gerações;
- reconhecer que a mediunidade não é propriedade individual;
- compreender a ancestralidade como presença e responsabilidade;
- explicar o conceito de tempo espiralar;
- reconhecer a memória como processo vivo e transformador;
- compreender diferentes sentidos relacionados a Kalunga;
- perceber o corpo como arquivo de experiências e conhecimentos;
- reconhecer a oralidade e a performance como formas de transmissão;
- compreender o conceito de oralitura;
- reconhecer a participação da memória corporal no transe;
- compreender Orí como dimensão de singularidade, direção e responsabilidade;
- compreender axé como força vital e capacidade de realização;
- reconhecer a necessidade de orientar eticamente a potência mediúnica;
- compreender Exu como movimento, comunicação e relação;
- desfazer a associação colonial entre Exu e o diabo cristão;
- compreender a encruzilhada como espaço de escolha e conhecimento;
- valorizar as matrizes africanas e afro-diaspóricas da Umbanda;
- reconhecer a importância de combater o racismo religioso.

### Conceitos centrais do módulo

**Ubuntu**
Perspectiva ética e filosófica na qual a humanidade da pessoa é construída por meio das relações com a comunidade.

**Comunidade ampliada**
Rede de pertencimento que pode incluir pessoas vivas, ancestrais, futuras gerações, divindades, forças espirituais e território.

**Ancestralidade**
Relação de continuidade, memória, pertencimento e responsabilidade com aqueles que vieram antes.

**Tempo espiralar**
Compreensão do tempo em que o passado continua atuando no presente e retorna de maneira transformada na construção do futuro.

**Kalunga**
Conceito de matriz banto relacionado, conforme o contexto, a grande água, travessia, passagem, limite, ancestralidade e relação entre vida e morte.

**Corpo-arquivo**
Compreensão do corpo como lugar vivo de memória, experiência, gesto, ritmo, trauma, conhecimento e transmissão.

**Oralidade**
Forma de produção e transmissão de conhecimentos por meio da palavra falada, da convivência, da memória e da presença.

**Oralitura**
Inscrição e transmissão de saberes por meio da voz, do corpo, do gesto, da performance e do ritual.

**Orí**
Conceito ligado à cabeça física e espiritual, à singularidade, à consciência, à direção e à responsabilidade pessoal.

**Axé**
Força vital, potência de realização e capacidade de produzir movimento, transformação e existência.

**Exu**
Divindade relacionada ao movimento, à comunicação, à circulação, à linguagem, às trocas, aos caminhos e às encruzilhadas.

**Encruzilhada**
Espaço simbólico de encontro, escolha, possibilidade, transformação, negociação e responsabilidade.

**Afroperspectiva**
Modo de produzir conhecimento a partir de referências africanas e afro-diaspóricas, valorizando comunidade, corpo, ancestralidade, oralidade e território.

**Racismo religioso**
Perseguição, discriminação ou violência dirigida especialmente às religiões de matrizes africanas e aos praticantes.

### Questões para reflexão
1. O que significa afirmar que uma pessoa existe por meio das relações?
2. Como Ubuntu modifica uma visão individualista da mediunidade?
3. Quem participa da comunidade ampliada de um terreiro?
4. Por que a mediunidade não deve ser tratada como propriedade pessoal?
5. Qual é a diferença entre ancestralidade e simples lembrança do passado?
6. Como nossas escolhas presentes afetam aqueles que virão depois de nós?
7. O que a imagem do tempo espiralar nos ajuda a compreender?
8. Como o passado continua presente nas práticas religiosas atuais?
9. Quais sentidos podem estar relacionados a Kalunga?
10. Como o corpo guarda conhecimentos que nem sempre conseguimos explicar em palavras?
11. De que maneira o canto, o gesto e o ritual transmitem memória?
12. Por que a participação da memória corporal não invalida uma experiência espiritual?
13. Como Orí se relaciona à autonomia e à responsabilidade?
14. Por que o médium não deve entregar todas as decisões às entidades?
15. O que diferencia axé de uma ideia genérica de energia?
16. Por que toda força mediúnica precisa de orientação ética?
17. Quais distorções coloniais foram criadas sobre Exu?
18. Como a encruzilhada representa conhecimento e escolha?
19. Em quais encruzilhadas o médium se encontra durante seu desenvolvimento?
20. Como valorizar as matrizes africanas sem transformar a África em uma imagem única ou exótica?
21. De que maneira o racismo religioso ainda afeta os terreiros?
22. Quais práticas do TUCPB expressam comunidade, memória e ancestralidade?

### Atividade de memória e ancestralidade

Escolha uma prática do terreiro, como:
- um ponto cantado;
- uma oração;
- um gesto;
- uma forma de preparar o espaço;
- uma orientação dos mais velhos;
- um elemento ritual;
- uma maneira de receber uma entidade;
- uma história contada na comunidade.

Depois, reflita:
- Quem lhe ensinou essa prática?
- Essa pessoa aprendeu com quem?
- O conhecimento foi transmitido por escrito, pela fala ou pela observação?
- Que valores estão presentes nessa prática?
- O que ela preserva?
- Como ela foi transformada ao longo do tempo?
- O que precisa ser transmitido às próximas gerações?

Essa atividade ajuda a perceber que nenhum conhecimento começa completamente em nós.
Somos parte de uma corrente de transmissão.

### Atividade sobre o corpo-arquivo

Durante uma atividade ritual, observe:
- como seu corpo reage aos pontos cantados;
- quais movimentos surgem com mais naturalidade;
- como sua respiração se modifica;
- quais posturas produzem firmeza;
- quais sons despertam memórias;
- quais gestos você aprendeu observando;
- quais conhecimentos seu corpo realiza sem explicação verbal.

Depois, escreva um relato sem tentar definir imediatamente se cada sensação é espiritual, emocional ou corporal.
O objetivo é reconhecer que essas dimensões podem estar relacionadas.

### Estudo de situações

**Situação 1 — O médium indispensável**
Um médium afirma que a gira não funciona sem sua presença porque suas entidades são as mais fortes da casa.
*Reflexão*: Essa postura centraliza o trabalho no indivíduo e enfraquece a dimensão comunitária. Na perspectiva de Ubuntu, o terreiro é sustentado por uma rede de relações, funções e responsabilidades.

**Situação 2 — A tradição sem origem**
Uma prática africana é utilizada no terreiro, mas apresentada como uma técnica espiritual universal, sem reconhecimento de sua origem.
*Reflexão*: Apagar a origem pode reproduzir invisibilização. Valorizar um conhecimento também significa reconhecer os povos, as comunidades e as histórias que o preservaram.

**Situação 3 — Exu como ameaça**
Uma pessoa utiliza a imagem de Exu para ameaçar um integrante, dizendo que consequências espirituais acontecerão caso ele não obedeça.
*Reflexão*: Essa conduta reproduz distorções e utiliza o medo como forma de controle. Exu não deve ser transformado em instrumento de intimidação ou associado ao mal cristão.

**Situação 4 — A mensagem sem mediação**
Um médium acredita que toda palavra dita durante o transe vem diretamente da entidade, sem qualquer participação humana.
*Reflexão*: Toda comunicação passa pelo corpo, pela linguagem e pela história do médium. Reconhecer essa mediação aumenta a responsabilidade e o cuidado com a palavra.

**Situação 5 — A tradição imutável**
Uma pessoa afirma que qualquer mudança na forma ritual representa abandono completo da ancestralidade.
*Reflexão*: O tempo espiralar mostra que a tradição pode manter fundamentos e assumir novas formas. Preservar não significa congelar. A mudança, porém, deve ocorrer com estudo, respeito e responsabilidade.

### Ubuntu e a vida cotidiana

Ubuntu não deve permanecer apenas como um conceito bonito.

Ele precisa aparecer nas relações.

Uma comunidade inspirada por essa perspectiva procura:
- acolher sem humilhar;
- corrigir sem destruir;
- ensinar sem controlar;
- ouvir os mais velhos;
- proteger os mais novos;
- dividir responsabilidades;
- reconhecer diferentes capacidades;
- cuidar de quem está fragilizado;
- impedir abusos;
- celebrar conquistas coletivas;
- preservar a memória;
- preparar o caminho para quem virá.

A comunidade não é saudável apenas porque utiliza a palavra família.

Ela é saudável quando suas práticas produzem dignidade, pertencimento e responsabilidade compartilhada.

### Síntese do Módulo 4

A mediunidade não nasce nem se desenvolve no isolamento.

Ela acontece em uma rede de relações que envolve o médium, a entidade, o terreiro, os mais velhos, os consulentes, os ancestrais e a comunidade.

Ubuntu nos ensina que a pessoa se constrói na relação. Isso significa que a sensibilidade mediúnica não deve ser utilizada como propriedade ou instrumento de superioridade.

A ancestralidade amplia nossa percepção do tempo. Aqueles que vieram antes continuam presentes nas palavras, nos ritmos, nos gestos, nas práticas e nos conhecimentos transmitidos.

O tempo espiralar mostra que o passado não desaparece. Ele retorna transformado e participa da construção do futuro.

Kalunga nos coloca diante das travessias entre vida e morte, memória e esquecimento, separação e continuidade.

O corpo-arquivo recorda que o conhecimento não está apenas nos livros. Ele também vive na postura, na dança, no canto, na respiração, no gesto e no ritual.

Orí reafirma a singularidade e a responsabilidade pessoal. O médium pertence à comunidade, mas não abandona sua consciência e sua capacidade de escolher.

Axé é potência de realização. Entretanto, toda potência precisa de direção ética.

Exu ensina movimento, comunicação, troca e transformação. A encruzilhada mostra que o conhecimento nasce também diante das dúvidas, dos encontros e das escolhas.

Na perspectiva africana e afro-diaspórica, amadurecer mediunicamente não significa afastar-se do mundo para alcançar uma espiritualidade individual.

Significa aprofundar relações.

Significa reconhecer de onde viemos, cuidar de quem caminha conosco e preparar caminhos para aqueles que ainda virão.

No próximo módulo, estudaremos as epistemologias dos povos originários, aprofundando a relação entre mediunidade, território, sonho, palavra, floresta, encantamento e comunicação ancestral.

---
*Obra de referência: Mediunidade — fundamentos, experiência e desenvolvimento na Umbanda*
*Autor: Bàbá Aláàrìnrin Àjò / Pai Felipe de Oxaguian*
*Instituição: Templo Umbandista Caboclo Pena Branca — TUCPB*`,
    duration: "Módulo 4",
    instructor: "Babá Felipe",
    date: "24 de Julho de 2026",
    videoUrl: "https://www.youtube.com/embed/2p71_pHZ-WA",
    imageUrl: "https://img.youtube.com/vi/2p71_pHZ-WA/hqdefault.jpg",
    pdfUrl: "https://drive.google.com/file/d/1UJTPo2Wwcm3d280MCkHD8zAkSozG-3Yk/view?usp=drive_link",
    level: "Todos",
    tags: ["Mediunidade", "Módulo 4"]
  },

  {
    id: "les-t1-0",
    title: "O Simbolismo da Árvore e Sua Aplicação no Desenvolvimento Mediúnico na Umbanda De Caboclo",
    category: "TRILHA I: A RAIZ",
    description: `## A Metáfora Epistemológica e Ontológica da Árvore na Criação Mágica\n\nA busca incessante pela origem de todas as coisas e pelo sentido da existência humana é o motor primário que impulsiona o desenvolvimento da consciência, do pensamento filosófico e da própria magia. O ser humano, desde os primórdios em suas cavernas, utilizou a magia como a capacidade de exercer a sua vontade sobre a terra, moldando os universos físico, mental, emocional e espiritual. Nesse vasto panorama de compreensão ontológica e epistemológica, o estudo do sagrado, através das lentes da antropologia da religião, da psicologia analítica e das tradições místicas, depara-se frequentemente com arquétipos universais que transcendem fronteiras geográficas e temporais. Dentre estes, o simbolismo da árvore ergue-se como o mais profundo e onipresente pilar da compreensão humana sobre o cosmos, a vida, a morte e a interconexão indissociável entre a matéria densa e o divino sutil.\n\nNo contexto das práticas mágico-religiosas afrodiaspóricas, ameríndias e do ocultismo hermético — especialmente na síntese observada na Umbanda de Caboclo —, a árvore transcende a sua classificação como um mero elemento botânico ou alegoria poética. Ela assume o papel de uma complexa e exata cartografia do desenvolvimento espiritual e mediúnico. A premissa central estabelecida para o treinamento sacerdotal propõe uma visão tripartite do desenvolvimento mágico perfeitamente espelhada na anatomia arbórea: a raiz atua como a base do conhecimento, o substrato axiológico e teológico que sustenta todo o campo mágico; o tronco representa a estrutura filosófica, simbólica e antropológica erguida pelo iniciado através de intensa dedicação, disciplina e sacrifício; e a copa, com seus galhos, flores e frutos, materializa as escolhas, experiências, comportamentos e a caridade resultantes da prática ritualística.\n\nA pertinência fundamental desta alegoria reside no diagnóstico preciso das vulnerabilidades no treinamento de novos adeptos dentro dos terreiros. Quando o ensino espiritual negligencia a "raiz" — isto é, os fundamentos sobre a manipulação do axé, as leis de magia simpática, o princípio de contágio, a anatomia espiritual, as bases da ritualística, no estudo teórico e etc. —, o neófito é forçado a desenvolver-se apoiado unicamente na "copa", ou seja, na experiência empírica, no fenômeno e no transe extático. O resultado dessa inversão de valores é o crescimento de um médium estruturalmente irregular e frágil. Médiuns com raízes rasas, ainda que dotados de copas exuberantes caracterizadas por uma vasta sensibilidade anímica, tornam-se inevitavelmente suscetíveis a quebras e profundos desequilíbrios psíquico-espirituais diante dos intensos embates energéticos exigidos pela prática de terreiro.\n\nA terra, que simboliza a liderança religiosa e o próprio ambiente do terreiro, deve ser rica em nutrientes gnósticos para que a árvore humana possa crescer forte e exuberante. Para fundamentar e expandir esta filosofia, a fim de aplicá-la como um método pedagógico e iniciático eficaz para os médiuns do Templo Umbandista Caboclo Pena Branca (TUCPB) (https://site-tucpb.vercel.app), faz-se necessária uma imersão exaustiva no simbolismo da árvore em diversas matrizes culturais e místicas. Da Psicologia Analítica ao Xamanismo, das mitologias Nórdica e Cabalística às tradições Budistas e Africanas, a síntese destas perspectivas universais não apenas legitima a visão do sacerdote, mas fornece um arcabouço inquebrável para a alquimia interior do ser humano.\n\n## A Psicologia Analítica e o Enraizamento: A Descida às Profundezas do Inconsciente\n\nPara compreender o impacto transformador do simbolismo da árvore na psique do médium, é imperativo recorrer aos postulados da Psicologia Analítica desenvolvida por Carl Gustav Jung. A psique humana, segundo as formulações junguianas, consiste na totalidade de todos os processos psíquicos conscientes e inconscientes, e as imagens mentais (os símbolos) são intrínsecas ao centro de todas as funções básicas da personalidade. Na vasta pesquisa de Jung sobre os arquétipos e o inconsciente coletivo, a árvore emerge consistentemente como o símbolo supremo do processo de individuação, que é o desenvolvimento orgânico, lento e frequentemente involuntário do ser humano rumo à sua totalidade psíquica, integrando partes fragmentadas do ser em um núcleo central chamado de Self.\n\nO princípio da dualidade e o confronto com a Sombra são etapas incontornáveis neste processo arbóreo. Jung cunhou uma máxima profunda que ressoa cirurgicamente com a necessidade de fundamentação mediúnica: nenhuma árvore que queira tocar os céus com suas folhas pode fazê-lo sem que suas raízes atinjam os infernos. Sob a rigorosa ótica do desenvolvimento mediúnico na Umbanda de matriz xamânica (Umbanda de Caboclo), as folhas que buscam a vastidão celeste representam o anseio do médium pelo contato com as esferas luminosas da espiritualidade, a supraconsciência, os Orixás funfun (brancos, puros) e a paz de espírito. No entanto, as raízes que penetram o submundo, simboliza a descida compulsória e dolorosa do indivíduo ao seu próprio inconsciente pessoal e coletivo, enfrentando a sua Sombra.\n\nO médium iniciante frequentemente adentra o espaço sagrado do terreiro em um estado pueril de deslumbramento, impulsionado pela necessidade de fazer o bem ou por sensações de convocação espiritual, buscando predominantemente as manifestações fenomênicas que aliviem suas próprias angústias. Esta primeira fase, muitas vezes chamada de "empolgação", mascara a real responsabilidade do sacerdócio. A filosofia junguiana, alinhada à cosmologia umbandista, adverte que não há ascensão espiritual autêntica sem o enraizamento e a estabilização emocional. O mergulho nas próprias imperfeições, traumas latentes, vaidades, orgulhos e pulsões instintivas reprimidas constitui o alicerce que confere densidade e estabilidade ao tronco da personalidade.\n\nDentro da liturgia afro-brasileira, a Sombra psicológica não é um elemento a ser demonizado ou amputado, mas sim integrado, compreendido e educado. Este princípio encontra sua perfeita manifestação divina no culto a Exu, o orixá mensageiro, regente do movimento, da sexualidade e das encruzilhadas. Exu representa o dinamismo em contraste com a estática; ele possui um caráter mutável que espelha o próprio ser humano, transitando habilmente entre o positivo e o negativo, o erro e o acerto. A cor preta, associada a Exu e ao princípio feminino da existência, simboliza a terra, a matéria densa, o mistério da gestação e a sustentação dos nossos pés. Sem que o médium aprofunde suas raízes na lama escura do seu próprio ser, assimilando o axé vermelho da vitalidade instintiva e da transformação rude, ele jamais terá a força estrutural necessária para erguer os galhos em direção ao axé branco da serenidade e da paz espiritual governadas por Oxalá.\n\nAdemais, em seus profundos estudos sobre a alquimia, Jung equiparou frequentemente a imagem da Árvore Filosófica à figura de Mercurius e ao lapis philosophorum (a pedra filosofal), que encerram o mistério da união dos opostos e a quintessência do processo de individuação. A árvore orgânica, através de sua fisiologia natural, opera uma alquimia ininterrupta: ela retira do submundo escuro (a terra e os minerais) os nutrientes densos e a água, elevando-os com imenso esforço contra a força da gravidade através do tronco até atingir as folhas, onde, pelo fogo invisível dos raios solares, transmuta esses elementos em seiva nutritiva e oxigênio puro, alimentando a si mesma e ao ecossistema.\n\nO médium engajado na corrente do terreiro é forjado para atuar mecanicamente e espiritualmente como esta mesma Árvore Filosófica. Durante o rito, ele absorve as energias densas, as miasmas, as demandas e as dores emocionais dos consulentes (o elemento terra e água), processa essas frequências em seu próprio corpo físico e sutil (o Ara e o Ori), e, através do fogo do espírito, da vontade mágica e da interferência das entidades incorporadas, transmuta essa carga pesada em passes de cura, aconselhamento iluminado e elevação consciencial. Entender a mediunidade não como um dom passivo de subserviência, mas como um metabolismo espiritual ativo e um laboratório vivo de transformação, é o que distingue um médium bem fundamentado e psicologicamente individuado de um mero "aparelho" descompensado e sugestionável.\n\n## O Xamanismo, o Axis Mundi e a Anatomia Espiritual\n\nA visão estrutural da Umbanda Xamânica (Umbanda de Caboclo) adquire contornos de profunda universalidade e validação acadêmica quando analisada sob a perspectiva do xamanismo e das "técnicas arcaicas do êxtase" magistralmente catalogadas e descritas pelo historiador das religiões Mircea Eliade. Na antropologia e na mitologia comparada, a árvore transcende a biologia para assumir o monumental arquétipo do Axis Mundi (Eixo do Mundo), um pilar cósmico insubstituível que atravessa e conecta os três reinos estruturais do universo: o mundo inferior subterrâneo (através de suas raízes), o mundo terreno da experiênia mortal (através de seu tronco) e o mundo superior ou celeste (através de seu topo e galhos).\n\nEliade postula que toda a civilização, independentemente de sua época, e todo microcosmo habitado necessitam de um "Centro" geográfico e espiritual, um omphalos (umbigo), onde o sagrado irrompe rasgando o tecido da realidade profana, permitindo que as correspondências absolutas entre o alto e o baixo se concretizem. Na cosmologia do xamanismo siberiano, altaico e ameríndio, a Árvore do Mundo situa-se indubitavelmente neste epicentro. O xamã (que encontra seu paralelo direto no médium de umbanda) utiliza esta árvore estruturalmente, ou o som rítmico do seu tambor — cujo aro de madeira provém mitologicamente dos galhos desta mesma árvore primordial —, para alterar sua consciência, entrar em estado de transe e realizar a viagem extática. É através deste eixo que as mensagens de advertência e as bênçãos das entidades superiores descem à Terra, e é por ele que as súplicas, o fumo e as preces humanas ascendem à eternidade.\n\nNo contexto arquitetônico e ritualístico umbandista, o terreiro como um todo — e especificamente o congá (altar) e o roncó (quarto de assentamentos) — atua como este Axis Mundi macrocósmico. Contudo, a filosofia iniciática exige que, microcosmicamente, o próprio corpo e a mente do médium se metamorfoseiem no Eixo do Mundo. O entendimento da anatomia espiritual no pensamento iorubá clarifica esta responsabilidade. O ser humano não é uma criatura estática, mas um entrelaçamento dinâmico entre o mundo interno, a sociedade e o plano espiritual. Ele é composto por princípios vitais naturais: o Ara (corpo físico), o Ojiji (a sombra e essência visível), o Okan (coração, sede da inteligência e da ação), o Emi (sopro vital divino), o Esè (a perna, símbolo do poder pessoal de caminhar) e, governando a totalidade, o Ori (a cabeça, receptáculo do destino pessoal).\n\nNa incorporação mediúnica estudada na Umbanda, não é um fenômeno de possessão ou anulação do ser, mas a reatualização sofisticada do transe xamânico, onde a divindade (seja um Orixá de força primal, um Caboclo das matas ou um Preto Velho da ancestralidade) se conecta diretamente ao topo da árvore pessoal, o Ori. O Ori, sendo composto filosoficamente por quatro cantos energéticos (testa/ar, nuca/fogo, direita/terra, esquerda/água), funciona como as grandes ramificações da copa, captando os ventos do destino e as 256 possibilidades de caminhos (Odus) que a alma pode percorrer em sua evolução.\n\nAlém do aspecto espacial, o xamanismo atua na abolição do tempo. O rito não é uma mera celebração, mas uma tecnologia espiritual que visa suspender o tempo histórico e profano, transportando os participantes de volta ao tempo mítico das origens (in illo tempore), o inconsciente atemporal onde impera a perfeição. O desenvolvimento mediúnico deve preparar o médium para suportar esta fissura na realidade. A árvore, com seus ciclos perenes de aparente morte e letargia no inverno seguidos de um vigoroso renascimento florido na primavera, representa essa constante e inesgotável regeneração cósmica e temporal. O médium aprende com a botânica sagrada que as crises energéticas, as dores e as "mortes" de conceitos psicológicos no terreiro são, na verdade, ritos de passagem liminares e cruciais, sem os quais seria impossível brotar novas folhagens de sabedoria e adquirir um novo status espiritual de maior responsabilidade perante a comunidade.\n\n## O Sacrifício Magístico e a Geometria da Consciência: Yggdrasil e a Árvore da Vida Cabalística\n\nAo investigar exaustivamente a ontologia da árvore, duas tradições místicas, esotéricas e mitológicas fundamentais fornecem paralelos absolutos com as práticas iniciáticas afro-ameríndias e a lei universal de causa e efeito: a mitologia nórdica, através da Yggdrasil, e o misticismo judaico hermético, por meio da Árvore da Vida da Cabala. Ambas as correntes revelam inequivocamente como a árvore não apenas estrutura geometricamente o universo, mas exige irrevogavelmente o sacrifício pessoal para conceder poder e conhecimento oculto.\n\nNa vasta e impiedosa cosmologia escandinava, Yggdrasil é o colossal e eterno Freixo do Mundo. Suas imensas raízes e galhos robustos estendem-se pelo abismo para conectar e sustentar os nove reinos da existência, como Asgard (reino dos deuses), Midgard (reino dos humanos) e Helheim (submundo dos mortos). A lenda mais emblemática e esotérica envolvendo esta árvore sagrada não trata de sua criação, mas da busca implacável por conhecimento superior perpetrada pelo deus caolho Odin. Para compreender os segredos indizíveis do universo e da magia — materializados nas Runas, que não eram meras letras de um alfabeto, mas símbolos arquetípicos de forças universais —, Odin submeteu-se a um rito de flagelação extrema. Ele dependurou-se na Yggdrasil por nove dias e nove noites, transpassado e ferido pela própria lança, recusando peremptoriamente pão, água e auxílio. O sacrifício de Odin não foi um ato messiânico para a redenção da humanidade pecadora, mas um auto-sacrifício iniciático; foi a morte excruciante do seu ego limitado e profano para possibilitar o renascimento de um deus detentor do conhecimento cósmico e do poder sobre a vida e a morte.\n\nEsse antigo mito ilustra magistralmente, e de forma visceral, o conceito tecnológico-espiritual de Ebó (sacrifício) operado exaustivamente na Umbanda de Caboclo. O Ebó não se traduz primariamente como matança ou perdas cruéis, mas sim como troca energética, transmutação e doação voluntária. A vida é sustentada pela troca; a magia opera essencialmente através da compensação onde a energia é reposta após o seu consumo. Para o médium adquirir domínio sobre si mesmo (dominando as suas "runas" interiores e os mistérios impenetráveis do axé), ele deve, inescapavelmente, sacrificar algo de imenso valor pessoal. Para ascender a sacerdote, o indivíduo sacrifica incontáveis horas de sono, abre mão de confortos materiais, prioriza os dias de gira em detrimento de eventos sociais, isola-se em recolhimentos de bori, submete-se a preceitos alimentares estritos (quizilas e ewos) e dedica-se a uma profunda higienização física e moral.\n\nCuriosamente, a etimologia da palavra Yggdrasil pode ser traduzida literalmente como o "Cavalo de Odin" (onde Ygg é um dos nomes de Odin e drasil significa cavalo) ou, em uma interpretação ritualística, a "Forca". Esta tradução linguística espelha com exatidão matemática o jargão umbandista que define o médium como o "cavalo" ou "aparelho" do Orixá e do Guia Espiritual. Submeter o próprio corpo e mente ao transe fenomênico, abdicando do controle da consciência analítica (ficar dependurado na árvore da submissão espiritual), é um processo doloroso e aterrorizante para o ego vaidoso e orgulhoso, mas revela-se como a única e estreita via de acesso aos mistérios do oculto e à cura das dores da comunidade. O médium, pendurado em sua própria disciplina e trespassado pela lança do compromisso mediúnico, adquire, assim como Odin, a visão das dinâmicas energéticas que governam o destino humano.\n\nAvançando para o hermetismo e a tradição judaica, a Cabala descreve a anatomia de Deus e do universo através do sofisticado sistema hierárquico da Árvore da Vida. Ela é meticulosamente dividida em dez emanações ou esferas luminosas (as Sephiroth), interligadas por vinte e dois caminhos, e estruturadas verticalmente em três pilares fundamentais. Essa complexa estrutura não opera apenas como uma cosmogonia teológica que explica a criação do universo — partindo da causa primeira e atemporal em Kether (a Coroa), condensando-se através da força e da forma até se materializar densamente em Malkuth (o Reino, a Terra) —, mas funciona, simultaneamente, como um roteiro psicológico exato para a evolução da alma humana. Microcosmicamente, o indivíduo deve empreender a tarefa homérica de escalar a árvore de baixo para cima. Partindo da ignorância, da ilusão e da materialidade densa de Malkuth, o adepto refina seus instintos emocionais, equilibra seu intelecto e expande sua consciência, subindo pelas esferas até atingir a reunificação e a iluminação no topo, próximo a Kether.\n\nA Árvore da Vida possui o Pilar da Misericórdia à direita (associado à expansão, ao princípio masculino e à força de Chokmah e Chesed), o Pilar da Severidade à esquerda (associado à contração, ao princípio feminino, à forma e ao julgamento de Binah e Geburah) e o Pilar do Equilíbrio ao centro, que harmoniza as polaridades. Tal dinâmica guarda uma simetria perfeita e incontestável com as forças mágicas manipuladas nas giras de terreiro. Na liturgia e teologia afro-brasileira, o axé masculino (branco, procriador, associado a Oxalá) interage ininterruptamente com o axé feminino (preto, receptivo, impuro, associado à Terra) para gerar o movimento vital dinâmico (vermelho, o fogo de Exu).\n\nO médium em pleno desenvolvimento deve aprender a transitar com maestria e segurança entre essas extremas linhas vibratórias de força. Ele deve saber empunhar a lâmina flamejante e a disciplina implacável da severidade marcial de Ogum (força, lei, corte), sem perder a dodoçura sedutora e a diplomacia emocional da misericórdia de Oxum. Ele invoca a sabedoria superior e a visão altiva de Oxalá no topo de seu Ori, mas mantém a força vital primitiva e a capacidade de resolução terrena de Exu firmadas na base de sua manifestação em Malkuth. Como o fluxo elétrico ininterrupto nas esferas da Cabala, o axé condensado no terreiro pode ser armazenado, dissipado e transmutado; o ápice do desenvolvimento do médium é a capacidade de permitir que essa voltagem espiritual transite por suas "esferas" orgânicas e psicológicas interiores sem causar um curto-circuito em sua anatomia energética, mantendo-se sempre fixo em seu Pilar de Equilíbrio (a esfera de Tiphareth / Beleza / Coração).\n\n## O Despertar da Bodhi e o Domínio Psíquico: O Foco na Prática\n\nNas veneráveis tradições orientais, particularmente no Budismo de matriz indiana e asiática, o simbolismo da Árvore desvia-se levemente do foco exclusivo na estruturação mágica do cosmos para assumir o significado profundo do despertar espiritual e do triunfo definitivo da mente sobre o sofrimento. O mito fundamental narra que o príncipe Siddhartha Gautama, exaurido de suas práticas de ascetismo extremo e determinado a romper o ciclo de renascimentos (Samsara), sentou-se sob a ampla copa de uma antiga figueira sagrada da espécie Ficus religiosa — eternizada como a Árvore Bodhi — na região de Bodh Gaya. Siddhartha fez um juramento silencioso e inabalável de que não se levantaria daquele local, mesmo que sua pele secasse e seus ossos apodrecessem, até que o mistério do sofrimento humano fosse plenamente compreendido e transcendido.\n\nDurante sua imutável permanência meditativa sob a proteção da árvore, Siddhartha foi violentamente assaltado pelas hordas de Mara, o demônio da ilusão, do desejo e da morte. Mara enviou tempestades terríveis, exércitos monstruosos ameaçadores e suas próprias filhas sedutoras para desviar a atenção do asceta. Siddhartha, no entanto, não reagiu com raiva ou violência, não fugiu amedrontado, nem cedeu às volúpias prometidas; ele permaneceu enraizado e absolutamente centralizado. Com um simples toque da mão direita no solo (o Bhumisparsha Mudra), ele invocou a própria Mãe Terra para testemunhar o seu mérito e o seu direito inalienável de ocupar aquele espaço sagrado, até finalmente atingir o despertar completo e definitivo, tornando-se o Buda (o Iluminado).\n\nPara a coroa do desenvolvimento mediúnico (a majestosa "Copa" da árvore umbandista), este rico simbolismo hindu-budista reveste-se de importância vital. O trabalho semanal de um médium em um terreiro frequentemente envolve o embate direto e exaustivo com energias desequilibradas, entidades sofredoras, kiumbas manipuladoras, espíritos zombeteiros e, não menos perigosas, as próprias tempestades emocionais, mentais e cármicas trazidas pelos consulentes e irmãos de corrente. Neste cenário caótico, o médium desenvolvido não pode ser arrastado pelas paixões ilusórias do ambiente. Ele deve cultivar incansavelmente em seu interior a resiliência silenciosa da Árvore Bodhi: a capacidade de permanecer imóvel, impassível e centralizado através do esvaziamento mental (Epoché) e da atenção plena perante as hostilidades e as seduções psíquicas (Mara).\n\nA "sombra da árvore", na literatura sagrada, provê alívio do sol escaldante do desespero material e proporciona acolhimento compassivo para os andarilhos da vida. Um médium adequadamente treinado na rigorosa filosofia de ancoramento e enraizamento xamânico torna-se, na prática, um porto seguro ambulante. Ele é capaz de oferecer a caridade genuína, o conselho amigo e o abrigo vibratório para a dor alheia sem se deixar sugar, corromper ou adoecer pelos implacáveis ventos das ilusões externas. A árvore ensina que, para curar, não é necessário absorver a doença do outro, mas sim manter a própria integridade estrutural para que a entidade possa atuar com máxima potência e clareza analítica.\n\n## A Ancestralidade e a Matriz Afro-Indígena: O Rei Iroko, o Majestoso Baobá e a Força do Tempo\n\nTranspondo a pesquisa comparativa para desaguar finalmente na raiz teológica e antropológica primária que dá base e identidade à Umbanda de Caboclo — no qual, se fundamentas nas culturas africanas e indígenas —, encontram-se as majestosas e temidas concepções vegetais ligadas intrinsecamente ao culto à ancestralidade e ao domínio do tempo. O estudo foca na reverência absoluta à árvore Iroko (associada sincreticamente no Brasil à imponente gameleira branca, Ficus insipida) e ao milenar Baobá (Adansonia digitata).\n\n**A Sabedoria de Iroko: O Domínio do Tempo e a Maturidade Espiritual**\nNa riquíssima cosmologia de origem nagô-iorubá, jeje (onde atende pelo nome de vodum Loko) e banto (reverenciado como o Inquice Tempo ou Kitembu), Iroko transcende a mera classificação como o espírito de uma árvore. Ele é a própria personificação e o Orixá regente das variações meteorológicas, do tempo em sua passagem inexorável, cíclica e implacável, e o guardião soberano das florestas e matas seculares. Nos mitos de criação fundacionais da Terra, Iroko é tido como a árvore primordial e primeva, a primeira semente a germinar no caos do mundo recém-formado e, portanto, a morada original de todos os Orixás e o seio insubstituível da natureza geradora.\n\nO culto devotado a Iroko nos terreiros tradicionais possui tabus e ewos extremamente severos; um dos principais dita que jamais se pode tocar no tronco de um Iroko consagrado, ou interferir em sua base, sem ter cumprido rigorosos preceitos de abstinência e sem a reverência e a paciência exigidas pelo rito milenar, sob pena de punições psíquicas e infortúnios severos aos infratores. Ele exige que se dê a ele o ritmo acertado de cada coisa, com sua cadência própria, rejeitando as pressões e imediatismos humanos.\n\nA lição filosófica extraída da energia de Iroko/Tempo e sua aplicação na psique dos neófitos em desenvolvimento funciona como o antídoto mais eficaz e direto contra a urgência profana, a impaciência crônica e a ansiedade epidêmica que caracterizam a sociedade contemporânea. A sociedade moderna fomenta a ansiedade, a busca por atalhos e os resultados instantâneos, mas Iroko, como implacável guardião do relógio cósmico, avisa em provérbios ancestrais que "o tempo dá, o tempo tira, o tempo passa e a folha vira". Um dos maiores e mais exaustivos desafios dos sacerdotes e zeladores de santo é conter e educar a ansiedade febril dos novatos que desejam "receber" e incorporar suas entidades de forma apressada, que anseiam por compreender e manipular oráculos sagrados antes do tempo e que almejam ascender de grau iniciático sem terem se submetido ao labor denso, silencioso e solitário do desenvolvimento mediúnico.\n\nO tempo regido por Iroko (o tempo laborioso e mítico) não pode ser domado ou apressado pela vontade humana. Observando a biologia, constata-se que as raízes de uma colossal gameleira são capazes de rasgar concretos, destruir o asfalto e quebrar rochas sólidas; contudo, elas executam esse feito formidável numa velocidade geológica, totalmente imperceptível ao olhar afoito e imediatista do homem. O desenvolvimento da coroa e do Ori mediúnico exige e respeita estritamente essa mesma temporalidade orgânica: absorvendo as lições progressivamente, decantando e assentando o axé recebido sem causar rupturas emocionais bruscas, permitindo que a sabedoria da entidade se amalgame lentamente com a consciência do médium até atingirem a fluidez perfeita e o transe harmônico.\n\n**O Gigante Baobá: O Cofre da Resiliência e da Memória Ancestral**\nLado a lado com Iroko, o formidável Baobá consolida-se como a verdadeira árvore da vida do continente africano. Trata-se de uma entidade botânica com a assombrosa capacidade de viver milhares de anos e armazenar dezenas de milhares de litros de água em seu tronco agigantado, maciço e cavernoso, tornando-se o arquétipo visual perfeito da resiliência extraordinária e da continuidade histórica do povo negro e de suas tradições. O simbolismo empregado nas aldeias africanas atribui às suas raízes imensas e ocultas a representação dos ancestrais divinizados (Egungun), que, firmes na terra escura, continuam sempre presentes, participando ativamente da vida e das decisões do grupo social. O tronco largo e inabalável abriga e representa as crianças e as gerações atuais em pleno crescimento; os galhos retorcidos equivalem ao amadurecimento e à velhice; e as folhas, ao cumprirem seu ciclo vital e caírem no solo, alimentam novamente a terra e as raízes, promovendo a eternidade e a retroalimentação do clã e da linhagem.\n\nHistoricamente, durante os sombrios séculos do tráfico transatlântico, o Baobá foi ressignificado e associado às dores dos escravizados. Na costa da África, mercadores de seres humanos forçavam os capturados a realizarem ritos em torno do tronco da árvore — a infame "volta do esquecimento" —, na tentativa de fazer com que perdessem suas memórias, suas tradições e sua essência antes do embarque. Contudo, a memória celular e espiritual resistiu indomável através das águas.\n\nPara a prática da Umbanda, que nasce como uma religião genuinamente brasileira calcada na síntese do sofrimento e da superação, trazer à tona a simbologia perene do Baobá significa restaurar a força motriz do Egbé (a comunidade espiritual e familiar do terreiro). Significa garantir que as lições valiosas e a sabedoria lapidada pela dor dos antepassados (arquétipo solidificado nos Pretos Velhos e nas almas curadoras) estruturem as espinhas dorsais dos jovens médiuns, habilitando-os a suportarem as agruras cotidianas e as injustiças persistentes do mundo contemporâneo. O médium umbandista, espelhando a engenhosidade biológica do Baobá, deve aprender a armazenar e proteger em seu imo a "água" vital (a empatia emocional, o amor e a sabedoria das entidades) proveniente das experiências passadas, utilizando esse reservatório místico para se sustentar e nutrir a comunidade durante os períodos de seca cármica e privação espiritual. O Orixá Ossaim, senhor absoluto do segredo das folhas que curam, e Oxóssi, o caçador provedor, operam suas magias justamente neste cenário de resistência e provimento florestal, vegetal e espiritual.\n\n## O Terreiro Escola: Um Sistema Arbóreo e Metodológico para o TUCPB\n\nO Templo Umbandista Caboclo Pena Branca (TUCPB), orienta suas ações e práticas devocionais sob a égide incontestável da tríade "humildade, amor e caridade", e autodefine-se institucionalmente como um verdadeiro "Terreiro Escola", profundamente comprometido com o ensino contínuo, a desmistificação do culto e o auxílio estruturado e gradativo no desenvolvimento mediúnico de seus filhos de fé e adeptos.\n\nComo uma Umbanda de Caboclo ou Xamânica bem completa, o terreiro trabalha ativamente com todas as linhas de Umbanda. Sob a regência do mentor chefe, o Caboclo Pena Branca, o TUCPB organiza sua egrégora de guias espirituais em uma hierarquia exata de trabalho: abaixo do mentor chefe encontram-se o Caboclo 7 Jiboias, o Preto Velho Vovô Cipriano, o Boiadeiro Menino, o malandro Zé Pelintra, o guerreiro Ogum Beira Mar e, chefiando a linha de esquerda, seu Exu Rei das Sete Encruzilhadas, acompanhado por Exu Lúcifer, Maria Padilha e o guardião da porteira, seu Exu Tiriri.\n\nPara estruturar cientificamente e fundamentar teologicamente o desenvolvimento e o acompanhamento dos médiuns do TUCPB através deste vasto e milenar simbolismo, propõe-se um currículo de progressão e avaliação ancorado na botânica oculta e mística das culturas analisadas. O objetivo é afastar definitivamente o misticismo animista alienante, substituindo-o por um sistema rigoroso, reflexivo e profundamente transformador para a sociedade.\n\n**Fase 1: O Cultivo da Raiz (Enraizamento, Diagnóstico Psíquico e Aterramento)**\nNeste estágio embrionário, o médium ingressante é a semente colocada no solo escuro do terreiro. O objetivo pedagógico desta fase consiste em ensinar o novato a filtrar os nutrientes da doutrina, estabelecer sua segurança psíquica básica e descer às suas próprias profundezas inconscientes sem o uso do transe. O fundamento, baseando-se na psicologia analítica, é o enfrentamento da Sombra. O neófito será confrontado consigo mesmo. No TUCPB, o cultivo da raiz inicia-se pela firmeza doutrinária, pelo diagnóstico comportamental e pelo aterramento proporcionado pela Linha de Esquerda. Sob a regência de seu Exu Rei das Sete Encruzilhadas (Chefe de Esquerda), auxiliado pela firmeza de Exu Lúcifer, pelo refinamento místico de Maria Padilha e sob a estrita guarda de seu Exu Tiriri na porteira do templo, o médium aprende a policiar suas baixas pulsões, equilibrando a sua matéria (Malkuth) antes de buscar a irradiação da coroa (Kether).\n\nDo ponto de vista prático e pautado na obra de Eliade, esta fase trata da preparação do terreno ritual para fixar o Axis Mundi. O neófito é ensinado e avaliado sobre os conhecimentos de anatomia espiritual: ele deve compreender intelectualmente que seu próprio Ara (corpo físico) e Ori (coroa espiritual) configuram um altar biológico vivo e mutável, dividido em quatro quadrantes regidos pelos elementos. Aqui, sob as bênçãos de Iroko (Tempo), o novato aprende que a mediunidade verdadeira não sofre de aceleração. Treina-se o novato para frear seus impulsos. Exige-se dele paciência inabalável, banhos frequentes de ervas de descarrego, adoção de períodos de silêncio meditativo, obediência às restrições alimentares e cumprimento das obrigações básicas de limpeza astral e física do chão do terreiro (varrer, defumar, lavar) antes de qualquer exigência de incorporação mediúnica.\n\nNo âmbito do TUCPB, o aprendizado foca nos estudos teóricos obrigatórios sobre as energias arquetípicas da natureza (os Orixás e Guias), as leis de magia simpática e o princípio de contágio entre outras bases preliminares adotadas pelo Bàbá. O médium aprende que o ato singelo de bater cabeça no congá não é uma reverência humilhante de subserviência a outro ser humano, mas sim a mais alta tecnologia de fluxo energético, onde o médium aterra e liga fisicamente a sua coroa (o equivalente a Kether, o topo da Árvore) à imensidão magnética e estabilizadora de Malkuth (o chão, a Terra), permitindo que a descarga de energias densas flua e evite o congestionamento psíquico.\n\n**Fase 2: A Consolidação do Tronco (Resiliência, Filosofia Estrutural e Postura Ética)**\nUma vez que as raízes da humildade, da teoria e da proteção da esquerda (ebós e cortes e firmezas de seus guardiões) estão devidamente fixadas, o médium avança para a estruturação de seu aparelho mediúnico e psicológico. O objetivo pedagógico passa a ser a capacidade de sustentar forças e vibrações antagônicas simultâneas, garantir o equilíbrio físico e mental durante o transe e aprender a ascender a energia de forma ética e contínua. Utilizando a sabedoria da Árvore da Vida e da Yggdrasil nórdica, é a fase da escalada e do compromisso. Assim como o deus Odin aceitou sofrer dependurado na árvore sagrada para adquirir as Runas, o médium em nível intermediário aceita os rigores dos preceitos mais longos e o esforço do trabalho no terreiro em prol do verdadeiro aprendizado prático. Como uma Umbanda completa, o TUCPB exige que o médium aprenda a canalizar as diferentes linhas de trabalho da casa.\n\nO fortalecimento do tronco do médium é testado e consolidado sob a firmeza da Linha de Ogum, que limpa as trilhas e quebra as demandas; sob a mira precisa e a sabedoria do Caboclos; sob o vigor e a rusticidade dos Boiadeiros e Baianos; e sob a maleabilidade, carisma e jogo de cintura da linha dos malandros com o orientador Zé Pelintra. Essas correntes de força exigem uma postura ética rígida do médium, impedindo que o ego penda para os extremos e garantindo que o seu tronco permaneça erguido e centralizado como o Pilar do Equilíbrio.\n\nPraticamente, dentro da hierarquia do TUCPB, inicia-se o desenvolvimento ativo do transe e da mecânica de incorporação. O treinamento físico e mental consiste em manter a postura adequada durante a acoplagem vibratória, policiando rigorosamente os movimentos instintivos e vaidosos do próprio ego (o combate constante ao animismo mistificador e aos exibicionismos desnecessários). O médium aprende que atua como um canal tradutor; sua função é purificar a mensagem e a atuação curativa da entidade, garantindo que suas opiniões e recalques humanos não deturpem a mensagem e a moralidade do sagrado. A ética do médium é exaustivamente testada no seu cotidiano e ambiente de trabalho profano, cravando em seu ser o ensinamento irrefutável de que tudo o que ele praticar, falar e pensar fora das paredes do terreiro impactará diretamente a seiva do Axé que correrá dentro dele durante a gira oficial de trabalhos.\n\n**Fase 3: A Expansão da Copa (Iluminação, O Fruto da Caridade e o Voo Xamânico)**\nNo ápice do desenvolvimento iniciático do terreiro, o médium estabelecido desabrocha seus galhos e folhas para a atmosfera luminosa da espiritualidade avançada, tornando-se uma ferramenta madura da espiritualidade. O objetivo pedagógico e moral desta etapa é capacitar a árvore humana a produzir sombra frondosa (para garantir acolhimento aos sofredores), exalar o perfume das ervas sagradas e, finalmente, dar frutos tangíveis (a execução da caridade material e espiritual pura e irrestrita).\n\nBaseando-se nas virtudes meditativas alcançadas sob a Árvore Bodhi, o médium experiente transfigura-se num centro vivo e pulsante de iluminação e de resistência moral e pacifista. Sob a irradiação direta do mentor chefe do terreiro, o Caboclo Pena Branca, e com o amparo e conselhos amorosos de Preto Velhos, o médium atinge o grau de maturidade espiritual e moral necessário para a caridade incondicional. O Preto Velho Vovô Cipriano ensina aos filhos de fé que a busca teórica pelo conhecimento não é nada sem a busca pelo entendimento, e que o verdadeiro entendimento e aprendizado do espírito só se consolidam através das ações práticas de ajuda ao próximo.\n\nÉ neste grau de maestria que a teologia de Eliade do Axis Mundi se manifesta em sua plenitude orgânica e mágica. O médium do TUCPB adquire, mediante o esforço ininterrupto e a dedicação ao Terreiro Escola, a capacidade do transe seguro, fluído e profundo. Ele transcendeu os limites do seu próprio ego, tornando-se organicamente a própria ponte viva e a via de conexão rápida, límpida e ininterrupta entre o Céu (Orun) e a Terra (Aiyê). É capaz de ceder seu aparelho cognitivo, muscular e energético para dar passividade à entidade espiritual quase a qualquer instante exigido pela necessidade, manipulando com alta precisão cirúrgica e alquímica os inumeráveis elementos vegetais, animais e minerais descritos na liturgia para a criação das curas e desobsessões.\n\nA prática consolidada nas dependências do TUCPB atinge, então, o estado de Atendimento Pleno, conforme os princípios e estatutos da casa. O médium avançado doa continuamente os seus "frutos" (palavras de conforto, passes curadores, desobsessões e orientação) direcionados à comunidade de forma totalmente gratuita, compassiva, ética e amorosa, gerando novas sementes que perpetuarão o axé da casa pelos tempos.\n\n\n\n## Síntese Estrutural: A Correspondência das Disciplinas no Desenvolvimento Arbóreo\n\n| Parte Estrutural da Árvore Humana | Matriz Simbólica | Equivalência Psicológica (Jung) | Aplicação Pedagógica e Mediúnica (TUCPB) |\n| :--- | :--- | :--- | :--- |\n| **Raiz** (Subterrâneo e Fundação) | Linha De Esquerda, Exus e Pombogiras. Sobre orientação com Exu Rei das Sete Encruzilhadas, Exu Lúcifer. | Confronto com o Inconsciente; Assimilação da Sombra Pessoal; Aterramento com a Realidade. | Período neófito: Estudo profundo dos fundamentos do Axé; purificação de energias densas, disciplina de porteira e assentamento de energias. |\n| **Tronco** (Sustentação e Coluna) | Supervisionadas pelas linhas de centro: Boiadeiros, Baianos, Ciganos, Marinheiros e Malandros, Sob orientação do espírito Zé Pelintra, Yggdrasil/Sacrifício. | Desenvolvimento em direção ao Self; Integração de forças antagônicas (polaridades direita/esquerda). | Treinamento de todas as linhas de Umbanda; desenvolvimento de resiliência, postura ética e flexibilidade; transe e acoplagem de guias de sustentação. |\n| **Copa e Folhas** (Expansão e Recepção) | Com a linhas de Caboclo, orientadas pelo Caboclo Pena Branca, Kether/A Coroa, Voo Extático/Conexão Cósmica. | Individuação Psicológica Alcançada; Conexão com o Self e o Plano Superior. | Trabalho direto sob a irradiação do Mentor Chefe; recepção fluida de intuições elevadas e sintonia fina do transe xamânico. |\n| **Sombra e Frutos** (Colheita e Abrigo) | Amparada pela Linha dos Pretos Velhos, chefiada pelo Preto Velho Vovô Cipriano, Árvore Bodhi/Resistência, Baobá/Memória Ancestral. | Ação Cármica Consciente; Iluminação Prática através do Entendimento das Ações. | Atendimento e caridade incondicional na assistência; conselhos de Preto Velho; aplicação do Axé de cura e acolhimento. |\n\n## Considerações Finais: O Médium Como o Ápice do Laboratório Alquímico\n\nA imersão investigativa e sem precedentes nas sagradas e veneráveis tradições mitológicas mundiais revela, sem margem para dúvida ou ceticismo acadêmico, que a sofisticada visão e manipulação da magia apresentada nos estudos que fundamentam a prática do Templo Umbandista Caboclo Pena Branca (TUCPB) ressoa em perfeito uníssono com as verdades espirituais primordiais e imemoriais que acompanham a evolução da humanidade. O homem jamais cessou de tentar subir aos céus, e a natureza lhe ofereceu a escada orgânica. Desde os tempos caçadores-coletores mais primitivos, em que os grandes xamãs siberianos galgavam estacas de madeiras para resgatar almas aprisionadas nas garras da doença; até a imolação lendária do patriarca Odin, voluntariamente sangrando e oferecendo seu olho nas raízes úmidas do grandioso freixo escandinavo. Desde o labor de cabalistas mapeando a mente de Deus através das Esferas vitais; até o esvaziamento mental e o protesto passivo do Príncipe Siddhartha atingindo a iluminação sob a figueira indiana. Nestes incontáveis e assombrosos milênios, a Árvore sempre foi o altivo testamento físico e natural da espiritualidade ascendente; ela é a magia visível aos olhos carnais.\n\nPara os fundadores, dirigentes, sacerdotes e trabalhadores do Templo Umbandista Caboclo Pena Branca (TUCPB), compreender e assimilar esta filosofia magistral evita, de modo definitivo, que a instituição e seus membros caiam nos perigosos e escuros abismos do fanatismo e do animismo histriônico. Se o novo adepto, o médium ingressante, desde a primeira aula teórica ou a primeira vez que pisa no salão perfumado com alfazema, é cuidadosamente treinado para enxergar e reverenciar o seu próprio corpo tridimensional (Ara) e o seu poderoso destino (Ori) não como uma matéria vil, mas verdadeiramente como a divina e poderosa semente da própria Árvore da Vida, a doutrina religiosa torna-se viva, orgânica e tangível na carne.\n\nSob esta luminosa, ancestral e poderosa égide axiológica, pautada nos mais altos postulados dos cultos de matriz africana, ameríndia e no ocultismo ocidental e oriental, o árduo processo de desenvolvimento mediúnico jamais será visto como uma corrida desordenada para "receber entidades". A mediunidade será vivida diariamente no silêncio interno como a mais bela, lenta, meticulosa e divina expansão e explosão de um ser.\n\nComo as gigantes árvores sagradas da Terra, suas raízes de fé sorverão famintas a água cristalina e sagrada das memórias da ancestralidade imortal, dos velhos pretos e dos imensos caciques indômitos, extraindo das ricas fontes das linhas de Caboclos, Pretos Velhos, Boiadeiros e Malandros que sustentam as linhas de Umbanda toda a sabedoria mágica e elemental. E com este poderoso amálgama nutricional forjado na escuridão existencial, seu espesso tronco resistirá heroicamente, sem tombar um só centímetro, aos ventos assustadores das adversidades terrenas que caracterizam o karma humano.\n\nE, ao final de seu longo ciclo produtivo — que muitas vezes englobará o sacrifício de grande parte da vida biológica e de um mar de lágrimas caídas na esteira para a purificação da alma —, sua enorme e densa copa abrigará amavelmente, sob a sombra divina de suas folhas e galhos, a terrível, lancinante e pesada dor material, moral e existencial dos irmãos sofredores e aflitos que cruzarem as portas abertas do amado terreiro. Apenas o médium forjado nas raízes da Árvore e lapidado pela dor da tempestade será considerado espiritualmente apto a oferecer-lhes, de forma serena e livre da arrogância, os suculentos frutos de uma caridade incondicional. Desta sublime forma, realiza-se na Terra a mais bela, perfeita e comovente alquimia do ser humano, transformado de chumbo e barro à própria faísca, extensão e coroa eterna, luminosa e pulsante do sagrado coração vivo e infinito de Deus Pai Olorum, Zambi e Eledumare, perante toda a eternidade.`,
    duration: "32 min 24 seg",
    instructor: "Babá Felipe",
    date: "06 de Julho de 2026",
    videoUrl: "",
    imageUrl: "/capa-arvore.png",
    audioUrl: "https://drive.google.com/file/d/1Z6cs2LLF6IKzd_z-QorJ3r6mjaXOvsEq/preview",
    pdfUrl: "/O Simbolismo da Árvore.pdf.pdf",
    level: "Todos",
    tags: ["Fundamento", "Árvore da Vida"]
  },
  // OUTRAS AULAS E ESTUDOS
  {
    id: "les-outros-1",
    title: "Módulo Complementar: Apostila de Cânticos",
    category: "Outros",
    description: "Material de apoio contendo letras, fundamentos e traduções dos principais pontos cantados no terreiro.",
    duration: "Leitura",
    instructor: "Babá Felipe",
    date: "10 de Agosto de 2026",
    videoUrl: "",
    level: "Todos",
    tags: ["Apostila", "Cânticos", "Material de Apoio"]
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
  { id: "cura-1", date: "Segunda (06/07)", title: "Gira de Cura e Desobsessão", time: "19:00", description: "Atendimento voltado para cura espiritual e equilíbrio.", orixaGuide: "Pretos Velhos e Caboclos", hasConsultation: true, status: "Confirmada" },
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
    description: "Gira de atendimento e desenvolvimento com as linhas de Caboclos e Baianos.",
    hasConsultation: true,
    maxConsultations: 60,
    status: "Confirmada"
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
