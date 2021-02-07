const value1 = document.getElementById('v1');
const value2 = document.getElementById('v2');
const result = document.querySelector('button.result');

const wynik = () => {
if(typeof value1.value === 'string' && typeof value2.value === 'string' || typeof value1.value === 'string' || typeof value2.value === 'string') {
    alert("Musisz podać wartości LICZBOWE!")
    value1.value ='';
    value2.value ='';
}

}
result.addEventListener('click', wynik);