class Student {
    constructor(firstname,lastname,marks,department,year){
        this.firstname = firstname;
        this.lastname = lastname;
        this.marks = marks;
        this.department = department;
        this.year = year;
    }

    get_fullname(){
        return this.firstname + " " + this.lastname;
    }

    get_detail(){
        return (`name : ${this.get_fullname()}\nmarks: ${this.marks}\ndepartment : ${this.department}\nyear : ${this.year}`)
    }


}

const ashwin = new Student("Ashwin","Prasad",90,"CSBS",2);
const sriram = new Student("Sriam","Ramesh",80,'CSE',2);
console.log(ashwin.get_detail());