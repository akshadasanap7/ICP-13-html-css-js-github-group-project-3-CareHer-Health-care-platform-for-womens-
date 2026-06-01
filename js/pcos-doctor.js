function bookAppointment() {
  console.log("📅 Book Appointment button clicked");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\appointment.html";
}

// ================= CHAT TOGGLE =================
function openChat() {
  const chat = document.getElementById("chatbot");

  chat.style.display = chat.style.display === "flex" ? "none" : "flex";

  console.log(
    chat.style.display === "flex"
      ? "💬 Chatbot opened"
      : "❌ Chatbot closed"
  );
}

// ================= SEND MESSAGE =================
function sendMessage() {
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");

  if (!input.value.trim()) {
    console.warn("⚠ Empty message not sent");
    return;
  }

  const userMsg = input.value;

  // User message
  body.innerHTML += `<div class="user">${userMsg}</div>`;
  console.log("🧑 User message sent:", userMsg);

  input.value = "";

  // PCOS-specific bot reply
  setTimeout(() => {
    const botMsg = `
      PCOS can be managed with proper medical care, lifestyle changes, and regular follow-ups 🌸  
      Please consult a gynecologist or endocrinologist for personalized treatment.
    `;

    body.innerHTML += `<div class="bot">${botMsg}</div>`;
    body.scrollTop = body.scrollHeight;

    console.log("🤖 Bot replied with PCOS guidance");
  }, 400);
}
