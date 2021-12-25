const input = document.querySelector('.input');
const para = document.querySelector('.para');

document.addEventListener('keyup', () =>{
    let emailValue = input.value;

    if(emailValue != null && !emailValue.includes("@") || !emailValue.includes(".com")){
        input.classList.add('active-input');
        para.classList.add('active-p');

    }else{
        input.classList.remove('active-input');
        para.classList.remove('active-p');
    }
});