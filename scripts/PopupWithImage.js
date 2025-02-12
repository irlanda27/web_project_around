import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(image, description) {
    super.open();
    const popupImage = this._popup.querySelector(".popup__image");
    const popupDescription = this._popup.querySelector(".popup__description");

    popupImage.src = image;
    popupDescription.textContent = description;
  }
}
