---
title: Get K-line data
position_number: 9
type: get
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
            K line type ,1m;3m;5m;15m;30m;1h;2h;4h;6h;8h;12h;1d;3d;1w;1M
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
    #### **Gateway Current Limit**
    
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n      \"t\": 1662601014832,  //open time\r\n      \"o\": \"30000\", //open price\r\n      \"c\": \"32000\",  //close price\r\n      \"h\": \"35000\",  //highest price\r\n      \"l\": \"25000\",  //lowest price\r\n      \"q\": \"512\",  //transaction quantity\r\n      \"v\": \"15360000\"    //transaction volume\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
