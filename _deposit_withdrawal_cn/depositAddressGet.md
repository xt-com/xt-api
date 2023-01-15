---
title: 获取充值地址
position_number: 2
type: get
description: /v4/deposit/address
parameters:
    -
        name: chain
        type: string
        mandatory: true
        default:
        description: 转账网络名称
        ranges:
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: 币种名称
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
                    "address": "0xfa3abfa50eb2006f5be7831658b17aca240d8526",     //钱包地址
                    "memo": ""
                  }
                }
        title: Response
        language: json
---
