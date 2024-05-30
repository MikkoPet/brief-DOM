let shoppingList = document.body.querySelector('ul');
let itemData = [];

const buttonClick = document.querySelector('button');
buttonClick.addEventListener("click", addNewItem())


function getShoppingListItem() {

    const shopItemValue = document.querySelector('input').value;
    return shopItemValue.trim();

};

function addNewItem() {

    let itemContent = getShoppingListItem();
    if (itemContent === "") { return; }
    itemData.push(itemContent);

    shoppingList.innerHTML = "";

    for (let n in itemData) {
        let newItem = document.createElement('li');
        newItem.innerText = itemData[n];
        shoppingList.append(newItem);
    }

    document.querySelector('form').reset();

}