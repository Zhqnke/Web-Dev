const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";

        checkbox.addEventListener('change', function () {
            taskSpan.style.textDecoration = this.checked ? "line-through" : "none";
        });

        // Defence task
        editButton.addEventListener('click', function () {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = taskSpan.textContent;
            
            listItem.replaceChild(inputField, taskSpan);
            editButton.textContent = 'Save';
            inputField.focus();

            editButton.addEventListener('click', saveEdit);

            function saveEdit() {
                taskSpan.textContent = inputField.value.trim();
                listItem.replaceChild(taskSpan, inputField);
                editButton.textContent = 'Edit';
            }
        });

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });
    }
}

addTaskButton.addEventListener('click', addTask);
