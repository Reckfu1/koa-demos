const koa=require('koa')
const app=new koa()

// const main=ctx => ctx.throw(500)
// const main=ctx => ctx.throw(404)
// 除了使用throw，还可以用以下方法
const main=ctx => {
    ctx.response.status=404
    ctx.response.body='Page Not Found'
}

app.use(main)
app.listen(3000)