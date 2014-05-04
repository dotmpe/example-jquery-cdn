
/*!
 * See LICENSE.txt for full copyright notice.
 *
 * Copyright (C) 2014 Berend van Berkum (.mpe) <dev@dotmpe.com>
 * GNU GPL v3
 */

var express = require('express')

/* Enable coffeescript */
require('coffee-script/register');

/* Enable LiveScript */
require('LiveScript')

// Load configurations
var env = process.env.NODE_ENV || 'development'
	, config = require('./config/config')[env]

// create express and socket server
var app = module.exports = express()
var server = require('http').createServer(app)

// express settings
require('./config/express')(app, config)

// Bootstrap routes
routes = require('./app/routes')
require('./config/routes')(app, routes)

// Start ...
server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

// expose app
exports = module.exports = app

