---
title: Cancel the current pending order
position_number: 8
type: delete
split: -------------------------------------
description: /v4/open-order
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: Trading pair, if not filled in, represents all
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: "SPOT, LEVER"
        ranges:
    -
        name: side
        type: string
        mandatory: false
        default:
        description: BUY,SELL
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block:
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
