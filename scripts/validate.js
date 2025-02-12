function hasInvalidInput(inputs) {
  return inputs.some(function (input) {
    //esta expresion te devuelve un true o false si al menos 1 elemento dentro de la lista coincide con la validacion
    return !input.validity.valid;
  });
}

//esta funcion es para deshabilitar o habilitar dependiendo si existe un error en los inputs
function toggleButtonState(settings, inputs, buttonElement) {
  if (hasInvalidInput(inputs)) {
    //esta condicional es para validar mas organizado si el input es invalido
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true; //aqui se desactiva el boton
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//esta funcion es para esconder el mensaje de error
function hideInputError(settings, iterarFormElement, iterarInput) {
  const errorElement = iterarFormElement.querySelector(
    `#${iterarInput.id}-error`
  );
  errorElement.textContent = ""; //aqui se elimina el mensaje de error si todo esta bien
}

//esta funcion es para mostrar el mensaje de error y obtener del html el error element
function showInputError(settings, iterarFormElement, iterarInput) {
  const errorMessage = iterarInput.validationMessage;
  const errorElement = iterarFormElement.querySelector(
    `#${iterarInput.id}-error`
  ); //los back sticks son una comilla especial para poder concatenar una expresion de js con texto
  errorElement.textContent = errorMessage;
}

//esta funcion es para verificar si el input es valido y manda mensaje de error
function checkInputValidity(settings, iterarFormElement, iterarInput) {
  if (!iterarInput.validity.valid) {
    showInputError(settings, iterarFormElement, iterarInput);
  } else {
    hideInputError(settings, iterarFormElement, iterarInput);
  }
}

function setEventListeners(settings, iterarFormElement) {
  const inputs = Array.from(
    iterarFormElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = iterarFormElement.querySelector(
    settings.submitButtonSelector
  );
  toggleButtonState(settings, inputs, buttonElement); //el toggle significa que cambia de prendido a apagado
  inputs.forEach(function (iterarInput) {
    //aqui estamos iterando en 1 input solamente
    iterarInput.addEventListener("input", function (evt) {
      //la accion de input es que cada vez que yo escriba algo dentro se llama al evento
      checkInputValidity(settings, iterarFormElement, iterarInput); //aqui estamos llamando a la funcion que aun no esta creada
      toggleButtonState(settings, inputs, buttonElement);
    });
  });
}

//esta funcion es para llamar al formulario
function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector)); //aqui se trajo todos los formularios del objeto de abajo
  forms.forEach(function (iterarFormElement) {
    //aqui empezamos a iterar en los elementos con for each
    iterarFormElement.addEventListener("submit", function (evt) {
      //aqui solo se esta dando submit a 1 solo formulario
      evt.preventDefault(); //esto evita que el formulario se recarge cuando hagas submit
    });
    console.log("dentro de enablevalidation");
    setEventListeners(settings, iterarFormElement); //aqui pasamos los parametros
  });
}

//aqui estamos invocando la funcion y es una funcion de tipo objeto
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
