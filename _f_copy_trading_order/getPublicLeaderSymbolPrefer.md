---
title: Public get leader's prefer
position_number: 26
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-symbol-prefer
parameters:
   -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader accountId
        ranges:
   -
        name: recentDays
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
                        "result":{
                                "index": 0, // 
                                "symbol": "string", // symbol
                                "count": 0, // count
                                "percentage": 0, // percent
                                "pnl": 0 // pnl
                         }
                        }
        title: Response
        language: json
---
