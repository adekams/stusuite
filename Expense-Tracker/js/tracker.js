
function addMoney() {
    var money = parseInt(document.getElementById("money").value);
    var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    if (money == " " || isNaN(money)){
        alert("Please enter a valid number");
    }else{
        totalBudget += money;
        currentBalance += money;
        document.getElementById("totalBudget").innerHTML = totalBudget;
        document.getElementById("currentBalance").innerHTML = currentBalance;
    }
}

var addExpense = () => {
    var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var expenseName = document.getElementById("name").value;
    var expenseAmount= parseInt(document.getElementById("amount").value);

    if (expenseName == ""){
        alert("Please enter a valid expense name")
    }else if(expenseAmount == "" || isNaN(expenseAmount)){
        alert("please enter a valid expense amount")
    }else{
        if (expenseAmount <= currentBalance){
        currentBalance -= expenseAmount;
        document.getElementById("currentBalance").innerHTML = currentBalance;
        var para = document.createElement("P");                 
        para.innerHTML = `Expense Name : ${expenseName} <br> Expense Amount : ${expenseAmount}`;                
        document.getElementById("addedExpenses").appendChild(para);
        }else{
            alert("Sorry, your expense amount is higher than your current balance")
        }
    }
}

// addMoney()

// addExpense()