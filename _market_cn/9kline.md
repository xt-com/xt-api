---
title: k线数据
position_number: 9
type: get
description: /v4/public/kline
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对  eg:btc_usdt
        ranges:
    -
        name: interval
        type: string
        mandatory: true
        default:
        description: |-
            K线类型 ,1m;3m;5m;15m;30m;1h;2h;4h;6h;8h;12h;1d;3d;1w;1M
            eg:1m
        ranges: '[1m;3m;5m;15m;30m;1h;2h;4h;6h;8h;12h;1d;3d;1w;1M]'
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: 起始时间戳
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 结束时间戳
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '100'
        description: 限制数量
        ranges: 1~1000
content_markdown:
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n      \"t\": 0,  //开盘时间(time)\r\n      \"o\": \"string\", //开盘价(open)\r\n      \"c\": \"string\",  //收盘价(close)\r\n      \"h\": \"string\",  //最高价(high)\r\n      \"l\": \"string\",  //最低价(low)\r\n      \"q\": \"string\",  //成交量(quantity)\r\n      \"v\": \"string\"    //成交额(volume)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
