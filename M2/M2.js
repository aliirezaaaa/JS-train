function greeting(name,date){
    console.log(`Hi,my name is ${name}.Iam ${2022-date} years old.`);
}

let arr=[];
function info(name,age,gender){
    const person={
        name:name,
        age:age,
        gender:gender.toLowerCase()
    }
    arr.push(person)
}

const variable=greeting('aida',2000);
console.log(variable);
info('ali','21','male');
info('reza','16','male');
info('sara','46','feMale');
console.log(arr)