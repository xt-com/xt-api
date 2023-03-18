---
title: Change of order
position_number: 7
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

    format: order

    eg: order
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "order", 
                    "event": "order", 
                    "data": {
                        "s": "btc_usdt",                // symbol
                        "t": 1656043204763,             // time happened time
                        "i": "6216559590087220004",     // orderId,
                        "ci": "test123",                // clientOrderId
                        "st": "PARTIALLY_FILLED",       // state
                        "sd": "BUY",                    // side BUY/SELL
                        "eq": "2",                      // executedQty executed quantity
                        "ap": "30000",                  // avg price
                        "f":"0.002"                     // fee 
                    }
                }
        title: push
        language: json
---
