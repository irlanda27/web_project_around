export default class UserInfo {
  constructor({ name, aboutMe, avatar }) {
    this._name = name;
    this._aboutMe = aboutMe;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      aboutMe: this._aboutMe.textContent,
    };
  }
  setUserInfo({ name, about, avatar }) {
    this._name.textContent = name;
    this._aboutMe.textContent = about;
    this._avatar.src = avatar;
  }
}
