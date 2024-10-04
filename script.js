let totalIncome = 0;
let totalExpenses = 0;
let users = [];
let isLoggedIn = false;

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        users.push({ username, password });
        alert('Користувача успішно зареєстровано');
    } else {
        alert('Будь ласка, введіть логін та пароль');
    }
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        isLoggedIn = true;
        alert('Вхід успішний');
        document.getElementById('auth-forms').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Невірний логін або пароль');
    }
}

function addIncome() {
    if (!isLoggedIn) {
        alert('Будь ласка, увійдіть у систему для продовження');
        return;
    }
    const incomeAmount = document.getElementById('income-amount').value;
    if (incomeAmount && incomeAmount > 0) {
        totalIncome += parseFloat(incomeAmount);
        const incomeList = document.getElementById('income-list');
        const listItem = document.createElement('li');
        listItem.textContent = `Дохід: ${incomeAmount}`;
        incomeList.appendChild(listItem);
        updateBalance();
        document.getElementById('income-amount').value = '';
        updateChart();
    }
}

function addExpense() {
    if (!isLoggedIn) {
        alert('Будь ласка, увійдіть у систему для продовження');
        return;
    }
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
        updateChart();
    }
}

function updateBalance() {
    document.getElementById('total-income').textContent = `Загальні доходи: ${totalIncome}`;
    document.getElementById('total-expenses').textContent = `Загальні витрати: ${totalExpenses}`;
    document.getElementById('net-balance').textContent = `Чистий баланс: ${totalIncome - totalExpenses}`;
}

function updateChart() {
    const ctx = document.getElementById('expense-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Доходи', 'Витрати'],
            datasets: [{
                data: [totalIncome, totalExpenses],
                backgroundColor: ['#4CAF50', '#FF6347']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function subscribePremium() {
    alert('Преміум підписка успішно оформлена! Тепер у вас є доступ до розширених функцій.');
}