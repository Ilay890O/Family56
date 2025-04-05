const sendMessageButton = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');

// מקבל את שם המשתמש הנוכחי
const currentUser = JSON.parse(localStorage.getItem('currentUser'))?.username;

if (!currentUser) {
    window.location.href = 'login.html';  // אם לא מחובר, הפנייתך לדף הכניסה
}

const chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

function displayMessages() {
    chatBox.innerHTML = "";
    chatMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${msg.user}: ${msg.text}`;
        chatBox.appendChild(messageDiv);
    });
}

sendMessageButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();

    if (messageText) {
        const newMessage = { user: currentUser, text: messageText };
        chatMessages.push(newMessage);
        localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
        displayMessages();
        messageInput.value = '';  // מנקה את תיבת ההודעה
    }
});

displayMessages();
