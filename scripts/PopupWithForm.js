class PopupWithForm extends PopUp {
constructor(popupSelector, submitForm){


    _getInputValues(){
        //funcion para obtener los valores de los inputs
    }
    
    setEventListeners(){
submitForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    }
}
}