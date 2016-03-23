Package.describe({
  name: 'testcase',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('testcase');
  api.use('users');
  api.use('documents');
  api.use('schemas');
  api.use('secure');
  api.use('random');
  api.use('tracker');
  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:mocha-console-runner');
  api.addFiles([
    'share/before.js',
  ], 'server');
  api.addFiles([
    'unit/publishDocuments.js',
    'unit/updateDocuments.js',
  ], 'client');
});
