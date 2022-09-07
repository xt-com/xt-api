---
title: 查询近期成交列表
position_number: 3
type: get
description: /v4/public/trade/recent
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '200'
        description: 数量
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n      \"i\": 0,   //ID\r\n      \"t\": 0,   //成交时间(time)\r\n      \"p\": \"string\", //成交价(price)\r\n      \"q\": \"string\",  //成交量(quantity)\r\n      \"v\": \"string\",  //成交额(volume)\r\n      \"b\": true   //方向(buyerMaker)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
