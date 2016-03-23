DocumentUser = class DocumentUser {
  constructor(document, Users) {
    this.document = document;
    this.Users = Users;
  }
  find(selector) {
    check(selector, Object);
    selector._id = this.document.userId;
    return this.Users.find(selector);
  }
  findOne(selector) {
    check(selector, Object);
    selector._id = this.document.userId;
    return this.Users.findOne(selector);
  }
  update() {

  }
  remove() {

  }
};
