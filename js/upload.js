const onSubmit = e => {
    e.preventDefault();
    let validForm = true;
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");
    const dniInput = document.getElementById("dni");
    const cuilInput = document.getElementById("cuil");
    const numDocInput = document.getElementById("numDoc");
    const adressInput = document.getElementById("adress");

    const nameError = document.getElementById("nameError");
    const lastNameError = document.getElementById("lastNameError");
    const docError = document.getElementById("docError");
    const numDocError = document.getElementById("numDocError");
    const adressError = document.getElementById("adressError");


    // Nombre *
    if (validateStringsName(nameInput.value)) {
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
        nameError.innerText = "Debe colocar caracteres alfabéticos, sin espacios y de la segunda letra en adelante debe ser minúscula."
        nameError.style.display = "block"
        validForm = false
    }


    // Apellido *
    if (validateStringsLastName(lastNameInput.value)) {
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
        lastNameError.innerText = "Debe colocar caracteres alfabéticos y sin espacios."
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


    // Número de documento
    if (dniInput.checked) {
        if (!/^(\d{1,3}(?:\.\d{3}){0,2}|\d{4,8})$/.test(numDocInput.value)) {
            numDocInput.ariaInvalid = true
            numDocError.innerText = "Formato de DNI inválido"
            numDocError.style.display = "block"
            validForm = false
        }
    } else if (cuilInput.checked) {
        if (!/^\d{2}-\d{7,9}-\d{1}$/.test(numDocInput.value) && !/^\d{11}$/.test(numDocInput.value)) {
            numDocInput.ariaInvalid = true
            numDocError.innerText = "Formato de CUIL inválido"
            numDocError.style.display = "block"
            validForm = false
        }
    }
        

    // Dirección
    if (validateDirec(adressInput.value)) {
        const validStg = validateStgLength(adressInput.value, 10, 200);
        if (validStg === true) {
          adressInput.ariaInvalid = false
          adressError.innerText = "";
          adressError.style.display = "none";
        } else {
            adressInput.ariaInvalid = true
            adressError.innerText = validStg
            adressError.style.display = "block"
            validForm = false
        }
      } else {
        adressInput.ariaInvalid = true
        adressError.innerText = "Seleccione una dirección válida."
        adressError.style.display = "block"
        validForm = false
      }






    if (validForm) {
        const newPerson = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            dni: dniInput.checked,
            cuil: cuilInput.checked,
            numDoc: numDocInput.value,
            adress: adressInput.value
        };
        const stgPerson = JSON.stringify(newPerson);
        localStorage.setItem("person", stgPerson)
        alert("Datos envidados correctamente")
    } 
    else alert("Debe completar correctamente sus datos")
}



