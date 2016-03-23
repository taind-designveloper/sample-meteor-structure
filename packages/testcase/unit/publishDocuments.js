describe('Publish', function() {
  before(function(done) {
    Meteor.loginWithPassword('taind', '1234', done);
  });
  it('should pushish all owned documents', function() {
    let sub = Meteor.subscribe('userDocuments');
    Tracker.autorun(function() {
      if(sub.ready()) {
        let num = Documents.find({}).count();
        expect(num).to.equal(3);
      }
    });
  });
  after(function() {
    Meteor.logout();
  });
});
