document.getElementById("addCheckForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    validateForm();
});

// Validate Name of Check
function validateNameCheck(name) {
    if (!name) {
        return "Name of the check is required.";
    }
    if (name.length <= 5) {
        return "Name must be more than 5 characters.";
    }
    return "";
}

// Validate Amount
function validateAmount(amountInput) {
    let amount = parseFloat(amountInput.value.trim());

    if (!amount || amount <= 0) {
        return "Amount must be a number greater than 0.";
    }

    amountInput.value = amount.toFixed(2);
    return "";
}

// Validate Bank Name
function validateBank(bank) {
    if (!bank) {
        return "Bank name is required.";
    }
    if (bank.length < 5) {
        return "Bank name must be at least 5 characters.";
    }
    return "";
}

// Validate Account Number
function validateAccountNumber(account) {
    if (!/\d{10}/.test(account)) {
        return "Account number must be a 10-digit number.";
    }
    return "";
}

// Main Form Validation Function
function validateForm() {
    const nameInput = document.getElementById("nameCheck");
    const amountInput = document.getElementById("amount");
    const bankInput = document.getElementById("bank");
    const accountInput = document.getElementById("accountNumber");

    const nameError = document.getElementById("nameCheckError");
    const amountError = document.getElementById("amountError");
    const bankError = document.getElementById("bankError");
    const accountError = document.getElementById("accountNumberError");

    nameError.textContent = "";
    amountError.textContent = "";
    bankError.textContent = "";
    accountError.textContent = "";

    let isValid = true;

    const nameValidation = validateNameCheck(nameInput.value.trim());
    const amountValidation = validateAmount(amountInput);
    const bankValidation = validateBank(bankInput.value.trim());
    const accountValidation = validateAccountNumber(accountInput.value.trim());

    if (nameValidation) {
        nameError.textContent = nameValidation;
        isValid = false;
    }

    if (amountValidation) {
        amountError.textContent = amountValidation;
        isValid = false;
    }

    if (bankValidation) {
        bankError.textContent = bankValidation;
        isValid = false;
    }

    if (accountValidation) {
        accountError.textContent = accountValidation;
        isValid = false;
    }

    if (isValid) {
        console.log("Form is valid! Submitting...");
        document.getElementById("addCheckForm").submit();
    }
}