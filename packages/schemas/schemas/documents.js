Documents.attachSchema(new SimpleSchema({
  _id: {
    type: String,
  },
  title: {
    type: String,
  },
  userId: {
    type: String,
  },
  tags: {
    type: [String],
    defaultValue: [],
  }
}));
