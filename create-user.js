document.getElementById('createUserButton').addEventListener('click', function() {
    const newUser = document.getElementById('newUser').value.trim();  // מקבל את שם המשתמש החדש

    if (newUser) {
        // מקבל את רשימת המשתמשים הקיימת ב-localStorage
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // אם המשתמש לא קיים ברשימה, מוסיפים אותו
        if (!registeredUsers.includes(newUser)) {
            registeredUsers.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers)); // שומר את הרשימה המעודכנת ב-localStorage
            alert("המשתמש נוצר בהצלחה!");
            window.location.href = 'login.html';  // חזרה לדף הכניסה אחרי יצירת המשתמש
        } else {
            alert("שם המשתמש כבר קיים במערכת.");
        }
    } else {
        alert("אנא הזן שם משתמש.");
    }
});
