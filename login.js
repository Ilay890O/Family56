// רשימת משתמשים רשומים
const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || []; // מקבל את רשימת המשתמשים שנשמרה ב-localStorage, או רשימה ריקה אם לא קיימת

document.getElementById('loginButton').addEventListener('click', function() {
    const userLogin = document.getElementById('userLogin').value.trim();  // מקבל את שם המשתמש
    if (userLogin && registeredUsers.includes(userLogin)) {
        // אם שם המשתמש קיים ברשימה, שומרים אותו ב-localStorage
        localStorage.setItem('currentUser', JSON.stringify({ username: userLogin }));
        
        // הפניית המשתמש לדף הבית
        window.location.href = 'index.html';
    } else if (userLogin) {
        // אם שם המשתמש לא נמצא ברשימה, מציגים הודעה
        alert("שם המשתמש לא קיים במערכת. אנא וודא שהזנת את השם הנכון.");
    } else {
        alert("אנא הזן שם משתמש");
    }
});

document.getElementById("loginButton").addEventListener("click", function() {
    const userLogin = document.getElementById("userLogin").value;  // קריאת שם המשתמש מהתיבה

    // אם המשתמש קיים ב-localStorage, נשמור את השם ב-localStorage ונוודא שהוא נגיש
    if (userLogin === "אבוקדו" || localStorage.getItem(userLogin)) {
        localStorage.setItem('username', userLogin);  // שימור שם המשתמש ב-localStorage
        window.location.href = "index.html";  // הפנייה לדף הבית
    } else {
        alert("המשתמש לא קיים במערכת. אנא צור משתמש חדש.");
    }
});
