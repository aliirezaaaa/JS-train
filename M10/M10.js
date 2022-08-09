//Q1
class Employee{
    constructor(name,birthdate,gender,position,id){
        this.name=name;
        this.birthdate=birthdate;
        this.gender=gender;
        this.position=position;
        this.id=id;
    }
    //getters
    get name(){
        return this._name;
    }
    get birthdate(){
        return this._birthdate;
    }
    get position(){
        return this._position;
    }
    get gender(){
        return this._gender;
    }
    get id(){
        return this._id;
    }
    //setters
    set name(newName){
        this._name=newName;
    }
    set birthdate(date){
        this._birthdate=date;
    }
    set position(pos){
        this._position=pos;
    }
    set gender(gn){
        this._gender=gn;
    }
    set id(idNum){
        this._id=idNum;
    }
}

//Q1
class Company{
    employies = []

    //getters
    get employies(){
        return this.employies;
    }
    //setters
    set employies(newEmplo){
        this.employies.push(newEmplo);
    }
}

let emp=new Employee("ali","2001","male","programmer")
console.log(emp.name);

//Q2
// class Ear{
//     constructor(a){
//         this.a=a;
//     }
//     hearing(){
//         console.log(`I heared ${this.a}`);
//     }
// }

// class Eye{
//     constructor(a){
//         this.a=a;
//     }
//     seeing(){
//         console.log(`I saw ${this.a}`);
//     }
// }

// class Human extends Ear,Sea{
//     hear(x){
//         const ear=new Ear(x);
//         ear.hearing();
//     }
//     saw(x){
//         const eye=new Eye(x);
//         ear.seeing();
//     }
// }

// const h=new Human();
// h.hear('ring!');
// h.saw('car!');