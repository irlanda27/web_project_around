export default class FormValidator {
    
    constructor(settings, formSelector) {
        this._settings = settings;
        this._formSelector = formSelector;
    }

    _hasInvalidInput(/* this._inputs */) {
        return this._inputs.some(function (/* this._input */) {   //esta expresion te devuelve un true o false si al menos 1 elemento dentro de la lista coincide con la validacion
            return !input.validity.valid
        })
    }



    //esta funcion es para deshabilitar o habilitar dependiendo si existe un error en los inputs
    _toggleButtonState(/* this._settings, this._inputs, this._buttonElement */) {
        if (hasInvalidInput(this._inputs)) {   //esta condicional es para validar mas organizado si el input es invalido
            this._buttonElement.classList.add(this._settings.this._inactiveButtonClass)
            this._buttonElement.disabled = true   //aqui se desactiva el boton 
        } else {
            this._buttonElement.classList.remove(this._settings.this._inactiveButtonClass)
            this._buttonElement.disabled = false
        }
    }



    //esta funcion es para esconder el mensaje de error 
    _hideInputError(/* this._settings, this._iterarFormElement, this._iterarInput */) {
        this._errorElement = this._iterarFormElement.querySelector(`#${iterarInput.id}-error`)
        this._errorElement.textContent = ""       //aqui se elimina el mensaje de error si todo esta bien
    }



    //esta funcion es para mostrar el mensaje de error y obtener del html el error element
    _showInputError(/* this._settings, this._iterarFormElement, this._iterarInput */) {
        this._errorMessage = this._iterarInput.validationMessage
        this._errorElement = this._iterarFormElement.querySelector(`#${iterarInput.id}-error`)//los back sticks son una comilla especial para poder concatenar una expresion de js con texto
        errorElement.textContent = errorMessage
    }


    //esta funcion es para verificar si el input es valido y manda mensaje de error
    _checkInputValidity(/* this._settings, this._iterarFormElement, this._iterarInput */) {
        if (!iterarInput.validity.valid) {
            showInputError(this._settings, this._iterarFormElement, this._iterarInput)
        }
        else {
            hideInputError(this._settings, this._iterarFormElement, this._iterarInput)
        }
    }




    _setEventListeners(/* this._settings, this._iterarFormElement */iterarFormElement) {
        this._inputs = Array.from(iterarFormElement.querySelectorAll(settings.inputSelector))
        this._buttonElement = /* this._ */iterarFormElement.querySelector(settings.submitButtonSelector)
        toggleButtonState(/* settings, */ inputs, buttonElement)  //el toggle significa que cambia de prendido a apagado
        this._inputs.forEach(function (iterarInput) {  //aqui estamos iterando en 1 input solamente
            iterarInput.addEventListener('input', function (evt) {   //la accion de input es que cada vez que yo escriba algo dentro se llama al evento
                checkInputValidity(/* settings, */ iterarFormElement, iterarInput) //aqui estamos llamando a la funcion que aun no esta creada 
                toggleButtonState(/* settings, */ inputs, buttonElement)
            })
        })
    }


    //esta funcion es para llamar al formulario 
    enableValidation(/* this._settings */) {
        this._forms = Array.from(document.querySelectorAll(this._settings.this._formSelector)) //aqui se trajo todos los formularios del objeto de abajo
        this._forms.forEach(function (iterarFormElement) { //aqui empezamos a iterar en los elementos con for each
            iterarFormElement.addEventListener("submit", function (evt) {     //aqui solo se esta dando submit a 1 solo formulario
                evt.preventDefault()  //esto evita que el formulario se recarge cuando hagas submit
            })

            setEventListeners(/* this._settings,  */iterarFormElement)  //aqui pasamos los parametros
        })
    }

    
}

const instancia = new FormValidator(
    /* this.instancia.enableValidation */
)
