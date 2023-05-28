function solution(arg){ 
    var num=document.getElementById('resourse');
    num.value=num.value+arg;
}

function Enter(){
    var number1=document.getElementById('resourse').value;
    var number2=eval(number1);
    document.getElementById('resourse').value=number2;  
 }

function clearDisplay(){
    document.getElementById('resourse').value=null;
  
}

function back(){
    var num1=document.getElementById('resourse');
    num1.value=num1.value.slice(0,-1);
}