let shoppingList = document.body.querySelector('ul');
let itemData = [];

const buttonClick = document.querySelector('button');
buttonClick.addEventListener("click", addNewItem())


function getShoppingListItem() {

    const shopItemValue = document.querySelector('input').value;
    return shopItemValue.trim();

};


function refreshList() {
    shoppingList.innerHTML = "";

    for (let n in itemData) {
        let newItem = document.createElement('li');
        newItem.innerText = itemData[n];

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute("type", "button");
        deleteButton.addEventListener("click", function(){
            let itemToDelete = this.closest("li");
            index = itemData.indexOf(itemToDelete);
            itemData.splice(index, 1);
            refreshList();
        })
        deleteButton.classList.add("deleter");
        deleteButton.innerText = "x";
 
        newItem.append(deleteButton);
        shoppingList.append(newItem);
    }
}

function addNewItem() {

    let itemContent = getShoppingListItem();
    if (itemContent === "") { return; }

    itemData.push(itemContent);

    refreshList();

    document.querySelector('form').reset();

}


