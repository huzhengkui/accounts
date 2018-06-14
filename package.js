Package.describe({
  name: 'chakera:accounts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'chakera accounts',
  // URL to the Git repository containing the source code for this package.
  git: ''
  // By default, Meteor will default to using README.md for documentation.
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use("underscore", ["client", "server"]);
  api.use("mongo", ["client", "server"]);

  api.use("frozeman:persistent-minimongo@0.1.8", "client");
  api.use("chakera:web3", ["client", "server"]);

  api.export(["OkcAccounts"], ["client", "server"]);

  api.addFiles("accounts.js", ["client", "server"]);
});
