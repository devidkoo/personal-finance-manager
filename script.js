let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const incomeAmount = document.getElementById('income-amount').value;
    if (incomeAmount && incomeAmount > 0) {
        totalIncome += parseFloat(incomeAmount);
        const incomeList = document.getElementById('income-list');
        const listItem = document.createElement('li');
        listItem.textContent = `Дохід: ${incomeAmount}`;
        incomeList.appendChild(listItem);
        updateBalance();
        document.getElementById('income-amount').value = '';
    }
}

function addExpense() {
    const expenseDescription = document.getElementById('expense-description').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    if (expenseDescription && expenseAmount && expenseAmount > 0) {
        totalExpenses += parseFloat(expenseAmount);
        const expenseList = document.getElementById('expense-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${expenseDescription}: ${expenseAmount}`;
        expenseList.appendChild(listItem);
        updateBalance();
        document.getElementById('expense-description').value = '';
        document.getElementById('expense-amount').value = '';
    }
}

function updateBalance() {
    document.getElementById('total-income').textContent = `Загальні доходи: ${totalIncome}`;
    document.getElementById('total-expenses').textContent = `Загальні витрати: ${totalExpenses}`;
    document.getElementById('net-balance').textContent = `Чистий баланс: ${totalIncome - totalExpenses}`;
}