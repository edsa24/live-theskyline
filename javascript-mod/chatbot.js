


// ============================
// CHATBOT FOR CONTACT MODAL
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById('chatBox');
  const chatInput = document.getElementById('chatInput');
  const sendChat = document.getElementById('sendChat');

  if (!chatBox || !chatInput || !sendChat) return;

  let step = 0;
  const consultationData = {};

  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.margin = '5px 0';
    msg.style.padding = '5px 8px';
    msg.style.borderRadius = '5px';
    msg.style.background = sender === 'bot' ? '#f0f0f0' : '#5fa8d3';
    msg.style.color = sender === 'bot' ? '#000' : '#fff';
    msg.style.textAlign = sender === 'bot' ? 'left' : 'right';
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function botNextStep(userMessage) {
    switch(step) {
      case 0:
        consultationData.name = userMessage;
        addMessage("Thanks! What is your email?", "bot");
        step++;
        break;
      case 1:
        consultationData.email = userMessage;
        addMessage("Great! Please provide your phone number.", "bot");
        step++;
        break;
      case 2:
        consultationData.phone = userMessage;
        addMessage("Almost done! When would you like to schedule your consultation? (e.g., 2025-11-30 14:00)", "bot");
        step++;
        break;
      case 3:
        consultationData.datetime = userMessage;
        addMessage("Thank you! Your consultation request has been recorded:", "bot");
        addMessage(`Name: ${consultationData.name}`, "bot");
        addMessage(`Email: ${consultationData.email}`, "bot");
        addMessage(`Phone: ${consultationData.phone}`, "bot");
        addMessage(`Preferred Date/Time: ${consultationData.datetime}`, "bot");
        addMessage("We will contact you soon to confirm your consultation.", "bot");
        step++;
        break;
      default:
        addMessage("You have already submitted your consultation request. Thank you!", "bot");
    }
  }

  function sendMessage() {
    const text = chatInput.value.trim();
    if(!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    botNextStep(text);
    chatInput.focus();
  }

  // Attach events **directly**
  sendChat.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });

  // Reset chat whenever modal opens
  const chatModal = document.getElementById('chatModal');
  chatModal.addEventListener('shown.bs.modal', () => {
    chatBox.innerHTML = `<div class="bot-message">Hi! I'm your Consultation Bot. Let's schedule your consultation.</div>`;
    chatInput.value = '';
    step = 0;
  });
});

