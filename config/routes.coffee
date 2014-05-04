###
 Express Server-Side Routes
###

module.exports = ( app, routes ) ->
	# serve index and view partials
	app.get '/', routes.index

	# redirect all others to the index (HTML5 history)
	app.get '*', routes.index


