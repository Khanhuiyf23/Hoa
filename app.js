const els = {
  themeToggle: document.getElementById("themeToggle"),
  searchInput: document.getElementById("searchInput"),
  topicSelect: document.getElementById("topicSelect"),
  typeFilters: document.getElementById("typeFilters"),
  topicGrid: document.getElementById("topicGrid"),
  topicDetail: document.getElementById("topicDetail"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  quizTopicFilter: document.getElementById("quizTopicFilter"),
  quizCard: document.getElementById("quizCard"),
  restartQuiz: document.getElementById("restartQuiz"),
  tipsGrid: document.getElementById("tipsGrid")
};

const storageKeys = {
  theme: "hoa12-theme",
  completed: "hoa12-completed",
  favorites: "hoa12-favorites"
};

const state = {
  query: "",
  selectedType: "Tất cả",
  selectedTopicId: "",
  completed: new Set(JSON.parse(localStorage.getItem(storageKeys.completed) || "[]")),
  favorites: new Set(JSON.parse(localStorage.getItem(storageKeys.favorites) || "[]")),
  quizTopicId: "all",
  quizIndex: 0,
  quizScore: 0,
  answered: false
};

function initTheme() {
  const saved = localStorage.getItem(storageKeys.theme) || "light";
  document.body.classList.toggle("dark", saved === "dark");
  els.themeToggle.textContent = saved === "dark" ? "☀️" : "🌙";
}

function saveState() {
  localStorage.setItem(storageKeys.completed, JSON.stringify([...state.completed]));
  localStorage.setItem(storageKeys.favorites, JSON.stringify([...state.favorites]));
}

function getBadgeClass(tag) {
  if (tag.includes("Quan trọng")) return "important";
  if (tag.includes("Dễ nhầm")) return "confuse";
  if (tag.includes("Hay ra đề")) return "exam";
  return "tip";
}

function renderFilters() {
  const types = ["Tất cả", ...TOPIC_TYPES];
  els.typeFilters.innerHTML = types.map((t) => `<button class="chip ${state.selectedType === t ? "active" : ""}" data-type="${t}">${t}</button>`).join("");
}

function renderTopicSelects() {
  els.topicSelect.innerHTML = `<option value="">📚 Chọn chuyên đề để xem chi tiết</option>` +
    topics.map((t) => `<option value="${t.id}">${t.title}</option>`).join("");

  els.quizTopicFilter.innerHTML = `<option value="all">📝 Tất cả chuyên đề</option>` +
    topics.map((t) => `<option value="${t.id}">${t.title}</option>`).join("");
}

function filteredTopics() {
  return topics.filter((t) => {
    const text = `${t.title} ${t.summary} ${t.keyPoints.join(" ")}`.toLowerCase();
    const passQuery = text.includes(state.query.toLowerCase());
    const passType = state.selectedType === "Tất cả" || t.focusTypes.includes(state.selectedType);
    return passQuery && passType;
  });
}

function renderTopics() {
  const list = filteredTopics();
  els.topicGrid.innerHTML = list.map((t) => `
    <article class="topic-card">
      <h3>${t.title}</h3>
      <p>${t.summary}</p>
      <div class="badges">
        ${t.importance.map((x) => `<span class="badge ${getBadgeClass(x)}">${x}</span>`).join("")}
      </div>
      <div class="card-actions">
        <button class="btn" data-open="${t.id}">Xem chi tiết</button>
        <button class="btn" data-complete="${t.id}">${state.completed.has(t.id) ? "✅ Đã học" : "Đánh dấu đã học"}</button>
        <button class="btn" data-fav="${t.id}">${state.favorites.has(t.id) ? "💖 Yêu thích" : "🤍 Yêu thích"}</button>
      </div>
    </article>
  `).join("") || `<p>Không tìm thấy chuyên đề phù hợp. Hãy thử từ khóa khác.</p>`;

  renderProgress();
}

function renderProgress() {
  const total = topics.length;
  const done = state.completed.size;
  const percent = Math.round((done / total) * 100);
  els.progressText.textContent = `${done}/${total}`;
  els.progressFill.style.width = `${percent}%`;
}

function renderTopicDetail(topicId) {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) {
    els.topicDetail.classList.add("hidden");
    return;
  }
  els.topicDetail.classList.remove("hidden");
  els.topicDetail.innerHTML = `
    <div class="section-heading"><h2>${topic.title}</h2></div>
    <div class="detail-grid">
      <article class="detail-block"><h4>📌 Kiến thức cần nhớ</h4><ul>${topic.keyPoints.map((x) => `<li>${x}</li>`).join("")}</ul></article>
      <article class="detail-block"><h4>🧭 Sơ đồ tư duy ngắn</h4><p>${topic.mindmap}</p></article>
      <article class="detail-block"><h4>🧪 Phương trình phản ứng tiêu biểu</h4><ul>${topic.equations.map((x) => `<li><code>${x}</code></li>`).join("")}</ul></article>
      <article class="detail-block"><h4>⚡ Cách giải nhanh</h4><p>${topic.quickSolve}</p></article>
      <article class="detail-block"><h4>💡 Mẹo nhớ nhanh</h4><ul>${topic.memoryTips.map((x) => `<li>${x}</li>`).join("")}</ul></article>
      <article class="detail-block"><h4>🚫 Lỗi sai thường gặp</h4><ul>${topic.commonMistakes.map((x) => `<li>${x}</li>`).join("")}</ul></article>
      <article class="detail-block"><h4>🧩 Bài tập ví dụ</h4><p class="example">${topic.example}</p></article>
      <article class="detail-block"><h4>✅ Trắc nghiệm luyện tập</h4><ul>${topic.practiceQuestions.map((x, i) => `<li>${i + 1}. ${x.q}</li>`).join("")}</ul></article>
    </div>
  `;
  els.topicDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getQuizList() {
  return state.quizTopicId === "all" ? quizBank : quizBank.filter((q) => q.topicId === state.quizTopicId);
}

function renderQuiz() {
  const list = getQuizList();
  if (!list.length) {
    els.quizCard.innerHTML = `<p>Chưa có câu hỏi cho chuyên đề này.</p>`;
    return;
  }
  if (state.quizIndex >= list.length) {
    els.quizCard.innerHTML = `
      <h3>🎉 Hoàn thành lượt luyện tập!</h3>
      <p class="score">Điểm của bạn: ${state.quizScore}/${list.length}</p>
      <button class="btn primary" id="retryInline">Làm lại từ đầu</button>
    `;
    document.getElementById("retryInline")?.addEventListener("click", resetQuiz);
    return;
  }

  const current = list[state.quizIndex];
  els.quizCard.innerHTML = `
    <p><strong>Câu ${state.quizIndex + 1}/${list.length}</strong> • ${current.topicTitle}</p>
    <h3>${current.q}</h3>
    <div class="options">
      ${current.options.map((op, idx) => `<button class="btn option" data-choice="${idx}">${String.fromCharCode(65 + idx)}. ${op}</button>`).join("")}
    </div>
    <div id="feedbackBox"></div>
  `;

  document.querySelectorAll("[data-choice]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.answered) return;
      state.answered = true;
      const choice = Number(btn.dataset.choice);
      const correct = choice === current.answer;
      if (correct) state.quizScore++;

      document.querySelectorAll("[data-choice]").forEach((b, idx) => {
        b.disabled = true;
        if (idx === current.answer) b.classList.add("correct");
        if (idx === choice && !correct) b.classList.add("wrong");
      });

      document.getElementById("feedbackBox").innerHTML = `
        <div class="feedback">
          <strong>${correct ? "✅ Chính xác!" : "❌ Chưa đúng."}</strong>
          <p>${current.explain}</p>
          <p class="score">Điểm hiện tại: ${state.quizScore}</p>
          <button class="btn" id="nextQuestion">${state.quizIndex === list.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}</button>
        </div>
      `;

      document.getElementById("nextQuestion").addEventListener("click", () => {
        state.quizIndex++;
        state.answered = false;
        renderQuiz();
      });
    });
  });
}

function resetQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.answered = false;
  renderQuiz();
}

function renderTips() {
  els.tipsGrid.innerHTML = examTips.map((tip) => `
    <article class="tip-card">
      <h3>${tip.icon} ${tip.title}</h3>
      <ul>${tip.points.map((p) => `<li>${p}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function attachEvents() {
  els.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem(storageKeys.theme, dark ? "dark" : "light");
    els.themeToggle.textContent = dark ? "☀️" : "🌙";
  });

  els.searchInput.addEventListener("input", (e) => {
    state.query = e.target.value.trim();
    renderTopics();
  });

  els.typeFilters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-type]");
    if (!btn) return;
    state.selectedType = btn.dataset.type;
    renderFilters();
    renderTopics();
  });

  els.topicSelect.addEventListener("change", (e) => {
    state.selectedTopicId = e.target.value;
    renderTopicDetail(state.selectedTopicId);
  });

  els.topicGrid.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open]");
    const doneBtn = e.target.closest("[data-complete]");
    const favBtn = e.target.closest("[data-fav]");

    if (openBtn) {
      const id = openBtn.dataset.open;
      state.selectedTopicId = id;
      els.topicSelect.value = id;
      renderTopicDetail(id);
    }

    if (doneBtn) {
      const id = doneBtn.dataset.complete;
      state.completed.has(id) ? state.completed.delete(id) : state.completed.add(id);
      saveState();
      renderTopics();
    }

    if (favBtn) {
      const id = favBtn.dataset.fav;
      state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
      saveState();
      renderTopics();
    }
  });

  els.quizTopicFilter.addEventListener("change", (e) => {
    state.quizTopicId = e.target.value;
    resetQuiz();
  });

  els.restartQuiz.addEventListener("click", resetQuiz);
}

function boot() {
  initTheme();
  renderTopicSelects();
  renderFilters();
  renderTopics();
  renderTips();
  renderQuiz();
  attachEvents();
}

boot();
