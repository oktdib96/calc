
const btn = document.querySelector('button.result');

const wynik = () => {
const value1 = document.getElementById('v1');
const value2 = document.getElementById('v2');
    let myOperator;
    let result;
// if(typeof value1.value === 'string' && typeof value2.value === 'string' || typeof value1.value === 'string' || typeof value2.value === 'string') {
//     alert("Musisz podać wartości LICZBOWE!")
//     value1.value ='';
//     value2.value ='';
// }
//pobranie operatorów
const operators = document.getElementsByName('operator');

for(let i = 0, numberOfOperators = operators.length; i < numberOfOperators; i++){
if(operators[i].checked){
    myOperator = operators[i].value;
    
    switch(operators[i].value) {
        case "+":
            result = value1.value + value2.value;
            break;
            case "-":
                result = value1.value - value2.value;
                break;
                case "*":
                result = value1.value * value2.value;
                break;
                case "/":
                    result = value1.value / value2.value;
                    break;

    }
}
}
console.log(result)
document.querySelector("div.result").innerHTML = result
value1.value = '';
value2.value = '';}
btn.addEventListener('click', wynik);