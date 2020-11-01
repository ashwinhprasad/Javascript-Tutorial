let todos = [
    {title:'Eat', id:1, completed:false },
    {title:'Sleep', id:2, completed:false },
    {title:'Repeat', id:3, completed:true }
];


function display(){
    let output = '';
    todos.forEach((todo) => {
        output += `<li>${todo.title}</li>`;
    });
    document.body.innerHTML = output;
}

const addTodo = (todo) => {

    return new Promise((resolve,reject) => {
        error = false;

        if (!error) {
            todos.push(todo);
            resolve(todo);
        } else {
            reject('Something Went wrong ');
        }
    })
}

addTodo({ title:'work', id:4, completed:true})
    .then((todo) => {
        display();
        console.log(todo);
    })
    .catch(err => console.log(err))