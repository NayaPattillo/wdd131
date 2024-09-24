const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function () {
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    if (input.value.trim() !== '') { `Please enter Scripture` } input.focus();
    li.append(deleteButton);
    list.append(li);
});

deleteButton.addEventListener('click', function () {
    list.removeChild('li');
    input.focus();
    input.value = '';
});

input.value = '';
input.focus();