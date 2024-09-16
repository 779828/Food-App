document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todos.splice(index, 1);
                updateLocalStorage();
                renderTodos();
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    function updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            todos.push(newTodo);
            updateLocalStorage();
            renderTodos();
            todoInput.value = '';
        }
    });

    renderTodos();
});
