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

  globs = globs.concat(orderedConstructs.map((name) => `./{app,views,libs,components}/**/*.${name}.js`));
  return globs;
};


module.exports = getOrderedConstructs;
