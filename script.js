const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

password.addEventListener('keyup',() => {
    comparePasswords();
})

confirmPassword.addEventListener('keyup', () => {
    comparePasswords();
})


function comparePasswords() {
    const message = "Passwords Do Not Match";

    if(password.value !== "" && confirmPassword.value !== "") {

        if(password.value != confirmPassword.value) {
            confirmPassword.setCustomValidity(message);
            password.setCustomValidity(message);
        } else {
            password.setCustomValidity("");
            confirmPassword.setCustomValidity("");
        }
            
    }
}
