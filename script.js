const form = document.getElementById("applicationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    if(name === "" || email === "" || phone === "" || message === ""){
        error.textContent = "Please fill all fields.";
        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        error.textContent = "Please enter a valid email address.";
        return;
    }

    const phonePattern =
    /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        error.textContent = "Phone number must contain exactly 10 digits.";
        return;
    }

    success.textContent =
    "Application submitted successfully!";

    form.reset();

});