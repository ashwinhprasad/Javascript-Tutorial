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

class FinalYear extends Student {
    constructor(firstname,lastname,marks,department,internships){
        super(firstname,lastname,marks,department,1)
        this.internships = internships;
    }
}

const sir = new FinalYear('John','Doe',90,'csbs',5);
console.log(sir);