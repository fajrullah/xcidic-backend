'use strict'
const Mongoose = require('mongoose')
const ModelSchema = new Mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: false
  },
  userEmail: {
    type: String,
    required: false
  },
  userPhoneNumber: {
    type: String,
    required: false
  },
  userDeliveryAddress: {
    type: String,
    required: false
  },
  userContactNumber: {
    type: String,
    required: false
  },
  userContactPerson: {
    type: String,
    required: false
  },
  packageTag: {
    type: String,
    required: false
  },
  packageName: {
    type: String,
    required: false
  },
  orderStatus: {
    type: String,
    required: false
  },
  packageSerial: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true,
    enum: ['created', 'delivery', 'rejected'],
    default: 'created'
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  urlParams: {
    type: String,
    required: false
  },
  productTag: {
    type: String,
    required: false
  },
  prize: {
    type: String,
    required: false
  },
  productSubName: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

module.exports = Mongoose.model('Forms', ModelSchema)
