let should = chai.should();
/*
* remove enviroment
* */
Meteor.users.remove({});
Documents.remove({});
/*
* Create a user account
* | username | password |
* | taind    | 1234     |
* | hugevn   | 1234     |
*
* */
taindId = Accounts.createUser({
  username:'taind',
  password: '1234'
});

hugevnId = Accounts.createUser({
  username: 'hugevn',
  password: '1234',
});
/*
 * insert documents
 * | title  | tags                |
 * | chatvl | ['music', 'game']   |
 * | tinhte | ['tech', 'news']    |
 * | hdo    | ['movie', 'music']  |
 *
 * */
let tUser = Meteor.users.findOne(taindId);
let hUser = Meteor.users.findOne(hugevnId);
[
  {
    title: 'chatvl',
    tags: ['music', 'game']
  },
  {
    title: 'tinhte',
    tags: ['tech', 'news'],
  },
  {
    title: 'hdo',
    tags: ['movies', 'music'],
  }
].forEach((document) => {
  document._id = Random.id();
  tUser.documents.insert(document);
  document._id = Random.id();
  hUser.documents.insert(document);
});


/*
 * test enviroment
 * */
describe('TestEnviroment', function() {

  it('should return 2 users', function() {
    let numUsers = Meteor.users.find({}).count();
    numUsers.should.equal(2);
  });

  it('user 1 should return 3 documents', function() {
    let numDocs = tUser.documents.find({}).count();
    numDocs.should.equal(3);
  });

  it('user 2 should return 3 documents', function() {
    let numDocs = hUser.documents.find({}).count();
    numDocs.should.equal(3);
  });
});
