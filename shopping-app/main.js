const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
  const addText = input.value;
  if(addText === ''){
    input.focus();
    return
  }
  const item = createItem(addText);
  items.appendChild(item);
  item.scrollIntoView({block:'center', behavior:'smooth'});
  input.value = '';
  input.focus();
}

function createItem(text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerText = text;

  const itemDelete = document.createElement('button');
  itemDelete.setAttribute('class', 'item_delete');
  itemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  itemDelete.addEventListener('click', ()=> {
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(itemName);
  item.appendChild(itemDelete);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', ()=> {
  onAdd();
});

input.addEventListener('keypress', event=> {
  if(event.key === 'Enter'){
    onAdd();
  }
})