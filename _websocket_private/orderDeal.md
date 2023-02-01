---
title: Order filled
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
    param

    format: trade

    eg: trade
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
                    "event": "trade", 
                    "data": {
                        "s": "btc_usdt",                // symbol
                        "t": 1656043204763,             //time 
                        "i": "6316559590087251233",     // tradeId
                        "oi": "6216559590087220004",    // orderId
                        "p": "30000",                   // trade price
                        "q": "3",                       // qty quantity
                        "v": "90000"                    //volumn trade amount
                    }
                }
        title: push
        language: json
---
