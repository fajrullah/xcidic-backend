'use strict'

const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  issuer: process.env.ISSUER,
  subject: process.env.SUBJECT,
  env: process.env.NODE_ENV,
  URI: process.env.URI
}
