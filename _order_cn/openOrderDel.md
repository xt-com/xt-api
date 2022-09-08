---
title: 撤销当前挂单
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
        description: 交易对，不传代表所有
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: >-
            业务类型  SPOT-现货, LEVER-杠杆
        ranges:
    -
        name: side
        type: string
        mandatory: false
        default:
        description: BUY-买,SELL-卖
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
