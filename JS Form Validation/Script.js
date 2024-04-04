document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const uname = document.getElementById('uname');
    const email = document.getElementById('email');
    const Password = document.getElementById('Password');
    const cpassword = document.getElementById('cpassword');
    const togglePassword = document.querySelector('.toggle-password');

    const setValidationMessage = (element, message, isSuccess) => {
        const inputcontrol = element.parentElement;
        const errorDisplay = inputcontrol.querySelector('.error');
        errorDisplay.innerText = message;
        inputcontrol.classList.toggle('success', isSuccess);
        inputcontrol.classList.toggle('error', !isSuccess);
    };

    const isValidEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const usernameValue = uname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = Password.value.trim();
        const cpasswordValue = cpassword.value.trim();

        setValidationMessage(uname, usernameValue ? '' : 'Username is Required', !!usernameValue);
        setValidationMessage(email, emailValue ? (isValidEmail(emailValue) ? '' : 'Enter a Correct Email') : 'Email is Required', emailValue && isValidEmail(emailValue));
        setValidationMessage(Password, passwordValue ? (passwordValue.length >= 8 ? '' : 'Password value must be at least 8 characters') : 'Password is Required', !!passwordValue && passwordValue.length >= 8);
        setValidationMessage(cpassword, cpasswordValue ? (passwordValue === cpasswordValue ? '' : 'Passwords Do Not Match') : 'Please Confirm your Password', !!cpasswordValue && passwordValue === cpasswordValue);

        return usernameValue && emailValue && isValidEmail(emailValue) && passwordValue && passwordValue.length >= 8 && cpasswordValue && passwordValue === cpasswordValue;
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (validateInputs()) {
            alert('Form submitted successfully!');
        }
        form.reset()
    });

   
});
function ShowPassword() {
    var Password = document.getElementById("Password");
    if (Password.type === "password") {
        Password.type = "text";
    } else {
        Password.type = "password";
    }
}