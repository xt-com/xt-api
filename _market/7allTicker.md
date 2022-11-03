---
title: Full ticker
position_number: 7
type: get
description: /v4/public/ticker
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: trading pair  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: array
        mandatory: false
        default:
        description: 'Collection of trading pairs. Priority is higher than symbol. eg: btc_usdt,eth_usdt'
        ranges:
    -
        name: tags
        type: string
        mandatory: false
        default:
        description: 'Set of tags, separated by commas, currently only supports spot'
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**


    1\.single symbol：100/s/ip


    2\.multiple symbols：10/s/ip


left_code_blocks:
    -
        code_block: |-
            public String price(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "rc": 0,
                "mc": "SUCCESS",
                "ma": [],
                "result": [
                      {
                        "s": "btc_usdt",        //symbol
                        "t": 1662444879425,     //update time
                        "cv": "0.00",           //change value
                        "cr": "0.0000",         //change rate
                        "o": "200.00",          //open
                        "l": "200.00",          //low
                        "h": "200.00",          //high
                        "c": "200.00",          //close
                        "q": "0.002",           //quantity
                        "v": "0.40",            //volume
                        "ap": null,             //asks price(sell one price)
                        "aq": null,             //asks qty(sell one quantity)
                        "bp": null,             //bids price(buy one price)
                        "bq": null              //bids qty(buy one quantity)
                        }
                    ]
            }
        title: Response
        language: json
---
