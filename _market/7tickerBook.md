---
title: Get the best pending order ticker
position_number: 7
type: get
description: /v4/public/ticker/book
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
        type: string
        mandatory: false
        default:
        description: 'Collection of trading pairs eg: ["BTC_USDT", "ETH_USDT"]'
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",  //symbol\r\n      \"ap\": null,  //asks price(sell one price)\r\n      \"aq\": null,  //asks qty(sell one quantity)\r\n      \"bp\": null,   //bids price(buy one price)\r\n      \"bq\": null    //bids qty(buy one quantity)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
