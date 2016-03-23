Meteor.publish('userDocuments', function() {
  if(!this.userId)
    return this.ready();
  let user = Meteor.users.findOne(this.userId);
  return user.documents.find({});
});
