---
title: 查询带单员每日累计收益图图表
position_number: 26
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-income-rate
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
                      "result": {
                        "incomeRate": [        //当日收益率
                          {
                            "amount": 0,
                            "id": "string",
                            "time": 0
                          }
                        ],
                        "totalIncome": [        //累计收益
                          {
                            "amount": 0,
                            "id": "string",
                            "time": 0
                          }
                        ],
                        "totalIncomeRate": [    //累计收益率
                          {
                            "amount": 0,
                            "id": "string",
                            "time": 0
                          }
                        ]
                      }
                    }
        title: Response
        language: json
---
