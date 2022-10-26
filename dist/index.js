
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./okx-connector.cjs.production.min.js')
} else {
  module.exports = require('./okx-connector.cjs.development.js')
}
