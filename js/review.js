const API = "http://localhost:3000/api";

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") toggleTheme();
  loadReviews();
};

async function loadReviews() {
  const container = document.getElementById("review-card-container");
  try {
    const res = await fetch(`${API}/reviews`);
    const reviews = await res.json();
    renderReviews(reviews, true);
  } catch {
    const saved = JSON.parse(localStorage.getItem("reviewData") || "[]");
    renderReviews(saved, false);
  }
}

function renderReviews(reviews, fromAPI) {
  const container = document.getElementById("review-card-container");
  const existing = container.querySelectorAll(".review-card.dynamic");
  existing.forEach(el => el.remove());

  reviews.forEach((r) => {
    const card = document.createElement("div");
    card.className = "review-card dynamic";
    card.innerHTML = `
      <div class="date">Date: ${r.date}</div>
      <div class="card-name">Name: ${r.name}</div>
      Rating: <div class="card-rating">${r.stars}</div>
      <div class="card-comment">comment:<br>${r.comment}</div>
      <button class="btn-delete" onclick="deleteReview('${fromAPI ? r.id : r.id}', ${!fromAPI})">delete</button>`;
    container.appendChild(card);
  });
}

async function submitForm() {
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value || 0);
  const comment = document.getElementById("comments").value.trim();

  if (!name || !date || !rating) {
    alert("Please fill all empty fields before submitting...");
    return;
  }

  try {
    const res = await fetch(`${API}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, date, rating, comment })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error); return; }
    document.getElementById("reviewForm").reset();
    loadReviews();
  } catch {
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const review = { id: Date.now(), name, date, stars, comment };
    const existing = JSON.parse(localStorage.getItem("reviewData") || "[]");
    existing.push(review);
    localStorage.setItem("reviewData", JSON.stringify(existing));
    document.getElementById("reviewForm").reset();
    loadReviews();
  }
}

async function deleteReview(id, isLocal) {
  if (isLocal) {
    const existing = JSON.parse(localStorage.getItem("reviewData") || "[]");
    const updated = existing.filter(r => r.id !== parseInt(id));
    localStorage.setItem("reviewData", JSON.stringify(updated));
    loadReviews();
    return;
  }
  try {
    await fetch(`${API}/reviews/${id}`, { method: "DELETE" });
    loadReviews();
  } catch {
    loadReviews();
  }
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
  document.getElementById("toggle-menu-container").classList.toggle("active");
}
