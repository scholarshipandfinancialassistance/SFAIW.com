var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify )



function validated(){
    if (email.value.lenght < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.lenght < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

}
    function email_Verify(){
        if (emai.value.lenght >= 8){
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
} 
function email_Verify(){
    if (password.value.lenght >= 5){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}