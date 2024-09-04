import "./styles.css";
const projectList = [];

function project(title,description,dueDate,priority){
    return{
        todos: [],
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    }
}

function createProject(project){
    const projectHolder = document.getElementById('projectHolder');
    const projectBox = document.createElement('div');
    projectBox.classList.add('projectBlock');
    const title = document.createElement('h1');
    title.textContent = project.title;
    const description = document.createElement('h5');
    description.textContent = project.description;
    //button to create todos within project
    const todoItemCreator = document.createElement('button');
    todoItemCreator.id = 'createTodoButton';
    todoItemCreator.textContent = 'Add Todo'
    todoButtonFunction(todoItemCreator);

    projectBox.appendChild(title);
    projectBox.appendChild(description);
    projectBox.appendChild(todoItemCreator);

    projectHolder.appendChild(projectBox);

}

const projectSubmit = document.getElementById('submitForm');
projectSubmit.addEventListener('click',()=>{
    const title = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    // fill project with user input
    const pj = project(title,description,dueDate,priority);
    const block = document.getElementById('projectSubmitBlock')
    block.setAttribute('style','display: none');
    // create project in DOM
    createProject(pj);
});

const projectCreateButton = document.getElementById('createProjectButton');
projectCreateButton.addEventListener('click',()=>{
    const block = document.getElementById('projectSubmitBlock');
    block.setAttribute('style','display: block');
});

function createTodo(todoItem){
    return{
        title: title,
        description: description,
        priority: priority
    }
}

function todoItem(title,description,priority){
    return{
        title: title,
        description: description,
        priority: priority
    }
}

function todoButtonFunction(button){
    button.addEventListener('click',()=>{
        const block = document.getElementById('todoSubmitBlock');
        block.setAttribute('style','display: block');
    });
}

const todoSubmit = document.getElementById('createTodoButton');
todoSubmit.addEventListener('click',()=>{
    const title = document.getElementById('todoName').value;
    const description = document.getElementById('todoDescription').value;
    const priority = document.getElementById('todoPriority').value;
    // fill todo with user input
    const todo = todoItem(title,description,priority);
    console.log(todo.title);
    // create todo in DOM
    createTodo(todo);
});