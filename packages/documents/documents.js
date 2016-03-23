Documents._transform = function(document) {
  let value = _.clone(document);
  document.user = new DocumentUser(document, Meteor.users);
  document.value = value;
  return document;
};

