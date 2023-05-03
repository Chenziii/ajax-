# ajax
学习Ajax中

# 02 express框架
使用nodejs中的“express”web应用框架，来模拟服务器返回请求

# 03 原生Ajax
## 如何使用XMLHttpRequest对象
### XMLHttpRequest对象常用的属性和方法
**属性**
1. **`onreadystatechange`**：处理 **`readyState`** 属性变化时的回调函数。
2. **`readyState`**：当前请求的状态。
    
    **`readyState`** 属性共有五个取值，分别表示不同的状态：
    
    1. **`0`** (UNSENT)：未打开。已创建 XMLHttpRequest 对象，但尚未调用 **`open()`** 方法。
    2. **`1`** (OPENED)：已打开。已调用 **`open()`** 方法，但尚未调用 **`send()`** 方法。
    3. **`2`** (HEADERS_RECEIVED)：已获取响应头。已调用 **`send()`** 方法，并收到了响应头。
    4. **`3`** (LOADING)：正在下载响应体。已收到响应头，并正在下载响应体。
    5. **`4`** (DONE)：已完成。已下载完整个响应体，并且可以在客户端使用。
3. **`status`**：响应的 HTTP 状态码。
4. **`statusText`**：HTTP 状态码对应的文本信息。
5. **`response`**：响应内容。具体类型由响应头中的 **`Content-Type`** 字段决定。
6. **`responseText`**：响应内容的字符串形式。
7. **`responseXML`**：响应内容的 XML 形式。
8. **`timeout`**：请求超时时间，单位为毫秒。
9. **`withCredentials`**：指定是否允许跨域请求时携带 cookie。
10. **`upload`**：上传相关的属性和方法，例如 **`onprogress`** 和 **`abort()`**。
---
**方法**
1. abort()  取消当前发送的请求
2. getAllResponseHeaders()  获得所有的HTTP请求头
3. getResponseHeader()  获取一个指定的HTTP请求头
4. open() 创建一个HTTP请求，并指定请求模式，GET、POST请求
5. send() 将创建的请求发送到服务器端，并接收回应信息
6. setRequestHeader() 设置一个指定的HTTP请求头
---
原生ajax实现： 
1. 首先要用 new XMLHttpRequest() 来创建一个 XHR 对象 `const xhr = new XMLHttpRequest()`
2. 初始化XHR对象，设置请求方法和URL  `xhr.open('GET','http://127.0.0.1:8000/server')`
3. 发送 `xhr.send()`
4. 事件绑定 处理服务器返回的结果  
   ```xhr.onredaystatechange = function(){}```
---
## JSON格式问题
 两种解决方案
 1. 手动对数据转换 let data = JSON.parse(xhr.response)
 2. 自动转换 设置响应体数据类型为json  `xhr.responseType = 'json'`

## 重复请求问题
 1. 添加一个标识变量 isSending 为假
 2. 如果isSending是真的，说明已经发送了请求，取消发送的请求
 3. 如果 readyState === 4 说明发送成功，把isSending改为假
        
