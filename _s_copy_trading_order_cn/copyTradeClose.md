---
title: 结束跟单
position_number: 7
type: post
description: /v4/order/copy-trade/order/close
parameters:
    -
        name: leaderOrderId
        type: number
        mandatory: true
        default:
        description: 带单订单id
        ranges:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对
        ranges:
content_markdown: >-
    #### **限流规则**

    10/s/apikey
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
        code_block: |-
                   {
                     "rc": 0,
                     "mc": "string",
                     "ma": [
                       {}
                     ],
                     "result": true
                   }
        title: Response
        language: json
---
