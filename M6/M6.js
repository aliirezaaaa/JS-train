//Function statement to Function expresion
const sumUp=function(res,...num){
    for (const number of num) {
        res+=number;
    }
    return console.log(res);
}

let result=0;
sumUp(result,5,3,6,3,5,8)

//Function statement to Arrow function
let result2=0;
const sumUp2=(result2,...num)=>{
    for (const number of num) {
        res+=number;
    }
    return console.log(res);
}

sumUp(result2,5,3,6,3,5,9)

//Q3
Tree=[];
function setGender(name){
    female="abcdefgh";
    male="ijklmnopqrstuvwxyz";
    if (female.includes(name[0])){
        return "female";
    }else if(male.includes(name[0])){
        return "male"
    }
}

function functionHandler(obj,familyTree){
    familyTree.push(obj);
}
function fun(functionHandler,...names){
    for (const name of names) {
        idCard={
            name:name,
            gender:setGender(name)
        }
        functionHandler(idCard,Tree);
    }
}

fun(functionHandler,"elham","ava","sina")
console.log(Tree);