---
title: Incremental depth (push every second)
position_number: 10
type:
description: |+

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

    format: depth\_update@\{symbol\}

    eg: depth\_update@btc\_usdt
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "depth_update", 
                    "event": "depth_update@btc_usdt", 
                    "data": {
                        "s": "btc_usdt",        // symbol
                        "i": 123,               // updateId
                        "a": [                  // asks  sell order
                            [                   // [0]price, [1]quantity
                                "34000",        //price
                                "1.2"           //quantity
                            ], 
                            [
                                "34001", 
                                "2.3"
                            ]
                        ], 
                        "b": [                  // bids buy order
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
