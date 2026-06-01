function login() {
  const email1 = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  if (!email1 || !pass) {
    alert("Please fill all inputs before submitting");
    return;
  }

  const savedData = localStorage.getItem("userData");
  if (!savedData) {
    alert("No account found. Please sign up first.");
    return;
  }

  const userData = JSON.parse(savedData);
  if (email1 === userData.email && pass === userData.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "signup.html";
  } else {
    alert("Email or password is incorrect!");
  }
}

function passwordToggle() {
  const pass = document.getElementById("pass");
  const imgElement = document.getElementById("eye");
  if (imgElement.src.includes("hide.png")) {
    pass.type = "text";
    imgElement.src = "../images/view.png";
  } else {
    pass.type = "password";
    imgElement.src = "../images/hide.png";
  }
}

function emptyUserData() {
  localStorage.removeItem("userData");
  localStorage.removeItem("isLoggedIn");
  location.reload();
}

window.onload = function () {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") toggleTheme();
};

function toggleTheme() {
  const toggleBtn = document.getElementById("toggle-btn");
  const body = document.getElementById("body");
  body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙";
  }
}

function hamburger() {
  const toggleMenu = document.getElementById("toggle-menu-container");
  toggleMenu.classList.toggle("active");
}
