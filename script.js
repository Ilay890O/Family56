// דף היומן המשפחתי (yoman.html)
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').files[0];
    
    let newPost = {
        text: postText,
        image: postImage ? URL.createObjectURL(postImage) : null,
        date: new Date().toLocaleString()
    };
    
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    displayPosts();
    document.getElementById('postForm').reset();
});

function displayPosts() {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        
        let postContent = `<p>${post.text}</p><small>הוסף בתאריך: ${post.date}</small>`;
        if (post.image) {
            postContent += `<img src="${post.image}" alt="תמונה" style="width: 100%; height: auto; border-radius: 8px;">`;
        }
        
        postDiv.innerHTML = postContent;
        postsList.appendChild(postDiv);
    });
}

displayPosts();

// דף ההישגים השבועיים (achievements.html)
document.getElementById('achievementForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const achievementText = document.getElementById('achievementText').value;
    
    let newAchievement = {
        text: achievementText,
        date: new Date().toLocaleString()
    };
    
    let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
    achievements.push(newAchievement);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    
    displayAchievements();
    document.getElementById('achievementForm').reset();
});

function displayAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';
    const achievements = JSON.parse(localStorage.getItem('achievements')) || [];
    
    achievements.forEach(achievement => {
        let achievementDiv = document.createElement('div');
        achievementDiv.classList.add('achievement');
        
        let achievementContent = `<p>${achievement.text}</p><small>הוסף בתאריך: ${achievement.date}</small>`;
        
        achievementDiv.innerHTML = achievementContent;
        achievementsList.appendChild(achievementDiv);
    });
}

displayAchievements();

// דף האירועים הקרובים (events.html)
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = document.getElementById('eventDate').value;
    
    let newEvent = {
        title: eventTitle,
        date: eventDate
    };
    
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    
    displayEvents();
    document.getElementById('eventForm').reset();
});

function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    const events = JSON.parse(localStorage.getItem('events')) || [];
    
    events.forEach(event => {
        let eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        
        let eventContent = `<p><strong>${event.title}</strong></p><small>תאריך: ${event.date}</small>`;
        
        eventDiv.innerHTML = eventContent;
        eventsList.appendChild(eventDiv);
    });
}

displayEvents();

// דף התמונות (photos.html)
document.getElementById('photoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const photoImage = document.getElementById('photoImage').files[0];
    
    let newPhoto = {
        image: URL.createObjectURL(photoImage),
        date: new Date().toLocaleString()
    };
    
    let photos = JSON.parse(localStorage.getItem('photos')) || [];
    photos.push(newPhoto);
    localStorage.setItem('photos', JSON.stringify(photos));
    
    displayPhotos();
    document.getElementById('photoForm').reset();
});

function displayPhotos() {
    const photosList = document.getElementById('photosList');
    photosList.innerHTML = '';
    const photos = JSON.parse(localStorage.getItem('photos')) || [];
    
    photos.forEach(photo => {
        let photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        
        let photoContent = `<img src="${photo.image}" alt="תמונה" style="width: 100%; height: auto; border-radius: 8px;"><small>הוסף בתאריך: ${photo.date}</small>`;
        
        photoDiv.innerHTML = photoContent;
        photosList.appendChild(photoDiv);
    });
}

displayPhotos();

// דף הזיכרונות (memories.html)
document.getElementById('memoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const memoryText = document.getElementById('memoryText').value;
    
    let newMemory = {
        text: memoryText,
        date: new Date().toLocaleString()
    };
    
    let memories = JSON.parse(localStorage.getItem('memories')) || [];
    memories.push(newMemory);
    localStorage.setItem('memories', JSON.stringify(memories));
    
    displayMemories();
    document.getElementById('memoryForm').reset();
});

function displayMemories() {
    const memoriesList = document.getElementById('memoriesList');
    memoriesList.innerHTML = '';
    const memories = JSON.parse(localStorage.getItem('memories')) || [];
    
    memories.forEach(memory => {
        let memoryDiv = document.createElement('div');
        memoryDiv.classList.add('memory');
        
        let memoryContent = `<p>${memory.text}</p><small>הוסף בתאריך: ${memory.date}</small>`;
        
        memoryDiv.innerHTML = memoryContent;
        memoriesList.appendChild(memoryDiv);
    });
}

displayMemories();









// דף רשימת משאלות (wishlist.html)
document.getElementById('wishlistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const wishText = document.getElementById('wishText').value;
    
    let newWish = {
        text: wishText,
        date: new Date().toLocaleString()
    };
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(newWish);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    displayWishlist();
    document.getElementById('wishlistForm').reset();
});

function displayWishlist() {
    const wishlistList = document.getElementById('wishlistList');
    wishlistList.innerHTML = '';
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    wishlist.forEach(wish => {
        let wishDiv = document.createElement('div');
        wishDiv.classList.add('wish');
        
        let wishContent = `<p>${wish.text}</p><small>הוספה בתאריך: ${wish.date}</small>`;
        
        wishDiv.innerHTML = wishContent;
        wishlistList.appendChild(wishDiv);
    });
}

displayWishlist();




// דף האירועים (events.html)
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = document.getElementById('eventDate').value;
    
    let newEvent = {
        title: eventTitle,
        date: eventDate
    };
    
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    
    displayEvents();
    document.getElementById('eventForm').reset();
});

function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    const events = JSON.parse(localStorage.getItem('events')) || [];
    
    events.forEach(event => {
        let eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        
        let timeLeft = calculateTimeLeft(event.date);
        
        let eventContent = `<p><strong>${event.title}</strong></p><small>תאריך: ${event.date}</small><p>זמן נשאר: ${timeLeft}</p>`;
        
        eventDiv.innerHTML = eventContent;
        eventsList.appendChild(eventDiv);
    });
}

function calculateTimeLeft(eventDate) {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const timeDiff = eventTime - currentTime;
    
    if (timeDiff <= 0) return "האירוע כבר התרחש!";
    
    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    
    return `${days} ימים ו- ${hours} שעות`;
}

displayEvents();








// דף שאלון כיף (quiz.html)
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    
    let newAnswers = {
        question1: answer1,
        question2: answer2,
        date: new Date().toLocaleString()
    };
    
    let quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    quizAnswers.push(newAnswers);
    localStorage.setItem('quizAnswers', JSON.stringify(quizAnswers));
    
    displayQuizAnswers();
    document.getElementById('quizForm').reset();
});

function displayQuizAnswers() {
    const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    const quizAnswersDiv = document.getElementById('quizAnswers');
    quizAnswersDiv.innerHTML = '';
    
    quizAnswers.forEach(answer => {
        let answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        
        let answerContent = `<p><strong>מה הסרט האהוב עליך?</strong> ${answer.question1}</p><p><strong>מה המאכל האהוב עליך?</strong> ${answer.question2}</p><small>הוזן בתאריך: ${answer.date}</small>`;
        
        answerDiv.innerHTML = answerContent;
        quizAnswersDiv.appendChild(answerDiv);
    });
}

displayQuizAnswers();












// דף פעילויות משפחתיות (activities.html)
document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const activityName = document.getElementById('activityName').value;
    
    let newActivity = {
        name: activityName,
        date: new Date().toLocaleString()
    };
    
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push(newActivity);
    localStorage.setItem('activities', JSON.stringify(activities));
    
    displayActivities();
    document.getElementById('activityForm').reset();
});

function displayActivities() {
    const activitiesList = document.getElementById('activitiesList');
    activitiesList.innerHTML = '';
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    
    activities.forEach(activity => {
        let activityDiv = document.createElement('div');
        activityDiv.classList.add('activity');
        
        let activityContent = `<p><strong>${activity.name}</strong></p><small>הוזן בתאריך: ${activity.date}</small>`;
        
        activityDiv.innerHTML = activityContent;
        activitiesList.appendChild(activityDiv);
    });
}

displayActivities();


// הצגת התאריך בדף הבית
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString();

// הצגת שם המשתמש בדף הבית
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        document.getElementById('userNameDisplay').textContent = currentUser.name;
    } else {
        window.location.href = 'login.html';  // אם לא נמצא משתמש, הפנייה לדף הכניסה
    }
});

// כפתור התנתקות
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('currentUser');  // הסרת המשתמש
    window.location.href = 'login.html';  // הפנייה חזרה לדף הכניסה
});



document.getElementById('saveUser').addEventListener('click', function() {
    const userName = document.getElementById('newUserName').value;
    
    if (userName) {
        const newUser = { name: userName };
        localStorage.setItem('currentUser', JSON.stringify(newUser));  // שמירת המשתמש
        window.location.href = 'index.html';  // הפנייה לדף הבית
    } else {
        alert('אנא הזן שם משתמש!');
    }
});









// בדוק אם יש משתמש מחובר ועם שם
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        window.location.href = 'index.html';  // אם יש משתמש מחובר, הפנייה לדף הבית
    }
});
