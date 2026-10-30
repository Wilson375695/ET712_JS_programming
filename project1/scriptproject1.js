const body = document.body;

if (!body) {
  throw new Error('Project script loaded before the document body was available.');
}

const page = body.dataset.page || '';

function initHomePage() {
  const subjects = document.querySelectorAll('.subject-card');
  if (!subjects.length) return;

  subjects.forEach((subject) => {
    let x = Math.random() * (window.innerWidth - 160);
    let y = Math.random() * (window.innerHeight - 160);
    let dx = (Math.random() - 0.5) * 2.4;
    let dy = (Math.random() - 0.5) * 2.4;

    function updatePosition() {
      const maxX = Math.max(0, window.innerWidth - subject.offsetWidth - 20);
      const maxY = Math.max(0, window.innerHeight - subject.offsetHeight - 20);

      x += dx;
      y += dy;

      if (x <= 0 || x >= maxX) dx *= -1;
      if (y <= 0 || y >= maxY) dy *= -1;

      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      subject.style.left = x + 'px';
      subject.style.top = y + 'px';
      requestAnimationFrame(updatePosition);
    }

    subject.style.left = x + 'px';
    subject.style.top = y + 'px';
    updatePosition();
  });
}

function initAnimalPage() {
  const cards = document.querySelectorAll('.animal-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const animalName = card.dataset.name;
      const animalSound = card.dataset.sound;

      if (!animalName || !animalSound || !('speechSynthesis' in window)) return;

      const utterance = new SpeechSynthesisUtterance(`${animalName} says ${animalSound}`);
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      utterance.volume = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });
  });
}

function initMathPage() {
  const questionEl = document.getElementById('question');
  const answerGridEl = document.getElementById('answerGrid');
  const statusEl = document.getElementById('status');
  const modeToggle = document.getElementById('modeToggle');

  if (!questionEl || !answerGridEl || !statusEl || !modeToggle) return;

  let currentMode = 'add';
  let currentAnswer = 0;
  let locked = false;

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function makeQuestion() {
    let a = 0;
    let b = 0;
    let answer = 0;
    let symbol = '+';

    if (currentMode === 'add') {
      a = randomInt(1, 12);
      b = randomInt(1, 12);
      answer = a + b;
      symbol = '+';
    } else {
      a = randomInt(5, 18);
      b = randomInt(1, 12);
      if (a < b) [a, b] = [b, a];
      answer = a - b;
      symbol = '-';
    }

    const options = new Set([answer]);
    while (options.size < 4) {
      const offset = randomInt(1, 6);
      const sign = Math.random() < 0.5 ? -1 : 1;
      const value = answer + offset * sign;
      if (value >= 0) options.add(value);
    }

    currentAnswer = answer;
    questionEl.textContent = `${a} ${symbol} ${b} = ?`;
    answerGridEl.innerHTML = '';

    shuffle([...options]).forEach((value) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-btn';
      button.textContent = String(value);
      button.addEventListener('click', () => checkAnswer(Number(value), button));
      answerGridEl.appendChild(button);
    });

    locked = false;
    statusEl.textContent = '';
    statusEl.className = 'status';
  }

  function checkAnswer(selected, button) {
    if (locked) return;
    locked = true;

    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach((btn) => {
      btn.disabled = true;
      btn.style.opacity = '0.7';
    });

    if (selected === currentAnswer) {
      statusEl.textContent = 'Correct! Great job!';
      statusEl.className = 'status correct';
      button.classList.add('correct');
    } else {
      statusEl.textContent = `Not quite. The correct answer is ${currentAnswer}.`;
      statusEl.className = 'status wrong';
      button.classList.add('wrong');

      allButtons.forEach((btn) => {
        if (Number(btn.textContent) === currentAnswer) {
          btn.classList.add('correct');
        }
      });
    }

    setTimeout(makeQuestion, 900);
  }

  modeToggle.addEventListener('change', () => {
    currentMode = modeToggle.checked ? 'sub' : 'add';
    makeQuestion();
  });

  makeQuestion();
}

function buildMatchGame(config) {
  const board = document.getElementById('board');
  const matchesEl = document.getElementById('matches');
  const turnsEl = document.getElementById('turns');
  const resetButton = document.getElementById('resetGame');

  if (!board || !matchesEl || !turnsEl) return;

  function shuffleCards() {
    const newCards = [];
    config.items.forEach((item) => {
      newCards.push({ ...item, kind: 'a' });
      newCards.push({ ...item, kind: 'b' });
    });

    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }

    return newCards;
  }

  let cards = shuffleCards();
  let firstPick = null;
  let secondPick = null;
  let lockBoard = false;
  let matchedPairs = 0;
  let turns = 0;

  function showCard(card, item) {
    card.classList.add('flipped');
    const face = card.querySelector('.card-face');
    face.innerHTML = '';

    const content = item.kind === 'a' ? config.renderA(item) : config.renderB(item);
    if (typeof content === 'string') {
      face.innerHTML = content;
    } else {
      face.appendChild(content);
    }
  }

  function resetBoard() {
    board.innerHTML = '';
    firstPick = null;
    secondPick = null;
    lockBoard = false;
    matchedPairs = 0;
    turns = 0;
    matchesEl.textContent = '0';
    turnsEl.textContent = '0';
    cards = shuffleCards();
    cards.forEach((item) => board.appendChild(makeCard(item)));
  }

  function makeCard(item) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.dataset.id = item.id;
    card.dataset.kind = item.kind;

    const face = document.createElement('div');
    face.className = 'card-face';
    face.innerHTML = '<span class="hidden">?</span>';
    card.appendChild(face);

    showCard(card, item);

    card.addEventListener('click', () => {
      if (lockBoard || card.classList.contains('matched') || card === firstPick) {
        return;
      }

      showCard(card, item);

      if (!firstPick) {
        firstPick = card;
        firstPick.classList.add('selected');
        return;
      }

      secondPick = card;
      secondPick.classList.add('selected');
      turns += 1;
      turnsEl.textContent = String(turns);

      const isMatch = firstPick.dataset.id === secondPick.dataset.id;

      if (isMatch) {
        firstPick.classList.add('matched');
        secondPick.classList.add('matched');
        firstPick.classList.remove('selected');
        secondPick.classList.remove('selected');
        firstPick = null;
        secondPick = null;
        matchedPairs += 1;
        matchesEl.textContent = String(matchedPairs);

        if (matchedPairs === config.items.length) {
          setTimeout(() => alert(config.successMessage), 250);
        }
        return;
      }

      lockBoard = true;
      setTimeout(() => {
        if (firstPick) firstPick.classList.remove('selected');
        if (secondPick) secondPick.classList.remove('selected');
        firstPick = null;
        secondPick = null;
        lockBoard = false;
      }, 700);
    });

    return card;
  }

  cards.forEach((item) => board.appendChild(makeCard(item)));

  if (resetButton) {
    resetButton.addEventListener('click', resetBoard);
  }
}

function initShapePage() {
  const allShapes = [
    { id: 'circle', name: 'Circle', type: 'circle' },
    { id: 'square', name: 'Square', type: 'square' },
    { id: 'triangle', name: 'Triangle', type: 'triangle' },
    { id: 'rectangle', name: 'Rectangle', type: 'rectangle' },
    { id: 'oval', name: 'Oval', type: 'oval' },
    { id: 'diamond', name: 'Diamond', type: 'diamond' },
    { id: 'hexagon', name: 'Hexagon', type: 'hexagon' },
    { id: 'star', name: 'Star', type: 'star' },
    { id: 'heart', name: 'Heart', type: 'heart' },
    { id: 'pentagon', name: 'Pentagon', type: 'pentagon' }
  ];

  const shapeColumn = document.getElementById('shapeColumn');
  const nameColumn = document.getElementById('nameColumn');
  const svg = document.querySelector('.connector-layer');
  const resetButton = document.getElementById('resetGame');

  let selectedShapeId = null;

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function clearSelection() {
    document.querySelectorAll('.shape-item, .name-item').forEach((el) => {
      el.classList.remove('selected', 'wrong');
    });
  }

  function drawLine(shapeEl, nameEl) {
    const shapeRect = shapeEl.getBoundingClientRect();
    const nameRect = nameEl.getBoundingClientRect();
    const containerRect = svg.parentElement.getBoundingClientRect();

    const x1 = shapeRect.right - containerRect.left;
    const y1 = shapeRect.top + shapeRect.height / 2 - containerRect.top;
    const x2 = nameRect.left - containerRect.left;
    const y2 = nameRect.top + nameRect.height / 2 - containerRect.top;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#000');
    line.setAttribute('stroke-width', '4');
    svg.appendChild(line);
  }

  function buildRound() {
    svg.innerHTML = '';
    selectedShapeId = null;
    clearSelection();

    const shapesToUse = shuffle(allShapes).slice(0, 4);
    const nameOrder = shuffle([...shapesToUse]);

    shapeColumn.innerHTML = '';
    nameColumn.innerHTML = '';

    shapesToUse.forEach((shape) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'shape-item';
      btn.dataset.id = shape.id;

      const icon = document.createElement('span');
      icon.className = `shape ${shape.type}`;

      btn.appendChild(icon);
      btn.addEventListener('click', () => {
        if (btn.classList.contains('matched')) return;

        clearSelection();
        selectedShapeId = shape.id;
        btn.classList.add('selected');
      });

      shapeColumn.appendChild(btn);
    });

    nameOrder.forEach((shape) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'name-item';
      btn.dataset.id = shape.id;
      btn.textContent = shape.name;

      btn.addEventListener('click', () => {
        if (btn.classList.contains('matched')) return;

        const shapeEl = document.querySelector(`.shape-item[data-id="${selectedShapeId}"]`);

        if (!selectedShapeId || !shapeEl) return;

        const isMatch = selectedShapeId === shape.id;

        if (isMatch) {
          shapeEl.classList.add('matched');
          btn.classList.add('matched');
          drawLine(shapeEl, btn);
        } else {
          shapeEl.classList.add('wrong');
          btn.classList.add('wrong');

          setTimeout(() => {
            clearSelection();
            selectedShapeId = null;
          }, 500);
        }

        selectedShapeId = null;
      });

      nameColumn.appendChild(btn);
    });
  }

  buildRound();

  if (resetButton) {
    resetButton.addEventListener('click', buildRound);
  }
}

function initTransportPage() {
  const transports = [
    { id: 'car', name: 'Car', icon: '🚗' },
    { id: 'bus', name: 'Bus', icon: '🚌' },
    { id: 'airplane', name: 'Airplane', icon: '✈️' },
    { id: 'boat', name: 'Boat', icon: '🛶' }
  ];

  buildMatchGame({
    items: transports,
    successMessage: 'Great job! You matched all the transport cards!',
    renderA(item) {
      const icon = document.createElement('span');
      icon.className = 'icon';
      icon.textContent = item.icon;
      return icon;
    },
    renderB(item) {
      const label = document.createElement('span');
      label.className = 'name-text';
      label.textContent = item.name;
      return label;
    }
  });
}

if (page === 'home') {
  initHomePage();
} else if (page === 'animal') {
  initAnimalPage();
} else if (page === 'math') {
  initMathPage();
} else if (page === 'shape') {
  initShapePage();
} else if (page === 'transport') {
  initTransportPage();
}
