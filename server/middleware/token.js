const log = console.log
const axios = require('axios')
const CONFIG = require('./../config')

module.exports = function(req, res, next) {
    log('\r\n')
    log(`inside the token middleware and NODE_ENV=${process.env.NODE_ENV}`)

    const redisClient = require('./../utils/redis')({
        host: CONFIG.REDIS.host,
        port: CONFIG.REDIS.port
    })

    let tokenId = `token_${CONFIG.API_TOKEN.params.client_id}`

    redisClient.select(CONFIG.REDIS.db, function(err, res) {
        redisClient.getAsync(tokenId).then(function(res) {
            if (res) {
                req.token = res
                return next()
            } else {
                log('request token...')
                axios.post(CONFIG.API_TOKEN.url, CONFIG.API_TOKEN.params)
                    .then(response => {
                        let data = response.data
                        let remain = CONFIG.REDIS.timeRemain
                        let ex = data.expires_in - remain || CONFIG.REDIS.expire - remain
                        let _token = `${data.token_type} ${data.access_token}`

                        redisClient.setAsync(tokenId, _token, 'ex', ex)

                        req.token = _token
                        return next()
                    })
                    .catch(err => {
                        return next(err)
                    })
            }
        })
    })
}
