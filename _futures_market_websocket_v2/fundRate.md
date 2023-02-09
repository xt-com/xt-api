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

    format: fund_rate@\{symbol\}

    eg: fund_rate@btc\_usdt
    
    rate: 60s
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "fund_rate", 
                    "event": "fund_rate@btc_usdt", 
                    "data": {
                        "s":"btc_usdt", //Trading pair
                        "r":"0.01",    // Fund fee
                        "t":123124124   //timestamp
                   }
                }
        title: Response
        language: json
---
