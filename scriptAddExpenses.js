document.getElementById("addExpenses").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    validateForm();
});

// Validate Expense Name (Place of Expense)
function validateExpenses(expenseName) {
    if (!expenseName) {
        return "Expense Name is required.";
    }
    if (expenseName.length < 5) {
        return "Expense Name must be at least 5 characters long.";
    }
    return "";
}

// Validate Expense Amount (between 0 and 50000)
function validateExpenseAmount(amountInput) {
    let amount = parseFloat(amountInput.value.trim());

    if (!amount || amount <= 0 || amount > 50000) {
        return "Amount must be greater than 0 and less than 50000.";
    }

    amountInput.value = amount.toFixed(2);
    return "";
}

// Validate Mode of Payment (dropdown)
function validatePayment(paymentValue) {
    const validOptions = ["Credit card", "Debit card", "Cash"];
    if (!validOptions.includes(paymentValue)) {
        return "Please select a valid payment method.";
    }
    return "";
}

// Main Form Validation Function
function validateForm() {
    const expenseName = document.getElementById("expenses");
    const expenseDate = document.getElementById("expenseDate");
    const expenseAmount = document.getElementById("expenseAmount");
    const payment = document.getElementById("payment");

    const expenseNameError = document.getElementById("expenseNameError");
    const expenseDateError = document.getElementById("expenseDateError");
    const expenseAmountError = document.getElementById("expenseAmountError");
    const expenseCategoryError = document.getElementById("expenseCategoryError");
    const paymentError = document.getElementById("paymentError");

    // Clear previous error messages
    expenseNameError.textContent = "";
    expenseDateError.textContent = "";
    expenseAmountError.textContent = "";
    expenseCategoryError.textContent = "";
    paymentError.textContent = "";

    let isValid = true;

    const nameValidationMessage = validateExpenses(expenseName.value.trim());
    const dateValidationMessage = validateExpenseDate(expenseDate.value);
    const amountValidationMessage = validateExpenseAmount(expenseAmount);
    const categoryValidationMessage = validateExpenseCategory();
    const paymentValidationMessage = validatePayment(payment.value);

    if (nameValidationMessage) {
        expenseNameError.textContent = nameValidationMessage;
        isValid = false;
    }

    if (dateValidationMessage) {
        expenseDateError.textContent = dateValidationMessage;
        isValid = false;
    }

    if (amountValidationMessage) {
        expenseAmountError.textContent = amountValidationMessage;
        isValid = false;
    }

    if (categoryValidationMessage) {
        expenseCategoryError.textContent = categoryValidationMessage;
        isValid = false;
    }

    if (paymentValidationMessage) {
        paymentError.textContent = paymentValidationMessage;
        isValid = false;
    }

    if (isValid) {
        console.log("Form is valid! Submitting...");
        document.getElementById("addExpenses").submit();
    }
}