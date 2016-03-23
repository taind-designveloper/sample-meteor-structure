describe('Publish', function() {
  before(function(done) {
    Meteor.loginWithPassword('taind', '1234', done);
  });
  it('should pushish all owned documents', function(done) {
    let sub = Meteor.subscribe('userDocuments');
    Tracker.autorun(function(c) {
      if(sub.ready()) {
        let num = Documents.find({}).count();
        c.stop();
        expect(num).to.equal(3);
        done();
      }
    });
  });
  after(function() {
    Meteor.logout();
  });
});
