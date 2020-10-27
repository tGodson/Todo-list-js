import { id, todoArr, projectClick, projects } from './index.js'
function TodoConstructor(title, description, dueDate, priority, id) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.id = id;
}

const formData = () => {
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
      console.log(todoArr[i].id, del);
      todoArr.splice(i, 1);
      localStorage.setItem('activeProject', JSON.stringify(todoArr));
    }
  }
  localStorage.setItem('activeProject', JSON.stringify(0));
  
}
export { formData, TodoConstructor, deleteFunction }; 