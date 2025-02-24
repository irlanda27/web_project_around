import PopUp from "./Popup.js";
export default class PopupWithForm extends PopUp {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.submitForm = submitForm;
    this._submitButton = this.popupSelector.querySelector(".popup__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  handleSubmit() {
    this.submitForm(this._getInputValues());
  }

  _getInputValues() {
    const data = {};
    const inputList = Array.from(this.popupSelector.querySelectorAll("input"));
    inputList.forEach((item) => {
      data[item.name] = item.value;
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupSelector
      .querySelector("form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitButton.textContent = "Guardando...";

        this.submitForm(this._getInputValues()).finally(() => {
          this._submitButton.textContent = this._submitButtonText;
        });
      });
  }
}
