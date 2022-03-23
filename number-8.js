var math = 94;
var english = 73;
var physics = 44;

let result;

result = (math + english + physics)/3;

if(result >= 90){
    result = "Grade A";
}
else if (result >= 80){
    result = "Grade B";
}

else if (result >= 70){
    result = "Grade C";
}

else if (result >= 60){
    result = "Grade D";
}

else if (result >= 40){
    result = "Grade E";
}
else if (result < 40){
    result = "Grade F";
}

console.log(result);



 
// Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
// Find out if the average grade:
// If Percentage >= 90% then print “Grade A”
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

