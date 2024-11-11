---
title: Public get leader day income rate
position_number: 24
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-day-income-rate
parameters:
   -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader accountId
        ranges:
   -
        name: days
        type: number
        mandatory: false
        default:
        description: days
        ranges:

content_markdown: >-
    #### **Limit Flow Rules**

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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": {
                               "totalIncome":[{
                                "amount": 0, // amount
                                 "time": 0 // time
                                }],
                               "totalIncomeRate":[{
                                "amount": 0, // amount
                                "time": 0 // time
                                }],
                                "incomeRate":[
                                 {"amount": 0, // amount
                                 "time": 0 // time
                                 }]
                        }
                        }
        title: Response
        language: json
---
