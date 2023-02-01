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
        code_block: |-
                {
                  "rc": 0,
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                    "currency": "usdt",  
                    "currencyId": 0,   
                    "frozenAmount": 0,  
                    "availableAmount": 0,  
                    "totalAmount": 0,    
                    "convertBtcAmount": 0  //Converted BTC amount
                  }
                }
        title: Response
        language: json
---

