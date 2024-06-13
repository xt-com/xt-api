---
title: 卖出带单
position_number: 6
type: post
description: /v1/copy-trade-order/copy-trade/order/sell
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

    50/s/apikey
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
