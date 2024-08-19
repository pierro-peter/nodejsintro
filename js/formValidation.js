const email = document.getElementById('email');


const formValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value ==''){
        email.style.border = '1px solid red'
        emailError.textContent = 'please enter an email address'
        emailError.style = 'color:red'
        error++
    }
    else if(email.value.match(emailRegex)){
        email.style.border = '1px solid red';
    emailError.textContent = 'please enter an email address'
    emailError.style ='color:red'
    error++
}
else{
    
}
    if(error > 0){
        event.preventDefault()
    }

}