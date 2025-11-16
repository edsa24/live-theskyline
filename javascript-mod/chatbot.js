// Assign constant variable from Element ID
const openChatBtn = document.getElementById("openChatBtn");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatModal = document.getElementById("chatModal");
const sendChat = document.getElementById("sendChat");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

// Open chat
openChatBtn.addEventListener("click", () => {
  chatModal.style.display = "block";
  chatInput.focus();
});

// Close chat
closeChatBtn.addEventListener("click", () => {
  chatModal.style.display = "none";
});

// Close if click outside
window.addEventListener("click", (e) => {
  if (e.target === chatModal) chatModal.style.display = "none";
});

// Send chat
sendChat.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage("user-message", message);
  chatInput.value = "";

  setTimeout(() => {
    const response = getBotResponse(message);
    appendMessage("bot-message", response);
  }, 700);
}

// Append messages to chat box
function appendMessage(className, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(className);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot auto-responses
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! 👋 How can I help you today?";
  } else if (input.includes("schedule")) {
    return "You can schedule a consultation by telling me your preferred date and time.";
  } else if (input.includes("service")) {
    return "We offer consultation, guidance, and support services. What are you interested in?";
  } else if (input.includes("thank")) {
    return "You're welcome! 😊";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else {
    return "I'm not sure I understand 🤔 Could you please rephrase your question?";
  }
}
