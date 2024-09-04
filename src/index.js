const projectList = [];

function project(title,description,dueDate,priority){
    return{
        todos: [],
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    }

    // project.title = title;
    // project.description = description;
    // project.dueDate = dueDate;
    // project.priority = priority;

}

function todoItem(title,description,dueDate,priority){

}

const projectSubmit = document.getElementById('submitForm');

projectSubmit.addEventListener('click',()=>{
    const title = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    const dueDate = document.getElementById('dueDate').value;
    const pj = project(title,description,dueDate,null);
    console.log(pj.title);
});

