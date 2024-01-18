const onSubmit = e => {
    e.preventDefault();
    let validForm = true;
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");
    const dniInput = document.getElementById("dni");
    const cuilInput = document.getElementById("cuil");
    // const numDocInput = document.getElementById("numDoc");
    // const adressInput = document.getElementById("adress");

    const nameError = document.getElementById("nameError");
    const lastNameError = document.getElementById("lastNameError");
    const docError = document.getElementById("docError");
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

    // Seleccionar Documento 
    if ( dniInput.checked || cuilInput.checked ) {
        docError.innerText = ""
        docError.style.display = "none"
    } else {
        docError.innerText = "Debe seleccionar un tipo de documento."
        docError.style.display = "block"
        validForm = false
    }




    if (validForm) {
        const newPerson = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            dni: dniInput.checked,
            cuil: cuilInput.checked,
            // numDoc: parseFloat(numDocInput.value),
            // adress: adressInput.value
        };
        const stgPerson = JSON.stringify(newPerson);
        localStorage.setItem("person", stgPerson)
        alert("Datos envidados correctamente")
    } 
    else alert("Debe completar correctamente sus datos")
}

