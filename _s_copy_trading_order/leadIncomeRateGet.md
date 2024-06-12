---
title: Get lead trader weekly income rate chart
position_number: 26
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-income-rate
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader account id
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
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
                        "incomeRate": [        //income rate
                          {
                            "amount": 0,
                            "id": "string",
                            "time": 0
                          }
                        ],
                        "totalIncome": [        //total income
                          {
                            "amount": 0,
                            "id": "string",
                            "time": 0
                          }
                        ],
                        "totalIncomeRate": [    //total income rate
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
