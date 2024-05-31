---
title: 基本信息
position_number: 1
type:
description:
parameters:
    -
        name:
        type:
        mandatory: false
        default:
        description:
        ranges:
content_markdown: >-
    #### **基地址**

    ##### **wss://fstream.xt.com/ws/user**


    ---


    #### **Request Headers**

    请求头必须添加压缩扩展协议。

    <font color="#aa5500">Sec-Websocket-Extensions:permessage-deflate</font>  


    ---


    #### **订阅步骤**
    
    第一步：用户要先调用接口:/v1/user/listen-key   获取listenKey <br/>
  
    第二步：订阅用户相关的websocket事件时需要发送：{"method":"SUBSCRIBE","params":["order@{上一步获取的listenKey}"],"id":"test1"} <br/>

    如果收到"invalid_listen_key"表示listenKey过期或者无效，需要重新请求获取listenKey <br/>

    ps：listenKey通过接口获取 <br/>

    订阅之后会推送用户相关数据
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block:
    title:
    language:
---
