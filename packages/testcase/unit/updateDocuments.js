let expect = chai.expect;
describe('Documents', function() {
  before(function(done) {
    Meteor.loginWithPassword('taind', '1234', done);
  });

  it('allow update from client on field title', function() {
    let user = Meteor.user();
    let doc = user.documents.findOne({});
    user.documents.update({
      _id: doc._id
    }, {
      $set: {
        title: 'haivl1',
      }
    });
    doc = user.documents.findOne({_id: doc._id});
    expect(doc.title).to.equal('haivl1');
  });

  it('allow update from client on field tag', function() {
    let user = Meteor.user();
    let doc = user.documents.findOne({});
    user.documents.update({
      _id: doc._id
    }, {
      $push: {
        tags: 'movieX',
      }
    });
    doc = user.documents.findOne({_id: doc._id});
    expect(doc.tags).to.include('movieX');
  });
  after(function(done) {
    Meteor.logout(done);
  });
});
