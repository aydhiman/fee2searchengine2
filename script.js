document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskBody = document.getElementById('task-body');
    const clearButton = document.querySelector('.clear'); 
    let search = JSON.parse(localStorage.getItem('search')) || [];
    renderSearch();

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = { name: taskInput.value };
        search.push(task);
        localStorage.setItem('search', JSON.stringify(search));
        renderSearch();
        taskForm.reset();
    });

    function renderSearch() {
        taskBody.innerHTML = '';
        if (search.length === 0) {
            taskBody.innerHTML = '<tr><td>No search history found.</td></tr>';
        } else {
            search.forEach(task => {
                const row = document.createElement('tr');
                row.innerHTML = <td>${task.name}</td>;
                taskBody.appendChild(row);
            });
        }
    }

    clearButton.addEventListener('click', () => {
        search = [];
        localStorage.removeItem('search');
        renderSearch();
    });
});