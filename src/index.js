var httpServer = require('./http-server')
var homePage = require('./home-page')
var componentRoute = require('./component-route')
var qualityReports = require('./core/quality-reports/home-page')

httpServer.routeCollection.push(homePage.route)
httpServer.routeCollection.push(componentRoute.route)
httpServer.routeCollection.push(qualityReports.route)
