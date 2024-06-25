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
  
function renderElements(list){
    const ul = document.querySelector(".tasks__list");
    const lis = document.querySelectorAll("li");
    for(let i=0;i<lis.length;i++){
        lis[i].remove();
    }
    let obj = {};
    for(let i=0;i<tasks.length;i++){
        obj = tasks[i];
        ul.appendChild(createTaskItem(obj));
    }
}
renderElements(tasks);

function createTaskItem(obj){
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const button = document.createElement("button");
    
    li.appendChild(div);
    li.appendChild(button);
    div.appendChild(span);
    div.appendChild(p);

    li.classList.add("task__item");
    div.classList.add("task-info__container");
    button.classList.add("task__button--remove-task");
    button.addEventListener("click",function(){
        let position = tasks.indexOf(obj);
        tasks.splice(position,1);
        renderElements(tasks);
    });

    if(obj.type.toLowerCase() == "urgente"){
        span.classList.add("task-type-span-urgent");
    }else if(obj.type.toLowerCase() == "importante"){
        span.classList.add("task-type-span-important");
    }else if(obj.type.toLowerCase() == "normal"){
        span.classList.add("task-type-span-normal");
    }
    p.classList.add("p");
    p.innerText = obj.title;

    return li;
};

const buttonAddTasks = document.querySelector(".form__button--add-task");
buttonAddTasks.addEventListener("click",function(event){
  event.preventDefault();
  const inputTitle = document.querySelector("#input_title");
  const inputSelect = document.querySelector(".form__input--priority");
  let obj = {title: inputTitle.value, type: inputSelect.value};
  tasks.push(obj);
  renderElements(tasks);
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

