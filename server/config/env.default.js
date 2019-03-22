// 本地开发
let API_BASE = process.env.API_DOMAIN || 'http://api.teamblog.me'

module.exports = {
    ACCEPT: 'application/vnd.myapp.v1+json', // 指明接口版本信息+数据格式
    API_BASE,
    API_TOKEN: {
        url: `${API_BASE}/oauth/token`,
        params: {
            grant_type: 'client_credentials',
            client_id: '2',
            client_secret: 'XH2TUq6OWobWrQ3mJceczHwOd3TmrataZpklBT44'
        }
    },
    REDIS: {
        host: '192.168.56.103',
        port: '6379',
        /*
            reference: https://redis.io/commands/set
            失效时间(以秒为单位)，默认为后端返回
       */
        expire: 60,
        /*
            token 临近过期时间，避免发起请求时已经过期
            比如 30秒过期，29秒时发送的请求，后端就过期了，提前请求
       */
        timeRemain: 5,
        db: 0,
    },
};
