---
title: Agg ticker
position_number: 12
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

    format: aggTicker@\{symbol\}

    eg: aggTicker@btc\_usdt
    
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
                    "topic": "aggTicker", 
                    "event": "aggTicker@btc_usdt", 
                    "data": {
                        "s":"btc_index", //trading pair
                        "o":"49000",     // opening price
                        "c":"50000",    //Closing price
                        "h":"0.1",      //highest price
                        "l":"0.1",       //lowest price
                        "a":"0.1",      //volume
                        "v":"0.1",       //Turnover
                        "ch":"0.21",   //Quote change

                        "i":"0.21" ,   //index price

                        "m":"0.21",   //mark price

                        "bp":"0.21",   //bid price

                        "ap":"0.21" ,  //ask price
                        "t":123124124   //timestamp
                   }
                }
        title: Response
        language: json
---
