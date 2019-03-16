const merge = require('webpack-merge')
const ENV = process.env.NODE_ENV || 'development'
const DEFAULT = require('./env.default')
const TEST = require('./env.test')
const RELEASE = require('./env.release')
const PRODUCTION = require('./env.production')

if (ENV === 'test') {
    module.exports = merge(DEFAULT, TEST)
    return
}

if (ENV === 'test_380') {
    module.exports = merge(DEFAULT, TEST)
    return
}

if (ENV === 'release') {
    module.exports = merge(DEFAULT, RELEASE)
    return
}

if (ENV === 'production') {
    module.exports = merge(DEFAULT, PRODUCTION)
    return
}

module.exports = DEFAULT
