// -----------------------------------------------Adding new Div section and updating the select option ------------------------------
const sectionForm = document.getElementById('section-form');
const sectionInput = document.getElementById('sectoinInputName');
const sectionDiv = document.getElementById('divsection');
const taskSection = document.getElementById('taskSection');


sectionForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const sectionName =  sectionInput.value;

    if (sectionName == ''){
        alert('Please enter a section name');
        return;  
    }
    sectionInput.value = '';
    
    AddSection(sectionName);

});

function AddSection(name){
    //console.log(name);

    let sectionCount = todoLists.length + 1;
    //console.log(sectionCount);
                                                // new fuction to add new div section to add tasks
    
    const newoption = document.createElement('option');
    newoption.textContent = name;
    newoption.value = sectionCount;
    taskSection.appendChild(newoption);


    const newSection = document.createElement('div');
    const newUl = document.createElement("ul");
    const header = document.createElement("h2")
    header.textContent = name;
    newSection.appendChild(header);
    newUl.setAttribute('name','divUL')
    newSection.appendChild(newUl);
    sectionDiv.appendChild(newSection); 

};





// ---------------------------------------------------- function to create a new li element and text node ------------------------------------------

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById("todo-input");
const todoLists = document.getElementsByName("divUL");

console.log(todoLists);

/*const todoLists = [];

for (let index = 0; index < ItemLength.length ; index++) {

    const todolistId  = `todo-list0${index}`;
    todoLists[index] = document.getElementById(todolistId); 
} */
//console.log(todoLists);



todoForm.addEventListener('submit', function(event){
    event.preventDefault() // prevent refreshing the form after submitting

    const taskSectionNumber = document.getElementById('taskSection').value;

    const newTask = todoInput.value;
    //console.log(newTask); // asign the input value to the newtask

    if (newTask == ''){
        alert('Please enter a task');
        return;  // if the input is empty return alert mg
    }
    todoInput.value = ''; // clear the input after adding the  task 

    addTask(newTask, taskSectionNumber); // add the task to the list
});



function addTask(task,number){
    const listItem = document.createElement('li');  // create a list item
    const taskText = document.createElement('span');  // create a span for the test

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox'); // create a checkbox
    listItem.appendChild(checkbox);  // add checkbox to the list

    
    taskText.textContent = task;   
    listItem.appendChild(taskText);  // add text to the lis




    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';  // create a delete button
    listItem.appendChild(deleteButton); // add delete button to the list

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';  // create an edit button
    listItem.appendChild(editButton); // add edit button to the list

    const pintop = document.createElement('button');
    pintop.textContent = 'pin'; // create a pin to top button
    listItem.appendChild(pintop); // add pin to top button to the list


    // Task compeltion feature

    checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        taskText.style.textDecoration = 'line-through';
        listItem.remove();
        todoList.appendChild(listItem);  //list done items in end of the list
    }
    else{
        taskText.style.textDecoration = 'none';
    }
    });

    // Task deletion feature

    deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem); // listItem.remove();
    });

    //pin to the top of the list

    pintop.addEventListener('click', () => {
    listItem.remove();
    todoList.insertBefore(listItem, todoList.firstChild); // listItem.insertAdjacentElement('afterbegin', listItem);
    });

    let todoList;

    if(number == "1"){
        todoList = todoLists[0];
    }else if(number == "2"){
        todoList = todoLists[1];
    }else if(number == "3"){
        todoList = todoLists[2];
    }

    todoList.appendChild(listItem);

    // implementing the edit functionality

    editButton.addEventListener('click', function() {
        const isEditing = listItem.classList.contains('editing');

        if (isEditing){
            //switch back to view mode

            const textInput = listItem.querySelector('input[type="text"]');
            taskText.textContent = textInput.value;

            listItem.insertBefore(taskText, textInput);      // insert the text where the input is located 
            listItem.removeChild(textInput);

            listItem.classList.remove('editing');
            editButton.textContent = 'Edit';



        }
        else{
            //Switch to edit mode 
            const textInput = document.createElement('input');

            textInput.type = 'text';
            textInput.value = taskText.textContent;
            listItem.insertBefore(textInput, taskText);  // inserting the input where the task text is located
            listItem.removeChild(taskText);
            listItem.classList.add('editing');
            editButton.textContent = 'save';
        }
    });

};






