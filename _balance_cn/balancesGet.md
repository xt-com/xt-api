---
title: 获取币种资产列表
position_number: 3
type: get
description: /v4/balance/balances
parameters:
    -
        name: currencies
        type: string
        mandatory: false
        default:
        description: '币种列表,逗号分隔，eg:  usdt,btc'
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"totalBtcAmount\": 0,\r\n    \"assets\": [    //参数内容参考获取单个币种资产接口\r\n      {        \r\n        \"currency\": \"string\",\r\n        \"currencyId\": 0,\r\n        \"frozenAmount\": 0,\r\n        \"availableAmount\": 0,\r\n        \"totalAmount\": 0,\r\n        \"convertBtcAmount\": 0\r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
