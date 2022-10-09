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
        type: array
        mandatory: false
        default:
        description: 'Collection of trading pairs. Priority is higher than symbol. eg: btc_usdt,eth_usdt'
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",  //symbol\r\n      \"t\": \"1661856036925\",  //time \r\n      \"ap\": null,  //asks price(sell one price)\r\n      \"aq\": null,  //asks qty(sell one quantity)\r\n      \"bp\": null,   //bids price(buy one price)\r\n      \"bq\": null    //bids qty(buy one quantity)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
