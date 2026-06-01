const API = "http://localhost:3000/api";

async function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (!email || !pass) {
    alert("Please fill all inputs before submitting");
    return;
  }

  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error); return; }

    localStorage.setItem("userData", JSON.stringify({
      "first-name": data.user.firstName,
      "last-name": data.user.lastName,
      age: data.user.age,
      email: data.user.email,
      contact: data.user.contact
    }));
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "signup.html";
  } catch {
    // fallback to localStorage if backend not running
    const savedData = localStorage.getItem("userData");
    if (!savedData) { alert("No account found. Please sign up first."); return; }
    const userData = JSON.parse(savedData);
    if (email === userData.email && pass === userData.password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "signup.html";
    } else {
      alert("Email or password is incorrect!");
    }
  }
}

function emptyUserData() {
  localStorage.removeItem("userData");
  localStorage.removeItem("isLoggedIn");
  location.reload();
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

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") toggleTheme();
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
  document.getElementById("toggle-menu-container").classList.toggle("active");
}
