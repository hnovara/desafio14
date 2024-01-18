const onSubmit = e => {
    e.preventDefault();
    let validForm = true;
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");
    // const docInput = document.getElementById("doc");
    // const numDocInput = document.getElementById("numDoc");
    // const adressInput = document.getElementById("adress");

    const nameError = document.getElementById("nameError");
    const lastNameError = document.getElementById("lastNameError");
    // const docError = document.getElementById("docError");
    // const numDocError = document.getElementById("numDocError");
    // const adressError = document.getElementById("adressError");


    // Nombre *
    if (validateStrings(nameInput.value)) {
        const validStg = validateStgLength(nameInput.value, 3, 10);
        if (validStg === true) {
            nameInput.ariaInvalid = false
            nameError.innerText = ""
            nameError.style.display = "none"
        } else {
            nameInput.ariaInvalid = true
            nameError.innerText = validStg
            nameError.style.display = "block"
            validForm = false
        }
    } else {
        nameInput.ariaInvalid = true
        nameError.innerText = "Debe colocar caracteres alfabéticos."
        nameError.style.display = "block"
        validForm = false
    }

    // Apellido *
    if (validateStrings(lastNameInput.value)) {
        const validStg = validateStgLength(lastNameInput.value, 2, 20)
        if (validStg === true) {
            lastNameInput.ariaInvalid = false
            lastNameError.innerText = ""
            lastNameError.style.display = "none"
        } else {
            lastNameInput.ariaInvalid = true
            lastNameError.innerText = validStg
            lastNameError.style.display = "block"
            validForm = false
        }
    } else {
        lastNameInput.ariaInvalid = true
        lastNameError.innerText = "Debe colocar caracteres alfabéticos."
        lastNameError.style.display = "block"
        validForm = false
    }


    // Stock *
    // if (!validatePostiveNumber(stockInput.value)) {
    //     stockInput.ariaInvalid = true
    //     stockError.innerText = "Debe ser un número positivo"
    //     stockError.style.display = "block"
    //     validForm = false
    // } else if (!validateInt(parseInt(stockInput.value))) {
    //     stockInput.ariaInvalid = true
    //     stockError.innerText = "Debe ser un número entero"
    //     stockError.style.display = "block"
    //     validForm = false
    // } else {
    //     stockInput.ariaInvalid = false
    //     stockError.innerText = ""
    //     stockError.style.display = "none"
    // }

    
    if (validForm) {
        const newPerson = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            // doc: docInput.checked,
            // numDoc: parseFloat(numDocInput.value),
            // adress: adressInput.value
        };
        const stgPerson = JSON.stringify(newPerson);
        localStorage.setItem("person", stgPerson)
        alert("Datos envidados correctamente")
    } 
    else alert("Debe completar correctamente sus datos")
}

