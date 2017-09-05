const koa=require('koa')
const app=new koa()

const main=ctx => {
    // 获取用户请求的路径，如果不是来自首页的请求，则显示跳转到首页
    if(ctx.request.path!=='/'){
        // 打印出路径 在终端查看
        console.log(ctx.request.path)
        ctx.response.body='<a href="/">Go To Index Page</a>'
    }
    else{
        console.log(ctx.request.path)
        ctx.response.body='This is index page'
    }
}

app.use(main)
app.listen(3000)