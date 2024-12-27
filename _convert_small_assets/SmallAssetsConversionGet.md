---
title: Query Small Assets Conversion List
position_number: 3
type: get
description: /balance/convert/list
parameters:
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: 'currency eg:  usdt'
        ranges: 
    -
        name: startTime
        type: number
        mandatory: true
        default:
        description: start time
        ranges:
    -
        name: endTime
        type: number
        mandatory: true
        default:
        description: end time
        ranges:

content_markdown: >-
    #### **Limit Flow Rules**

    1/s/apikey
  
    #### **Remark**

    Return only the latest 100 records
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
                  "result": [
                                {
                                    "currency": "ADA",          // currency
                                    "amount": "6.21",           // amount
                                    "convertAmount": "6.21",    // convert amount
                                    "convertCurrency": "XT",    // convert currency
                                    "convertFee": "0.00035546", // convert fee
                                    "createTime": 1615985535000 // create time
                                }
                            ]
                }
        title: Response
        language: json
---
