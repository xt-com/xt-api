---
title: 获取币种资产列表
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
        description: '币种列表,逗号分隔，eg:  usdt,btc'
        ranges:
content_markdown: >-
    #### **限流规则**

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
                    "assets": [    //参数内容参考获取单个币种资产接口
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

