---
title: ticker
position_number: 11
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

    format: ticker@\{symbol\}

    eg: ticker@btc\_usdt
    
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
                    "topic": "ticker", 
                    "event": "ticker@btc_usdt", 
                    "data": {
                        "s": "btc_usdt",      // symbol
                        "t": 1657586700119,   // time(Last transaction time)
                        "cv": "-200",         // priceChangeValue(24 hour price change)
                        "cr": "-0.02",        // priceChangeRate 24-hour price change (percentage)
                        "o": "30000",         // open price
                        "c": "39000",         // close price
                        "h": "38000",         // highest price
                        "l": "40000",         // lowest price
                        "q": "4",             // quantity
                        "v": "150000",        // volume
                   }
                }
        title: Response
        language: json
---
