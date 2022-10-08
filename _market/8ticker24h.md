---
title: Get 24h statistics ticker
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
    #### **Gateway Current Limit**


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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",   //symbol\r\n      \"cv\": \"0.0000\",   //price change value\r\n      \"cr\": \"0.00\",     //price change rate\r\n      \"o\": \"9000.0000\",   //open price\r\n      \"l\": \"9000.0000\",   //lowest price\r\n      \"h\": \"9000.0000\",   //highest price\r\n      \"c\": \"9000.0000\",   //close price\r\n      \"q\": \"0.0136\",      //transaction quantity\r\n      \"v\": \"122.9940\"    //transaction volume\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
