const koa=require('koa')
const app=new koa()
const route=require('koa-route')

const about=ctx => {
    ctx.response.type='html'
    ctx.response.body='<a href="/">Go To Index Page</a>'
}

const main=ctx => {
    ctx.response.body='This is the index page'
}

app.use(route.get('/',main))
app.use(route.get('/about',about))

app.listen(3000)