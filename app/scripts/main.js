document.querySelector(".sign-up-container .submit-btn").addEventListener("click" , ()=>{
    const inp= document.querySelectorAll(".sign-up-container input");
    let errors= document.querySelectorAll(".sign-up-container p");
    const error_text= ["First Name cannot be empty" , "Last Name cannot be empty" , "Email cannot be empty" , "Password cannot be empty"];
    const name_field_err= ["First Name must've atleast 2 characters" , "Last Name must've atleast 2 characters"];

    //IF FIELDS ARE EMPTY
    for(let i=0 ; i< inp.length ; i++){
        if(inp[i].value == ""){
            inp[i].classList.add("error");
            errors[i].innerHTML  = error_text[i];
        }
        else{
            inp[i].classList.remove("error");
            errors[i].innerHTML  = "";
        }
    }

    //EMAIL VALIDATION
    if(inp[2].validity.patternMismatch){
        inp[2].placeholder.color= "red";
        inp[2].classList.add("error");
        errors[2].innerHTML= "Looks like this is not an email";
    }

    if(inp[2].value == ""){
        inp[2].placeholder = "email@example/com";
        inp[2].classList.add("email-error");
    }

    //IF FIELDS HAVE SHORT VALUES THAN EXPECTED
    for(let i=0 ; i<2 ; i++){
        if(inp[i].value.length < 2 && inp[i].value.length > 0){
            inp[i].classList.add("error");
            errors[i].innerHTML = name_field_err[i];
        }
    }
 
    //PASSWORD VALIDATION
    if(inp[3].value.length < 8 && inp[3].value.length > 0){
        inp[3].classList.add("error");
        errors[3].innerHTML= "Password must've atleast 8 characters";
    }
});