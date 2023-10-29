class MakeInstance {
  constructor(idValue, passwordValue, emailValue) {
    this.id = idValue;
    this.password = passwordValue;
    this.email = emailValue;
  }

  set id(value) {
    if(typeof(value) === "string") {
      this._id = value + "님";
    } else {
      console.log("id는 문자열이어야 합니다.");
    }
  }
}

const instance = new MakeInstance('test', 'password', 'email');

console.log(instance);
// MakeInstance { _id: 'test님', password: 'password', email: 'email' }