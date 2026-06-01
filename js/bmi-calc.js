const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const result = document.getElementById("result");

  function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height) {
      result.textContent = "Please enter valid values.";
      return;
    }
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let category = "";
    let link = "";

    if (bmi < 18.5) {
      category = "Underweight";
      link = `<br><a href="bmi-gain.html" target="_blank" style="color:#2e7d32;">
              👉 View Weight Gain Products</a>`;
    } 
    else if (bmi < 24.9) {
      category = "Normal";
    } 
     else if (bmi < 29.9) {
      category = "Overweight";
      link = `<br><a href="bmi-loss.html" target="_blank" style="color:#c62828;">
              👉 View Weight Loss Products</a>`;
    } 
    else {
      category = "Obese";
      link = `<br><a href="bmi-loss.html" target="_blank" style="color:#c62828;">
              👉 View Weight Loss Products</a>`;
    }

    result.innerHTML = `Your BMI is ${bmi} (${category}) ${link}`;
  }
   function resetBMI() {
    weightInput.value = "";
    heightInput.value = "";
    result.textContent = "";
  }

  const dateSpan = document.getElementById("dateSpan");
const timeSpan = document.getElementById("timeSpan");

function updateClock() {
  const now = new Date();

  dateSpan.innerText = now.toDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
document.querySelectorAll(".health-card button").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const card = button.closest(".health-card");
    card.style.transform = "scale(0.96)";

    setTimeout(() => {
      window.location.href = button.getAttribute("data-link");
    }, 300);
  });
});
const toggleBtn = document.getElementById("themeToggle");

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerText = "☀️";
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙";
  }
}


  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");
  function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    chatMessages.innerHTML += `<div class="user">${userText}</div>`;
    chatInput.value = "";

    let reply = "I'm here to help women understand BMI better 💕";
    const msg = userText.toLowerCase();
     if (msg.includes("underweight")) reply = "Being underweight can affect hormones and fertility.";
    else if (msg.includes("normal")) reply = "A normal BMI supports good overall health.";
    else if (msg.includes("overweight")) reply = "Balanced diet and light exercise help manage weight.";
    else if (msg.includes("obese")) reply = "Gradual lifestyle changes improve long-term health.";
    else if (msg.includes("diet")) reply = "Focus on iron, calcium, protein, fruits, and vegetables.";
    else if (msg.includes("exercise")) reply = "Walking, yoga, and strength training are great options.";
    else if (msg.includes("periods")) reply = "BMI can affect menstrual health. Consult a doctor.";

    setTimeout(() => {
      chatMessages.innerHTML += `<div class="bot">👩‍⚕️ ${reply}</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
  }
  function toggleChat() {
    const messages = document.querySelector(".chat-messages");
    const input = document.querySelector(".chat-input");
    const hidden = messages.style.display === "none";
    messages.style.display = hidden ? "block" : "none";
    input.style.display = hidden ? "flex" : "none";
  }
