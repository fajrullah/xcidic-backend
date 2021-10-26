'use strict'
const { query } = require('express-validator')
const get = [
  query('page')
    .notEmpty().withMessage('page is empty')
    .isInt().withMessage('must contain a number'),
  query('size')
    .notEmpty().withMessage('size is empty')
    .isInt().withMessage('must contain a number')
]

module.exports = {
  get
}
