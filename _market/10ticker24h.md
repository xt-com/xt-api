---
title: Get 24h statistics ticker
position_number: 10
type: get
split: -------------------------------------
description: /v4/public/ticker/24h
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
        code_block:
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
                      "s": "btc_usdt",      //symbol
                      "t": 1661856036925,   //time 
                      "cv": "0.0000",       //price change value
                      "cr": "0.00",         //price change rate
                      "o": "9000.0000",     //open price
                      "l": "9000.0000",     //lowest price
                      "h": "9000.0000",     //highest price
                      "c": "9000.0000",     //close price
                      "q": "0.0136",        //transaction quantity
                      "v": "122.9940"       //transaction volume
                    }
                  ]
                }
        title: Response
        language: json
---
