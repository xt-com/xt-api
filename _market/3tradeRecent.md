---
title: Query the list of recent transactions
position_number: 3
type: get
description: /v4/public/trade/recent
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: trading pair
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '200'
        description: 
        ranges: 1，1000
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String tradeRecent(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n      \"i\": 0,   //ID\r\n      \"t\": 0,   //transaction time\r\n      \"p\": \"string\", //transaction price\r\n      \"q\": \"string\",  //transaction quantity\r\n      \"v\": \"string\",  //transaction volume\r\n      \"b\": true   //buyerMaker\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
