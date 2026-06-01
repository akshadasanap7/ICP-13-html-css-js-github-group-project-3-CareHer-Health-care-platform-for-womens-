const API = "http://localhost:3000/api";

window.onload = function () {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") toggleTheme();

  const savedData = localStorage.getItem("userData");
  if (savedData) showProfile(JSON.parse(savedData));
};

function showProfile(userData) {
  document.getElementById("form-container").innerHTML = `<div class="user-info">
    <div class="profile-heading">
      <img src="../images/user.jpeg" class="user-profile">Profile
    </div>
    <p><b>Name:</b> ${userData["first-name"] || userData.firstName} ${userData["last-name"] || userData.lastName}</p>
    <p><b>Age:</b> ${userData.age}yrs</p>
    <p><b>Email:</b> ${userData.email}</p>
    <p><b>Contact:</b> ${userData.contact}</p>
    <button type="button" class="btn1" onclick="logOut()">Log Out</button>
  </div>`;
}

async function displayUserProfileAndHideForm() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const age = document.getElementById("age").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("phone-number").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!firstName || !lastName || !age || !email || !contact || !password) {
    alert("Please fill all empty fields before submitting...");
    return;
  }

  try {
    const res = await fetch(`${API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, age, email, contact, password })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error); return; }

    const userData = { "first-name": firstName, "last-name": lastName, age, email, contact };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    showProfile(userData);
  } catch {
    // fallback to localStorage if backend not running
    const userData = { "first-name": firstName, "last-name": lastName, age, email, contact, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    showProfile(userData);
  }
}

function logOut() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userData");
  window.location.href = "login.html";
}

function passwordToggle() {
  const password = document.getElementById("password");
  const imgElement = document.getElementById("eye");
  if (imgElement.src.includes("hide.png")) {
    password.type = "text";
    imgElement.src = "../images/view.png";
  } else {
    password.type = "password";
    imgElement.src = "../images/hide.png";
  }
}

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
