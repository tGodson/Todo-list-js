let projects = JSON.parse(localStorage.getItem('projects'));
const projectDiv = document.querySelector('.projectList');
const todoTable = document.querySelector('.todo_table');
let activeProjectId = JSON.parse(localStorage.getItem('activeProject'));

let todoArr = [];

const todoDisplay = (id) => {
  todoArr = JSON.parse(localStorage.getItem('todoArr'));
  
  for(let i=0;i < todoArr.length;i++){
    if(todoArr[i].id == id){ 
      const tr = document.createElement('tr');
      tr.setAttribute('class', 'table_body')
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      td1.innerHTML = todoArr[i].title; td2.innerHTML = todoArr[i].description; td3.innerHTML = todoArr[i].dueDate; td4.innerHTML = todoArr[i].priority;
    
      tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3); tr.appendChild(td4);
      todoTable.appendChild(tr);
    }
  }
}
todoDisplay(activeProjectId);

const projectClick = (id) => {
  localStorage.setItem('activeProject', JSON.stringify(id));
  document.querySelector('.todo_section').style.display = "block";
  document.querySelector('.todo_form').style.display = "none";

  window.location.reload();
  
}

document.querySelector('.todo_section').style.display = "block";
document.querySelector('.todo_form').style.display = "none";

function TodoConstructor(title, description, dueDate, priority, id) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.id = id;
}

const formData = document.querySelector('.todo_form');
formData.addEventListener('submit', (e) => {
  e.preventDefault();
  id = JSON.parse(localStorage.getItem('activeProject'));
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#ddate').value;
  const priority = document.querySelector('#priority_radio').checked;
  let prty = 'low'
			if(priority == false){
				prty = 'high';
			}
  const newTodo = new TodoConstructor(title, description, dueDate, prty, id);
  todoArr.push(newTodo);
  localStorage.setItem('todoArr', JSON.stringify(todoArr));
  
  projectClick(id);
  //document.querySelector('.todo_section').style.display = "block";
  //document.querySelector('.todo_form').style.display = "none";
  
});

// let displayProject = () => {
//   for (let i = 0;i < projects.length; i++){ 
//     let p = document.createElement('p');
//     p.setAttribute('class', 'project');
//     p.setAttribute('id', i);
//     p.innerHTML = "- "+projects[i];
//     p.onclick = function () {
//       projectClick(i);
//     };
//     let icon = document.createElement('i');
//     icon.setAttribute('class', 'fas fa-trash-alt');
//     p.appendChild(icon);
//     projectDiv.appendChild(p);
//   };
// }
const projectDisplay = () => {

  if(projects){
    for (let i = 0;i < projects.length; i++){ 
      let p = document.createElement('p');
      p.setAttribute('class', 'project');
      p.setAttribute('id', i);
      p.innerHTML = "- "+projects[i];
      p.onclick = function () {
        projectClick(i);
      };
      let icon = document.createElement('i');
      icon.setAttribute('class', 'fas fa-trash-alt');
      p.appendChild(icon);
      projectDiv.appendChild(p);
    };
    
  }else{
    let projects = ["Today's Task"];
    let id = localStorage.setItem('activeProject'. JSON.stringify(0));
    localStorage.setItem('projects', JSON.stringify(projects));

    for (let i = 0;i < projects.length; i++){ 
      let p = document.createElement('p');
      p.setAttribute('class', 'project');
      p.setAttribute('id', i);
      p.innerHTML = "- "+projects[i];
      p.onclick = function () {
        projectClick(i);
      };
      let icon = document.createElement('i');
      icon.setAttribute('class', 'fas fa-trash-alt');
      p.appendChild(icon);
      projectDiv.appendChild(p);
    };
  }
}
projectDisplay();

let addProject = document.querySelector('.add_project');

addProject.addEventListener('click', function () {
  addProject.style.display = "none";

  let createProject = document.createElement('input');
  createProject.setAttribute('placeholder', 'New Project');
  createProject.setAttribute('class', 'new_project_value');
  projectDiv.appendChild(createProject);

  let newProject = document.createElement('button');
  newProject.setAttribute('class', 'new_project');
  newProject.innerHTML = '+Add';
  projectDiv.appendChild(newProject);

  let submitProject = document.querySelector('.new_project');
  submitProject.addEventListener('click', function () {
    let latestProject = document.querySelector('.new_project_value').value;
    
    projects.push(latestProject);
    let newId = projects.length - 1;
    localStorage.setItem('activeProject', JSON.stringify(newId));

    localStorage.setItem('projects', JSON.stringify(projects));
    window.location.reload();

  });

});

let addTodos = document.querySelector('.add_todos');

addTodos.addEventListener('click', function () {
  document.querySelector('.todo_section').style.display = "none";
  document.querySelector('.todo_form').style.display = "block";
});




// const todos = () {

// };