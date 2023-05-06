---
title: Transfer between user business systems
position_number: 1
type: post
description: /v4/balance/transfer
parameters:
    -
        name: bizId
        type: string
        mandatory: true
        default:
        description: Unique id for idempotent processing
        ranges: Maximum length is 128
    -
        name: from
        type: enum
        mandatory: true
        default: 
        description: Fund transfer out account
        ranges: <a href="#bizType">bizType enmu</a>
    -
        name: to
        type: enum
        mandatory: true
        default: 
        description: Fund transfer in account
        ranges: <a href="#bizType">bizType enum</a>
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: Currency name must be all lowercase (usdt,btc)
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: The transfer symbol must be all lowercase (this field must be passed if one of the transfer-in and transfer-out parties is leverage)
        ranges:
    -
        name: amount
        type: bigDecimal
        mandatory: true
        default:
        description: Transfer amount
        ranges:

content_markdown: >-


left_code_blocks:
    -
        code_block: |-
            public String transferPost(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                  "rc": 0,
                  "mc": "SUCCESS",
                  "ma": [],
                  "result": 123456 //The returned unique id of the transfer, it is recommended to store it for reconciliation
                }
        title: Response
        language: json
---
