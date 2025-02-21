import PopUp from "./Popup.js";
export default class PopupWithConfirmation extends PopUp {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.submitForm = submitForm;
  }

  open() {
    super.open();
  }
}
