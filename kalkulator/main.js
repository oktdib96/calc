
const btn = document.querySelector('button.result');

const wynik = () => {
const value1 = document.getElementById('v1');
const value2 = document.getElementById('v2');
    let myOperator;
    let result;

const operators = document.getElementsByName('operator');

for(let i = 0, numberOfOperators = operators.length; i < numberOfOperators; i++){
if(operators[i].checked){
    myOperator = operators[i].value;
    
    switch(operators[i].value) {
        case "+":
            result = parseInt(value1.value) + parseInt(value2.value);
            break;
            case "-":
                result = parseInt(value1.value) - parseInt(value2.value);
                break;
                case "*":
                result = parseInt(value1.value) * parseInt(value2.value);
                break;
                case "/":
                    result = parseInt(value1.value) / parseInt(value2.value);
                    break;

    }
}
}
console.log(result)
document.querySelector("div.result").innerHTML = result
value1.value = '';
value2.value = '';}
btn.addEventListener('click', wynik);