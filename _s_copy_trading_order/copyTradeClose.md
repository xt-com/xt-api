---
title: Close copy order
position_number: 8
type: post
description: /v1/copy-trade-order/copy-trade/order/close
parameters:
    -
        name: leaderOrderId
        type: number
        mandatory: true
        default:
        description: leader order id
        ranges:
    -
        name: symbol
        type: string
        mandatory: true
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
