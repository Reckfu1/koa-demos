const koa=require('koa')
const app=new koa()

const main=ctx => ctx.response.body='Hello Koa'

app.use(main)
app.listen(3000)