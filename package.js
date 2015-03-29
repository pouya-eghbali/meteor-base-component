Package.describe({
  name: 'peerlibrary:base-component',
  summary: "Base component for reusable Meteor components",
  version: '0.1.0',
  git: 'https://github.com/peerlibrary/meteor-base-component.git',
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');

  // Core dependencies.
  api.use([
    'coffeescript'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5'
  ]);

  api.export('BaseComponent');

  // Client.
  api.addFiles([
    'lib.coffee'
  ], 'client');
});

Package.onTest(function (api) {
  // Core dependencies.
  api.use([
    'coffeescript',
    'templating',
    'jquery',
    'reactive-var'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:base-component'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:classy-test@0.2.9'
  ]);

  api.addFiles([
    'tests.coffee'
   ], 'client');
});