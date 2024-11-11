---
title: BTCsn deposit
position_number: 6
type: post
description: /v4/nft/deposit
parameters:
    -
        name: 'currency'
        type: string
        mandatory: true
        default:
        description: currency
        ranges:
    -
        name: 'serial'
        type: string
        mandatory: true
        default:
        description: serial
        ranges:
    -
        name: 'passcode'
        type: string
        mandatory: true
        default:
        description: passcode
        ranges: 
content_markdown: |-
                Note: The parameters are placed in the body in the form of json
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
                    "currencyId":"123",
                    "serial":"123456",
                    "passcode":12345
                }
        title: Request
        language: json
    -
        code_block: |-
                {
                    "rc": 0,
                    "mc": "SUCCESS",
                    "ma": [],
                    "result": {      
                    }
                }
        title: Response
        language: json    
---
