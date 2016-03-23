Documents.allow({
  insert: (userId, doc) => true,
  remove: (userId, doc) => {
    if(!userId) return false;
    let user = Meteor.users.findOne(userId);
    user.documents.allowRemove(doc);
    return true;
  },
  update(userId, doc, fieldNames, modifier) {
    if(!userId) return false;
    let user = Meteor.users.findOne(userId);
    user.documents.allowUpdateFromClient(doc, modifier);
    return true;
  }
});
