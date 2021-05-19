/* eslint-disable no-plusplus */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function TodoConstructor(title, description, dueDate, priority, id) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.id = id;
}

export default TodoConstructor;