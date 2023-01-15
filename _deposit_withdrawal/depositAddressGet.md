---
title: Get the deposit address
position_number: 2
type: get
description: /v4/deposit/address
parameters:
    -     
        name: chain
        type: string
        mandatory: true
        default:
        description: network for deposit 
        ranges:
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: currency name
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
                    "address": "0xfa3abfa50eb2006f5be7831658b17aca240d8526",     //wallet address
                    "memo": ""
                  }
                }
        title: Response
        language: json
---
