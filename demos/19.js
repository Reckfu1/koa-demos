const koa=require('koa')
const app=new koa()

const main=ctx => {
    let n=Number(ctx.cookies.get('view')||0)+1
    ctx.cookies.set('view',n)
    ctx.response.body=n+'view'
}

app.use(main)
app.listen(3000)