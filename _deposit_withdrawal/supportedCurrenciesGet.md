---
title: Get information of currencies (available for deposit and withdraw)
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
                        "currency": "BTC",                  //Currency name
                        "supportChains": [
                            {
                                "chain": "Bitcon",          //Supported transfer network
                                "depositEnabled": true,     //deposit is supported or not
                                "withdrawEnabled": true     //withdraw is supported or not
                                "withdrawFeeAmount": 0.2,   //withdraw fee
                                "withdrawMinAmount": 10,    //minimum withdrawal amount
                                "depositFeeRate": 0.2       //deposit fee rate
                            }
                        ]           
                    },
                    {
                        "currency": "ETH",                  //Currency name
                        "supportChains": [
                            {
                                "chain": "Ethereum",        //Supported transfer network
                                "depositEnabled": true,     //deposit is supported or not
                                "withdrawEnabled": true     //withdraw is supported or not
                                "withdrawFeeAmount": 0.2,   //withdraw fee
                                "withdrawMinAmount": 10,    //minimum withdrawal amount
                                "depositFeeRate": 0.2       //deposit fee rate
                            }
                        ]
                    }
                  ]
                }
        title: Response
        language: json
---
