document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;
        
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

        if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        console.log("Form Submitted:", { name, email, password });
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); // Reset form fields
    }
});


