
Package.describe({
  name    : 'semantic:ui-icon',
  summary : 'Semantic UI - Icon: Single component release',
  version : '1.9.3',
  git     : 'git://github.com/Semantic-Org/UI-Icon.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'icon.css',
    'assets/fonts/icons.eot',
    'assets/fonts/icons.otf',
    'assets/fonts/icons.svg',
    'assets/fonts/icons.ttf',
    'assets/fonts/icons.woff'
  ], 'client');
});
