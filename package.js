Package.describe({
  name: 'rgnevashev:angular-ui-select',
  version: '0.13.2',
  summary: 'AngularJS ui-select',
  git: 'https://github.com/angular-ui/ui-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    "dist/select.js",
    "dist/select.css"
  ], 'client');
}); 
