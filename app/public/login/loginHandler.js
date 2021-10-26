'use strict'
const { bcrypt, generateToken } = require('../../../core')
const models = require('./loginModel')
module.exports = {
  // resetPassword,
  // generateAccessToken,
  // createWebhook
  login: async (req, res, next) => {
    const { email, password } = req.body
    try {
      const user = {
        email: 'admin@ourpasar.com',
        userid: '111111'
      }
      const result = await generateToken(user)
      return res.status(200).json({ ...result })
      // if (email && password) {
      //   const user = await models.findAdmin({ email })
      //   console.log(user)
      //   if (!user) {
      //     return res.status(401).json({ msgCode: 'No such user found', email: email })
      //   }
      //   if (!user.isActive) {
      //     return res.status(401).json({ msgCode: 'User Inactive', email: email })
      //   }
      //   if (bcrypt.compareSync(req.body.password, user.password) && user.isActive) {
      //     const result = await generateToken(user)
      //     return res.status(200).json({ ...result })
      //   } else {
      //     return res.status(401).json({ msgCode: 'Password is incorrect', statusUser: false })
      //   }
      // }
    } catch (err) {
      next(err)
    }
  }
}
