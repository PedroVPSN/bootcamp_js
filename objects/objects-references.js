let myAccount = {
    name: "Pedro Silva",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income}. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))
// getAccountSummary
// account for Pedro has $900. $1000 income. $100 in expenses.

// getIncome
// addexpense
// addexpense
// getAccountSummary
// resetAccount
// getAccountSummary
