// http://ruanyifeng.com/blog/2017/08/koa.html

const koa=require('koa')
const app=new koa()

app.listen(3000)

// 打开浏览器，访问 http://127.0.0.1:3000 。你会看到页面显示"Not Found"，表示没有发现任何内容。这是因为我们并没有告诉 Koa 应该显示什么内容。