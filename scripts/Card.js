export default class Card {
  // handleCardClick es nuevo
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".element__card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._handleImageClick();
    this._handleLikeButton();
    this._handleDeleteButton();
  }

  _handleImageClick() {
    const popupWindow = document.querySelector(".popup__window");
    this._imageCard.addEventListener("click", (evt) => {
      this.handleCardClick(this._link, this._name);
    });
  }

  getView() {
    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector(".element__card-image");
    this._elementContent = this._element.querySelector(".element__place");
    this._likeButton = this._element.querySelector(".element__like-button");
    this._trashButton = this._element.querySelector(".element__trash");
    this._setEventListeners();
    return this._element;
  }

  _handleDeleteButton() {
    this._trashButton.addEventListener("click", (evt) => {
      const parentElement = evt.target.closest(".element__card");
      if (parentElement) {
        parentElement.remove();
      }
    });
  }

  _handleLikeButton() {
    this._likeButton.addEventListener("click", (evt) => {
      if (this._likeButton.src.includes("/images/Union.png")) {
        this._likeButton.src = "../images/Vector_corazon.svg";
      } else {
        this._likeButton.src = "../images/Union.png";
      }
    });
    this._imageCard.src = this._link;
    this._elementContent.textContent = this._name;
  }
}
