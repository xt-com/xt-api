---
title: Query historical transaction list
position_number: 4
split: -------------------------------------
type: get
description: /v4/public/trade/history
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
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: 'Start ID，eg: 6216559590087220004'
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String tradeHistory(){


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
