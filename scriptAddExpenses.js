document.getElementById("addExpenses").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    validateForm();
});


function validateExpenses(expenseName) {
    if (!expenseName) {
        return "Expense Name is required.";
    }
    if (expenseName.length < 5) {
        return "Expense Name must be at least 5 characters long.";
    }
    return "";
}


function validateExpenseAmount(expenseAmount) {

    if (expenseAmount > 50000 || expenseAmount <= 0) {
        return "Amount must be a number greater than 0 and less than 50000.";
    }
    return "";
}


function validateFrequency(expenseCategory) {
    const validOptions = ["groceries", "business", "restaurants"];
    if (!validOptions.includes(expenseCategory)) {
        return "Please select a valid frequency.";
    }
    return "";
}

// Main Form Validation Function
function validateForm() {
    const sourceInput = document.getElementById("incomeSourceName");
    const amountInput = document.getElementById("amount");
    const frequencyInput = document.getElementById("frequency");

    const sourceError = document.getElementById("incomeSourceNameError");
    const amountError = document.getElementById("amountError");
    const frequencyError = document.getElementById("frequencyError");

    // Clear previous error messages
    sourceError.textContent = "";
    amountError.textContent = "";
    frequencyError.textContent = "";

    let isValid = true;

    // Validate each field
    const sourceValidationMessage = validateSourceName(sourceInput.value.trim());
    const amountValidationMessage = validateAmount(amountInput);
    const frequencyValidationMessage = validateFrequency(frequencyInput.value);

    if (sourceValidationMessage) {
        sourceError.textContent = sourceValidationMessage;
        isValid = false;
    }

    if (amountValidationMessage) {
        amountError.textContent = amountValidationMessage;
        isValid = false;
    }

    if (frequencyValidationMessage) {
        frequencyError.textContent = frequencyValidationMessage;
        isValid = false;
    }

    if (isValid) {
        console.log("Form is valid! Submitting...");
        // Reset the form after submission
        document.getElementById("incomeForm").reset();
    }
}

// Listen for blur event on Amount field to auto-correct decimal places
document.getElementById("amount").addEventListener("blur", function () {
    validateAmount(this);
});
