---
title: 设置带单或跟单止盈止损
position_number: 5
type: post
description: /v1/copy-trade-order/copy-trade/order/stop-profit-loss
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对
        ranges:
    -
        name: leaderOrderId
        type: number
        mandatory: true
        default:
        description: 跟单止盈止损传leaderOrderId，带单止盈止损传orderId
        ranges:
    -
        name: triggerProfitPrice
        type: number
        mandatory: false
        default:
        description: 止盈价格
        ranges:
    -
        name: triggerStopPrice
        type: number
        mandatory: false
        default:
        description: 止损价格
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
