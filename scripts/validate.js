const formProfile = document.querySelector('#popup-editor .popup__form');
const inputName = formProfile.querySelector('#input-name');
const inputAboutMe = formProfile.querySelector('#input-about-me');
const buttonSave = document.querySelector('#button-save');
const nameError = formProfile.querySelector('#name-error');
const aboutMeError = formProfile.querySelector('#about-me-error');

const formAddPlace = document.querySelector('#popup-add-images .popup__form');
const inputTitle = formAddPlace.querySelector('#input-title');
const inputImageUrl = formAddPlace.querySelector('#input-image-url');
const buttonSubmit = document.querySelector('#submit-button');
const titleError = formAddPlace.querySelector('#title-error');
const imageUrlError = formAddPlace.querySelector('#image-url-error');

const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

function showInputError(inputElement, errorElement, errorMessage) {
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
}

function hideInputError(errorElement) {
    errorElement.textContent = ''; 
    errorElement.classList.remove('popup__error_visible');
}

function checkInputValidity(inputElement, errorElement) {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, errorElement, inputElement.validationMessage); // Error por defecto del navegador
    } else {
        hideInputError(errorElement);
    }
}

function checkUrlValidity(inputElement, errorElement) {
    if (!urlPattern.test(inputElement.value)) {
        showInputError(inputElement, errorElement, "Por favor ingresa una URL válida");
    } else {
        hideInputError(errorElement);
    }
}

function hasInvalidInputProfile() {
    return !(inputName.validity.valid && inputAboutMe.validity.valid);
}

function hasInvalidInputAddPlace() {
    return !(inputTitle.validity.valid && urlPattern.test(inputImageUrl.value));
}

// Función para activar o desactivar el botón "Guardar" o "Enviar"
function toggleButtonState() {
    // Para "Editar perfil"
    if (hasInvalidInputProfile()) {
        buttonSave.style.pointerEvents = 'none';  // Deshabilita el clic en la imagen
        buttonSave.style.opacity = '0.5';  // Puedes agregar un cambio de opacidad para que sea visualmente diferente
    } else {
        buttonSave.style.pointerEvents = 'auto';  // Habilita el clic en la imagen
        buttonSave.style.opacity = '1';  // Restablece la opacidad
    }

    // Para "Nuevo lugar"
    if (hasInvalidInputAddPlace()) {
        buttonSubmit.style.pointerEvents = 'none';  // Deshabilita el clic en la imagen
        buttonSubmit.style.opacity = '0.5';  // Puedes agregar un cambio de opacidad para que sea visualmente diferente
    } else {
        buttonSubmit.style.pointerEvents = 'auto';  // Habilita el clic en la imagen
        buttonSubmit.style.opacity = '1';  // Restablece la opacidad
    }
}

// Función para manejar el evento de input en cada campo
function setEventListeners() {
    // "Editar perfil"
    inputName.addEventListener('input', function() {
        checkInputValidity(inputName, nameError);  // Verifica el campo de nombre
        toggleButtonState();  // Actualiza el estado del botón
    });

    inputAboutMe.addEventListener('input', function() {
        checkInputValidity(inputAboutMe, aboutMeError);  // Verifica el campo
        toggleButtonState();  // Actualiza el estado del boton
    });

    // "Nuevo lugar"
    inputTitle.addEventListener('input', function() {
        checkInputValidity(inputTitle, titleError);  // Verifica el campo
        toggleButtonState();  // Actualiza el estado del boton
    });

    inputImageUrl.addEventListener('input', function() {
        checkUrlValidity(inputImageUrl, imageUrlError);  // Verifica la URL
        toggleButtonState();  // Actualiza el estado del boton
    });
}

// Prevenir el envio del formulario si el boton esta deshabilitado
buttonSave.addEventListener('click', function(evt) {
    if (buttonSave.style.pointerEvents === 'none') {
        evt.preventDefault();  // No permite que el formulario se envíe si el botón está deshabilitado
    }
});

buttonSubmit.addEventListener('click', function(evt) {
    if (buttonSubmit.style.pointerEvents === 'none') {
        evt.preventDefault();  // No permite que el formulario se envie si el boton esta deshabilitado
    }
});

// Configura el formulario para manejar el evento de envío
formProfile.addEventListener('submit', function(evt) {
    evt.preventDefault();  // Evita que el formulario se envie si no es valido
    if (buttonSave.style.pointerEvents === 'auto') {
        alert('Formulario enviado!');
    }
});

formAddPlace.addEventListener('submit', function(evt) {
    evt.preventDefault();  // Evita que el formulario se envie si no es valido
    if (buttonSubmit.style.pointerEvents === 'auto') {
        alert('Nuevo lugar agregado!');
    }
});

// Llamada a la función que inicializa los eventos de validación
setEventListeners();

// Selección de elementos
const popupEditor = document.querySelector('#popup-editor');
const popupAddImages = document.querySelector('#popup-add-images');

function closeDialog(dialog) {
    dialog.close();
}

// Cerrar con Esc
document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        if (popupEditor.open) {
            closeDialog(popupEditor);
        }
        if (popupAddImages.open) {
            closeDialog(popupAddImages);
        }
    }
});

// Cerrar haciendo clic fuera del dialog
document.addEventListener('click', function(evt) {
    if (evt.target === popupEditor) {
        closeDialog(popupEditor);
    }
    if (evt.target === popupAddImages) {
        closeDialog(popupAddImages);
    }
});

// Función para abrir un diálogo
function openDialog(dialog) {
    dialog.showModal();
}

document.querySelector('#open-editor-button').addEventListener('click', function() {
    openDialog(popupEditor);
});

document.querySelector('#open-add-images-button').addEventListener('click', function() {
    openDialog(popupAddImages);
});