---
title: 交易对当前最优挂单
position_number: 7
type: get
description: /v4/public/ticker/book
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",  //交易对(symbol)\r\n      \"ap\": null,  //asks price(卖一价)\r\n      \"aq\": null,  //asks qty(卖一量)\r\n      \"bp\": null,   //bids price(买一价)\r\n      \"bq\": null    //bids qty(买一量)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
