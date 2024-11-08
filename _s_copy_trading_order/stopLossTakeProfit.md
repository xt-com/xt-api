---
title: Set stop-loss or stop-profit for lead or copy order
position_number: 5
type: get
description: /v1/copy-trade-order/copy-trade/order/stop-profit-loss
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: symbol
        ranges:
    -
        name: leaderOrderId
        type: number
        mandatory: true
        default:
        description: For copy order, need leaderOrderId; for lead order, need orderId
        ranges:
    -
        name: triggerProfitPrice
        type: number
        mandatory: false
        default:
        description: trigger profit price
        ranges:
    -
        name: triggerStopPrice
        type: number
        mandatory: false
        default:
        description: trigger stop price
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
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
