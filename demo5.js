const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()


const staticPath = './static'
// 这样就可以直接在浏览器 访问静态资源   http://localhost:3000/a.css
app.use(static(
  path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})