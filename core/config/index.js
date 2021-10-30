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
  dbport: process.env.DB_PORT,
  db_url: 'postgres://qydpxkqrqxurcu:5c603f72a3c25aa6ecbe42c5cd61606f3bb891148d5386b262e3d56de81b7951@ec2-3-217-234-137.compute-1.amazonaws.com:5432/d1a8ectr80o8pu'
}
