document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

function validateEmail(email) {
    if (!email) {
        return "Please enter your Siena College email.";
    }
    if (!email.endsWith("@siena.edu")) {
        return "Invalid email. Use your Siena College email ending in '@siena.edu'.";
    }
    return ""; // No errors => Return empty string.
}

function validateSienaID(sienaID) {
    if (!sienaID) {
        return "Please enter your Siena College ID.";
    }
    if (!/\d+/.test(sienaID)) {
        return "Invalid ID. Use your Siena College ID needs to be a number";
    }
    return ""; // No errors => Return empty string.
}

function validateForm() {
    const emailInput = document.getElementById("emailAddress");
    const sienaIDInput = document.getElementById("sienaID");
    const emailError = document.getElementById("emailError");
    const sienaIDError = document.getElementById("sienaIDError");

    // Clear previous error messages
    emailError.textContent = "";
    sienaIDError.textContent = "";

    // Run validation checks
    const emailValidationMessage = validateEmail(emailInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (emailValidationMessage) {
        emailError.textContent = emailValidationMessage;
        isValid = false;
    }
    // << ADD CODE HERE >>
    // Run validation checks
    const idValidationMessage = validateSienaID(sienaIDInput.value.trim());

    // Display errors if any
    if (idValidationMessage) {
        sienaIDError.textContent = idValidationMessage;
        isValid = false;
    }

    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        document.getElementById("sienaForm").submit();
    }
}




