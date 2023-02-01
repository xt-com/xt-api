---
title: Limited depth
position_number: 9
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

    &nbsp;

    format: depth@\{symbol\},\{levels\}

    levels: 5, 10, 20, 50

    eg: depth@btc\_usdt,20
    
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
                    "topic": "depth", 
                    "event": "depth@btc_usdt,20", 
                    "data": {
                        "s": "btc_usdt",        // symbol
                        "i": 12345678,          // updateId
                        "t": 1657699200000,     // time
                        "a": [                  // asks(sell order)
                            [                   //[0]price, [1]quantity
                                "34000",        //price
                                "1.2"           //quantity 
                            ], 
                            [
                                "34001", 
                                "2.3"
                            ]
                        ], 
                        "b": [                   // bids(buy order)
                            [
                                "32000", 
                                "0.2"
                            ], 
                            [
                                "31000", 
                                "0.5"
                            ]
                        ]
                    }
                }
        title: Response
        language: json
---
