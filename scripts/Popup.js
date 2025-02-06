class Popup {
  constructor(PopupSelector) {
    this.PopupSelector = PopupSelector;
  }

  //funcion para abrir el popup
  open() {
    this.PopupSelector.addEventListener("click", function (evt) {});
  }

  close() {
    this.PopupSelector.addEventListener("click", function (evt) {
      if (
        evt.target.classList.contains("popup__close-button") ||
        evt.target === evt.currentTarget
      ) {
        this.PopupSelector.close();
      }
    });
  }

  //funcion para cerrar el popup con la tecla esc
  _handleEscClose() {
    this.PopupSelector.addEventListener("click", function (evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
this.PopupSelector.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("popup__close-button") ||
    evt.target === evt.currentTarget
  ) {
    this.close();
  }
}
