export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this.popupSelector.showModal();
  }

  close() {
    this.popupSelector.close();
  }

  // Función para cerrar el popup con la tecla ESC
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  // Función para cerrar el popup con botón de cerrar o haciendo clic fuera
  setEventListeners() {
    this.popupSelector.addEventListener("click", (evt) => {
      console.log(evt.target.classList);
      if (
        evt.target.classList.contains("popup__close-icon") ||
        evt.target === evt.currentTarget
      ) {
        this.close();
      }
    });
  }
}
