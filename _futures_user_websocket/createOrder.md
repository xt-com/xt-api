---
title: place an order
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
        The premise is that you must log in before you can operate, and the response result
left_code_blocks:
    -
      code_block: |-
         {
          "id": "{id}",    //user defined
          "op": "order",
          "args": {},//The parameters are consistent with the single order interface
         }
      title: subscription request
      language: javascript
    -
       code_block: |-
          {
            "id": "{id}",  /user defined
            "op": "order",
            "code": 0, //0 success 1 failure
            "msg":"",
            "data":{
               "orderId":"1213",
               "clientOrderId":"1213"
            }
           }
       title: response push
       language: javascript
right_code_blocks:
     -
        code_block: ' {"id":"test2","op":"order","args":{"symbol":"btc_usdt","price":"22909","origQty":"40","orderType":"LIMIT","orderSide":"BUY","positionSide":"LONG","timeInForce":"GTC","clientOrderId":"204788317630342726"}}'
        title: subscription request
        language: json
     -
        code_block: '{"code":0,"msg":"success","id":"test2","op":"order","data":{"orderId":"205107072885609088","clientOrderId":"204788317630342726"}}'
        title: response push
        language: json
---
