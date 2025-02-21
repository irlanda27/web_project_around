export default class Card {
  // handleCardClick es nuevo
  constructor(
    name,
    link,
    cardSelector,
    handleCardClick,
    handleLikeClick,
    id,
    openPopup
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleLikeClick = handleLikeClick;
    this._id = id;
    this._openPopup = openPopup;
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
    this._elementContent.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._setEventListeners();
    return this._element;
  }

  _handleDeleteButton() {
    this._trashButton.addEventListener("click", (evt) => {
      console.log(this._openPopup);
      const parentElement = evt.target.closest(".element__card");
      if (parentElement) {
        this._openPopup;
        /* parentElement.remove();*/
      }
    });
  }

  _handleLikeButton() {
    this._likeButton.addEventListener("click", (evt) => {
      this.handleLikeClick(this._id)
        .then((response) => {
          if (this._likeButton.src.includes("/images/Union.png")) {
            this._likeButton.src = "./images/Vector_corazon.svg";
          } else {
            this._likeButton.src = "./images/Union.png";
          }
        })
        .catch((response) => {
          console.log(response);
        });
    });
  }
}
