---
title: Get currency information
position_number: 1
type: get
description: /v4/public/currencies
parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n       \"id\": 11,  //currency id\r\n      \"currency\": \"usdt\", //currency name\r\n      \"fullName\": \"usdt\",  //currency full name\r\n      \"logo\": null,   //currency logo\r\n      \"cmcLink\": null,  //cmc link\r\n      \"weight\": 100,    \r\n      \"maxPrecision\": 6,  \r\n      \"depositStatus\": 1,  //Recharge status(0 close 1 open)\r\n      \"withdrawStatus\": 1,  //Withdrawal status(0 close 1 open)\r\n      \"convertEnabled\": 1,  //Small asset exchange switch[0=close;1=open]\r\n      \"transferEnabled\": 1  //swipe switch[0=close;1=open]\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
