// Define input value
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

// balance & saving function
// function getBalanceInput(balanceId) {
//     const balance = document.getElementById(balanceId);
//     const balanceInput = parseFloat(balance.innerText);
//     balance.innerText = balanceInput;
//     return balanceInput;
// }

document.getElementById('calc-btn').addEventListener('click', function () {
    const incomeInput = getInput('income-input')
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');
    const totalInputAmount = foodInput + rentInput + clothesInput;
    // error msg
    if (isNaN(incomeInput) || incomeInput < 0) {
        incomeInput.value = '';
        return alert('Invali Amount')
    }

    incomeInput.value = '';

    if (isNaN(foodInput) || foodInput < 0) {
        if (foodInput > incomeInput) {}
        foodInput.value = '';
        return alert('Invalid Amount');
    }
    if (isNaN(rentInput) || rentInput < 0) {
        if (rentInput > incomeInput) {}
        rentInput.value = '';
        return alert('Invalid Amount');
    }

    rentInput.value = '';

    if (isNaN(clothesInput) && clothesInput < 0) {
        if (clothesInput > incomeInput) {}
        clothesInput.value = '';
        return alert('Invalid Amount');
    }

    clothesInput.value = '';
    if (totalInputAmount > incomeInput) {
        totalInputAmount.value = '';
        return alert('insuffient balance');
    }
    totalInputAmount.value = '';

    // total balance
    const expensesBalance = document.getElementById('expenses-input');
    const expensesAmount = parseFloat(expensesBalance.innerText);
    const totalExpenses = expensesAmount + totalInputAmount;
    expensesBalance.innerText = totalExpenses;

    // balance amount
    const getBalance = document.getElementById('balance-input');
    const balanceAmount = parseFloat(getBalance.innerText)
    const balance = incomeInput - totalExpenses;
    getBalance.innerText = balance;

    document.getElementById('saving-btn').addEventListener('click', function () {
        // error

        const savingInput = document.getElementById('saving-input');
        const savingInputValue = parseFloat(savingInput.value);
        const savingAmount = (incomeInput / 100) * savingInputValue;
        savingInput.innerText = savingAmount;
        const savingAmountInput = document.getElementById('saving-amount');
        const savingAmountValue = parseFloat(savingAmountInput.innerText);
        savingAmountInput.innerText = savingAmount;

        const remBalance = document.getElementById('rem-balance');
        const remBalanceValue = parseFloat(remBalance.innerText);
        const remainingBalance = balance - savingAmount;
        remBalance.innerText = remainingBalance;

        if (isNaN(savingAmount) || savingAmount < 0) {
            savingAmount.value = '';
            return alert('Invalid amount');
        }

        if (savingAmount > balance) {
            alert('insufficient balance')
        }



    })

})