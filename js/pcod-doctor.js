function bookAppointment() {
  console.log("📅 Book Appointment clicked");
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

  // Show user message
  body.innerHTML += `<div class="user">${userMsg}</div>`;
  console.log("🧑 User Message:", userMsg);

  // ===== SAVE USER MESSAGE =====
  let chats = JSON.parse(localStorage.getItem("pcodChat")) || [];
  chats.push({ sender: "user", text: userMsg });
  localStorage.setItem("pcodChat", JSON.stringify(chats));
  console.log("💾 User message saved to LocalStorage");

  input.value = "";

  setTimeout(() => {
    const botMsg = "Please consult a gynecologist for accurate treatment 🌸";

    body.innerHTML += `<div class="bot">${botMsg}</div>`;
    body.scrollTop = body.scrollHeight;

    console.log("🤖 Bot Message:", botMsg);

    // ===== SAVE BOT MESSAGE =====
    chats.push({ sender: "bot", text: botMsg });
    localStorage.setItem("pcodChat", JSON.stringify(chats));
    console.log("💾 Bot message saved to LocalStorage");
  }, 400);
}
