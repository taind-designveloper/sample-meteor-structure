Meteor.users._transform = function(user) {
  let value = _.clone(user);
  user.documents = new UserDocuments(user, Documents);
  user.value = value;
  return user;
};

