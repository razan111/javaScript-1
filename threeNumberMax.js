numberOne = 23;
numberTwo = 83;
numberThree = 53;

let result;

if(numberOne > numberTwo && numberOne > numberThree){
    result = numberOne;
}

else if(numberTwo > numberOne && numberTwo > numberThree){
    result = numberTwo;
}

else if(numberThree > numberTwo && numberThree > numberOne){
    result = numberThree
}

else{
    console.log("The Number are Equal");
}

console.log(result);

// Solve the problem with Javascript  to find a maximum between three numbers.