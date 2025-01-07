function showInputError(formElement, inputElement, settings){
    const errorMessage = inputElement.validationMessage
    const errorElement = formElement.querySelector(
    )
}





function checkInputValidity(formElement, inputElement, settings){
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, settings)
    } else {
        hideInputError(formElement, inputElement, settings)
    }
}




function hasInvalidInput(inputList){
    return inputList.some((item)=>{
        return inputElement.validity.valid
    })
}




function ToggleButtonState(inputList, buttonElement,settings){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(settings.inactiveButtonClass)
        buttonElement.disabled=true
    }else{
        buttonElement.classList.remove(settings.inactiveButtonClass)
        buttonElement.disabled=false
    }
    }



function setEventListeners(formElement,settings){
    const inputList= Array.from formElement.querySelectorAll(settings,inputSelector)
    const buttonElement = formElement.querySelector(settings.submitButtonSelector)

    inputList.forEach((inputElement)=>{
        inputElement.addEventListener('input', ()=>{
            checkInputValidity(formElement, inputElement, settings)
            ToggleButtonState(inputList, buttonElement, settings)
        })
    })
}



function enableValidation(settings){
    const forms= Array.from(document.querySelectorAll(settings.formSelector))

    forms.forEach((formElement)=>{
formElement.addEventListener('submit',(evt)=>{    
evt.preventDefault() 
     })
     setEventListeners(formElement, settings) 
    })
}



enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });

