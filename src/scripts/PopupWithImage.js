import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(image, description) {
    super.open();
    const popupImage = this.popupSelector.querySelector(".popup__window-image");
    const popupDescription = this.popupSelector.querySelector(
      ".popup__window-text"
    );

    popupImage.src = image;
    popupDescription.textContent = description;
  }
}
