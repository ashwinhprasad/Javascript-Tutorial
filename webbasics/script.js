//alert("file is attached ")
var paragraphs = document.querySelectorAll('p');
var great = document.querySelector('#great');


paragraphs.forEach((para)=> {

  if (!para.id){
      para.textContent = "Hello World";
  }


})


great.textContent = "This is great";
