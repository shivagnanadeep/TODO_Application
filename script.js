let todoItemsContainer=document.getElementById('todoItemsContainer');
let addButton=document.querySelector('.add-todo-button');
let inputElement=document.querySelector('#todosUserInput');
let todoList=[
    {
        text:"Learn HTML",
        uniqueNo:1
    },
    {
        text:"Learn CSS",
        uniqueNo:2
    },
    {
        text:"Learn JS",
        uniqueNo:3
    }
];
function createAndAppendTodo(newTodo){

}
function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement=document.getElementById(checkboxId);
    console.log(checkboxElement.checked);
    let labelElement=document.getElementById(labelId);
    labelElement.classList.toggle('checked');
}
function deleteTodoItem(todoId){
    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}
function createNewItem(task) {
    let checkboxId = 'checkbox' + task.uniqueNo;
    let labelId = 'label' + task.uniqueNo;
    let todoId='todo'+task.uniqueNo;
    let todoElement = document.createElement('li');
    todoElement.classList.add('todo-item-container', 'd-flex', 'flex-row');
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    }
    inputElement.classList.add('checkbox-input');
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container', 'd-flex', 'flex-row');
    todoElement.appendChild(labelContainer);

    let inputLabel = document.createElement('label');
    inputLabel.classList.add('checkbox-label');
    inputLabel.setAttribute('for',checkboxId);  // Fix: ensure the 'for' attribute matches the checkbox ID
    inputLabel.id = labelId;
    inputLabel.textContent = task.text;
    labelContainer.appendChild(inputLabel);

    let deleteContainer = document.createElement('div');
    deleteContainer.classList.add('delete-icon-container');
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');
    deleteIcon.onclick=function(){
        deleteTodoItem(todoId);
    }
    deleteContainer.appendChild(deleteIcon);
}

for(let task of todoList){
    createNewItem(task);
}
addButton.addEventListener('click',()=>{
    let taskName=inputElement.value;
    if(taskName===""){
        alert("enter valid text");
        return;
    }
    todosCount=todoList.length+1;
    let newTodo={
        text:taskName,
        uniqueNo:todosCount
    };
    createNewItem(newTodo);
    inputElement.value="";
});