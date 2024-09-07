import "./styles.css";
const projectList = [];
let todoProjectNumber = 0;

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
    projectList.push(project);
    const projectHolder = document.getElementById('projectHolder');
    const projectBox = document.createElement('div');
    projectBox.classList.add('projectBlock');
    //index to help identify block when adding todos.
    projectBox.setAttribute('data-index-number', projectList.indexOf(project));
    const title = document.createElement('h1');
    title.textContent = project.title;
    const description = document.createElement('h5');
    description.textContent = project.description;
    //button to create todos within project
    const todoItemCreator = document.createElement('button');
    todoItemCreator.id = 'createTodoButton';
    todoItemCreator.textContent = 'Add Todo'
    // todoButtonFunction(todoItemCreator);

    todoItemCreator.addEventListener('click',()=>{
        const block = document.getElementById('todoSubmitBlock');
        // makes the todo appear under the corresponding project.
        todoProjectNumber = projectBox.dataset.indexNumber;
        block.setAttribute('style','display: block');
    });

    projectBox.appendChild(title);
    projectBox.appendChild(description);
    projectBox.appendChild(todoItemCreator);
    projectHolder.appendChild(projectBox);

}

// creating function for when todo submit button is pressed.
const todoSubmit = document.getElementById('todoSubmitForm');

todoSubmit.addEventListener('click',()=>{
    const todoTitle = document.getElementById('todoName').value;
    const todoDescription = document.getElementById('todoDescription').value;
    const todoPriority = document.getElementById('todoPriority').value;
    // const todoProjectNumber = projectBox.dataset.indexNumber;
    // fill todo with user input
    const todo = todoItem(todoTitle,todoDescription,todoPriority,todoProjectNumber);
    // add todo item into todo array in project
    projectList[todoProjectNumber].todos.push(todo);
    // remove each todoBox to avoid duplicates

    // use css selector to only delete specific things
    const alltodos = document.querySelectorAll(`[data-index-number="${todoProjectNumber}"] > .todoBox`);
    console.log(alltodos);
    alltodos.forEach(box => {
        box.parentElement.removeChild(box);
    });
    // create todo in DOM
    displayTodos(todoProjectNumber);
    todoSubmit.parentElement.setAttribute('style','display: none');
});

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

function todoItem(title,description,priority,projectNumber){
    return{
        title: title,
        description: description,
        priority: priority,
        projectNumber: projectNumber
    }
}

function displayTodos(index){
    // console.log(index);
    const projectHolder = document.querySelector(`[data-index-number="${index}"]`);
    const projectTodos = projectList[index].todos;
    for(let i = 0; i<projectTodos.length; i++){
        const todoBox = document.createElement('div');
        todoBox.classList.add('todoBox');
        const title = document.createElement('p');
        title.textContent = projectTodos[i].title;
        const description = document.createElement('em');
        description.textContent = projectTodos[i].description;

        todoBox.appendChild(title);
        todoBox.appendChild(description);

        projectHolder.appendChild(todoBox);
    }
}
