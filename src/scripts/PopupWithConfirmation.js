import PopUp from "./Popup.js";
export default class PopupWithConfirmation extends PopUp {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.submitForm = submitForm;
    this.deleteConfirmationbutton = this.popupSelector.querySelector(
      "#button-deleteConfirmation"
    );
    console.log(this.deleteConfirmationbutton);
  }

  setEventListenersDeleteConfirmation() {
    super.setEventListeners();
    this.deleteConfirmationbutton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.submitForm(this.cardId); // Llama la función que eliminará la tarjeta
      this.close(); // Cierra el popup después de confirmar
    });
  }

  open(cardId) {
    this.cardId = cardId;
    super.open();
  }
}
