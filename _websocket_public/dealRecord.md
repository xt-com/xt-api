---
title: Trade record
position_number: 8
type:
description: 

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
    
    rate: real
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
                    "b": true                 // whether is buyerMaker or not
                }
            }
        title: Response
        language: json
---
