// Q1 was already solved in previous Moduls.
//Q2
function fibo(num){
    if (num==0){
        return 0;
    }else if (num==1){
        return 1;
    }else{
        return fibo(num-1)+fibo(num-2)
    }
} 

console.log(fibo(7));

//Q3
function fact(num){
    if (num==0){
        return 1;
    }else{
        return num*fact(num-1)
    }
}

console.log(fact(5));