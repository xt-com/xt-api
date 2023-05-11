---
title: 下单
position_number: 3
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
     前提，必须登陆后才可以操作
left_code_blocks:
    -
      code_block: |-
         {
          "id": "{id}",    //用户自己定义
          "op": "order",
          "args": {},//参数和单个下单接口一致。
         }
      title: 订阅请求
      language: javascript
    -
       code_block: |-
          {
            "id": "{id}",  /用户自己定义
            "op": "order",
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
        code_block: ' {"id":"test2","op":"order","args":{"symbol":"btc_usdt","price":"22909","origQty":"40","orderType":"LIMIT","orderSide":"BUY","positionSide":"LONG","timeInForce":"GTC","clientOrderId":"204788317630342726"}}'
        title: 订阅请求
        language: json
     -
         code_block: '{"code":0,"msg":"success","id":"test2","op":"order","data":{"orderId":"205107072885609088","clientOrderId":"204788317630342726"}}'
         title: 响应推送
         language: json
---
