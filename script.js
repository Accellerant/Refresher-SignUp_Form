const mainForm = document.querySelector("#userForm");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener('click', () => {
    mainForm.submit();
})

password.addEventListener('blur',() => {
    console.log(password.value);
})

confirmPassword.addEventListener('blur', () => {
    console.log(confirmPassword.value);
})