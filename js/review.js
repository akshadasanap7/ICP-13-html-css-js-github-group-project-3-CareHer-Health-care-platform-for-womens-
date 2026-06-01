window.onload = function () {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") toggleTheme();
  loadReviews();
};

function loadReviews() {
  const container = document.getElementById("container");
  const reviews = document.getElementById("review-card-container");
  const savedData = localStorage.getItem("reviewData");
  if (!savedData) return;

  const reviewList = JSON.parse(savedData);
  container.innerHTML = "";
  reviewList.forEach((reviewData, i) => {
    reviews.innerHTML += `<div class="review-card">
      <div class="date">Date: ${reviewData.date}</div>
      <div class="card-name">Name: ${reviewData.name}</div>
      Rating:
      <div class="card-rating">${reviewData.stars}</div>
      <div class="card-comment">comment:<br>${reviewData.comment}</div>
      <button class="btn-delete" onclick="deleteReview(${i})">delete</button>
    </div>`;
  });
}

function submitForm() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const comment = document.getElementById("comments").value;

  if (!name || !date || !rating) {
    alert("Please fill all empty fields before submitting...");
    return;
  }

  const reviewData = { name, date, stars, comment };
  const existing = JSON.parse(localStorage.getItem("reviewData") || "[]");
  existing.push(reviewData);
  localStorage.setItem("reviewData", JSON.stringify(existing));

  document.getElementById("reviewForm").reset();
  loadReviews();
}

function deleteReview(index) {
  const existing = JSON.parse(localStorage.getItem("reviewData") || "[]");
  existing.splice(index, 1);
  localStorage.setItem("reviewData", JSON.stringify(existing));
  document.getElementById("review-card-container").innerHTML = "";
  loadReviews();
}

function displayFormDeleteReview() {
  localStorage.removeItem("reviewData");
  location.reload();
}

function updateClock() {
  const dateSpan = document.getElementById("dateSpan");
  const timeSpan = document.getElementById("timeSpan");
  const now = new Date();
  dateSpan.innerText = now.toDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

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
