export default class PopupWithImage extends Popup {
    constructor () {
        super()
    }
    
    open(image, description){
        super.open();
        const popupImage = this._popup.querySelector('.popup__image');
        const popupDescription = this._popup.querySelector('.popup__description');

        imageElement.src = image;
        descriptionElement.textContent = description;
    }
    
    
    
    }
    