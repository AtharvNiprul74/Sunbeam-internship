const registerPage = document.getElementById("registerForm")
registerPage.addEventListener("submit",(e) => {
    e.preventDefault()

    let name = document.getElementById("regName")
    let email = document.getElementById("regEmail")
    let pass = document.getElementById("regPass")
    let phone = document.getElementById("regPhone")

    let registerDone = true

    if(name.value.trim() === "")
    {
        name.classList.add("is-invalid")
        registerDone = false
    }
    
    else
    {
        name.classList.remove("is-invalid")
        name.classList.add("is-valid")
    }

    if(email.value.trim() === " "|| !email.value.includes("@"))
    {
        email.classList.add("is-invalid")
        registerDone = false
    }
    
    else
    {
        email.classList.remove("is-invalid")
        registerDone = false
    }
 
    if(pass.value.length < 6)
    {
        pass.classList.add("is-invalid")
        registerDone = false
    }

    else
    {
        pass.classList.remove("is-invalid")
        pass.classList.add("is-valid")
    }

    if(!/^d{10}$/.test(phone.value))
    {
        phone.classList.add("is-invalid")
        registerDone = false
    }

    else
    {
        phone.classList.remove("is-invalid")
        phone.classList.add("is-valid")
    }

    if(registerDone)
    {
        alert("Registration Successful !!")
    }
})