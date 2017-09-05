const koa=require('koa')
const path=require('path')
const serve=require('koa-static')
const app=new koa()

// const main=serve(path.join(__dirname))  // __dirname为/Users/reckful/FE/koa-demos/demos 访问localhost:3000/12.js
// const main=serve('.')  访问localhost:3000/demos/12.js
// const main=serve('./demos/')  // 访问localhost:3000/12.js
// const main=serve('demos/')  // 访问localhost:3000/12.js
console.log(__dirname)

app.use(main)
app.listen(3000)