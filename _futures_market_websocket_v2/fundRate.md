---
title: Fund rate
position_number: 18
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

    format: fundRate@\{symbol\}

    eg: fundRate@btc\_usdt
    
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
                    "topic": "fundRate", 
                    "event": "fundRate@btc_usdt", 
                    "data": {
                        "s":"btc_usdt", //Trading pair
                        "r":"0.01",    // Fund fee
                        "t":123124124   //timestamp
                   }
                }
        title: Response
        language: json
---
