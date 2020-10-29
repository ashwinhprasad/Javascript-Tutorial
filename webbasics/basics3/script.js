let input_text =  document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click',(event) => {
    event.preventDefault()
    console.log("your name is " + input_text.value)
    input_text.value = "f"
})