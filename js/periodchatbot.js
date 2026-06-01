let chatBox = document.getElementById("chatBox");
let userName = "";
let askingName = false;

const keywordData = [
  { key: "period", reply: "Periods are a natural monthly cycle. Normal length is 21–35 days." },
  { key: "menostart", reply: "Menarche usually starts between 9–15 years." },
  { key: "menopause", reply: "Menopause happens between 45–55 years." },
  { key: "food", reply: "Eat fruits, leafy vegetables and iron-rich foods." },
  { key: "diet", reply: "Balanced diet with iron and protein helps." },
  { key: "exercise", reply: "Yoga and walking reduce cramps." },
  { key: "products", reply: "Pads, tampons, menstrual cups and period panties." }
];

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  chatBox.innerHTML += `<div class="user">${text}</div>`;
  input.value = "";
  scrollDown();

  showTyping();
  setTimeout(() => {
    removeTyping();
    processMessage(text.toLowerCase());
  }, 900);
}

function processMessage(message) {
  if (message === "hi" || message === "hello") {
    botReply("Hello 😊 What is your good name?");
    askingName = true;
    return;
  }

  if (askingName) {
    userName = message;
    askingName = false;
    botReply(`Nice to meet you, ${userName} 💕<br>How can I help you?`);
    return;
  }

  for (let data of keywordData) {
    if (message.includes(data.key)) {
      botReply(data.reply);
      return;
    }
  }

  botReply("Ask me about periods, menopause, diet, exercise or products 💗");
}

function botReply(text) {
  chatBox.innerHTML += `<div class="bot">${text}</div>`;
  scrollDown();
}

function showTyping() {
  chatBox.innerHTML += `<div class="bot" id="typing">Typing...</div>`;
  scrollDown();
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

function scrollDown() {
  chatBox.scrollTop = chatBox.scrollHeight;
}
