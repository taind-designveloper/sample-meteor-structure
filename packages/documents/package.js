Package.describe({
  name: 'documents',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('accounts-password');
  api.use('aldeed:collection2@2.9.0');
  api.use('ecmascript');
  api.use('mdg:validated-method');
  api.use('underscore');
  api.use('collections');
  api.use('check');
  api.addFiles([
    'publish/userDocuments.js',
  ], 'server');
  api.addFiles([
    'model/documentUser.js',
    'documents.js',
  ]);
  api.export('Accounts');
  api.export('Documents');
});

