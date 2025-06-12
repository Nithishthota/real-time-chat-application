function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();

  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  const messageElement = document.createElement("div");
  messageElement.textContent = "You: " + message;
  messageElement.style.margin = "5px 0";
  chatBox.appendChild(messageElement);

  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}

