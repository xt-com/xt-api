---
title: Query agent commission data
position_number: 7
type: get
description: /v4/referal/invite/agent/rebate/data
parameters:
  -
    name: startTime
    type: number
    mandatory: false
    default:
    description: Commission deposit start time
    ranges:
  -
    name: endTime
    type: number
    mandatory: false
    default:
    description: Commission deposit end time
    ranges:
  -
    name: inviteCode
    type: string
    mandatory: false
    default:
    description: Registration invitation code
    ranges:
  -
    name: type
    type: number
    mandatory: true
    default: 
    description: Commission type
    ranges: 1-spot 2-future
  -
    name: fromId
    type: number
    mandatory: false
    default:
    description: Starting ID
    ranges:
  -
    name: direction
    type: string
    mandatory: false
    default: NEXT
    description: query direction
    ranges: PREV, NEXT
  -
    name: limit
    type: int
    mandatory: false
    default: 10
    description: Limit number, max 100
    ranges: 1<=limit<=100
content_markdown: >-

left_code_blocks:
  -
    code_block: |-
      
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
           "totalCount": 1,
           "pageCount": 20,
           "items": [
              {
                  "amountCurrency": 666,              //Currency amount
                  "commission": 23,                   //Commission amount
                  "currency": "usdt"                  //Commission currency
                  "date": "2025-01-22T09:57:01.601Z", //Transaction date
                  "makerAmount": 32,                  //Maker amount
                  "rate": 2,                          //Commission rate
                  "sourceType": 1,                    //Commission source type. 1 - Direct customer, 2 - Sub-agent
                  "state": 1,                         //Commission state 0 - Normal, 1 - Abnormal
                  "symbol": "btc_usdt",               //Symbol
                  "takerAmount": 23,                  //Taker amount
                  "totalCommissionUsdtAmount": 123,   //Total commission
                  "totalTradeUsdtAmount": 2222,       //Total trading volume
                  "type": 1,                          //Commission type. 1-spot 2-future
                  "usdtAmount": 243253                //USDT amount
              }
           ]
        }
      }
    title: Response
    language: json
---
