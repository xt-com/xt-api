---
title: Push message format
position_number: 4
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
content_markdown:
left_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade",             
                "event": "trade@btc_usdt",    //title
                "data": { }                   
            }
        title: format
        language: javascript
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "trade", 
                    "event": "trade@btc_usdt", 
                    "data": {
                        "s": "btc_usdt", 
                        "i": 6316559590087222000, 
                        "t": 1655992403617, 
                        "p": "43000", 
                        "q": "0.21", 
                        "b": true
                    }
                }
        title: Example of transaction record (real-time push message)
        language: json
---
