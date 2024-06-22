const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(elements){
  const lis = document.querySelectorAll("li");
  for(let i=0;i<lis.length;i++){
    lis[i].remove();
  }
  let obj = {};
  for(let i=0;i<elements.length;i++){
    obj = elements[i];
    createTaskItem(obj);
  }
}
renderElements(tasks);

function createTaskItem(obj){
  const newIten = document.createElement("li");
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newP = document.createElement("p");
  const newButton = document.createElement("button");

  const ul = document.querySelector(".tasks__list");

  ul.appendChild(newIten);
  newIten.appendChild(newDiv);
  newIten.appendChild(newButton);
  newDiv.appendChild(newSpan);
  newDiv.appendChild(newP);

  newIten.classList.add("task__item");
  newDiv.classList.add("task-info__container");
  if(obj.type.toLowerCase() == "urgente"){
    newSpan.classList.add("task-type-span-urgent");
  }else if(obj.type.toLowerCase() == "importante"){
    newSpan.classList.add("task-type-span-important");
  }else if(obj.type.toLowerCase() == "normal"){
    newSpan.classList.add("task-type-span-normal");
  }
  newP.classList.add("p");
  newP.innerText = obj.title;
  newButton.classList.add("task__button--remove-task");
  newButton.addEventListener("click",function(){
  newIten.remove();
  })
}

const buttonAddTasks = document.querySelector(".form__button--add-task");
buttonAddTasks.addEventListener("click",function(event){
  event.preventDefault();
  const inputTitle = document.querySelector("#input_title");
  const inputSelect = document.querySelector(".form__input--priority");
  let obj = {title: inputTitle.value, type: inputSelect.value};
  tasks.push(obj);
  createTaskItem(obj);
  inputTitle.value = "";
  inputSelect.value = "";
});

const searchTasks = document.querySelector(".header__input--search-input__box");
searchTasks.addEventListener("input",function(event){
  let search = event.target.value.toLowerCase();
  const lis = document.querySelectorAll("li");
  for(let i=0;i<lis.length;i++){
    let li = lis[i].textContent.toLowerCase();
    if(li.includes(search)){
      lis[i].style.display = "flex";
    }else{
      lis[i].style.display = "none";
    }
  }
});

const refreshPage = document.querySelector(".header__title");
refreshPage.addEventListener("click",function(){
  window.location.reload();
})
