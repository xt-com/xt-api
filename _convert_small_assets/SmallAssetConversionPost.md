---
title: Small Assets Conversion
position_number: 2
type: post
description: /balance/convert
parameters:
    -
        name: currencies
        type: array
        mandatory: true
        default:
        description: collection
        ranges: Up to 5 currencys can be converted
content_markdown: >-
    #### **Limit Flow Rules**

    1/s/apikey
  
    #### **Remark**

    Can only be converted once every 24 hours
left_code_blocks:
    -
        code_block: |-
                    {
                        "currencies": [
                                    "usdt",
                                    "btc",
                                    "eth"
                        ]
                    }
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
