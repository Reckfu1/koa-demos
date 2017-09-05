const koa=require('koa')
const app=new koa()

const main=ctx => {
    if(ctx.request.accepts('xml')){
        ctx.response.type='xml'
        ctx.response.body='<data>Hello Koa</data>'
    }
    else if(ctx.request.accepts('json')){
        ctx.response.type='json'
        ctx.response.body={data:'Hello Koa'}
    }
    else if(ctx.request.accepts('html')){
        ctx.response.type='html'
        ctx.response.body='<h1>Hello Koa</h1>'
    }
    else{
        ctx.response.type='text'
        ctx.response.body='Hello Koa'
    }
}

app.use(main)
app.listen(3000)