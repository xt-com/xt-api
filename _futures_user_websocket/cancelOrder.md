---
title: Cancellation
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
     The premise is that you must log in before you can operate, and the response result
left_code_blocks:
    -
      code_block: |-
         {
          "id": "{id}",    //user defined
          "op": "order_cancel",
          "args": {},//The parameters are consistent with the single order interface.
         }
         title: subscription request
         language: javascript
    -
       code_block: |-
          {
            "id": "{id}",  /user defined
            "op": "order_cancel",
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
        code_block: '{"id":"test2","op":"order_cancel","args":{"clientOrderId":"204788317630342733"}}'
        title: subscription request
        language: json
     -
         code_block: '{"code":1,"msg":"invalid order","id":"test2","op":"order_cancel","data":{"orderId":"","clientOrderId":"204788317630342733"}}'
         title: response push
         language: json
---
