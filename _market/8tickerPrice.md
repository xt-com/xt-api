---
title: Get latest prices ticker
position_number: 8
type: get
description: /v4/public/ticker/price
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
                  "s": "btc_usdt",      //symbol
                  "t": 1661856036925    //time
                  "p": "9000.0000",     //price
                  }
              ]
            }
        title: Response
        language: json
---
