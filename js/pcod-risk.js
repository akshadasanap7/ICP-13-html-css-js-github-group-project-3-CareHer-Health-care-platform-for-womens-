// ================= PCOD QUESTIONS =================
const questions = [
  "Do you have irregular or delayed periods?",
  "Do you gain weight easily?",
  "Do you have acne or excess facial hair?",
  "Do you experience hair fall?",
  "Do you crave sugar or junk food?",
  "Do you feel mood swings often?",
  "Is there a family history of PCOD?"
];

const feedbacks = [
  "🌸 Thank you for sharing",
  "💗 You're doing great",
  "✨ Awareness matters"
];

let index = 0;
let score = 0;

const q = document.getElementById("question");
const bar = document.getElementById("bar");
const level = document.getElementById("levelText");
const feedback = document.getElementById("feedback");
const resultBox = document.getElementById("resultBox");

loadQuestion();

function loadQuestion() {
  q.innerText = questions[index];
  level.innerText = `Question ${index + 1} of ${questions.length}`;
  bar.style.width = (index / questions.length) * 100 + "%";
}

function answer(val) {
  score += val;
  index++;
  feedback.innerText = feedbacks[Math.floor(Math.random() * feedbacks.length)];
  index < questions.length ? loadQuestion() : showResult();
}

function showResult() {
  document.querySelector(".game-options").style.display = "none";
  q.style.display = "none";
  feedback.style.display = "none";
  level.style.display = "none";
  bar.style.width = "100%";

  let title, badge, steps, cls;

  if (score <= 5) {
    title = "🟢 Low PCOD Risk"; badge = "LOW"; cls = "low";
    steps = ["Maintain healthy diet", "Regular exercise", "Track menstrual cycle"];
  } else if (score <= 10) {
    title = "🟡 Moderate PCOD Risk"; badge = "MEDIUM"; cls = "medium";
    steps = ["Reduce sugar intake", "Manage stress", "Improve lifestyle habits"];
  } else {
    title = "🔴 High PCOD Risk"; badge = "HIGH"; cls = "high";
    steps = ["Consult gynecologist", "Hormonal tests", "Medical treatment & care"];
  }

  document.getElementById("resultTitle").innerText = title;
  document.getElementById("scoreText").innerText = `Score: ${score}`;

  const b = document.getElementById("badge");
  b.innerText = badge;
  b.className = cls;

  const s = document.getElementById("steps");
  s.innerHTML = "";
  steps.forEach(step => { s.innerHTML += `<li>✔ ${step}</li>`; });

  localStorage.setItem("pcodRisk", badge);
  localStorage.setItem("pcodScore", score);

  resultBox.classList.remove("hidden");
}

function restartQuiz() {
  localStorage.removeItem("pcodRisk");
  localStorage.removeItem("pcodScore");
  location.reload();
}

function openProducts() {
  window.location.href = "pcod-products.html";
}

function openDoctor() {
  window.location.href = "pcod-doctor.html";
}

function openDiet() {
  window.location.href = "pcod-diet-lifestyle.html";
}

function toggleChat() {
  document.getElementById("chatbot").classList.toggle("hidden");
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");
  if (!input.value.trim()) return;
  body.innerHTML += `<div class="user">${input.value}</div>`;
  input.value = "";
  setTimeout(() => {
    body.innerHTML += `<div class="bot">🌸 PCOD can be managed with the right care. Take care 💗</div>`;
  }, 500);
}
