const koa=require('koa')
const app=new koa()
const route=require('koa-route')

const redirect=ctx => {
    ctx.response.redirect('/')
    ctx.response.body='<a href="/">go to index page</a>'
}

app.use(route.get('/redirect',redirect))
app.listen(3000)