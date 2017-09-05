const koa=require('koa')
const app=new koa()

const main=ctx => ctx.throw(500)

// 运行过程一旦出错 触发error事件,在命令行打印错误信息
app.on('error',(err,ctx) => console.log(err))

app.use(main)
app.listen(3000)