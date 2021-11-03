const addForm = document.querySelector('.add-form');
const searchForm = document.querySelector('.search');
const list = document.querySelector('.list');

function generateTemplate(todo){
    const template = `
        <li class="flex items-center bg-blue-300 b-0 rounded">
            <p class="flex-grow px-3 text">${todo}</p>
            <i class="far fa-trash-alt p-3 text-xl cursor-pointer delete"></i>
        </li>
    `;

    list.innerHTML += template;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.todo.value.trim();
    
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todo
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// filter
function searchTodos(term){

    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('hidden'));
     
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('hidden'));

}

searchForm.addEventListener('keyup', e => {
    const term = e.target.value.trim().toLowerCase();
    searchTodos(term);
});