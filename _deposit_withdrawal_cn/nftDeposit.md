---
title: BTCsn充值
position_number: 6
type: post
description: /v4/nft/deposit
parameters:
    -
        name: 'currency'
        type: string
        mandatory: true
        default:
        description: 币种
        ranges:
    -
        name: 'serial'
        type: string
        mandatory: true
        default:
        description: 序列号
        ranges:
    -
        name: 'passcode'
        type: string
        mandatory: true
        default:
        description: 密码
        ranges: 
content_markdown: |-
                注意：参数以json形式放在body中
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
