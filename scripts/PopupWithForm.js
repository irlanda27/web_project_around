import PopUp from "./Popup.js";
export default class PopupWithForm extends PopUp {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.submitForm = submitForm;
    console.log(this.submitForm);
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
        console.log("submit");
        this.submitForm(this._getInputValues());
      });
  }
}
