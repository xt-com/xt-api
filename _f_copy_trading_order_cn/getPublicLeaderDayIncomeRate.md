---
title: 获取交易员收益率图表
position_number: 24
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-day-income-rate
parameters:
   -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 交易员帐号
        ranges:
   -
        name: days
        type: number
        mandatory: false
        default:
        description: 天数
        ranges:

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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": {
                               "totalIncome":[{
                                "amount": 0, // 额度
                                 "time": 0 // 时间
                                }],
                               "totalIncomeRate":[{
                                "amount": 0, // 额度
                                "time": 0 // 时间
                                }],
                                "incomeRate":[
                                 {"amount": 0, // 额度
                                 "time": 0 // 时间
                                 }]
                        }
                        }
        title: Response
        language: json
---
