---
title: Withdrawal history
position_number: 5
type: get
description: /v4/withdraw/history
parameters:
    -
        name: 'currency'
        type: string
        mandatory: false
        default:
        description: >-
                Currency name, which can be obtained from the 'Get the supported currencies for deposit or withdrawal' interface
        ranges:
    -
        name: 'chain'
        type: string
        mandatory: false
        default:
        description: >-
                The name of the transfer network, which can be obtained from the interface of 'Get the supported currencies for deposit or withdrawal' interface
        ranges:
    -
        name: 'status'
        type: string
        mandatory: false
        default:
        description: >-
                The <a href="#depositWithdrawStatus">status</a> of the withdrawal record, string type，Refer to public module-Deposit/withdrawal status
        ranges: SUBMIT、REVIEW、AUDITED、AUDITED_AGAIN、PENDING、SUCCESS、FAIL、CANCEL
    -
        name: 'fromId'
        type: Long
        mandatory: false
        default:
        description: >-
                The Id of the last pagination, that is, the primary key id of the record
        ranges: 
    -
        name: 'direction'
        type: String
        mandatory: false
        default: NEXT
        description: >-
                Page direction
        ranges: NEXT：next page，PREV：previous page
    -
        name: 'limit'
        type: int
        mandatory: false
        default: 10
        description: >-
                Number of records per page, maximum 200
        ranges: 1<=limit<=200
    -
        name: 'startTime'
        type: Long
        mandatory: false
        default: 
        description: >-
                Query range start boundary, timestamp in milliseconds
        ranges: 
    -
        name: 'endTime'
        type: Long
        mandatory: false
        default: 
        description: >-
                Query range end boundary, timestamp in milliseconds
        ranges: 

content_markdown:
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
                  "result": {
                        "hasPrev": true,                      //Is there a previous page                              
                        "hasNext": true,                      //Is there a next page                              
                        "items": [
                            {
                                "id": 763111,                 //Withdrawal record id 
                                "currency": "usdt",           //currency name 
                                "chain": "Ethereum",          //Withdraw network 
                                "address": "0xfa3abf",        //Withdrawal target address 
                                "memo": "",
                                "status": "REVIEW",           //Refer to public module-Deposit/withdrawal record status
                                "amount": "30",               //Withdrawal Amount
                                "fee": "0",                   //Withdrawal fee
                                "confirmations": 0,           //number of block confirmations
                                "transactionId": "",          //transaction hash
                                "createdTime": 1667763470000  //Withdrawal application time, timestamp in milliseconds
                            },
                            {
                                "id": 763107,
                                "currency": "usdt",
                                "chain": "Tron",
                                "address": "TYnJJw",
                                "memo": "",
                                "status": "REVIEW",
                                "amount": "50",
                                "fee": "1",
                                "confirmations": 0,
                                "transactionId": "",
                                "createdTime": 1667428286000
                            }
                        ]
                  }
                }
        title: Response
        language: json
---

