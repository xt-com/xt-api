---
title: Sell all lead order
position_number: 7
type: post
description: /v1/copy-trade-order/copy-trade/order/sell-all
parameters:
    -
        name: leaderOrder
        type: bool
        mandatory: true
        default:
        description: true：sell all lead order; false：sell all copy order
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: symbol
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

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
