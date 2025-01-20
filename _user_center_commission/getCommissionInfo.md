---
title: Query agent commission data
position_number: 7
type: get
description: /openapi/multi/single/user/info
parameters:
  -
    name: startTime
    type: number
    mandatory: true
    default:
    description: Commission deposit start time
    ranges:
  -
    name: endTime
    type: number
    mandatory: true
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
    ranges: 1-spot 2-future 3-etf
  -
    name: pageNum
    type: number
    mandatory: false
    default: 1
    description: Page number
    ranges:
  -
    name: pageSize
    type: number
    mandatory: false
    default: 10
    description: Page size
    ranges: Cannot exceed 100
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
                  "totalCommissionUsdtAmount": 123,   //Total commission
                  "totalTradeUsdtAmount": 2222,       //Total trading volume
                  "type": 1,                          //Commission type. 1-spot 2-future 3-etf
                  "sourceType": 1,                    //Commission source type. 1 - Direct customer, 2 - Sub-agent
                  "state": 1,                         //Commission state
                  "date": 1736870400000 ,             //Transaction date
                  "rate": 2,                          //Commission rate
                  "symbol": "btc_usdt",               //Symbol
                  "takerAmount": 23,                  //Taker amount
                  "makerAmount": 32,                  //Maker amount
                  "amountCurrency": 666,              //Currency amount
                  "usdtAmount": 243253,               //USDT amount
                  "commission": 23,                   //Commission amount
                  "currency": "usdt"                  //Commission currency
              }
           ]
        }
      }
    title: Response
    language: json
---
