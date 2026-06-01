// ================= PCOS QUESTIONS =================
const questions = [
  "Do you have irregular or missed periods?",
  "Do you gain weight easily or find it hard to lose weight?",
  "Do you have acne or excessive facial/body hair growth?",
  "Do you experience hair thinning or hair fall?",
  "Do you crave sugar or junk food often?",
  "Do you experience frequent mood swings or anxiety?",
  "Is there a family history of PCOS?"
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
    title = "🟢 Low PCOS Risk"; badge = "LOW"; cls = "low";
    steps = ["Maintain a balanced diet", "Exercise regularly", "Track menstrual cycle"];
  } else if (score <= 10) {
    title = "🟡 Moderate PCOS Risk"; badge = "MEDIUM"; cls = "medium";
    steps = ["Reduce sugar & refined carbs", "Manage stress levels", "Improve lifestyle habits"];
  } else {
    title = "🔴 High PCOS Risk"; badge = "HIGH"; cls = "high";
    steps = ["Consult a gynecologist", "Hormonal & metabolic tests", "Medical treatment & follow-up"];
  }

  document.getElementById("resultTitle").innerText = title;
  document.getElementById("scoreText").innerText = `Score: ${score}`;

  const b = document.getElementById("badge");
  b.innerText = badge;
  b.className = cls;

  const s = document.getElementById("steps");
  s.innerHTML = "";
  steps.forEach(step => { s.innerHTML += `<li>✔ ${step}</li>`; });

  localStorage.setItem("pcosRisk", badge);
  localStorage.setItem("pcosScore", score);

  resultBox.classList.remove("hidden");
}

function restartQuiz() {
  localStorage.removeItem("pcosRisk");
  localStorage.removeItem("pcosScore");
  location.reload();
}

function openProducts() {
  window.location.href = "pcos-products.html";
}

function openDoctor() {
  window.location.href = "pcos-doctor.html";
}

function openDiet() {
  window.location.href = "pcos-diet-lifestyle.html";
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
    body.innerHTML += `<div class="bot">🌸 PCOS can be managed with the right care and lifestyle support. Take care 💗</div>`;
  }, 500);
}
