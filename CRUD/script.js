class Student {

    constructor(name,rollNo){
        this.name = name;
        this.rollNo = rollNo;
    }
    
}

let studObj = [];

// add element
document.querySelector('#add').addEventListener('click',(event)=>{
    event.preventDefault();
    let name = document.querySelector('#get-name');
    let roll = document.querySelector('#get-roll');

    if(name.value != '' && !isNaN( roll.value) && roll.value.length == 9) {
        const student = new Student(name.value,roll.value)
        if(studObj){
            studObj.push(student);
        } else {
            studObj = []
            studObj.push(student);
        }
        localStorage.setItem('studentObject',JSON.stringify(studObj))
        console.log('student added');
        name.value = '';
        roll.value = '';

    } else {
        console.log('Enter Valid rollno');
    }

    studObj = JSON.parse(localStorage.getItem('studentObject'));
    
    document.querySelector('ul').remove()
    let ul = document.createElement('ul');
    ul.style = "list-style-type: none;"
    document.querySelector('div').appendChild(ul)
    
    if (studObj){
        studObj.forEach((student) => {
            let li = document.createElement('li');
            let studDetail = document.createTextNode(student.rollNo + " - " + student.name)
            let inputCheckBox = document.createElement('input');
            inputCheckBox.type = "checkbox";
            li.appendChild(studDetail);
            li.appendChild(inputCheckBox);
            document.querySelector('ul').appendChild(li);
        })
    }
})


studObj = JSON.parse(localStorage.getItem('studentObject'));


if (studObj){
    studObj.forEach((student) => {
        let li = document.createElement('li');
        let studDetail = document.createTextNode(student.rollNo + " - " + student.name)
        let inputCheckBox = document.createElement('input');
        inputCheckBox.type = "checkbox";
        li.appendChild(studDetail);
        li.appendChild(inputCheckBox);
        document.querySelector('ul').appendChild(li);
    })
}


//delete user
document.querySelector('#delete').addEventListener('click',(event) => {
    event.preventDefault();
    let li = document.querySelectorAll('li')
    li.forEach((list) => {
        if (list.childNodes[1].checked) {
            let roll = list.childNodes.item(0).nodeValue.slice(0,9);
            let index;
            studObj.forEach((student,i) => {
                if (student.rollNo == roll){
                    console.log('Match Found');
                    console.log(i)
                    index = i;
                }
            })
            
            if(index >= 0){
                studObj.splice(index,1);
                localStorage.clear();
                localStorage.setItem('studentObject',JSON.stringify(studObj));
            }
        }
    })

    // clearing the lists
    document.querySelectorAll('li').forEach((list) => {
        list.remove();
    })




    //displaying from localstorage
    studObj = JSON.parse(localStorage.getItem('studentObject'));

    if (studObj){
        studObj.forEach((student) => {
            let li = document.createElement('li');
            let studDetail = document.createTextNode(student.rollNo + " - " + student.name)
            let inputCheckBox = document.createElement('input');
            inputCheckBox.type = "checkbox";
            li.appendChild(studDetail);
            li.appendChild(inputCheckBox);
            document.querySelector('ul').appendChild(li);
        })
    }

})