person={
    name:"aida",
    age:21
}

function changeAge(person,age){
    person.age=parseInt(age)*100;
}

changeAge(person,25);
console.log(person);