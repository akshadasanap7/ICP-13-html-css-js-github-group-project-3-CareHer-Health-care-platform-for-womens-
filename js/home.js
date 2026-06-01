const dateSpan = document.getElementById("dateSpan");
const timeSpan = document.getElementById("timeSpan");

const nameInput = document.getElementById("userNameInput");
const welcomeMessage = document.getElementById("welcomeMessage");
const userNameText = document.getElementById("userNameText");
const askName = document.getElementById("askName");

function updateClock() {
  const now = new Date();

  dateSpan.innerText = now.toDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
function saveUserName() {
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name");
    return;
  }

  submitBtn.style.display = "none";
  askName.style.display = "none";
  nameInput.style.display = "none";

  localStorage.setItem("careHerUser", name);

  const sentence = `Welcome to Womens HealthCare website, ${name} `;
  const words = sentence.split(" ");
  let index = 0;

  welcomeMessage.style.display = "block";
  userNameText.innerHTML = "";

  const intervalId = setInterval(() => {
    userNameText.innerHTML += words[index] + "&nbsp;";
    index++;

    if (index === words.length) {
      clearInterval(intervalId);
    }
  }, 500);
}



function showStoredUser() {
  const storedName = localStorage.getItem("careHerUser");

  if (storedName) {
    askName.style.display = "none";
    nameInput.style.display = "none";
    submitBtn.style.display = "none";

    welcomeMessage.style.display = "block";
    userNameText.innerText = `Welcome to HealthCare website, ${storedName} 💖`;
  }
}

showStoredUser();
window.addEventListener("load", () => {
  setTimeout(() => {
    const para = document.querySelector(".home-para");
    para.style.opacity = "1";
    para.style.transform = "translateY(0)";
  }, 800);
});
const themeToggle = document.getElementById("themeToggle");

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerText = "☀️";
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerText = "🌙";
  }
});
