let shoppingList = document.body.querySelector('ul');

const buttonClick = document.querySelector('button');
buttonClick.addEventListener("click", addNewItem())


function getShoppingListItem() {

const shopItemValue=document.querySelector('input').value;
return shopItemValue.trim();

};

function addNewItem() {

    let itemContent = getShoppingListItem();

    if (itemContent === "") {return;}

    let newItem = document.createElement('li');
    newItem.innerText = itemContent;
    shoppingList.append(newItem);
    
    document.querySelector('form').reset();

}