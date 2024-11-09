---
title: 查询带单员每日收益图图表
position_number: 26
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-income-chart
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
        type: string
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
                         "amount": 0,
                         "id": "string",
                         "time": 0
                       }
                     ]
                   }
        title: Response
        language: json
---
