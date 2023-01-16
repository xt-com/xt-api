---
title: Get history records of deposit 
position_number: 3
type: get
description: /v4/deposit/history
parameters:
    -
        name: currency
        type: string
        mandatory: false
        default:
        description: Currency name, can be obtained from the response of "Get the supported currencies for deposit or withdrawal" API
        ranges:
    -
        name: chain
        type: string
        mandatory: false
        default:
        description: Transfer networks, can be obtained from the response of "Get the supported currencies for deposit or withdrawal" API
        ranges:
    -
        name: status
        type: string
        mandatory: false
        default:
        description: The <a href="#depositWithdrawStatus">status</a> of deposit
        ranges: SUBMIT、REVIEW、AUDITED、PENDING、SUCCESS、FAIL、CANCEL
    -
        name: fromId
        type: long
        mandatory: false
        default:
        description: Start ID, e.g. 6216559590087220004
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: query direction
        ranges: query direction:PREV, NEXT
    -
        name: limit
        type: int
        mandatory: false
        default: 10
        description: Limit number, max 200
        ranges: 1<=limit<=200
    -
        name: startTime
        type: long
        mandatory: false
        default:
        description: Start time used for filtering deposit list, timestamp in milliseconds
        ranges:
    -
        name: endTime
        type: long
        mandatory: false
        default:
        description: End time used for filtering deposit list, timestamp in milliseconds
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
                    "hasPrev": true,            //Is there a previous page
                    "hasNext": true,            //Is there a next page
                    "items": [
                      {
                         "id": 169669597,       //Unique ID of the deposit record
                         "currency": "xlm2",    //Currency name
                         "chain": "XLM",        //Transfer Network
                         "memo": "441824256",   //memo
                         "status": "SUCCESS",   //The status of deposit
                         "amount": "0.1",       //Deposit amount
                         "confirmations": 12,   //Number of block confirmations
                         "transactionId": "28dd15b5c119e00886517f129e5e1f8283f0286b277bcd3cd1f95f7fd4a1f7fc",   //Unique ID of transaction
                         "address": "GBY6UIYEYLAAXRQXVO7X5I4BSSCS54EAHTUILXWMW6ONPM3PNEA3LWEC",     //Target address of deposit
                         "fromAddr": "GBTISB3JK65DG6LEEYYFW33RMMDHBQ65AEUPE5VDBTCLYYFS533FTG6Q",    //From address of deposit
                         "createdTime": 1667260957000   //Time of deposit record in millisecondstime
                      }
                    ]
                  }
                }
        title: Response
        language: json
---
