---
title: 卖出全部带单
position_number: 7
type: post
description: /v1/copy-trade-order/copy-trade/order/sell-all
parameters:
    -
        name: leaderOrder
        type: bool
        mandatory: true
        default:
        description: true：卖出全部带单；false：卖出全部跟单
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
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
