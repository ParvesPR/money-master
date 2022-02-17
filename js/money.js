// Define input value
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}


document.getElementById('calc-btn').addEventListener('click', function () {
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');
    const totalInputAmount = foodInput + rentInput + clothesInput;

    // total balance
    const expensesBalance = document.getElementById('expenses-amount');
    const expensesAmount = parseFloat(expensesBalance.innerText);
    const totalExpenses = expensesAmount + totalInputAmount;
    expensesBalance.innerText = totalExpenses;

})