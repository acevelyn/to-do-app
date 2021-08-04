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

}
