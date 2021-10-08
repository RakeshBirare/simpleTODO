ul = document.getElementById('list');
var li;

// Add Event Listner To Add Todo Button
var addButton = document.querySelector('#add');
addButton.addEventListener('click',addItem);

// Add Event Listner To Remove Todo Button
var addButton = document.querySelector('#remove');
addButton.addEventListener('click',removeItem);

function addItem() {
    console.log("Item Added !")
}

// Remove Todo Functionality
function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
         while (li[index] && li[index].children[0].checked) {
             ul.removeChild(li[index])
         }   
    }   
}