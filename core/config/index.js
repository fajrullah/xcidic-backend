'use strict'
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  issuer: process.env.ISSUER,
  subject: process.env.SUBJECT,
  env: process.env.NODE_ENV,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  dbport: process.env.DB_PORT
}
