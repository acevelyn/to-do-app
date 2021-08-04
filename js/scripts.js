function newItem(){

let li = $('<li></li>');
let inputValue = $('#input').val();
let text = li.append(document.createTextNode(inputValue));
li.append(text);

if (inputValue === ''){
  alert('You must write something!');
} else {
  let list = $('#list');
  list.append(li);
}
function crossOut(){
  li.addClass('strike');
}
li.on('dblclick', crossOut);

let crossOutButton = $(document.createElement('crossOutButton'));
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

function deleteListItem(){
  li.addClass('delete');
}

}
