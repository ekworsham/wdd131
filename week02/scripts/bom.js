
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('list'); 
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = 'X';
        li.append(deleteButton);
        list.append(li); 
    };
});

deleteButton.addEventLlistener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();