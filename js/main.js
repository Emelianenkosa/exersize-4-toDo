
let taskList = document.querySelector('.task-list');
const taskItem = document.querySelector('.task-item');

const BtnSend = document.querySelector('.btn-input-text');
BtnSend.addEventListener('click', BtnSendOnClick);
function BtnSendOnClick() {
    let inputTask = document.querySelector('.input-text'); 
    let CloneTaskItem = taskItem.cloneNode(true);
    let taskItemText = CloneTaskItem.querySelector('.task-item-text');
    if(inputTask.value == "") return;
    taskItemText.textContent =  inputTask.value; 
    taskList.appendChild(CloneTaskItem);
    inputTask.value = "";   
};


taskList.addEventListener('click', taskItemOnClick);
function taskItemOnClick(event) {
    const node = event.target;
    console.log(node); 
    console.log(node.tagName);
    const btnDelete = node.closest('.btn-delete');
    const btnRedact = node.closest('.btn-redact');
    const taskItem = node.closest('.task-item');   
    const taskItemText = taskItem.querySelector('.task-item-text');
    //const taskCheckbox = taskItem.querySelector('input');
    
    const taskItemDescription = taskItem.querySelector('.task-item-description');
    
    if (btnDelete) {
        taskItem.remove();
    };

    if (node.type === 'checkbox') {
        console.log(node.type);
        taskItemText.classList.toggle('lineThrough');
    };

    if (btnRedact ) {
        console.log('redact');
        const ClonetaskItemText = taskItemText.cloneNode(true);
        taskItemText.classList.add('displayNone');
        const RedactInputText = document.createElement('input');
        taskItemDescription.appendChild(RedactInputText);
        RedactInputText.classList.add('textOpacity');
        RedactInputText.value = taskItemText.textContent;
        const RedactBtnInputText = document.createElement('button');
        taskItemDescription.appendChild(RedactBtnInputText);
        RedactBtnInputText.textContent = 'Send';
        RedactBtnInputText.classList.add('btn-input-text');
        RedactBtnInputText.addEventListener('click', (event) => {
            
            RedactBtnInputText.classList.add('displayNone');
            RedactInputText.classList.add('displayNone');
            taskItemDescription.appendChild(taskItemText);
            taskItemText.textContent = RedactInputText.value;
            taskItemText.classList.remove('displayNone');
            
        });
        //debugger;
    };  

    
};