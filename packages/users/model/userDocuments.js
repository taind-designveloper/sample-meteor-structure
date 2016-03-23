UserDocuments = class UserDocuments {
  constructor(user, Documents) {
    this.user = user;
    this.Documents = Documents;
  }
  insert(document) {
    document.userId = this.user._id;
    this.Documents.insert(document);
  }
  find(selector) {
    check(selector, Object);
    selector.userId = this.user._id;
    return this.Documents.find(selector);
  }
  findOne(selector) {
    check(selector, Object);
    selector.userId = this.user._id;
    return this.Documents.findOne(selector);
  }
  update(selector, modifier) {
    check(selector, Object);
    check(modifier, Object);
    selector.userId = this.user._id;
    if(Meteor.isClient) {
      let docs = this.Documents.find(selector).fetch();
      docs.forEach((doc)=> {
        this.allowUpdate(doc);
        this.Documents.update({
          _id: doc._id
        }, modifier);
      });
    } else {
      this.Documents.update(selector, modifier, {multi: true});
    }
  }
  remove(selector) {
    check(selector, Object);
    selector.userId = this.user._id;
    if(Meteor.isClient) {
      let docs = this.Documents.find(selector).fetch();
      docs.forEach((doc)=> {
        this.allowRemove(doc);
        this.Documents.remove(doc._id);
      });
    } else {
      return this.Documents.remove(selector);
    }
    return true;
  }
  allowUpdateFromClient(doc, modifier) {
    check(modifier, Object);
    check(doc.value, this.Documents.simpleSchema());
    this.allowUpdate(doc);
    let isAllowOnFields = Match.test(modifier, {
      $set: Match.Optional({
        title: Match.Optional(String),
      }),
      $push: Match.Optional({
        tags: String,
      })
    });
    if(!isAllowOnFields) {
      throw new Meteor.Error('userDocuments.allowUpdateFromClient', 'update on title field only');
    }
    return true;
  }
  allowUpdate(doc) {
    check(doc.value, this.Documents.simpleSchema());
    if(this.user._id !== doc.userId) {
      throw new Meteor.Error('userDocuments.allowUpdate', 'you are not owner');
    }
    return true;
  }
  allowRemove(doc) {
    if(this.user._id !== doc.userId) {
      throw new Meteor.Error('userDocuments.allowRemove', 'you are not owner');
    }
    return true;
  }
};
