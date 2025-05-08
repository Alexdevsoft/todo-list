const API_URL = 'http://localhost:8080/api/tasks';

// Carregar tarefas
async function loadTasks() {
    const tasks = await (await fetch(API_URL)).json();
    document.getElementById('taskList').innerHTML = tasks.map(task => `
        <div class="task" data-id="${task.id}">
            <h3>${task.title}</h3>
            <button onclick="deleteTask(${task.id})">Remover</button>
        </div>
    `).join('');
}

// Adicionar tarefa
document.getElementById('taskForm').addEventListener('submit', async e => {
    e.preventDefault();
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: document.getElementById('title').value })
    });
    document.getElementById('title').value = '';
    loadTasks();
});

// Remover tarefa
async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}

// Inicializar
loadTasks();