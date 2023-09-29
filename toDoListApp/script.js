const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === '') {
    inputBox.classList.add('error');
    inputBox.placeholder = '*You must write something!*';
  } else {
    inputBox.classList.remove('error');
    inputBox.placeholder = 'Add your task';

    let liEl = document.createElement('li');
    liEl.innerHTML = inputBox.value;
    listContainer.appendChild(liEl);

    let spanEl = document.createElement('span');
    spanEl.innerHTML = '\u00d7';
    liEl.appendChild(spanEl);
  }

  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName == 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName == 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
