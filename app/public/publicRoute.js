'use strict'

/**
 * Public Route
 * No Authentication
 * @author Fajrul
 */

module.exports = (app) => {
  app.get('/', (req, res, next) => res.json({
    status: 'XCIDIC V1.0.0'
  }))
  require('./branch')(app)
}
