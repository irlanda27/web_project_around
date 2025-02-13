// * Aquí se importaron todas las clases que creamos en las carpetas
import Section from "./Section.js"; //importar la clase Section
import Card from "./Card.js"; //importar la clase Card
import FormValidator from "./FormValidator.js"; //importar la clase FormValidator
import UserInfo from "./UserInfo.js"; //importar la clase UserInfo
import PopupWithForm from "./PopupWithForm.js"; //importar la clase PopupWithForm
import PopupWithImage from "./PopupWithImage.js"; //importar la clase PopupWithImage

//*...............................................................................................................
// * Variables de elementos de los popups y botones
const popup = document.querySelector("#popup-editor");
const pencil = document.querySelector("#pencil-editor");
const closeButton = document.querySelector("#close-button");
const buttonSubmitProfile = document.querySelector("#button-submitProfile");
const inputName = document.querySelector("#input-name");
const inputAboutMe = document.querySelector("#input-about-me");
const profileName = document.querySelector("#profile-name");
const profileInfo = document.querySelector("#profile-info");
const elementContainer = document.querySelector(".element");
const addButton = document.querySelector("#add-button");
const closeCreateCard = document.querySelector("#close-icon");
const buttonSubmitNewCard = document.querySelector("#button-submitNewCard");
const inputTitle = document.querySelector("#input-title");
const inputUrl = document.querySelector("#input-image-url");
const popupWindow = document.querySelector(".popup__window");
const popupWindowImage = document.querySelector(".popup__window-image");
const popupWindowCloseButton = document.querySelector(".popup__close-window");
const formCreateCard = document.querySelector("#form-card");
const formProfileEdit = document.querySelector("#form-profile");

//*...............................................................................................................
// * Aquí se crean las instancias de las clases
const userInfo = new UserInfo({ name: profileName, aboutMe: profileInfo });

const popupWithImage = new PopupWithImage(".popup__window");

//*...............................................................................................................
//* Aquí se ejecutan los métodos de las instancias
closeCreateCard.addEventListener("click", function (evt) {
  popupCreateCard.close();
});

//funcion para al hacer click en el lapiz aparezca popup con el formulario de editar perfil
pencil.addEventListener("click", function (evt) {
  popup.showModal();
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileInfo.textContent;
});

//funcion para cerrar el popup de editar perfil
closeButton.addEventListener("click", function (evt) {
  popup.close();
});

//funcion para guardar los datos del formulario de editar perfil
buttonSubmitProfile.addEventListener("click", function (evt) {
  console.log("click");
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputAboutMe.value;
  popup.close();
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
console.log(initialCards);
new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  ".element"
).render();

function createCard(card) {
  const newCard = new Card(card.name, card.link, "#element-template", () =>
    popupWithImage.open(card.link, card.name)
  ).getView();
  return newCard;
}

//*...............................................................................................................
//* Aquí se crean las instancias de las clases PopupWithForm para crear tarjeta y editar perfil
const popupCreateCard = new PopupWithForm("#popup-add-images", (values) => {
  const newCard = createCard(values);
  elementContainer.prepend(newCard);
  popupCreateCard.close();
});
popupCreateCard.setEventListeners();
addButton.addEventListener("click", function (evt) {
  popupCreateCard.open();
});

const popupProfileEdit = new PopupWithForm("#popup-editor");
popupProfileEdit.setEventListeners();

buttonSubmitNewCard.addEventListener("click", function (evt) {
  evt.preventDefault();
  createCard({
    name: inputTitle.value, // valor del input y que se asigne a name
    link: inputUrl.value,
  });
  popupCreateCard.close(); // funcion para cerrar el popup
});

//funcion para cerrar el popup de la imagen dando click afuera
popup.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    popup.close();
  }
});

popupWindow.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup__window")) {
    popupWindow.close();
  }
});

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
