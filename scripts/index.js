const popup=document.querySelector('#popup-editor')
const pencil=document.querySelector('#pencil-editor')
const closeButton= document.querySelector('#close-button')
const buttonSubmit=document.querySelector('#button-save')
const inputName=document.querySelector('#input-name')
const inputAboutMe=document.querySelector('#input-about-me')
const profileName=document.querySelector('#profile-name')
const profileInfo=document.querySelector('#profile-info')
const elementTemplate= document.querySelector ('#element-template')
const elementContainer=document.querySelector('.element')

const popupCreateCard=document.querySelector('#popup-add-images')
const addButton=document.querySelector('#add-button')
const closeCreateCard=document.querySelector('#close-icon')
const submitButton=document.querySelector('#submit-button')
const inputTitle=document.querySelector('#input-title')
const inputUrl=document.querySelector('#input-image-url')
const popupWindow=document.querySelector('.popup__window')
const popupWindowImage=document.querySelector('.popup__window-image')
const popupWindowCloseButton=document.querySelector('.popup__close-window')


popupWindowCloseButton.addEventListener('click', function (evt){
  popupWindow.close()
})

addButton.addEventListener("click",function(evt){  //abrir la carta
  popupCreateCard.showModal()
})

closeCreateCard.addEventListener("click", function(evt){
  popupCreateCard.close()
})

pencil.addEventListener("click",function(evt){
    popup.showModal()
    inputName.value=profileName.textContent
    inputAboutMe.value=profileInfo.textContent
})

closeButton.addEventListener("click", function(evt){
    popup.close()
})

buttonSubmit.addEventListener("click", function(evt){
    evt.preventDefault() 
    profileName.textContent=inputName.value
    profileInfo.textContent=inputAboutMe.value
    popup.close()
})


const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

  initialCards.forEach((card) => {
  createCard(card)
})

function createCard(card) {  // funcion para crear una carta
  const newCard = elementTemplate.content.querySelector('.element__card').cloneNode(true)
  const imageCard = newCard.querySelector('.element__card-image')
  const elementContent = newCard.querySelector('.element__place')
  const likeButton=newCard.querySelector('.element__like-button')
  const trashButton=newCard.querySelector('.element__trash') //estas variables tienen que estar aqui porque se repiten muchas veces al ejecutarse, si estuvieran arriba seria 1 sola vez


imageCard.addEventListener('click', function (evt){
popupWindow.showModal()
const imagePopUp=document.querySelector(".popup__window-image")
const titlePopUp=document.querySelector(".popup__window-text")
imagePopUp.src=card.link
titlePopUp.textContent=card.name
})


trashButton.addEventListener('click',function(evt){
  const parentElement = evt.target.closest('.element__card')
  if (parentElement) {
    parentElement.remove()
  }
})

likeButton.addEventListener('click',function (evt){

if (likeButton.src.includes("/images/Union.png")){
  likeButton.src="../images/Vector_corazon.svg"
}else{
  likeButton.src="../images/Union.png"
}
  })
  imageCard.src = card.link
  elementContent.textContent = card.name
  elementContainer.prepend(newCard)
}

submitButton.addEventListener("click", function(evt){
evt.preventDefault()    // esto es para que no se recargue la pag al guardar
createCard({    // funcion para crear carta
  name:inputTitle.value,  // valor del input y que se asigne a name
  link:inputUrl.value,
})
popupCreateCard.close() // funcion para cerrar el popup
})

//funcion para cerrar el popup dando click afuera 
popupCreateCard.addEventListener("click", function(evt){
if(evt.target.classList.contains("popup")){
  popupCreateCard.close()
}
})

popup.addEventListener("click",function(evt){
  if(evt.target.classList.contains("popup")){
popup.close()
    }
})

popupWindow.addEventListener("click",function(evt){
  if(evt.target.classList.contains("popup__window")){
popupWindow.close()
    }
})
