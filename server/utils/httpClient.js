const axios = require('axios')
const CONFIG = require('./../config')

axios.defaults.baseURL = CONFIG.API_BASE
axios.defaults.headers['Accept'] = CONFIG.ACCEPT

axios.defaults.baseURL = CONFIG.API_BASE
axios.defaults.headers['Accept'] = CONFIG.ACCEPT

axios.interceptors.request.use((config) => {
    return config
}, (error) => {
    // console.log('===============================================================================>')
    // console.log(error)
    // console.log('===============================================================================>')
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    // console.log('<===============================================================================')
    // console.log(error)
    // console.log('<===============================================================================')
    return Promise.reject(error)
})

module.exports = axios
