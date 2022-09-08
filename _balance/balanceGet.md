---
title: Get a single currency asset
position_number: 2
type: get
description: /v4/balance
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"currency\": \"usdt\",  \r\n    \"currencyId\": 0,   \r\n    \"frozenAmount\": 0,  \r\n    \"availableAmount\": 0,  \r\n    \"totalAmount\": 0,    \r\n    \"convertBtcAmount\": 0  //Converted BTC amount\r\n  }\r\n}"
        title: Response
        language: json
---
