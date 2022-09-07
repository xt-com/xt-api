---
title: 获取单个币种资产
position_number: 2
type: get
description: /sapi/v4/balance/balance
parameters:
    -
        name: 'currency '
        type: string
        mandatory: true
        default:
        description: eg:usdt
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"currency\": \"usdt\",  //币种\r\n    \"currencyId\": 0,   //币种ID\r\n    \"frozenAmount\": 0,  //冻结数量\r\n    \"availableAmount\": 0,  //可用数量\r\n    \"totalAmount\": 0,    //总数量\r\n    \"convertBtcAmount\": 0  //折算BTC数量\r\n  }\r\n}"
        title: Response
        language: json
---
