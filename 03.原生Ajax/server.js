//1.引入express
const { request, response } = require('express');
const express = require('express')

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.get('/server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send("===get=")
});

app.post('/server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send("<h1>post</h1>")
});

app.all('/json-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    const data = {
        name:'chenZi'
    }
    let str =JSON.stringify(data)
    response.send(str)
});

app.get('/ie',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('ie')
});

app.get('/delay',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体


    setTimeout(()=>{
        response.send('延时响应')
    },1000)
});


// 4. 监听端口启动服务
app.listen(8000,()=>{
    console.log("8000监听中");
})

