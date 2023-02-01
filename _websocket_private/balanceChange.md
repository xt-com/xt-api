---
title: Change of balance
position_number: 5
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
    param

    format: balance

    eg: balance
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "balance", 
                "event": "balance", 
                "data": {
                    "a": "123",           // accountId                     
                    "t": 1656043204763,   // time happened time
                    "c": "btc",           // currency
                    "b": "123",           // balance available balance
                    "f": "11",            // frozen
                    "z": "SPOT",           // bizType [SPOT,LEVER]
                    "s": "btc_usdt"       // symbol
                }
            }
        title: push
        language: json
---
