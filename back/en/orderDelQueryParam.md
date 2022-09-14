---
title: Cancell order by query param
position_number: 3
type: delete
split: -------------------------------------
description: /v4/order
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default:
        description: 
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"cancelId\": \"6216559590087220004\"\r\n  }\r\n}"
        title: Response
        language: json
---
