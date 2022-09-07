---
title: 单笔撤单
position_number: 3
type: delete
split: -------------------------------------
description: /sapi/v4/order/order
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default:
        description: 订单ID
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String orderDel(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"cancelId\": \"string\"\r\n  }\r\n}"
        title: Response
        language: json
---
