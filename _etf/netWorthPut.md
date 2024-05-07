---
title: Update net worth 
position_number: 1
type: put
description: /v4/etf/net-worth
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: Trading pair, e.g. btc3l_usdt
        ranges:
    -
        name: netWorth
        type: number
        mandatory: true
        default:
        description: net worth
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
        code_block: |-
                {
                  "rc": 0,
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                  }
                }
        title: Response
        language: json
---

