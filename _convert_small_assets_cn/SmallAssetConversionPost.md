---
title: 小额资产转换
position_number: 2
type: post
description: /balance/convert
parameters:
    -
        name: currencies
        type: string
        mandatory: true
        default:
        description: '加密币集合，逗号分割 eg:  usdt,btc'
        ranges: 最多支持5个加密币转换
content_markdown: >-
    #### **限流规则**

    1/s/apikey
  
    #### **备注**

    24小时只能兑换一次
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
                              
                  }
                }
        title: Response
        language: json
---
