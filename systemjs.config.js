/**
 * System configuration for Angular 2 apps
 * Adjust if needed.
 */
(function(global) {

  // pathMappings tells system loader where to look for stuff
  var pathMappings = {
    'app':                        'app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs'
  };

  // packages tells system loader how to load when no filename and/or no extension
  var packages = [
     '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    'rxjs',
    'built'
  ];

  
  var packagesConfig = {};

  packages.forEach(function(packageName) {
    packagesConfig[packageName] = {
      main: 'index.js',
      defaultExtension: 'js'
    };
  });
  packagesConfig.a

  var config = {
    map: pathMappings,
    packages: packages
  }

  System.config(config);

})(this);