---
title: Get a list of currency assets
position_number: 3
type: get
split: -------------------------------------
description: /v4/balances
parameters:
    -
        name: currencies
        type: string
        mandatory: false
        default:
        description: 'List of currencies, comma separated,eg:  usdt,btc'
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    10/s/apikey
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
                    "totalBtcAmount": 0,
                    "assets": [    
                      {        
                        "currency": "string",
                        "currencyId": 0,
                        "frozenAmount": 0,
                        "availableAmount": 0,
                        "totalAmount": 0,
                        "convertBtcAmount": 0
                      }
                    ]
                  }
                }
        title: Response
        language: json
---

