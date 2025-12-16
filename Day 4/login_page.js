const loginForm = document.getElementById("loginForm")
loginForm.addEventListener("submit",(e) =>{
    e.preventDefault()

    let email = document.getElementById("loginEmail")
    let pass = document.getElementById("loginPass")
        
    let emailError = document.getElementById("loginEmailErr")
    let passError = document.getElementById("loginPassErr")

    let loginDone = true

    if(email.value.trim() === " "|| !email.value.includes("@"))
    {
        email.classList.add("is-invalid")
        emailError.innerText = "Enter valid email address."
        loginDone = false
    }

    else
    {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
        emailError.innerText = ""
    }

    if(pass.value.length < 6)
    {
        pass.classList.add("is-invalid")
        passError.innerText = "Password must be at least 6 characters long."
        loginDone = false
    }
    else
    {
        pass.classList.remove("is-invalid")
        pass.classList.add("is-valid")
        passError.innerText = ""
    }

    if(loginDone){
        alert("Login Successful!!")
    }

})
