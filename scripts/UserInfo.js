export default class UserInfo {
  constructor({ name, aboutMe }) {
    this._name = name;
    this._aboutMe = aboutMe;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      aboutMe: this._aboutMe.textContent,
    };
  }
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._aboutMe.textContent = about;
  }
}
