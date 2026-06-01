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
