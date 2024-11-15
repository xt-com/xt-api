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
                    "s": "btc_usdt",           //symbol
                    "i": 6316559590087222000,  //tradeId
                    "t": 1655992403617,        //time
                    "oi": 6616559590087222666, //orderId
                    "p": "43000",              //price
                    "q": "0.21",               //quantity
                    "v": "9030"                //quoteQty
                    "b": true                  //whether is buyerMaker or not
                }
            }
        title: Response
        language: json
---
