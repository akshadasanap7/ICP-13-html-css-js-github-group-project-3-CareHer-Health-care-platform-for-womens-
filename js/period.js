const dateSpan = document.getElementById("dateSpan");
const timeSpan = document.getElementById("timeSpan");

function updateClock() {
  const now = new Date();

  dateSpan.innerText = now.toDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

function handleSubmit(event) {
  event.preventDefault();
  calculateCycle();
}

function calculateCycle(savedData = null) {
  const data = {
    age: parseInt(document.getElementById("age").value),
    lastPeriod: document.getElementById("lastPeriod").value,
    cycleLength: parseInt(document.getElementById("cycleLength").value),
    periodDuration: parseInt(document.getElementById("periodDuration").value),
    flow: document.getElementById("flowIntensity").value,
    mood: document.getElementById("moodSwings").value
  };

  if (!savedData) {
  if (!data.age || !data.lastPeriod || !data.cycleLength || !data.periodDuration) {
      alert("Please fill all required fields");
    return;
  }
  localStorage.setItem("periodData", JSON.stringify(data));
  }


  const lastPeriod = new Date(data.lastPeriod);

  // Calculate next period, ovulation, luteal phase
  const nextPeriod = new Date(lastPeriod);
  nextPeriod.setDate(lastPeriod.getDate() + data.cycleLength);

  const ovulationDay = new Date(nextPeriod);
  ovulationDay.setDate(nextPeriod.getDate() - 14);

  const lutealStart = new Date(ovulationDay);
  lutealStart.setDate(ovulationDay.getDate() + 1);

  if (data.cycleLength < 21 || data.cycleLength > 35) {
    data.regularity = "Irregular";
    data.buttonClass = "irregular";
    data.targetPage = "irregular.html";
  } else {
    data.regularity = "Regular";
    data.buttonClass = "regular";
    data.targetPage = "regular.html";
  }


  document.getElementById("periodForm").style.display = "none";

  document.getElementById("results").innerHTML = `
    <h3>🌸 Cycle Insights</h3>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Next Period:</strong> ${nextPeriod.toDateString()}</p>
    <p><strong>Ovulation Day:</strong> ${ovulationDay.toDateString()}</p>
    <p><strong>Luteal Phase:</strong>
      ${lutealStart.toDateString()}
      ${new Date(nextPeriod.getTime() - 86400000).toDateString()}
    </p>
    <p><strong>Flow:</strong> ${data.flow}</p>
    <p><strong>Mood Swings:</strong> ${data.mood}</p>
  `;
  const btn = document.getElementById("regularityButton");
  btn.style.display = "inline-block";
  btn.className = data.buttonClass;
  btn.textContent = data.regularity;
  btn.onclick = function() {
    window.location.href = data.targetPage;
  };

  renderCalendar(lastPeriod, data, ovulationDay, lutealStart, nextPeriod);
}
  // Calendar rendering
  function renderCalendar(startDate, data, ovulationDay, lutealStart, nextPeriod) {

  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";
  for (let i = 0; i < data.cycleLength; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);

    let className = "normal";
    if (i < data.periodDuration) className = "period";
    else if (day.toDateString() === ovulationDay.toDateString()) className = "ovulation";
    else if (day >= lutealStart && day < nextPeriod) className = "luteal";

    calendar.innerHTML += `
      <div class="${className}">
        ${day.getDate()}<br>
        ${day.toLocaleString("default", { month: "short" })}
      </div>
    `;
  }
}
window.addEventListener("pageshow", () => {
  const saved = localStorage.getItem("periodData");
  if (saved) {
    calculateCycle(JSON.parse(saved));
  }
})

function toggleChatbot() {
  const chatbot = document.getElementById("chatbot-popup");
  chatbot.style.display =
    chatbot.style.display === "block" ? "none" : "block";
}
