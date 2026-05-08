const heroText = "Todo empezó con unos apuntes… y terminó siendo todo para mí";

const letters = [
  {
    title: "Carta 1",
    body: "Dolores,\n\nCuando pienso en ti, pienso en calma. En esa manera tan tuya de volver bonito incluso un día normal. Me gusta recordar cómo empezó todo, porque ahí ya estaba la ternura que hoy sigue creciendo entre nosotros.\n\nGracias por existir de esta forma tan tuya y tan importante para mí."
  },
  {
    title: "Carta 2",
    body: "Mi amor,\n\nTe amo en los momentos grandes, pero también en los pequeños: en los cafés, en las caminatas, en las conversaciones que parecen simples pero se quedan conmigo todo el día.\n\nSi alguna vez dudas de cuánto significas, vuelve a esta carta: estás profundamente guardada en mi corazón."
  },
  {
    title: "Carta 3",
    body: "Dolores,\n\nEl 4 de octubre de 2024 no fue solo una fecha. Fue una puerta hacia una vida más bonita contigo. Desde entonces aprendí que amar también es cuidar, escuchar, reír, pedir perdón y volver a elegir.\n\nY yo te sigo eligiendo."
  },
  {
    title: "Carta 4",
    body: "Amor,\n\nMe emociona imaginar todo lo que viene: vivir juntos en Cuenca, tener animales, cuidar un jardín y construir una vida con paciencia. No sé exactamente cómo será el futuro, pero cuando te imagino ahí, todo se vuelve hogar.\n\nQuiero llegar a ese mañana contigo."
  },
  {
title: "Carta: Donde todo empezó de verdad",
body: "A veces me pongo a pensar en cómo empezó todo y me parece hasta absurdo… porque no fue algo grande, no fue un momento de película, no fue nada que alguien diría 'wow, qué inicio'. Fue una clase. Un dedo dislocado. Unos apuntes.\n\nY sin embargo… terminó siendo todo.\n\nSi alguien me decía en ese momento que esa persona que estaba sentada al lado mío, concentrada en su mundo, se iba a convertir en alguien tan importante para mí… no lo creía.\n\nPero aquí estamos.\n\nY lo más loco es que no empezó con algo impresionante… empezó con algo real.\n\nY creo que por eso se siente tan fuerte."
},

{
title: "Carta: Cafecito contigo ☕",
body: "No sé en qué momento el café dejó de ser solo café.\n\nAntes era algo que tomaba porque me gustaba. Contigo… se volvió otra cosa.\n\nSe volvió excusa.\nSe volvió ritual.\nSe volvió ese pequeño momento donde el mundo se detenía un rato.\n\nMe acuerdo cuando descubrí que te gustaba igual que a mí, fuerte, sin azúcar… y fue como 'claro, tenía que ser así'.\n\nNo sé explicarlo bien, pero contigo incluso lo cotidiano se siente especial.\n\nY sí… puede sonar simple, pero para mí, uno de los mejores planes siempre va a ser:\n\nun café contigo."
},

{
title: "Carta: Las gomitas (sí, esto es importante)",
body: "Mira, yo sé que para cualquier persona esto suena como algo pequeño… pero para mí no lo fue.\n\nCuando me diste esas gomitas, fue como… ¿???\n\nO sea, en serio me quedé pensando:\n¿esto qué significa?\n¿me está coqueteando?\n¿es agradecimiento?\n¿qué está pasando aquí?\n\nPero más allá de eso, lo que realmente sentí fue algo más simple:\n\nque pensaste en mí.\n\nY eso, aunque parezca mínimo, no es cualquier cosa.\n\nDesde ese momento, las gomitas ya no son solo gomitas.\n\nAhora son un recuerdo contigo.\n\nY sí… ahora cada vez que veo gomitas, pienso en ti.\n\nGracias por eso… y también por confundir mi cerebro ese día."
},

{
title: "Carta: El miedo que no se veía",
body: "Hay algo que quizás no siempre se nota… pero estuvo ahí desde el inicio.\n\nEl miedo.\n\nNo por ti… sino por lo que ya había pasado antes.\n\nEse miedo de no ser suficiente.\nEse miedo de que todo termine igual.\nEse miedo de volver a sentir lo mismo.\n\nY aún así… me quedé.\n\nNo porque no tuviera miedo.\nSino porque sentí que contigo valía la pena intentarlo otra vez.\n\nY eso, aunque no lo parezca, fue una de las decisiones más importantes que tomé."
},

{
title: "Carta: Cuando no podía parar de hablar",
body: "Me acuerdo perfecto de ese día.\n\nYo hablando sin parar.\nLiteral sin parar.\n\nY tú… escuchando.\n\nNo interrumpiendo.\nNo ignorando.\nNo cambiando de tema.\n\nSolo… estando.\n\nPuede sonar normal, pero para mí no lo fue.\n\nPorque hacía tiempo que no me sentía así de cómodo con alguien.\n\nEse día entendí algo:\n\ncontigo puedo ser yo, sin filtro.\n\nY eso… vale demasiado."
},

{
title: "Carta: Nuestro primer beso (con skill issue incluido)",
body: "Seamos honestos…\n\nal inicio fue medio raro JASJASJ\n\nPero eso es lo bonito.\n\nNo fue perfecto.\nNo fue como en las películas.\n\nFue real.\n\nY poco a poco encontramos nuestro ritmo.\n\nY eso, para mí, es mejor que cualquier escena perfecta.\n\nPorque no era actuación.\n\nÉramos nosotros aprendiendo.\n\nY eso siempre lo voy a preferir."
},

{
title: "Carta: El 4 de octubre",
body: "Ese día tiene algo especial.\n\nNo porque todo empezó ahí…\n\nsino porque ahí decidimos ponerle nombre a algo que ya existía.\n\nPara mí, eso fue importante.\n\nNo por el título de 'novios'…\n\nsino porque significaba que ambos estábamos en la misma página.\n\nY desde ese día…\n\nsomos nosotros.\n\nOficialmente.\n\nY también emocionalmente."
},

{
title: "Carta: Cosas que nadie ve",
body: "Hay cosas que nadie ve de una relación.\n\nNo son fotos.\nNo son momentos bonitos.\n\nSon:\n- las conversaciones largas\n- los silencios\n- los momentos incómodos\n- los ajustes\n\nY lo que más me gusta de nosotros…\n\nes que incluso en esas partes, seguimos.\n\nNo somos perfectos.\n\nPero somos reales.\n\nY eso es mucho más importante."
},

{
title: "Carta: Aprender a no apresurar todo",
body: "Antes yo era así:\n\npasaba algo → quería arreglarlo YA.\n\nPero contigo aprendí algo distinto.\n\nQue no todo se resuelve en el momento.\n\nQue a veces necesitas tu espacio.\nQue a veces necesitas procesar.\n\nY aprendí a respetar eso.\n\nNo porque sea fácil…\n\nsino porque te respeto a ti."
},

{
title: "Carta: Cuando te extraño",
body: "No siempre es algo dramático.\n\nA veces simplemente pasa.\n\nEstoy haciendo algo normal…\n\ny de la nada pienso en ti.\n\nY es como:\n\n'mmm… quisiera estar con ella ahora'\n\nY ya.\n\nAsí de simple.\n\nAsí de constante."
},

{
title: "Carta: Tu forma de ser",
body: "Me gusta cómo eres.\n\nCómo te concentras.\nCómo haces tus cosas.\nCómo tienes tu propio ritmo.\n\nNo necesitas llamar la atención.\n\nY aún así… llamas la mía."
},

{
title: "Carta: Lo que cambiaste en mí",
body: "No fue algo radical.\n\nNo fue un cambio de un día para otro.\n\nPero poco a poco…\n\ncambié.\n\nY no porque tú me obligaras.\n\nSino porque contigo quería ser mejor.\n\nY eso es diferente."
},

{
title: "Carta: Momentos difíciles",
body: "No todo ha sido bonito.\n\nY eso está bien.\n\nPorque incluso cuando las cosas no son fáciles…\n\nseguimos aquí.\n\nY eso dice más que cualquier momento perfecto."
},

{
title: "Carta: Lo que construimos",
body: "Lo nuestro no apareció de la nada.\n\nSe fue construyendo.\n\nCon tiempo.\nCon detalles.\nCon decisiones.\n\nY eso es lo que lo hace tan fuerte."
},

{
title: "Carta: Futuro contigo",
body: "A veces pienso en el futuro.\n\nY estás ahí.\n\nNo como una idea lejana.\n\nSino como algo que quiero vivir."
},

{
title: "Carta: Cuenca",
body: "Me imagino una vida tranquila.\n\nCafé.\nCasa.\nNosotros.\n\nY honestamente… suena perfecto."
},

{
title: "Carta: Gracias",
body: "Gracias por estar.\n\nPor quedarte.\n\nPor ser tú.\n\nDe verdad."
},

{
title: "Carta: Si volviera a empezar",
body: "Volvería a sentarme ahí.\n\nVolvería a pedirte los apuntes.\n\nVolvería a todo.\n\nPorque sé a dónde llega."
},

{
title: "Carta: Te elijo",
body: "No es solo amor.\n\nEs elección.\n\nY te elijo.\n\nTodos los días."
},

{
title: "Carta: Nosotros",
body: "No somos perfectos.\n\nPero somos nosotros.\n\nY eso me gusta más que cualquier perfección."
}
];

const reminders = [
  ["☕", "Café fuerte sin azúcar", "Cada taza me recuerda cómo lo simple contigo se volvió especial."],
  ["🎬", "Películas", "Hay escenas que ya no miro igual, porque contigo aprendí que una buena historia también puede empezar en una clase."],
  ["🌧️", "Lluvia", "La lluvia tiene esa calma que se parece a estar contigo: suave, íntima, como si el mundo bajara la voz."],
  ["🚏", "Parada de bus", "Ese lugar se volvió más que una parada. Fue donde las despedidas se estiraban porque ninguno quería irse del todo."],
  ["🍬", "Gomitas", "Aún recuerdo cuando me las diste sin esperarlo."],
  ["🌲", "Picnic en el bosque", "Imagino ese picnic como una pausa perfecta: árboles, calma y tú haciendo que todo tenga sentido."]
];

const timeline = [
  ["Universidad", "Cuando empezó todo", "fotos/universidad.jpg", "Nos conocimos en la universidad, en una clase de historia del cine que sin saberlo cambió nuestro rumbo."],
  ["Los apuntes", "Primer acercamiento", "fotos/apuntes.jpg", "Una ayuda pequeña, unos apuntes y esa historia del dedo dislocado fueron el inicio discreto de algo inmenso."],
  ["Cafés juntos", "Cada taza, más cerca", "fotos/cafe.jpg", "Empezamos a compartir café fuerte sin azúcar, y sin darnos cuenta también empezamos a compartir refugio."],
  ["Caminatas a la parada", "Costumbre bonita", "fotos/caminata.jpg", "El trayecto se llenaba de compañía, ternura y ganas de seguir."],
  ["Primer beso", "Un instante nuestro", "fotos/beso.jpg", "Un momento torpe, valiente y hermoso. De esos que se quedan para siempre."],
  ["Inicio oficial", "4 de octubre de 2024", "fotos/oficial.jpg", "Ese día se convirtió en la fecha que le puso nombre a lo que ya venía creciendo."]
];


const dreams = [
  ["Un espacio nuestro", "Una casa tranquila donde cada detalle diga algo de nosotros: la luz de la mañana, una taza de café, fotos en la pared y esa sensación de volver a un lugar seguro."],
  ["Rutinas bonitas", "Quiero construir contigo rutinas que no pesen: cocinar algo simple, hablar de cualquier cosa, caminar sin apuro y encontrar paz en lo de todos los días."],
  ["Cuidar vida juntos", "Plantas, animales, un jardín pequeño o grande, y esa forma paciente de cuidar lo que crece. Como nosotros: con tiempo, ternura y constancia."],
  ["Elegirnos cada día", "Mi meta no es que todo sea perfecto. Mi meta es que, incluso en los días normales o difíciles, sigamos encontrando razones para elegirnos."]
];

const photoRollImages = [
  "fotos/rollo-001.jpg",
  "fotos/rollo-002.jpg",
  "fotos/rollo-003.jpg",
  "fotos/rollo-004.jpg",
  "fotos/rollo-005.jpg",
  "fotos/rollo-006.jpg",
  "fotos/rollo-007.jpg",
  "fotos/rollo-008.jpg",
  "fotos/rollo-009.jpg",
  "fotos/rollo-010.jpg",
  "fotos/rollo-011.jpg",
  "fotos/rollo-012.jpg",
  "fotos/rollo-013.jpg",
  "fotos/rollo-014.jpg",
  "fotos/rollo-015.jpg",
  "fotos/rollo-016.jpg",
  "fotos/rollo-017.jpg",
  "fotos/rollo-018.jpg",
  "fotos/rollo-019.jpg",
  "fotos/rollo-020.jpg",
  "fotos/rollo-021.jpg",
  "fotos/rollo-022.jpg",
  "fotos/rollo-023.jpg",
  "fotos/rollo-024.jpg",
  "fotos/rollo-025.jpg",
  "fotos/rollo-026.jpg",
  "fotos/rollo-027.jpg",
  "fotos/rollo-028.jpg",
  "fotos/rollo-029.jpg",
  "fotos/rollo-030.jpg",
  "fotos/rollo-031.jpg",
  "fotos/rollo-032.jpg",
  "fotos/rollo-033.jpg",
  "fotos/rollo-034.jpg",
  "fotos/rollo-035.jpg",
  "fotos/rollo-036.jpg",
  "fotos/rollo-037.jpg",
  "fotos/rollo-038.jpg",
  "fotos/rollo-039.jpg",
  "fotos/rollo-040.jpg",
  "fotos/rollo-041.jpg",
  "fotos/rollo-042.jpg",
  "fotos/rollo-043.jpg"

];



const knowQuestions = [
  {
    question: "¿Qué bebida nos unió más?",
    options: ["Café", "Té", "Chocolate"],
    answer: "Café"
  },
  {
    question: "¿Dónde nos conocimos?",
    options: ["Universidad", "Parque", "Concierto"],
    answer: "Universidad"
  },
  {
    question: "¿Qué me regalaste inesperadamente?",
    options: ["Gomitas", "Un libro", "Una flor"],
    answer: "Gomitas"
  },
  {
    question: "¿Cuál es nuestra fecha oficial?",
    options: ["4 de octubre de 2024", "14 de febrero de 2024", "1 de enero de 2025"],
    answer: "4 de octubre de 2024"
  }
];

const memoryIcons = ["☕", "🎬", "💋", "🌱", "🏡", "❤️"];
let memoryDeck = [];
let selectedMemory = [];
let locked = false;
let matched = 0;
let knowIndex = 0;
let knowScore = 0;
let musicFade = null;

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
  typeHero();
  updateCounter();
  renderReminders();
  renderTimeline();
  renderPhotoRoll();
  setupReveal();
  setupCursor();
  resetMemory();
  renderKnowQuiz();
  setupVoiceProgress();
  setupModalClose();
});

function hideLoader() {
  setTimeout(() => {
    document.getElementById("loader")?.classList.add("hidden");
  }, 700);
}

function typeHero() {
  const target = document.getElementById("typing");
  if (!target) return;

  let i = 0;
  const timer = setInterval(() => {
    target.textContent += heroText[i] || "";
    i++;
    if (i >= heroText.length) clearInterval(timer);
  }, 45);
}

function updateCounter() {
  const start = new Date("2024-10-04T00:00:00");
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const days = Math.max(0, Math.floor((today - start) / 86400000));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const rest = (days % 365) % 30;

  document.getElementById("counterDays").textContent = days;
  document.getElementById("counterText").textContent = `${days} días (${years} años, ${months} meses y ${rest} días)`;
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach(item => observer.observe(item));
}

function setupCursor() {
  const cursor = document.getElementById("cursor");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let cx = x;
  let cy = y;

  window.addEventListener("mousemove", event => {
    x = event.clientX;
    y = event.clientY;
    cursor.classList.add("visible");
  });

  function move() {
    cx += (x - cx) * 0.16;
    cy += (y - cy) * 0.16;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(move);
  }

  move();
}

function renderReminders() {
  const grid = document.getElementById("reminderGrid");
  if (!grid) return;

  grid.innerHTML = reminders.map((item, index) => `
    <button class="reminder-card reveal" onclick="openReminder(${index})">
      <span>${item[0]}</span>
      <strong>${item[1]}</strong>
    </button>
  `).join("");

  setupReveal();
}

function openReminder(index) {
  const item = reminders[index];
  openModal(`${item[0]} ${item[1]}`, item[2]);
}

function renderTimeline() {
  const grid = document.getElementById("timelineGrid");
  if (!grid) return;

  grid.innerHTML = timeline.map((item, index) => `
    <button class="timeline-item reveal" onclick="openTimeline(${index})">
      <span class="timeline-photo">
        ${item[2] ? `<img src="${item[2]}" alt="${item[0]}">` : "Foto aquí"}
      </span>
      <span class="timeline-copy">
        <small>${item[1]}</small>
        <strong>${item[0]}</strong>
        <p>${item[3]}</p>
      </span>
    </button>
  `).join("");

  setupReveal();
}

function renderPhotoRoll() {
  const track = document.getElementById("photoRollTrack");
  if (!track) return;

  const repeatedImages = [...photoRollImages, ...photoRollImages];

  track.innerHTML = repeatedImages.map((image, index) => `
    <button class="photo-roll-item" onclick="openPhotoRoll(${index % photoRollImages.length})">
      <img src="${image}" alt="Foto nuestra ${index + 1}" loading="lazy">
    </button>
  `).join("");

  setupReveal();
}

function openPhotoRoll(index) {
  const image = photoRollImages[index];

  openModal("Un recuerdo nuestro", "Una foto más de todas las formas en que me gusta recordarte.", {
    image
  });
}


function openTimeline(index) {
  const item = timeline[index];
  openModal(item[0], item[3], {
    image: item[2],
    placeholder: item[2] ? "" : "Espacio para una foto real"
  });
}


function simpleQuiz(correct) {
  document.getElementById("quizResult").textContent = correct
    ? "Sí. Todo empezó en la universidad, en historia del cine."
    : "Casi, pero nuestra historia empezó en la universidad.";
}

function trueFalse(answer) {
  document.getElementById("tfResult").textContent = answer
    ? "Verdadero. Ese café también es parte de nosotros."
    : "Falso. Justamente ese café se volvió uno de nuestros detalles.";
}

function renderKnowQuiz() {
  const box = document.getElementById("knowQuiz");
  if (!box) return;

  if (knowIndex >= knowQuestions.length) {
    box.innerHTML = `
      <p class="result">${knowScore} / ${knowQuestions.length}</p>
      <p>${knowScore === knowQuestions.length ? "Perfecto. Me conoces con ternura." : "Lo bonito es seguir aprendiéndonos."}</p>
      <button onclick="restartKnowQuiz()">Volver a jugar</button>
    `;
    return;
  }

  const current = knowQuestions[knowIndex];

  box.innerHTML = `
    <p class="result">Pregunta ${knowIndex + 1} de ${knowQuestions.length}</p>
    <p><b>${current.question}</b></p>
    ${current.options.map(option => `
      <button onclick="answerKnowQuiz('${option.replace(/'/g, "\\'")}')">${option}</button>
    `).join("")}
  `;
}

function answerKnowQuiz(option) {
  const current = knowQuestions[knowIndex];
  if (option === current.answer) knowScore++;
  knowIndex++;
  renderKnowQuiz();
}

function restartKnowQuiz() {
  knowIndex = 0;
  knowScore = 0;
  renderKnowQuiz();
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function resetMemory() {
  memoryDeck = shuffle([...memoryIcons, ...memoryIcons]).map((icon, index) => ({
    id: `${icon}-${index}`,
    icon,
    open: false,
    matched: false
  }));

  selectedMemory = [];
  locked = false;
  matched = 0;
  renderMemory();
}

function renderMemory() {
  const grid = document.getElementById("memoryGrid");
  const result = document.getElementById("memoryResult");
  if (!grid) return;

  grid.innerHTML = memoryDeck.map(card => `
    <button class="memory-tile ${card.open || card.matched ? "open" : ""}" onclick="pickMemory('${card.id}')">
      ${card.open || card.matched ? card.icon : "✨"}
    </button>
  `).join("");

  result.textContent = matched === memoryIcons.length
    ? "Encontraste todas las parejas. Todo terminó encajando."
    : `Parejas encontradas: ${matched} de ${memoryIcons.length}`;
}

function pickMemory(id) {
  if (locked) return;

  const card = memoryDeck.find(item => item.id === id);
  if (!card || card.open || card.matched) return;

  card.open = true;
  selectedMemory.push(card);
  renderMemory();

  if (selectedMemory.length === 2) {
    locked = true;

    const [a, b] = selectedMemory;

    if (a.icon === b.icon) {
      setTimeout(() => {
        a.matched = true;
        b.matched = true;
        matched++;
        selectedMemory = [];
        locked = false;
        renderMemory();
      }, 500);
    } else {
      setTimeout(() => {
        a.open = false;
        b.open = false;
        selectedMemory = [];
        locked = false;
        renderMemory();
      }, 800);
    }
  }
}

function showLetter(index) {
  const letter = letters[index];
  const box = document.getElementById("letterBox");

  box.innerHTML = `
    <h3>${letter.title}</h3>
    <p>${letter.body}</p>
  `;
}

function randomLetter() {
  const letter = letters[Math.floor(Math.random() * letters.length)];
  openModal(letter.title, letter.body, { letter: true });
}

function downloadPDF() {
  if (!window.jspdf) {
    alert("No se pudo cargar jsPDF. Revisa tu conexión a internet.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = width - margin * 2;

  doc.setFillColor(246, 239, 229);
  doc.rect(0, 0, width, height, "F");
  doc.setTextColor(77, 52, 44);
  doc.setFont("times", "bold");
  doc.setFontSize(30);
  doc.text("Para Dolores ❤️", width / 2, 95, { align: "center" });
  doc.setFont("times", "normal");
  doc.setFontSize(15);
  doc.text("Todas las cartas de nuestra historia", width / 2, 110, { align: "center" });

  letters.forEach((letter, index) => {
    doc.addPage();
    doc.setFillColor(255, 250, 244);
    doc.rect(0, 0, width, height, "F");

    doc.setTextColor(77, 52, 44);
    doc.setFont("times", "bold");
    doc.setFontSize(22);
    doc.text(letter.title, margin, 30);

    doc.setFont("times", "normal");
    doc.setFontSize(13);

    const lines = doc.splitTextToSize(letter.body, maxWidth);
    let y = 50;

    lines.forEach(line => {
      if (y > height - 25) {
        doc.addPage();
        doc.setFillColor(255, 250, 244);
        doc.rect(0, 0, width, height, "F");
        y = 25;
      }

      doc.text(line, margin, y);
      y += 7;
    });

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text(`Carta ${index + 1} de ${letters.length}`, width / 2, 286, { align: "center" });
  });

  doc.save("cartas-para-dolores.pdf");
}

function toggleMusic() {
  const music = document.getElementById("music");
  if (!music) return;

  if (music.paused) {
    music.volume = 0;
    music.play().catch(() => alert("Agrega un archivo music.mp3 en la carpeta."));
    fadeAudio(music, 0.28, 900);
  } else {
    fadeAudio(music, 0, 800, () => music.pause());
  }
}

function fadeAudio(audio, target, duration, done) {
  clearInterval(musicFade);

  const start = audio.volume || 0;
  const startTime = performance.now();

  musicFade = setInterval(() => {
    const progress = Math.min((performance.now() - startTime) / duration, 1);
    audio.volume = start + (target - start) * progress;

    if (progress >= 1) {
      clearInterval(musicFade);
      if (done) done();
    }
  }, 30);
}

function toggleVoice() {
  const audio = document.getElementById("voiceAudio");
  if (!audio) return;

  if (audio.paused) {
    audio.play().catch(() => alert("Agrega un archivo mensaje.mp3 en la carpeta."));
  } else {
    audio.pause();
  }
}

function setupVoiceProgress() {
  const audio = document.getElementById("voiceAudio");
  const progress = document.getElementById("voiceProgress");
  const time = document.getElementById("voiceTime");

  if (!audio || !progress || !time) return;

  audio.addEventListener("timeupdate", () => {
    const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progress.style.width = `${percent}%`;
    time.textContent = formatTime(audio.currentTime);
  });
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function openDream(index) {
  openModal(dreams[index][0], dreams[index][1]);
}

function openModal(title, text, options = {}) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");
  const media = document.getElementById("modalMedia");

  content.classList.toggle("letter", Boolean(options.letter));
  media.innerHTML = "";

  if (options.image) {
    media.innerHTML = `<img src="${options.image}" alt="${title}">`;
  } else if (options.placeholder) {
    media.innerHTML = `<div>${options.placeholder}</div>`;
  }

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = text;
  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.getElementById("modalContent").classList.remove("letter");
  document.getElementById("modalMedia").innerHTML = "";
}

function setupModalClose() {
  const modal = document.getElementById("modal");

  modal.addEventListener("click", event => {
    if (event.target.id === "modal") closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
