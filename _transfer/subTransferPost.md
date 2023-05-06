---
title: Transfer between sub-account business systems
position_number: 2
type: post
description: /v4/balance/account/transfer
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
    -
        name: toAccountId
        type: long
        mandatory: true
        default:
        description: Transfer-in account id (must belong to the same user as the transfer-out account ID)
        ranges:
    -
        name: fromAccountId
        type: long
        mandatory: false
        default:
        description: Transfer-out account id
        ranges: 
content_markdown: >-


left_code_blocks:
    -
        code_block: |-
            public String accountTransferPost(){


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
