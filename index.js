const popup=document.querySelector('#popup-editor')
const pencil=document.querySelector('#pencil-editor')
const closeButton= document.querySelector('#close-button')
const buttonSubmit=document.querySelector('#button-save')
const inputName=document.querySelector('#input-name')
const inputAboutMe=document.querySelector('#input-about-me')
const profileName=document.querySelector('#profile-name')
const profileInfo=document.querySelector('#profile-info')



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



