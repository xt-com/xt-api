---
title: Transaction record (real-time push)
position_number: 7
type:
description: |+

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
    **request**

    format: trade@\{symbol\}

    eg: trade@btc\_usdt
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade", 
                "event": "trade@btc_usdt", 
                "data": {
                    "s": "btc_usdt",          // symbol
                    "i": 6316559590087222000, // trade id
                    "t": 1655992403617,       // trade time
                    "p": "43000",             // trade price
                    "q": "0.21",              // qty，trade quantity
                    "b": true                 // buyer
                }
            }
        title: Response
        language: json
---
