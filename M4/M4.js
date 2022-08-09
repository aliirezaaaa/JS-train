//Q1
//Function mode
function speedometer(speed){
    if (parseInt(speed)<60){
        console.log("Speed is not enough!");
    }else if(parseInt(speed)>130){
        console.log("Decrease your speed!")
    }else if(parseInt(speed)>=70 && parseInt(speed)<=120){
        if (parseInt(speed)==70){
            console.log("Your speed is 10 km/h higher than 60.");
        }
        if (parseInt(speed)==80){
            console.log("Your speed is 20 km/h higher than 60.");
        }
        if (parseInt(speed)==90){
            console.log("Your speed is 30 km/h higher than 60.");
        }
        if (parseInt(speed)==100){
            console.log("Your speed is 40 km/h higher than 60.");
        }
        if (parseInt(speed)==110){
            console.log("Your speed is 50 km/h higher than 60.");
        }
        if (parseInt(speed)==120){
            console.log("Your speed is 60 km/h higher than 60.");
        }
    }
}

const speedTest=speedometer(90);
console.log(speedTest);

//switch case mode
let speed2 = "110";
function speedTest2(speed2) {
    const number = parseInt(speed2)
    switch(true){
        case number<=60:
            console.log("Speed is not enough!");
            break;
        case number>=130:
            console.log("Decrease your speed!");
            break;
        case number==70:
            console.log("Your speed is 10 km/h higher than 60.");
            break;
        case number==80:
            console.log("Your speed is 20 km/h higher than 60.");
            break;
        case number==90:
            console.log("Your speed is 30 km/h higher than 60.");
            break;
        case number==100:
            console.log("Your speed is 40 km/h higher than 60.");
            break;
        case number==110:
            console.log("Your speed is 50 km/h higher than 60.");
            break;
        case number==120:
            console.log("Your speed is 60 km/h higher than 60.");
            break;
        default:
            console.log("That's Wrong input");
    }
    
}
const speedtesting = speedTest2(speed2);
console.log(speedtesting);

//Q2
function add(arr,num){
    let result=0;
    try{
        if(parseInt(num)>arr.length){
            throw"input number is more than length of array.";
        }
        for (let i = 0; i < num; i++) {
            if(isNaN(arr[i])){
                throw"this element of array is not a number.";
            }
            result+=arr[i];
        }
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

const array=[2,5,6,8,1,4,7];
add(array,20);
