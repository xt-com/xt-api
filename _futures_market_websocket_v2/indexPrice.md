---
title: Index price
position_number: 14
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

    format: indexPrice@\{symbol\}

    eg: indexPrice@btc\_usdt
    
    rate: 1000ms
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "indexPrice", 
                    "event": "indexPrice@btc_usdt", 
                    "data": {
                        "s":"btc_usdt", //trading pair
                        "p":"50000",    //price
                        "t":123124124   //timestamp
                   }
                }
        title: Response
        language: json
---
