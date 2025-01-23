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
                        "currency": "BTC",                  //Currency
                        "supportChains": [
                            {
                                "chain": "Bitcon",             //Supported Transfer Networks
                                "depositEnabled": true,        //Deposit Supported
                                "withdrawEnabled": true,       //Withdrawal Supported
                                "contract": "futureAddress",   //Future Address
                                "depositMinAmount": 1,         //Minimum Deposit Amount
                                "depositFeeRate": 0.2,         //Recharge Fee Rate, Percentage
                                "depositConfirmations": 2,     //Recharge Confirmation Block Count
                                "withdrawMinAmount": 10,       //Minimum Withdrawal Amount
                                "withdrawPrecision": 4,        //Withdrawal Amount Precision
                                "withdrawFeeAmount": 0.2,      //Withdrawal Fee
                                "withdrawFeeCurrency": "btc",  //Withdrawal Fee Currency
                            }
                        ]           
                    },
                    {
                        "currency": "ETH",                  //Currency
                        "supportChains": [
                            {
                                "chain": "Ethereum",           //Supported Transfer Networks
                                "depositEnabled": true,        //Deposit Supported
                                "withdrawEnabled": true,       //Withdrawal Supported
                                "contract": "futureAddress",   //Future Address
                                "depositMinAmount": 1,         //Minimum Deposit Amount
                                "depositFeeRate": 0.2,         //Recharge Fee Rate, Percentage
                                "depositConfirmations": 2,     //Recharge Confirmation Block Count
                                "withdrawMinAmount": 10,       //Minimum Withdrawal Amount
                                "withdrawPrecision": 4,        //Withdrawal Amount Precision
                                "withdrawFeeAmount": 0.2,      //Withdrawal Fee
                                "withdrawFeeCurrency": "eth",  //Withdrawal Fee Currency
                            }
                        ]
                    }
                  ]
                }
        title: Response
        language: json
---
