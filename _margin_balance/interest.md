---
title: Get interest list
position_number: 4
type: get
split: -------------------------------------
description: /v4/lever/interest
parameters:
  -
    name: symbol
    type: string
    mandatory: false
    default:
    description:
    ranges:
  -
    name: startTime
    type: long
    mandatory: true
    default:
    description: start time
    ranges:
  -
    name: endTime
    type: long
    mandatory: true
    default:
    description: end time
    ranges:
  -
    name: fromId
    type: long
    mandatory: false
    default:
    description: page from id
    ranges:
  -
    name: direction
    type: string
    mandatory: true
    default:
    description: page direction  NEXT/PREV
    ranges:
  -
    name: limit
    type: int
    mandatory: false
    default: 20
    description: page limit
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
                  "mc": "SUCCESS",
                  "ma": [{}],
                  "result": {
                      "hasNext": true,               //whether has next page
                      "hasPrev": true,               //whether has previous page
                      "items":[{
                           "id": "string",           //id
                           "amount": 0,              //amount
                           "currency": "string",     //currency
                           "currencyId": 0,          //currency id
                           "symbol": "string",       //symbol
                           "symbolId": 0,            //symbol id
                           "dailyInterestRate": 0,   //daily interest rate
                           "source": "FIX_JOB",      //source, FIX_JOB/USER
                           "createTime": 0           //create time
                      }]
                  }
                }
        title: Response
        language: json
---
