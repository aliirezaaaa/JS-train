arr1=[2,3,8,[5,7,[2,4],9],6];
let flag=1;
while(flag==1){
    arr1=arr1.flat(1);
    for (const item of arr1) {
        if (typeof(item)===Object){
            console.log(arr1)
            flag=0;
        }
    }
}
console.log(arr1);

//Q2
arr=[1,2,3,5,6,9]
console.log(arr.includes(2))
result=[];

function arrays(...arr){
    for (const item of arr[0]) {
        arr.shift()
        for (const array of arr) {
            if (array.includes(item)){
                result.push(item)
            }
        }
    }
    console.log(result)
}
arrays([1,2,3,4],[5,2,6],[9,8,2,1],[40,56])

//Q3 A
function sorting(arr){
    strElemnts='';
    arr.map((item,index)=>{
        if(!(typeof item=='number')){
            strElemnts+=arr[index];
            arr[index]=null;
        }else{
            return item;
        }
    })
    arr.sort(function(a, b){
        return a - b;
    })
    arr=arr.slice(arr.lastIndexOf(null)+1,)
    console.log(arr);
    console.log(strElemnts);
}

array=[5,'w',6,'d',78,'h',7,2,9,'xy',56]
sorting(array)

//Q4
console.log("-------------------------------------------------");
function indexing(arr){
    let temp=[];
    let str='';
    try{
        if ((arr.indexOf('start'))>arr.indexOf('end')){
            arr.reverse();
        }
        if (arr.includes('start') && arr.includes('end')){
            temp=arr.slice((arr.indexOf('start')+1),arr.indexOf('end'));
            temp.map(item=>{
                str+=' '+item;
            })
            console.log(str);
        }else{
            throw "Not found start and end words."
        }
    }
    catch(err){
        console.log(err);
    }
}
ar=['hi','start','reza','sina','end']
indexing(ar)

//Q5
function election(arr){
    let num=0;
    let temp=[];
    for (const person of arr) {
        if (person.voted=="True"){
            num++;
        }
    }
    console.log('Number of + votes:',num);
    arr.map((item,name,age,voted)=>{
        if (item.voted=='True'){
            temp.push({name:item.name,age:item.age});
        }
    })
    console.log(temp);
}

let voters=[{name:"ali",age:20,voted:"True"},{name:"sina",age:35,voted:"True"},{name:"mohammad",age:28,voted:"false"},{name:"nima",age:55,voted:"True"}]
election(voters)