import { TodoConstructor } from './logic';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

let projects = JSON.parse(localStorage.getItem('projects'));
const projectDiv = document.querySelector('.projectList');
const todoTable = document.querySelector('.todo_table');
let id = JSON.parse(localStorage.getItem('activeProject'));

let todoArr = JSON.parse(localStorage.getItem('todoArr'));

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
      let icon = document.createElement('span');
      icon.setAttribute('class', 'delete_project');
      icon.innerHTML = "x";
      icon.onclick = function () {
        deleteFunction(i);
        
      };
      p.appendChild(icon);
      projectDiv.appendChild(p);
    };
    
  }else{
    projects = ["Today's Task"];
    id = 0;
    todoArr = [];
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('activeProject', JSON.stringify(id));
    localStorage.setItem('todoArr', JSON.stringify(todoArr));

    for (let i = 0;i < projects.length; i++){ 
      let p = document.createElement('p');
      p.setAttribute('class', 'project');
      p.setAttribute('id', i);
      p.innerHTML = "- "+projects[i];
      p.onclick = function () {
        projectClick(i);
      };
      projectDiv.appendChild(p);
    };
  }
}
projectDisplay();

const todoDisplay = (id) => {
  todoArr = JSON.parse(localStorage.getItem('todoArr'));
  if(todoArr){ 
    for(let i=0;i < todoArr.length;i++){
      if(todoArr[i].id == id){ 
        
        const tr = document.createElement('tr');
        tr.setAttribute('class', 'table_body');
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
}
todoDisplay(id);

const projectClick = (id) => {
  localStorage.setItem('activeProject', JSON.stringify(id));
  document.querySelector('.todo_section').style.display = "block";
  document.querySelector('.todo_form').style.display = "none";

  window.location.reload();
  
}

document.querySelector('.todo_section').style.display = "block";
document.querySelector('.todo_form').style.display = "none";


const btnBlock = document.querySelector('.btn-block');
btnBlock.onclick = function (){
  formData();
}


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
    if (latestProject != ''){ 
      console.log(latestProject);
      projects.push(latestProject);
      let newId = projects.length - 1;
      localStorage.setItem('activeProject', JSON.stringify(newId));

      localStorage.setItem('projects', JSON.stringify(projects));
    }
    window.location.reload();

  });

});

let addTodos = document.querySelector('.add_todos');

addTodos.addEventListener('click', function () {
  document.querySelector('.todo_section').style.display = "none";
  document.querySelector('.todo_form').style.display = "block";
});

const formData = () => {
  console.log("it really reaches here but i dont know what is happpening");
  id = JSON.parse(localStorage.getItem('activeProject'));
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#ddate').value;
  const priority = document.querySelector('#priority_radio').checked;
  let prty = 'low';
    if(priority == false){
      prty = 'high';
    }
  const newTodo = new TodoConstructor(title, description, dueDate, prty, id);
  todoArr.push(newTodo);
  localStorage.setItem('todoArr', JSON.stringify(todoArr));
  
  projectClick(id);
  
};

const deleteFunction = (del) => {
  projects.splice(del, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
  for (let i = 0;i < todoArr.length; i++){ 
    console.log(todoArr[i].id, del);
    if(todoArr[i].id == del){
      todoArr.splice(i, 1);
    }
  }
  id = 0;
  localStorage.setItem('todoArr', JSON.stringify(todoArr));
  localStorage.setItem('activeProject', JSON.stringify(id));
  
}

export { id, todoArr, projectClick, projects }