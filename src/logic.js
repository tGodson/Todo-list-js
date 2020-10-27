// import { id, todoArr, projectClick } from './index.js'
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
// export { formData, TodoConstructor }; 