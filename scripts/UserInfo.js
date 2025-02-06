class UserInfo {
  constructor({ name, aboutMe }) {
    this._name = name;
    this._aboutMe = aboutMe;
  }

  getUserInfo(name, about) {
    return {
      name: this._name.textContent,
      aboutMe: this._aboutMe.textContent,
    };
  }
  setUserInfo({ name, aboutMe }) {
    this._name.textContent = name;
    this._aboutMe.textContent = aboutMe;
  }
}
