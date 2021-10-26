'use strict'
const handler = require('./formHandler')
module.exports = {
  create: async (req, res, next) => {
    try {
      const data = req.body
      const [isAvailable, result] = await handler.submitForm(data)
      console.log(isAvailable, result)
      if (isAvailable) {
        return res.status(200).json({ result })
      } else {
        return res.status(409).json({ result })
      }
    } catch (err) {
      next(err)
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (email === 'ops' && password === 'hereSecret') {
        return res.status(200).json({ result: true, msgCode: 'Valid user', token: 'hereIStokenDummy', userid: 4434, email: 'ops', role: 'admin' })
      }
      return res.status(401).json({ result: true, msgCode: 'Invalid user' })
    } catch (err) {
      next(err)
    }
  }
}
