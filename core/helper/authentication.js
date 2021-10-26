
'use strict'
const jwt = require('jsonwebtoken')
const config = require('../config')
const { sequelize } = require('../database')
const { users: User } = sequelize.models

const generateToken = async (userData) => {
  const email = userData.email
  const id = userData.userid
  const payload = {
    id,
    email
  }
  const options = {
    issuer: email
  }
  const secret = config.secret
  const secretRefresh = secret + email
  const token = jwt.sign(payload, secret, {
    issuer: config.issuer,
    subject: config.subject,
    expiresIn: '365d'
  })
  const refreshToken = jwt.sign({ email }, secretRefresh, { ...options, expiresIn: '365d' })
  return {
    userid: id,
    msgCode: 'Success',
    email,
    accessToken: token,
    refreshToken,
    expiresIn: '365d',
    tokenType: 'Bearer'
  }
}

const getAccessToken = async (refreshToken, email, roleid) => {
  const secret = config.secret
  const secretRefresh = secret + email
  return jwt.verify(refreshToken, secretRefresh, { issuer: email, subject: roleid.toString() }, async (err, decoded) => {
    if (err) {
      return false
    } else {
      const userData = await User.findOne({
        where: { email, roleid }
      })

      if (userData) {
        const email = userData.email
        const role = userData.roleid
        const payload = {
          id: userData.userid
        }
        const options = {
          issuer: userData.email,
          subject: role.toString()
        }
        const token = jwt.sign(payload, secret, { ...options, expiresIn: '5m' })
        const refreshToken = jwt.sign({ email }, secretRefresh, { ...options, expiresIn: 60 * 5 })
        return {
          msgCode: 'Success',
          email,
          access_token: token,
          refreshToken,
          role,
          expires_in: '1d',
          token_type: 'Bearer'
        }
      } else {
        return false
      }
    }
  })
}

module.exports = {
  generateToken,
  getAccessToken
}
