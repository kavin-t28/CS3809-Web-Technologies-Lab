document.getElementById("loginForm").addEventListener("submit", function(event) {
    var emailInput = document.querySelector(".email input").value;
    var passwordInput = document.querySelector(".password input").value;

    if (!isValidEmail(emailInput)) {
        alert("Please enter a valid email address in the format <letters><8-digit-number>@snuchennai.edu.in.");
        event.preventDefault();
    }

    if (!isValidPassword(passwordInput)) {
        alert("Please enter a valid password with at least 8 characters, including at least one special character, one uppercase letter, one lowercase letter, and one number.");
        event.preventDefault(); 
    }
});

function isValidEmail(email) {
    var emailPattern = /^[A-Za-z]+[0-9]{8}@snuchennai\.edu\.in$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        var proceed = confirm("Your password does not meet the required criteria. Do you want to proceed anyway?");
        return proceed;
    }
    return true;
}
var userName = prompt("Please enter your name:");
if (userName) {
    alert("Welcome, " + userName + "! You can now log in.");
}

