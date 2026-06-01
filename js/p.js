// ===== NAV MENU TOGGLE =====
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// ===== REAL-TIME DATE & TIME =====
function updateDateTime() {
  const dateSpan = document.getElementById('dateSpan');
  const timeSpan = document.getElementById('timeSpan');

  if (!dateSpan || !timeSpan) return;

  const now = new Date();
  dateSpan.innerText = now.toLocaleDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}

// Run only if elements exist
setInterval(updateDateTime, 1000);
updateDateTime();

// ===== DARK/LIGHT MODE =====
const themeBtn = document.getElementById('themeBtn');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    themeBtn.innerText = document.body.classList.contains('dark')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
}

// ===== NAVIGATION FUNCTIONS =====
function goPCOD() {
  window.location.href = "./pages/pcod-about.html";
}

function goPCOS() {
  window.location.href = "./pages/pcos-about.html";
}


// ===== ACTIVE PAGE HIGHLIGHT =====
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
