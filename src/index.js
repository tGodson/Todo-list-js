const projectDiv = document.querySelector('.projectList');
let projects = JSON.parse(localStorage.getItem('projects'));

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

});

let submitProject = document.querySelector('.new_project');
  submitProject.addEventListener('click', function () {
    let latestProject = document.querySelector('.new_project_value').value;
    console.log(latestProject);
    projects.push(latestProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    window.location.reload();

  });

if(projects){
  for (let i = 0;i < projects.length; i++){ 
    let p = document.createElement('p');
    p.setAttribute('class', 'project');
    p.setAttribute('id', i);
    p.innerHTML = "- "+projects[i];
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-trash-alt');
    p.appendChild(icon);
    projectDiv.appendChild(p);

  };
}