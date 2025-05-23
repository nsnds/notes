# 地址栏输入 URL 敲下回车后发生了什么

1. DNS解析
2. TCP连接（三次握手）
3. 发送请求
4. 服务器处理请求，并返回报文
5. 浏览器解析、渲染页面
6. 断开连接（四次挥手）

## 1. DNS解析

1. 递归查询机制

    浏览器会优先检查本地DNS缓存，若无记录则向本地DNS服务器进行递归查询。
    
    本地服务器若未缓存，则会依次向 `根服务器` => `顶级服务器` => `权威服务器` 迭代查询，最终返回IP地址

## 2. TCP连接

1. 第一次握手：客户端发送SYN包
2. 第二次握手：服务器响应SYN/ACK包
3. 第三次握手：客户端发送ACK包，连接建立

## 5. 浏览器解析、渲染页面
1. 解析HTML，生成DOM树
2. 解析CSS，生成CSS规则树
3. 合并DOM树和CSS规则，生成render树
4. 布局render树，负责计算元素的尺寸和位置
5. 绘制render树，绘制页面像素信息
6. 浏览器将各层的信息发送给GPU，GPU会将各层合成，并显示在屏幕上

## 6. 断开连接

http若开启keep-alive，会在关闭页面时断开TCP连接