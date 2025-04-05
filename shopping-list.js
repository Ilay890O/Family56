const addItemButton = document.getElementById('addItemButton');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');

let shoppingItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];

function displayShoppingList() {
    shoppingList.innerHTML = "";
    shoppingItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        shoppingList.appendChild(li);
    });
}

addItemButton.addEventListener('click', () => {
    const newItem = itemInput.value.trim();

    if (newItem) {
        shoppingItems.push(newItem);
        localStorage.setItem('shoppingItems', JSON.stringify(shoppingItems));
        displayShoppingList();
        itemInput.value = '';  // מנקה את תיבת ההכנסה
    }
});

displayShoppingList();
