---
title: Withdraw Detail
position_number: 5
type: get
description: /v4/withdraw
parameters:
    -
        name: 'recordId'
        type: string
        mandatory: false
        default:
        description: >-
          Withdrawal record id, obtained from the withdrawal endpoint, it is recommended to use it first
        ranges:
    -
        name: 'clientOrderId'
        type: string
        mandatory: false
        default:
        description: >-
          Client ID
        ranges:
content_markdown: |-
                #### **Limit Flow Rules**

                1/s/apikey
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
                    "mc": "SUCCESS",
                    "ma": [],
                    "result": {      
                        "id": 100,                     //Withdrawal record id
                        "clientOrderId": 10,           //Client ID
                        "type": 0,                     //Type CHAIN_TRANSFER-Blockchain withdrawal INTERNAL_TRANSFER-Internal withdrawal
                        "currency": "btc",             //currency
                        "address": "xxxxx",            //Withdrawal address
                        "status": "REVIEW",            //Refer to public module-Deposit/withdrawal record status
                        "amount": 0.1,                 //Withdrawal Amount
                        "fee": 0.0001,                 //Withdrawal Fee
                        "chain": "Tron",               //Chain
                        "memo": "yyyyy",               //memo
                        "confirmations": 2,            //Number of block confirmations
                        "transactionId": "490267492",  //Transaction hash
                        "createdTime": 1737093343000   //Withdrawal application time, timestamp in milliseconds
                    }
                }
        title: Response
        language: json    
---
