---
title: Get K-line data
position_number: 4
type: get
split: -------------------------------------
description: /v4/public/kline
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: trading pair  eg:btc_usdt
        ranges:
    -
        name: interval
        type: string
        mandatory: true
        default:
        description: |-
            K line type,
            eg:1m
        ranges: '[1m;3m;5m;15m;30m;1h;2h;4h;6h;8h;12h;1d;3d;1w;1M]'
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: start timestamp
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: end timestamp
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '100'
        description:
        ranges: 1~1000
content_markdown: >-
    #### **Limit Flow Rules**
    
    100/s/ip

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
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": [
                    {
                      "t": 1662601014832,   //open time
                      "o": "30000",         //open price
                      "c": "32000",         //close price
                      "h": "35000",         //highest price
                      "l": "25000",         //lowest price
                      "q": "512",           //transaction quantity
                      "v": "15360000"       //transaction volume
                    }
                  ]
                }
        title: Response
        language: json
---
