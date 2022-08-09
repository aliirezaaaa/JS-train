 function fun(arr){
     setTimeout(() => {
        const temp = [...arr]
        console.log(arr);
        for (const obj of arr) {
            delete obj.id
        }
        console.log(arr);
    
    }, 5000);
    
}

let array=[
    {id:1,title:"object 1",event:"event 1"},
    {id:2,title:"object 2",event:"event 2"},
    {id:3,title:"object 3",event:"event 3"},
    {id:4,title:"object 4",event:"event 4"},
]

fun(array)