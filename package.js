Package.describe({
  name: 'rgnevashev:angular-ui-select',
  version: '0.14.9',
  summary: 'AngularJS ui-select',
  git: 'https://github.com/rgnevashev/ui-select.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');
  api.addFiles([
    "dist/select.js",
    "dist/select.css"
  ], 'client');
});
