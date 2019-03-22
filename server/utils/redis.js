// https://github.com/NodeRedis/node_redis
const Q = require('bluebird')
const redis = require('redis')

Q.promisifyAll(redis.RedisClient.prototype)
Q.promisifyAll(redis.Multi.prototype)

module.exports = function({ host, port }) {
    return redis.createClient({
        host,
        port
    })
}