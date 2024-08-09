const inputField = document.getElementById('input');
const taskListEl = document.getElementById('task-list');


document.getElementById('btn').addEventListener('click', function(){
    const inputValue = inputField.value;

    if(inputValue.trim() !== ''){
        const newLi = document.createElement('li');
        newLi.textContent = inputValue;
        taskListEl.appendChild(newLi);
        inputField.value = '';
       


        //create delete button

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Done';

deleteBtn.classList.add('btn', 'delete-btn');
deleteBtn.addEventListener('click', function(){
    taskListEl.removeChild(newLi);

});

   
 //create edit button

 const editBtn = document.createElement('button');
 editBtn.textContent = 'Edit';
 // add the style class
 editBtn.classList.add('btn', 'edit-btn');

 //write the funtion

 editBtn.addEventListener('click', function(){
    if(editBtn.textContent === 'Edit'){
        //replace text with input field for editing
       const currentText = newLi.firstChild.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        // add the css class
        input.classList.add( 'task-list','edit-input');
        newLi.replaceChild(input, newLi.firstChild);
        input.focus();
        editBtn.textContent= 'save';

    } else{
        //replace input field with updated text

        const input = newLi.firstChild;
        const newText = input.Value;
        if(newText.trim() !== ''){
            newLi.replaceChild(document.createTextNode(newText),input);
            editBtn.textContent = 'Edit';
        }
    }
 })



  


//append the delete button to the tasklist
newLi.appendChild(deleteBtn);

//append the edit button to taskList

newLi.appendChild(editBtn);





    }

   
});