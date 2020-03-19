const fs = require('fs')
const express = require('express')
const app = express()
const prefix = '/yui-2.X'
const port = 5000
// 开启静态资源访问
app.use(express.static('./frontend/public')) 
// 项目
app.get(prefix, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  res.end(fs.readFileSync('./frontend/view/index.html').toString())
})
// 启动服务
app.listen(port, () => {
  console.log('server on http://49.233.85.54:5000')
})