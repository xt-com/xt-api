---
title: 交易对24h统计
position_number: 8
type: get
split: -------------------------------------
description: /v4/public/ticker/24h
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: string
        mandatory: false
        default:
        description: '交易对集合 eg: ["BTC_USDT", "ETH_USDT"]'
        ranges:
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",   //交易对(symbol)\r\n      \"cv\": \"0.0000\",   //价格变动(change value)\r\n      \"cr\": \"0.00\",     //价格变动百分比(change rate)\r\n      \"o\": \"9000.0000\",   //最早一笔(open)\r\n      \"l\": \"9000.0000\",   //最低(low)\r\n      \"h\": \"9000.0000\",   //最高(high)\r\n      \"c\": \"9000.0000\",   //最后一笔(close)\r\n      \"q\": \"0.0136\",      //成交量(quantity)\r\n      \"v\": \"122.9940\"    //成交额(volume)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
