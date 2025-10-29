const email = document.querySelector('.email-box');
const button = document.querySelector('.button');
const error = document.querySelector('.msg-error');

let valorEmail;
let validarEmail;
let verificarEmail;

function notify(){
    valorEmail = email.value;
    validarEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    verificarEmail = validarEmail.test(valorEmail);

    if(verificarEmail){
        error.style.display = "none";
        email.classList.remove('error-email-box');
        window.alert("Notification sent")
        email.value = '';
        email.style.border = ".1rem solid var(--Blue-200)";
    }else{
        error.style.display = "block";
        email.classList.add('error-email-box');
        email.placeholder = "example@email/com";
        email.style.border = ".1rem solid var(--Red-400)";
    }
}