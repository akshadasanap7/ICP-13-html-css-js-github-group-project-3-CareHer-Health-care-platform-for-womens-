// ================= PCOS QUESTIONS =================
const questions = [
  "Do you have irregular or missed periods?",
  "Do you experience excessive facial or body hair growth?",
  "Do you suffer from acne or oily skin frequently?",
  "Do you gain weight easily or struggle to lose weight?",
  "Do you experience hair thinning or hair fall?",
  "Do you feel mood swings, anxiety, or depression?",
  "Do you crave sugary or junk foods often?",
  "Do you feel tired or low in energy frequently?",
  "Have you been diagnosed with insulin resistance?",
  "Is there a family history of PCOS?"
];

// ================= VARIABLES =================
let current = 0;
let score = 0;

// ================= ELEMENTS =================
const questionEl = document.getElementById("quizQuestion");
const progressEl = document.getElementById("quizProgress");
const progressBar = document.getElementById("progressBar");
const quizCard = document.getElementById("quizCard");
const resultEl = document.getElementById("quizResult");

// ================= LOAD QUESTION =================
function loadQuestion() {
  questionEl.innerText = questions[current];
  progressEl.innerText = `Question ${current + 1} of ${questions.length}`;
  progressBar.style.width = (current / questions.length) * 100 + "%";

  console.log(`Loaded Question ${current + 1}:`, questions[current]);
}

// Initial load
loadQuestion();

// ================= ANSWER HANDLER =================
function answer(isYes) {
  console.log("User answered:", isYes ? "YES" : "NO");

  if (isYes) score++;

  current++;
  console.log("Current Score:", score);

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// ================= SHOW RESULT =================
function showResult() {
  progressBar.style.width = "100%";
  quizCard.style.display = "none";
  progressEl.style.display = "none";

  let risk = "";
  let message = "";

  if (score <= 3) {
    risk = "Low PCOS Risk";
    message = "Your symptoms suggest a low risk of PCOS. Maintain a healthy lifestyle.";
  } 
  else if (score <= 6) {
    risk = "Moderate PCOS Risk";
    message = "Some PCOS-related symptoms detected. Lifestyle changes and monitoring are recommended.";
  } 
  else {
    risk = "High PCOS Risk";
    message = "Strong indicators of PCOS detected. Please consult a gynecologist or endocrinologist.";
  }

  // ================= SAVE DATA =================
  localStorage.setItem("pcosRisk", risk);
  localStorage.setItem("pcosScore", score);

  console.log("=== QUIZ COMPLETED ===");
  console.log("Final Score:", score);
  console.log("PCOS Risk Level:", risk);

  // ================= RESULT UI =================
  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `
    <h3>🌸 PCOS Assessment Completed</h3>
    <p>${message}</p>
    <p><strong>Your Score:</strong> ${score}/${questions.length}</p>
    <button onclick="goToRiskPage()">
      ➡ Check Your PCOS Risk Level
    </button>
  `;
}

// ================= REDIRECT FUNCTION =================
function goToRiskPage() {
  console.log("Redirecting to PCOS Risk Page...");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcos-about.html";
}
