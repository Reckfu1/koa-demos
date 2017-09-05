const koa=require('koa')
const koaBody=require('koa-body')
const app=new koa()

const main=async function(ctx){
    const body=ctx.request.body
    console.log(body)
    if(!body.name) ctx.throw(400,'.name required')
    ctx.body={name:body.name}
    // ctx.response.body=`{name:${body.name}}`
}

app.use(koaBody())
app.use(main)
app.listen(3000)