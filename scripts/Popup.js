export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
  }

  //funcion para abrir el popup
  open() {
    this.popupSelector.showModal();
  }

  close() {
    this.popupSelector.close();
  }

  //funcion para cerrar el popup con la tecla esc
  _handleEscClose() {
    this.popupSelector.addEventListener("click", function (evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    this.popupSelector.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup__close-button") ||
        evt.target === evt.currentTarget
      ) {
        this.close();
      }
    });
  }
}
