document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.username) {
        // אם יש משתמש מחובר, מברכים אותו בשמו
        document.getElementById('welcomeMessage').innerText = `שלום, ${currentUser.username}!`;
    } else {
        // אם אין משתמש מחובר, הפנייה חזרה לדף הכניסה
        window.location.href = 'login.html';
    }
});
