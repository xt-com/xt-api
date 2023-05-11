---
title: 撤单
position_number: 4
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
content_markdown: |-
      前提，必须登陆后才可以操作，响应结果
left_code_blocks:
    -
      code_block: |-
         {
          "id": "{id}",    //用户自己定义
          "op": "order_cancel",
          "args": {},//参数和单个下单接口一致。
         }
      title: 订阅请求 
      language: javascript
    -
       code_block: |-
          {
            "id": "{id}",  /用户自己定义
            "op": "order_cancel",
            "code": 0, //0 成功 1失败
            "msg":"",
            "data":{
               "orderId":"1213",
               "clientOrderId":"1213"
            }
           }
       title: 响应推送
       language: javascript
right_code_blocks:
     -
        code_block: '{"id":"test2","op":"order_cancel","args":{"clientOrderId":"204788317630342733"}}'
        title: 订阅请求
        language: json
     -
         code_block: '{"code":1,"msg":"invalid order","id":"test2","op":"order_cancel","data":{"orderId":"","clientOrderId":"204788317630342733"}}'
         title: 响应推送
         language: json
---
