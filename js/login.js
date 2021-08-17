console.log("email is : nabu13@gmail.com & password is : secret");
document.getElementById("Submit-login").addEventListener('click', function() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailVal = email.value;
    const passwordVal = password.value;

    if (emailVal == "nabu13@gmail.com" && passwordVal == "secret") {
        console.log("you are verified as user");
        window.location.href = "banking.html";
    } else console.log("You are not verified");
});