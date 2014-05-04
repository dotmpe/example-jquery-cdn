
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    root: rootPath,
    app: {
      name: 'Nodejs Express Socket IO Demo (dev)'
    },
  },
  test: {
    root: rootPath,
    app: {
      name: 'Nodejs Express Socket IO Demo'
    },
  },
  production: {}
}

