const inputBox = document.getElementById("inputData")
const btn = document.getElementById("buttonSubmit")
const listTask = document.getElementById("list")
const error = document.getElementById("blankField")

inputBox.addEventListener("input", e => {
    if(inputBox.value !==  " ")
    {
        inputBox.classList.remove("is-invalid")
        error.innerText = ""
    }
})

inputBox.addEventListener("keydown",e => {
    if(e.key === "Enter")
        btn.click()
})

btn.addEventListener("click", e => {
    let dataEntered = inputBox.value;
    if(dataEntered === "")
    {
        inputBox.classList.add("is-invalid")
        error.innerText = "Enter text in area and then add "
        return
    }

    const listData = document.createElement("li")
    listData.className = "list-group-item d-flex justify-content-between align-items-center";
    const spanData = document.createElement("span")
    spanData.innerText = dataEntered

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-danger"
    deleteBtn.innerText = "Delete"

    deleteBtn.addEventListener("click", e => {
        listData.remove()
    })

    listData.appendChild(spanData)
    listData.appendChild(deleteBtn)
    listTask.appendChild(listData)
    inputBox.value = ""
    inputBox.focus() 
})