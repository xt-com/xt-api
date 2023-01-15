---
title: Get the supported currencies for deposit or withdrawal
position_number: 1
type: get
description: /v4/public/wallet/support/currency
parameters:
    
        
content_markdown: >-
    #### **Remark**

    The currency and chain in the response need to be used in other deposit/withdrawal API
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
                        "currency": "string",
                        "supportChains": [
                            {
                                "chain": "Bitcon",     //Supported Transfer Network
                                "depositEnabled": true,     //deposit is supported or not
                                "withdrawEnabled": true     //withdraw is supported or not
                            }
                            {
                                "chain": "FIO",
                                "depositEnabled": true,
                                "withdrawEnabled": true
                            }
                        ]           
                    },
                    {
                        "currency": "string",
                        "supportChains": [
                            {
                                "chain": "Ethereum",
                                "depositEnabled": true,
                                "withdrawEnabled": true
                            }
                        ]
                    }
                  ]
                }
        title: Response
        language: json
---
