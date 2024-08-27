---
title: Get Deposit &  Trading Data of Users
position_number: 2
type: get
description: /v4/referal/invite/user/data
parameters:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: start time
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: end time
        ranges:
    -
        name: uid
        type: number
        mandatory: true
        default:
        description: Queried user ID
        ranges:
content_markdown: >-

left_code_blocks:
    -
        code_block: |-
            public String getDepositTradingDataOfUsers(){


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
                  "ma": [],
                  "mc": "SUCCESS",
                  "rc": 0,
                  "result": {
                    "userId": 123456789,                //User ID
                    "role": "PARTNER",                  //User role
                    "deposit": true,                    //Deposit status
                    "depositDetails": [
                        {
                            "amount": 100,              //Deposit amount
                            "amountU": 100,             //Deposit amount (converted to USDT)
                            "currency": "USDT",         //Deposit currency
                            "timestamp": 1721962593000  //Deposit time
                        }
                    ],
                    "trade": true,                      //Trade status
                    "tradeAmount": 1000.1234            //Trading volume (converted to USDT)
                  }
                }
        title: Response
        language: json
---
