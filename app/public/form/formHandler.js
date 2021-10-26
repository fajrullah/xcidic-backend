'use strict'
const models = require('./formModel')
const axios = require('axios')
const productTag = {
  englishacademy: {
    subName: 'English Academy',
    prize: 'Shoes'
  },
  skillacademy: {
    subName: 'Skill Academy',
    prize: 'Bag'
  },
  ruangguru: {
    subName: 'Ruangguru',
    prize: 'Pencils'
  }
}
const getData = async (params) => {
  const data = await axios.get(`https://us-central1-silicon-airlock-153323.cloudfunctions.net/rg-package-dummy?userId=${params}`)
    .then(result => result.data)
    .catch(e => console.log(e))
  return data
}
const submitForm = async (params) => {
  const check = await models.check({
    userId: params.userId
  })

  if (!check) {
    const collectData = await getData(params.userId)
    let bulkData = [params]
    if (collectData) {
      bulkData = []
      const user = collectData.user || {}
      const packages = collectData.packages || []
      packages.forEach(key => {
        const packageTag = key.packageTag
        bulkData.push({
          ...user,
          ...params,
          packageName: key.packageName,
          packageSerial: key.packageSerial,
          packageTag,
          urlParams: `form?userId=${user.userId}`,
          productTag: packageTag,
          prize: productTag[packageTag].prize,
          productSubName: productTag[packageTag].subName,
          orderStatus: key.orderStatus,
          status: 'created'
        })
      })
    }
    const result = await models.create(bulkData)
    return [true, result]
  } else {
    return [false, null]
  }
}

module.exports = {
  submitForm
}
