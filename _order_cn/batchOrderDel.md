---
title: 批量撤单
position_number: 6
type: delete
split: -------------------------------------
description: /v4/order/batch-order
parameters:
    -
        name: orderIds
        type: string
        mandatory: true
        default:
        description: 订单ID集合,eg:[ "6216559590087220004", "6216559590087220004" ]
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String batchOrderDel(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {}\r\n}"
        title: Response
        language: json
---
