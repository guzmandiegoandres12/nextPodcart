const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('channel', '/:slug.:id', 'chanel')
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')