window.onload = function () {
  const savedData = localStorage.getItem("userData");
  const formContainer = document.getElementById("form-container");
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") toggleTheme();

  if (savedData) {
    const userData = JSON.parse(savedData);
    formContainer.innerHTML = `<div class="user-info">
     <div class="profile-heading">
       <img src="../images/user.jpeg" class="user-profile">Profile
     </div>
     <p><b>Name:</b> ${userData["first-name"]} ${userData["last-name"]}</p>
     <p><b>Age:</b> ${userData["age"]}yrs</p>
     <p><b>Email:</b> ${userData["email"]}</p>
     <p><b>Contact:</b> ${userData["contact"]}</p>
     <button type="button" class="btn1" onclick="logOut()">Log Out</button>
     </div>`;
  }
};

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

function displayUserProfileAndHideForm() {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const contact = document.getElementById("phone-number");
  const password = document.getElementById("password");
  const age = document.getElementById("age");
  const formContainer = document.getElementById("form-container");

  if (!firstName.value || !lastName.value || !email.value || !contact.value || !age.value || !password.value) {
    alert("Please fill all empty fields before submitting...");
    return;
  }

  const userData = {
    "first-name": firstName.value,
    "last-name": lastName.value,
    "age": age.value,
    "email": email.value,
    "contact": contact.value,
    "password": password.value
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("isLoggedIn", "true");

  formContainer.innerHTML = `<div class="user-info">
     <div class="profile-heading">
       <img src="../images/user.jpeg" class="user-profile">Profile
     </div>
     <p><b>Name:</b> ${userData["first-name"]} ${userData["last-name"]}</p>
     <p><b>Age:</b> ${userData["age"]}yrs</p>
     <p><b>Email:</b> ${userData["email"]}</p>
     <p><b>Contact:</b> ${userData["contact"]}</p>
     <button type="button" class="btn1" onclick="logOut()">Log Out</button>
     </div>`;
}

function logOut() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
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
  const toggleMenu = document.getElementById("toggle-menu-container");
  toggleMenu.classList.toggle("active");
}
