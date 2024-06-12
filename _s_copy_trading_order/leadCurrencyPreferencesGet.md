---
title: Get lead trader currency preferences
position_number: 27
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-trading-prefer
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
                      "result": [
                        {
                          "count": 0,           //trade count
                          "index": 0,
                          "percentage": 0,      //percentage
                          "pnl": 0,             //trading Profit and Loss
                          "symbol": "string"    //symbol, others return others
                        }
                      ]
                    }
        title: Response
        language: json
---
