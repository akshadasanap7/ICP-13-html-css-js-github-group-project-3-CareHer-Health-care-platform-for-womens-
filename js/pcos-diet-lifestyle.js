// ================= HABIT TRACKING =================
const habits = document.querySelectorAll(".habit");
const progressText = document.getElementById("progressText");
const lifeBar = document.getElementById("lifeBar");

// Load saved habits from localStorage
habits.forEach((box, index) => {
  const saved = localStorage.getItem("pcosHabit" + index);
  if (saved === "true") box.checked = true;

  // Save changes to localStorage
  box.addEventListener("change", () => {
    localStorage.setItem("pcosHabit" + index, box.checked);
  });
});

// ================= CALCULATE PROGRESS =================
function calculateProgress() {
  let completed = 0;

  habits.forEach(h => {
    if (h.checked) completed++;
  });

  const percent = Math.round((completed / habits.length) * 100);

  // Update progress bar
  lifeBar.style.width = percent + "%";
  progressText.innerText = percent + "% Healthy Habits Completed";

  console.log("PCOS Progress:", percent + "%");

  // Feedback messages
  if (percent >= 80) {
    alert("🌟 Excellent PCOS lifestyle control! Keep it up!");
  } else if (percent >= 40) {
    alert("👍 Good progress, stay consistent with your PCOS-friendly habits!");
  } else {
    alert("💗 Start slow, every step matters for managing PCOS.");
  }
}
