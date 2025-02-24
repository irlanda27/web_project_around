// * Aquí se importaron todas las clases que creamos en las carpetas
import Section from "./Section.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import api from "./Api.js";
import {
  popup,
  pencil,
  closeButton,
  buttonSubmitProfile,
  inputName,
  inputAboutMe,
  profileName,
  profileInfo,
  elementContainer,
  addButton,
  closeCreateCard,
  buttonSubmitNewCard,
  inputTitle,
  inputUrl,
  popupWindow,
  popupWindowImage,
  popupWindowCloseButton,
  formCreateCard,
  formProfileEdit,
  closeButton2,
  editAvatarPencil,
  popupEditAvatar,
  closeAvatarButton,
  avatarElement,
} from "./utils.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

//*...............................................................................................................
// * Aquí se cargó la información del usuario desde la API

const userInfo = new UserInfo({
  name: profileName,
  aboutMe: profileInfo,
  avatar: avatarElement,
});

api.getUser().then((response) => {
  userInfo.setUserInfo(response);
});

//*...............................................................................................................
// * Aquí se cargaron las tarjetas desde la API
api.getCards().then((response) => {
  new Section(
    {
      items: response,
      renderer: createCard,
    },
    ".element"
  ).render();
});

//*...............................................................................................................
const popupWithImage = new PopupWithImage(".popup__window");
popupWithImage.setEventListeners();

//*...............................................................................................................
//* Aquí se ejecutan los métodos de las instancias
closeCreateCard.addEventListener("click", function (evt) {
  popupCreateCard.close();
});

//*...............................................................................................................
//* Aquí se crean las funciones para los botones de editar perfil y cerrar el popup
pencil.addEventListener("click", function (evt) {
  popup.showModal();
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileInfo.textContent;
});

//funcion para cerrar el popup de editar perfil
closeButton.addEventListener("click", function (evt) {
  popup.close();
});

closeButton2.addEventListener("click", function (evt) {
  popupWithImage.close();
});

//*...............................................................................................................
//*Array de las imagenes de las tarjetas
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//*...............................................................................................................
//*Aquí se crea la instancia de la clase Section

function createCard(card) {
  console.log(card);
  const newCard = new Card(
    card.name,
    card.link,
    "#element-template",
    () => popupWithImage.open(card.link, card.name),
    handleLikeButtonClick,
    card._id,
    (cardId) => {
      popupWithConfirmation.open(cardId);
    }
  ).getView();
  return newCard;
}

//*...............................................................................................................
//* Aquí se crea la instancia de la clase PopupWithForm para crear tarjetas
const popupCreateCard = new PopupWithForm("#popup-add-images", (values) => {
  return api
    .addCard(values)
    .then((response) => {
      const newCard = createCard(response);
      elementContainer.prepend(newCard);
      popupCreateCard.close();
    })
    .catch((err) => {
      console.error(err);
    });
});

popupCreateCard.setEventListeners();
addButton.addEventListener("click", function (evt) {
  popupCreateCard.open();
});
//*...............................................................................................................
//* Funcion para el like y el botón de delete like
function handleLikeButtonClick(cardId) {
  if (this._likeButton.src.includes("/images/Union.png")) {
    return api.likeButton(cardId);
  } else {
    return api.deleteLike(cardId);
  }
}

//*...............................................................................................................
//* Funcion para crear el popup de confirmacion para eliminar tarjeta
const popupWithConfirmation = new PopupWithConfirmation(
  "#popup-delete",
  handleDeleteCard
);
popupWithConfirmation.setEventListenersDeleteConfirmation();

//*...............................................................................................................
//* Funcion para confirmar que se elimine la tarjeta
function handleDeleteCard(cardId) {
  console.log(cardId);
  api.deleteCard(cardId);
  console.log("tarjeta eliminada");
}

//*................................................................................................................
//* Evento para que el popup de editar Avatar se abra y se cierre

const editAvatarPopup = new PopupWithForm("#popup-edit-avatar", (values) => {
  return api
    .changeAvatar(values.avatar)
    .then((response) => {
      userInfo.setUserInfo(response);
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.error(err);
    });
});

editAvatarPopup.setEventListeners();
editAvatarPencil.addEventListener("click", () => {
  editAvatarPopup.open();
});

//*...............................................................................................................
//* Aquí se llamó a la clase api para guardar la información del usuario
const popupProfileEdit = new PopupWithForm("#popup-editor", (values) => {
  console.log(values);
  return api.editUser(values).then((response) => {
    userInfo.setUserInfo(response);
    popupProfileEdit.close();
  });
});
popupProfileEdit.setEventListeners();

const formValidator = new FormValidator(
  {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
  formCreateCard
);

formValidator.enableValidation();

const formValidatorProfile = new FormValidator(
  {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
  formProfileEdit
);

formValidatorProfile.enableValidation();
