const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

router.get('/', function(ctx, next) {
  let html = `
  <h1>Koa2 request post demo</h1>
  <form method="POST"  action="/">
      <p>userName</p>
      <input name="userName" /> <br/>
      <p>age</p>
      <input name="age" /> <br/>
      <p>webSite</p>
      <input name='webSite' /><br/>
      <button type="submit">submit</button>
  </form>
`
  ctx.body = html
})

router.post('/', function(ctx, next) {
  ctx.body = ctx.request.body  //bodyParser 的效果
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at port 3000')
})
