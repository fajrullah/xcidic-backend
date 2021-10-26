'user strict'

const clientErrorHandler = (err, req, res, next) => {
  if (err) {
    res.status(400).json({ msgCode: 'Error' })
  } else {
    next()
  }
}

const clientError400 = (req, res, next) => {
  return res.status(400).json({
    msgCode: 'Error'
  })
}

const logErrors = (err, req, res, next) => {
  console.error('ERRORS', err)
  next(err)
}

module.exports = {
  clientErrorHandler: clientErrorHandler,
  logErrors: logErrors,
  clientError400: clientError400
}
