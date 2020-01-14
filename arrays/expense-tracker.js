const account = {
    name: "Andrew Mead",
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
   
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
                
        this.incomes.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })

        balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addIncome("job", 1000)
account.addExpense("Rent", 950)
account.addExpense("Coffe", 2)
console.log(account.getAccountSummary())