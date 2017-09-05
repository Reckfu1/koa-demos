const koa=require('koa')
const app=new koa()

const main=ctx => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    ctx.response.body='Hello Koa'
}

app.use(main)
app.listen(3000)