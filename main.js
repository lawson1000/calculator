function zero(){ 
    var zero = document.getElementById("zero").innerHTML;
    document.getElementById("displayNumber").value += zero;
}
function one(){ 
    var one = document.getElementById("one").innerHTML;
    document.getElementById("displayNumber").value += one;
}
function two(){ 
    var two = document.getElementById("two").innerHTML;
    document.getElementById("displayNumber").value += two;
}
function three(){ 
    var three = document.getElementById("three").innerHTML;
    document.getElementById("displayNumber").value += three;
}
function four(){ 
    var four = document.getElementById("four").innerHTML;
    document.getElementById("displayNumber").value += four;
}
function five(){ 
    var five = document.getElementById("five").innerHTML;
    document.getElementById("displayNumber").value += five;
}
function six(){ 
    var six = document.getElementById("six").innerHTML;
    document.getElementById("displayNumber").value += six;
}
function seven(){ 
    var seven = document.getElementById("seven").innerHTML;
    document.getElementById("displayNumber").value += seven;
}
function eight(){ 
    var eight = document.getElementById("eight").innerHTML;
    document.getElementById("displayNumber").value += eight;
}
function nine(){ 
    var nine = document.getElementById("nine").innerHTML;
    document.getElementById("displayNumber").value += nine;
}
function fullStop(){ 
    var fullStop = document.getElementById("fullStop").innerHTML;
    document.getElementById("displayNumber").value += fullStop;
}
function addition(){ 
    var addition = document.getElementById("addition").innerHTML;
    var confirmAddition = document.getElementById("displayNumber").value += addition;
}
function subtraction(){ 
    var subtraction = document.getElementById("subtraction").innerHTML;
    document.getElementById("displayNumber").value += subtraction;
}
function multiplication(){ 
    var multiplication = document.getElementById("multiplication").value ="*";
    document.getElementById("displayNumber").value += multiplication;
}
function division(){ 
    var division = document.getElementById("division").innerHTML;
    document.getElementById("displayNumber").value += division;
}
function percentage(){ 
    try{
    var percentage = document.getElementById("displayNumber").value
    var nanCatch = document.getElementById("displayAnswer").value =Number(percentage)/100
    if (isNaN(nanCatch)){
        document.getElementById("displayAnswer").value = "No Operands allowed"
    }
    }
    catch{
        
    }

} 

function cancel(){
    document.getElementById("displayNumber").value = ""
    document.getElementById("displayAnswer").value = ""
    document.getElementById("displayNumber").Placeholder = "0"
}
function backspace(){
    var backspace = document.getElementById("displayNumber").value 
    var newString = document.getElementById("backspace").value = backspace.toString().slice(0,-1)
    document.getElementById("displayNumber").value = newString 
}

function equalTo(){
    try{
    var equalTo = document.getElementById("displayNumber").value
    document.getElementById("displayAnswer").value = eval(equalTo)
    }
    catch{
        document.getElementById("displayAnswer").value = "Error!"
    }
}


// var element=document.getElementById("displayNumber");
//   if (/[+-\/*]/.test(this.value) && /[+-\/*]$/.test(element.innerHTML)) {
//     element.innerHTML = element.innerHTML.replace(element.innerHTML[element.innerHTML.length - 1], '');
//   }



