//Q1
function getBookStatus(boolean,name,author){
    if (boolean==true){
        console.log(`You already read ${name} by ${author}`);
    }else{
        console.log(`You still need to read the ${name} by ${author}`);
    }
}

function status(library){
    for (const book of library) {
        getBookStatus(book.alreadyRead,book.title,book.author);
    }
}

books=[
    {title:"The hobbit",author:"J.R.R",alreadyRead:true},
    {title:"The tin tin",author:"mr",alreadyRead:false},
    {title:"The footbal",author:"Adel Ferdowsipour",alreadyRead:true},
]
status(books)

//Q2
function arrayConvertor(arr){
    let temp = Object.keys(arr[0])
    temp=temp.map(item=>{
        return[item]
    })
    temp.forEach((list) => {
        for (const obj of arr) {
            list.push(obj[list[0]])
        }
    });
    console.log(temp);
}

array=[
    {name:'ali',age:21,gender:"male"},
    {name:'sina',age:51,gender:"male"},
    {name:'arash',age:15,gender:"male"}
]
arrayConvertor(array);