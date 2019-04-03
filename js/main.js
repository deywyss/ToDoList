//Search function



const inputSearch = document.querySelector(".searchinput");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");
let toDoList = []; //tablica bedzie zawierala wszystki taski (li);
const searchTask = (e) => {
    // console.log("ok");
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    // console.log(tasks);

    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));

}

//Remove function

const removeText = document.querySelector(".removetext");


const removeTasks = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = listItems.length;

    renderList()
}

const removeClick = (e) => {

    // console.log("Checking removeCLick");

    ul.textContent = "";
    toDoList = [];
    taskNumber.textContent = 0;



}



//Add task fucntion


const form = document.querySelector("form");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const taskInput = document.querySelector(".taskinput")


const addTask = (e) => {
    e.preventDefault();

    const titleTask = taskInput.value;
    // console.log(titleTask);

    if (titleTask === "") return;

    const newLi = document.createElement("li");
    newLi.className = "task";
    newLi.innerHTML = titleTask + "<button>&#128465;</button>"

    toDoList.push(newLi);
    renderList();

    ul.appendChild(newLi);
    taskInput.value = "";



    // const liItems = document.querySelectorAll("li").length;
    // taskNumber.textContent = liItems;

    taskNumber.textContent = listItems.length;
    newLi.querySelector("button").addEventListener("click", removeTasks);
}




//RENDER new arr with new keys


const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}


//click behaviours

form.addEventListener("submit", addTask);

inputSearch.addEventListener("input", searchTask);

removeText.addEventListener("click", removeClick);

document.querySelectorAll("button[data-key]").forEach(item => item.addEventListener("click", removeTask));