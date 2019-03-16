const httpClient = require('./../utils/httpClient')
const { Router } = require('express')
const router = Router()
const getUrls = require('./getUrls')
const postUrls = require('./postUrls')
const bodyParser = require('body-parser')
require("body-parser-xml")(bodyParser);// 为bodyParser添加 XML 解析功能

// 对后端服务的请求需要access token
router.use(function(req, res, next) {
    httpClient.defaults.headers['Authorization'] = req.token
    return next()
})

// 添加中间件处理xml类请求
router.use(bodyParser.xml({
    limit: "1MB",   // Reject payload bigger than 1 MB
    xmlParseOptions: {
        normalize: true,     // Trim whitespace inside text nodes
        normalizeTags: true, // Transform tags to lowercase
        explicitArray: false // Only put nodes in array if >1
    },
    verify: function(req, res, buf, encoding) {
        if(buf && buf.length) {
            // Store the raw XML
            req.xmlData = buf.toString(encoding || "utf8");
        }
    }
}));

router.use(bodyParser.json());// parse application/json
router.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded

// 通过 node 以get方式请求后端服务，返回json格式数据给前端(通用)
getUrls.forEach(url => {
    router.get(url, function(req, res, next) {
        httpClient.get(req.url)
            .then(resp => {
                console.log('\n\n')
                console.log(`express done ===================================>`)
                console.log(`DATE: ${new Date()}`)
                console.log(`URL: ${req.url}`)
                console.log(`STATUS CODE: ${resp.status}`)
                console.log(resp.data)
                res.json(resp.data)
            })
            .catch(err => {
                console.log('\n\n')
                console.log(`express errs ===================================>`)
                console.log(`DATE: ${new Date()}`)
                console.log(`URL: ${req.url}`)
                console.dir(err)
                res.json({
                    code: '50001',
                    data: null,
                    msg: '服务器开小差了，待会再来吧...'
                })
            })
    })
})

// 通过node 以post方式请求后端服务，返回json格式数据给前端（通用）
postUrls.forEach(url => {
    router.post(url, function(req, res, next) {
        httpClient.post(req.url, req.body)
            .then(resp => {
                console.log('\n\n')
                console.log(`express done ===================================>`)
                console.log(`DATE: ${new Date()}`)
                console.log(`URL: ${req.url}`)
                console.log(`STATUS CODE: ${resp.status}`)
                console.log(resp.data)
                res.json(resp.data)
            })
            .catch(err => {
                console.log('\n\n')
                console.log(`express errs ===================================>`)
                console.log(`DATE: ${new Date()}`)
                console.log(`URL: ${req.url}`)
                console.dir(err)
                res.json({
                    code: '50001',
                    data: null,
                    msg: '服务器开小差了，待会再来吧...'
                })
            })
    })
})

module.exports = router
