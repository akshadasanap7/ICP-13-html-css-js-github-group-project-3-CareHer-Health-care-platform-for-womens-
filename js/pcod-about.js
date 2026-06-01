// ================= PCOD QUESTIONS =================
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
  "Is there a family history of PCOD?"
];

// ================= VARIABLES =================
let current = 0;
let score = 0;

// ================= ELEMENTS (SAFE) =================
const questionEl = document.getElementById("quizQuestion");
const progressEl = document.getElementById("quizProgress");
const progressBar = document.getElementById("progressBar");
const quizCard = document.getElementById("quizCard");
const resultEl = document.getElementById("quizResult");

// ================= LOAD QUESTION =================
if (questionEl && progressEl && progressBar) {
  loadQuestion();
}

function loadQuestion() {
  if (!questions[current]) return;

  questionEl.innerText = questions[current];
  progressEl.innerText = `Question ${current + 1} of ${questions.length}`;
  progressBar.style.width = (current / questions.length) * 100 + "%";
}

// ================= ANSWER HANDLER =================
function answer(isYes) {
  if (!questionEl) return;

  if (isYes) score++;
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// ================= SHOW RESULT =================
function showResult() {
  if (progressBar) progressBar.style.width = "100%";
  if (quizCard) quizCard.style.display = "none";
  if (progressEl) progressEl.style.display = "none";

  let risk = "";
  let message = "";

  if (score <= 3) {
    risk = "Low PCOD Risk";
    message = "Your symptoms suggest a low risk of PCOD. Maintain a healthy lifestyle.";
  } 
  else if (score <= 6) {
    risk = "Moderate PCOD Risk";
    message = "Some PCOD-related symptoms detected. Lifestyle changes and monitoring are recommended.";
  } 
  else {
    risk = "High PCOD Risk";
    message = "Strong indicators of PCOD detected. Please consult a gynecologist or endocrinologist.";
  }

  // ================= SAVE DATA =================
  localStorage.setItem("pcodRisk", risk);
  localStorage.setItem("pcodScore", score);

  // ================= RESULT UI =================
  if (resultEl) {
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `
      <h3>🌸 PCOD Assessment Completed</h3>
      <p>${message}</p>
      <p><strong>Your Score:</strong> ${score}/${questions.length}</p>
      <button onclick="goToRiskPage()">
        ➡ Check Your PCOD Risk Level
      </button>
    `;
  }
}

// ================= REDIRECT FUNCTION =================
function goToRiskPage() {
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcod-risk.html";
}
