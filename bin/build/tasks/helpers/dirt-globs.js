var getOrderedConstructs = function() {
  var orderedConstructs = [
    'module',
    'constant',
    'config',
    'service',
    'factory',
    'controller',
    'directive',
    'route',
    'provider'
  ];
  var globs = [ 'app.js' ];

  globs = globs.concat(orderedConstructs.map((name) => return `/**/*.${name}.js`);
      ['views', 'libs', 'components'].map`./views
  return globs;
};


module.exports = getOrderedConstructs;
