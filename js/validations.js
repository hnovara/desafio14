// Nombre
// Apellido 

const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z Ññ]+$")
    return regex.test(string)
}

const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`
    } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`
    } else {
        return true
    }
}

// Documento

const validatePostiveNumber = num => num >= 0

const validateInt = num => Number.isInteger(num)

