const registerPage = document.getElementById("registerForm")
registerPage.addEventListener("submit",(e) => {
    e.preventDefault()

    let name = document.getElementById("regName")
    let email = document.getElementById("regEmail")
    let pass = document.getElementById("regPass")
    let phone = document.getElementById("regPhone")

    let nameError = document.getElementById("nameErr")
    let emailError = document.getElementById("emailErr")
    let passError = document.getElementById("pwdErr")
    let phnoError = document.getElementById("phnoErr")

    let registerDone = true

    if(name.value.trim() === "")
    {
        name.classList.add("is-invalid")
        nameError.innerText = "Enter valid Name."
        registerDone = false
    }
    
    else
    {
        name.classList.remove("is-invalid")
        name.classList.add("is-valid")
        nameError.innerText = ""
    }

    if(email.value.trim() === " "|| !email.value.includes("@"))
    {
        email.classList.add("is-invalid")
        emailError.innerText = "Enter Valid Elements."
        registerDone = false
    }
    
    else
    {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
        registerDone = false
        emailError.innerText = ""
    }
 
    if(pass.value.length < 6)
    {
        pass.classList.add("is-invalid")
        passError.innerText = "Password length must be at least 6 characters."
        registerDone = false
    }

    else
    {
        pass.classList.remove("is-invalid")
        pass.classList.add("is-valid")
        passError.innerText = ""
    }

    if(!/^\d{10}$/.test(phone.value))
    {
        phone.classList.add("is-invalid")
        phnoError.innerText = "Enter valid 10 digit phone number."
        registerDone = false
    }

    else
    {
        phone.classList.remove("is-invalid")
        phone.classList.add("is-valid")
        phnoError.innerText = ""
    }

    if(registerDone)
    {
        alert("Registration Successful !!")
    }
})