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
                    "s":"btc_index", //trading pair
                    "p":"50000",    //price
                    "a":"0.1"   //Quantity
                    "m": "BID"   //Deal side  BID:Buy ASK:Sell
                    "t":123124124   //timestamp
                }
            }
        title: Response
        language: json
---
