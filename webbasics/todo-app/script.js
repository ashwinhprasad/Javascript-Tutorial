var todoList = []; 
var duplicateList = [];
var allItems = [];

//add element
let button = document.querySelector('#add').addEventListener('click',(event) =>{
    event.preventDefault();
    let todoItem = document.querySelector('input');
    if(todoItem.value){
        todoList.push(todoItem.value);
        allItems.push(todoItem.value);
        duplicateList = todoList;
        todoList = []
        todoItem.value = ''


        //changing html
        duplicateList.forEach((item) => {
      
            listElement = document.createElement('li');
            listElement.id = item.slice(0,10)
            
            listLabel = document.createElement('label');
            childname = document.createTextNode(item);
            listLabel.appendChild(childname);

            listElement.id = item.slice(0,10)
    
            listInput = document.createElement('input');
            listInput.type = 'checkbox';
    
            listElement.appendChild(listInput);
            listElement.appendChild(listLabel);
            document.querySelector('ul').appendChild(listElement)
                    
        })

    }
    else {
        console.log('Enter a valid Input')
    }

});


document.querySelector('#remove').addEventListener('click',(event) => {

    event.preventDefault();
    let list = document.querySelectorAll('li');

    list.forEach((listElement) => {
        if(listElement.childNodes.item(0).checked){
            listElement.remove()
        }
    })

})