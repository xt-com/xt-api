---
title: 获取最优挂单ticker
position_number: 9
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
        type: array
        mandatory: false
        default:
        description: '交易对集合，优先级高于symbol。 eg: btc_usdt,eth_usdt'
        ranges:
content_markdown: >-
    #### **网关限流**


    1\.单个交易对：100/s/ip


    2\.多个交易对：10/s/ip


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
