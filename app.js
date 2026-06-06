const questions = [
  {
    id: 1,
    category: "標識・標示",
    title: "一時停止の基本",
    text: "『止まれ』の標識がある交差点では、見通しが良く他の車が来ていなくても停止線の直前で必ず一時停止しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "一時停止の標識がある場所では、安全確認の前に必ず停止が必要です。見通しが良いことは停止義務をなくす理由にはなりません。",
  },
  {
    id: 2,
    category: "安全確認",
    title: "発進前の確認",
    text: "駐停車中の車を発進させるときは、ルームミラーだけ見て後方の安全を確認すればよい。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "発進時はルームミラーだけでなく、ドアミラー、目視、合図の順で周囲を確認します。死角があるため目視確認が重要です。",
  },
  {
    id: 3,
    category: "徐行・速度",
    title: "徐行の意味",
    text: "徐行とは、すぐに停止できるような速度で進むことをいう。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "徐行はただゆっくり走ることではなく、危険に応じて直ちに停止できる速度で進むことを指します。",
  },
  {
    id: 4,
    category: "歩行者保護",
    title: "横断歩道の手前",
    text: "横断歩道の近くに歩行者がいても、まだ足を踏み出していなければ減速や停止の必要はない。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "横断しようとしている歩行者がいるときは、その通行を妨げないよう一時停止できる対応が必要です。",
  },
  {
    id: 5,
    category: "交差点",
    title: "左折時の確認",
    text: "左折するときは、巻き込み防止のため左後方の自転車や二輪車の有無を確認する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "左折時は内輪差だけでなく巻き込み事故にも注意が必要です。左ミラーと目視で後方側方を確認します。",
  },
  {
    id: 6,
    category: "追い越し",
    title: "追い越し禁止場所",
    text: "踏切とその手前30メートル以内は、追い越しが禁止されている。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "踏切付近は危険が大きく、追い越し禁止場所に該当します。仮免では頻出です。",
  },
  {
    id: 7,
    category: "信号",
    title: "黄色信号の判断",
    text: "黄色信号は『急いで進め』ではなく、原則として停止位置で安全に止まるための信号である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "停止線で安全に停止できない場合を除き、黄色信号では止まる判断が基本です。",
  },
  {
    id: 8,
    category: "駐停車",
    title: "駐車禁止の考え方",
    text: "交差点の側端から5メートル以内は、駐車も停車もしてはならない場所である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "交差点付近は見通しと通行を妨げやすいため、駐停車禁止の代表的な場所です。",
  },
  {
    id: 9,
    category: "夜間運転",
    title: "ライトの使い方",
    text: "夜間、前方に車がいない道路ではハイビームの活用が基本だが、対向車や先行車がいる場合は切り替える必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "上向きライトが原則でも、他車の視界を妨げる場面では下向きに切り替えます。",
  },
  {
    id: 10,
    category: "悪条件",
    title: "雨天時の車間距離",
    text: "雨の日は制動距離が長くなるため、晴天時よりも車間距離を多めに取る必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "路面が滑りやすく停止距離も伸びるため、速度を抑えつつ車間距離を広めに取ります。",
  },
  {
    id: 11,
    category: "合図",
    title: "進路変更のタイミング",
    text: "進路変更の合図は、行動を始める直前に出せば十分である。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "進路変更の合図は約3秒前が原則です。周囲に意図を早めに伝える必要があります。",
  },
  {
    id: 12,
    category: "踏切",
    title: "踏切通過",
    text: "踏切では、前の車が詰まっていて踏切内で止まるおそれがあるなら進入してはならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "踏切内での立ち往生は重大事故につながります。出口側の余地を確認してから進入します。",
  },
].map((question) => ({
  ...question,
  searchText: `${question.title} ${question.text} ${question.category}`.toLowerCase(),
}));

const storageKey = "karimen-training-progress";
const state = {
  category: "all",
  mode: "all",
  search: "",
  searchTimer: null,
  randomIds: null,
  progress: loadProgress(),
  examQuestions: [],
};

const elements = {
  categoryFilter: document.querySelector("#category-filter"),
  modeFilter: document.querySelector("#mode-filter"),
  searchInput: document.querySelector("#search-input"),
  questionList: document.querySelector("#question-list"),
  questionCount: document.querySelector("#question-count"),
  template: document.querySelector("#question-template"),
  categoryCardTemplate: document.querySelector("#category-card-template"),
  answeredCount: document.querySelector("#answered-count"),
  correctRate: document.querySelector("#correct-rate"),
  streakCount: document.querySelector("#streak-count"),
  startRandom: document.querySelector("#start-random"),
  resetProgress: document.querySelector("#reset-progress"),
  startExam: document.querySelector("#start-exam"),
  examSection: document.querySelector("#exam-section"),
  examBody: document.querySelector("#exam-body"),
  examTitle: document.querySelector("#exam-title"),
  closeExam: document.querySelector("#close-exam"),
  focusWeakness: document.querySelector("#focus-weakness"),
  clearFilters: document.querySelector("#clear-filters"),
  weakSummary: document.querySelector("#weak-summary"),
  categoryOverview: document.querySelector("#category-overview"),
};

initialize();

function initialize() {
  populateCategories();
  bindEvents();
  render();
}

function populateCategories() {
  const categories = [...new Set(questions.map((question) => question.category))];
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categoryFilter.append(option);
  }
}

function bindEvents() {
  elements.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    state.randomIds = null;
    renderQuestions();
  });

  elements.modeFilter.addEventListener("change", (event) => {
    state.mode = event.target.value;
    state.randomIds = null;
    renderQuestions();
  });

  elements.searchInput.addEventListener("input", (event) => {
    const nextValue = event.target.value.trim().toLowerCase();
    window.clearTimeout(state.searchTimer);
    state.searchTimer = window.setTimeout(() => {
      state.search = nextValue;
      state.randomIds = null;
      renderQuestions();
    }, 120);
  });

  elements.startRandom.addEventListener("click", () => {
    const source = getFilteredQuestions({ ignoreRandom: true });
    state.randomIds = new Set(shuffle([...source]).slice(0, 5).map((question) => question.id));
    renderQuestions();
    window.scrollTo({ top: document.querySelector(".question-header").offsetTop - 20, behavior: "smooth" });
  });

  elements.resetProgress.addEventListener("click", () => {
    state.progress = {};
    state.randomIds = null;
    saveProgress();
    render();
    closeExamMode();
  });

  elements.startExam.addEventListener("click", () => {
    startExamMode();
  });

  elements.closeExam.addEventListener("click", () => {
    closeExamMode();
  });

  elements.focusWeakness.addEventListener("click", () => {
    applyWeaknessFilter();
  });

  elements.clearFilters.addEventListener("click", () => {
    resetFilters();
  });
}

function render() {
  renderQuestions();
  renderStats();
  renderStudySupport();
}

function renderQuestions() {
  const filtered = getFilteredQuestions();
  const fragment = document.createDocumentFragment();
  elements.questionList.innerHTML = "";
  elements.questionCount.textContent = `${filtered.length}問`;

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "条件に合う問題がありません。フィルタを変えてください。";
    elements.questionList.append(empty);
    return;
  }

  for (const question of filtered) {
    fragment.append(renderQuestionCard(question));
  }
  elements.questionList.append(fragment);
}

function renderQuestionCard(question) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector(".question-card");
  const category = fragment.querySelector(".category-badge");
  const status = fragment.querySelector(".question-status");
  const title = fragment.querySelector(".question-title");
  const text = fragment.querySelector(".question-text");
  const choices = fragment.querySelector(".choices");
  const button = fragment.querySelector(".answer-button");
  const feedback = fragment.querySelector(".feedback");
  const explanation = fragment.querySelector(".explanation");
  const progress = state.progress[question.id];

  category.textContent = question.category;
  status.textContent = progress ? (progress.correct ? "正解済み" : "要復習") : "未回答";
  title.textContent = `${question.id}. ${question.title}`;
  text.textContent = question.text;
  explanation.textContent = `解説: ${question.explanation}`;

  for (const [index, choiceText] of question.choices.entries()) {
    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${question.id}`;
    input.value = String(index);

    const span = document.createElement("span");
    span.textContent = choiceText;

    label.append(input, span);
    choices.append(label);
  }

  if (progress) {
    feedback.textContent = progress.correct ? "前回は正解しました。" : "前回は不正解でした。";
    feedback.classList.add(progress.correct ? "correct" : "incorrect");
    explanation.classList.remove("hidden");
  }

  button.addEventListener("click", () => {
    const selected = card.querySelector(`input[name="question-${question.id}"]:checked`);

    if (!selected) {
      feedback.textContent = "選択肢を選んでください。";
      feedback.className = "feedback incorrect";
      return;
    }

    const isCorrect = Number(selected.value) === question.answer;
    state.progress[question.id] = { correct: isCorrect, answeredAt: Date.now() };
    saveProgress();

    status.textContent = isCorrect ? "正解済み" : "要復習";
    feedback.textContent = isCorrect ? "正解です。" : "不正解です。";
    feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
    explanation.classList.remove("hidden");
    render();
  });

  return fragment;
}

function renderStats() {
  const answers = Object.values(state.progress);
  const answeredCount = answers.length;
  const correctCount = answers.filter((item) => item.correct).length;
  const rate = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);

  elements.answeredCount.textContent = String(answeredCount);
  elements.correctRate.textContent = `${rate}%`;
  elements.streakCount.textContent = String(getCurrentStreak());
}

function renderStudySupport() {
  const categoryStats = getCategoryStats();
  const weakCategories = categoryStats.filter((category) => category.answered > 0 && category.rate < 70);

  renderWeakSummary(weakCategories);
  renderCategoryOverview(categoryStats);
}

function renderWeakSummary(weakCategories) {
  elements.weakSummary.innerHTML = "";

  if (weakCategories.length === 0) {
    const message = document.createElement("p");
    message.className = "support-note";
    message.textContent =
      "まだ苦手分野は出ていません。数問解くと、正答率の低いカテゴリがここに出ます。";
    elements.weakSummary.append(message);
    return;
  }

  const title = document.createElement("p");
  title.className = "support-note";
  title.textContent = "復習優先:";
  elements.weakSummary.append(title);

  const chipRow = document.createElement("div");
  chipRow.className = "weak-chip-row";

  for (const category of weakCategories) {
    const button = document.createElement("button");
    button.className = "weak-chip";
    button.type = "button";
    button.textContent = `${category.name} ${category.rate}%`;
    button.addEventListener("click", () => {
      state.category = category.name;
      state.mode = "incorrect";
      state.randomIds = null;
      syncFilters();
      renderQuestions();
      scrollToQuestions();
    });
    chipRow.append(button);
  }

  elements.weakSummary.append(chipRow);
}

function renderCategoryOverview(categoryStats) {
  const fragment = document.createDocumentFragment();
  elements.categoryOverview.innerHTML = "";

  for (const category of categoryStats) {
    const card = elements.categoryCardTemplate.content.cloneNode(true);
    const title = card.querySelector(".category-card-title");
    const subtitle = card.querySelector(".category-card-subtitle");
    const fill = card.querySelector(".category-progress-fill");
    const progressText = card.querySelector(".category-progress-text");
    const button = card.querySelector(".category-card-button");

    title.textContent = category.name;
    subtitle.textContent =
      category.answered === 0
        ? `全${category.total}問 / まだ未着手`
        : `${category.correct} / ${category.answered}問正解`;
    fill.style.width = `${category.rate}%`;
    progressText.textContent = `正答率 ${category.rate}%`;

    button.addEventListener("click", () => {
      state.category = category.name;
      state.randomIds = null;
      syncFilters();
      renderQuestions();
      scrollToQuestions();
    });

    fragment.append(card);
  }

  elements.categoryOverview.append(fragment);
}

function getCurrentStreak() {
  const answered = Object.entries(state.progress)
    .map(([id, value]) => ({ id: Number(id), ...value }))
    .sort((left, right) => right.answeredAt - left.answeredAt);

  let streak = 0;
  for (const item of answered) {
    if (!item.correct) {
      break;
    }
    streak += 1;
  }
  return streak;
}

function getCategoryStats() {
  const categories = [...new Set(questions.map((question) => question.category))];
  return categories.map((name) => {
    const categoryQuestions = questions.filter((question) => question.category === name);
    const answered = categoryQuestions.filter((question) => state.progress[question.id]);
    const correct = answered.filter((question) => state.progress[question.id].correct).length;
    const rate = answered.length === 0 ? 0 : Math.round((correct / answered.length) * 100);

    return {
      name,
      total: categoryQuestions.length,
      answered: answered.length,
      correct,
      rate,
    };
  });
}

function getFilteredQuestions(options = {}) {
  return getFilteredQuestionsBase(options);
}

function getFilteredQuestionsBase(options = {}) {
  const { ignoreRandom = false } = options;
  return questions.filter((question) => {
    const matchesCategory = state.category === "all" || question.category === state.category;
    const matchesSearch =
      state.search === "" || question.searchText.includes(state.search);
    const progress = state.progress[question.id];
    const matchesMode =
      state.mode === "all" ||
      (state.mode === "incorrect" && progress && !progress.correct) ||
      (state.mode === "unanswered" && !progress);
    const matchesRandom =
      ignoreRandom || state.randomIds === null || state.randomIds.has(question.id);

    return matchesCategory && matchesSearch && matchesMode && matchesRandom;
  });
}

function startExamMode() {
  state.randomIds = null;
  const pool = shuffle([...questions]).slice(0, 5);
  state.examQuestions = pool;
  elements.examTitle.textContent = "ランダム5問模試";
  elements.examBody.innerHTML = "";

  const form = document.createElement("form");
  form.id = "exam-form";

  for (const [index, question] of pool.entries()) {
    const wrapper = document.createElement("section");
    wrapper.className = "exam-question";

    const heading = document.createElement("h3");
    heading.textContent = `第${index + 1}問 ${question.title}`;

    const text = document.createElement("p");
    text.textContent = question.text;

    const choices = document.createElement("div");
    choices.className = "choices";

    for (const [choiceIndex, choiceText] of question.choices.entries()) {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `exam-${question.id}`;
      input.value = String(choiceIndex);

      const span = document.createElement("span");
      span.textContent = choiceText;

      label.append(input, span);
      choices.append(label);
    }

    wrapper.append(heading, text, choices);
    form.append(wrapper);
  }

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "button button-primary";
  submit.textContent = "採点する";
  form.append(submit);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitExam(form, pool);
  });

  elements.examBody.append(form);
  elements.examSection.classList.remove("hidden");
  elements.examSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function submitExam(form, pool) {
  let score = 0;
  const result = document.createElement("div");
  result.className = "exam-result";
  result.innerHTML = "";

  for (const question of pool) {
    const selected = form.querySelector(`input[name="exam-${question.id}"]:checked`);
    const isCorrect = selected && Number(selected.value) === question.answer;
    if (isCorrect) {
      score += 1;
    }

    if (selected) {
      state.progress[question.id] = { correct: isCorrect, answeredAt: Date.now() };
    }

    const line = document.createElement("p");
    line.textContent = `${question.title}: ${isCorrect ? "正解" : "不正解"} / ${question.explanation}`;
    result.append(line);
  }

  saveProgress();
  render();
  result.prepend(createResultHeading(score, pool.length));

  const oldResult = elements.examBody.querySelector(".exam-result");
  if (oldResult) {
    oldResult.remove();
  }
  elements.examBody.append(result);
}

function createResultHeading(score, total) {
  const heading = document.createElement("h3");
  heading.textContent = `結果: ${score} / ${total} 問正解`;
  return heading;
}

function closeExamMode() {
  elements.examSection.classList.add("hidden");
  elements.examBody.innerHTML = "";
  state.examQuestions = [];
}

function applyWeaknessFilter() {
  const weakCategories = getCategoryStats().filter((category) => category.answered > 0 && category.rate < 70);

  if (weakCategories.length === 0) {
    state.mode = "incorrect";
    state.category = "all";
  } else {
    state.category = weakCategories[0].name;
    state.mode = "incorrect";
  }

  state.randomIds = null;
  syncFilters();
  renderQuestions();
  scrollToQuestions();
}

function resetFilters() {
  state.category = "all";
  state.mode = "all";
  state.search = "";
  state.randomIds = null;
  elements.searchInput.value = "";
  syncFilters();
  renderQuestions();
}

function syncFilters() {
  elements.categoryFilter.value = state.category;
  elements.modeFilter.value = state.mode;
}

function scrollToQuestions() {
  window.scrollTo({ top: document.querySelector(".question-header").offsetTop - 20, behavior: "smooth" });
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }
  return items;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}
