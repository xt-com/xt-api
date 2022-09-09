---
title: 获取完整ticker
position_number: 8
type: get
description: /v4/public/ticker/full
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
        type: array
        mandatory: false
        default:
        description: '交易对集合，优先级高于symbol。 eg: btc_usdt,eth_usdt'
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String full(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",     //交易对(symbol)\r\n      \"t\": 1661856036925,  //时间(time)\r\n      \"cv\": \"0.0000\",      //价格变动(change value)\r\n      \"cr\": \"0.00\",        //价格变动百分比(change rate)\r\n      \"o\": \"9000.0000\",    //最早一笔(open)\r\n      \"l\": \"9000.0000\",    //最低(low)\r\n      \"h\": \"9000.0000\",    //最高(high)\r\n      \"c\": \"9000.0000\",    //最后一笔(close)\r\n      \"q\": \"0.0136\",       //成交量(quantity)\r\n      \"v\": \"122.9940\",     //成交额(volume)\r\n      \"ap\": null,          //asks price(卖一价)\r\n      \"aq\": null,          //asks qty(卖一量)\r\n      \"bp\": null,           //bids price(买一价)\r\n      \"bq\": null           //bids qty(买一量)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
