---
title: 查询带单员币种偏好
position_number: 27
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-trading-prefer
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 带单员账号id
        ranges:
    -
        name: days
        type: number
        mandatory: false
        default: 7
        description: 查询天数
        ranges: "7,30,90,180"
content_markdown: >-
    #### **限流规则**

    2/s/ip
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
                      "ma": [
                        {}
                      ],
                      "mc": "string",
                      "rc": 0,
                      "result": [
                        {
                          "count": 0,           //交易次数
                          "index": 0,
                          "percentage": 0,      //占比
                          "pnl": 0,             //交易盈亏
                          "symbol": "string"    //交易对,其他返回others
                        }
                      ]
                    }
        title: Response
        language: json
---
