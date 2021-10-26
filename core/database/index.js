const Mongoose = require('mongoose')
Mongoose.set('debug', true)
Mongoose.set('useFindAndModify', false)
const { URI } = require('../config')
/**
 * Class DB From ANASTASIA
 */
class Database {
  constructor () {
    this._connect()
  }

  _connect () {
    Mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
      .then((res) => {
        console.log('Database connection successful')
      })
      .catch(_err => {
        console.log(_err)
        console.error('Database connection error')
      })
  }
}

module.exports = new Database()
