---
title: BTCsn deposit or withdraw history
position_number: 7
type: get
description: /v4/nft/order/history
parameters:
    -
        name: 'type'
        type: number
        mandatory: false
        default: 2
        description: type,1-deposit;2-withdraw
        ranges:
    -
        name: 'status'
        type: number
        mandatory: false
        default:
        description: status,0-submit;1-under review;2-reviewed;3-completed;4-reject;5-cancel
        ranges:
    -
        name: 'currency'
        type: string
        mandatory: false
        default:
        description: currency
        ranges: 
    -
        name: 'startTime'
        type: number
        mandatory: false
        default:
        description: start time (timestamp)
        ranges:
    -
        name: 'endTime'
        type: number
        mandatory: false
        default:
        description: end time (timestamp)
        ranges:
    -
        name: 'page'
        type: number
        mandatory: false
        default:
        description: page index
        ranges:
    -
        name: 'size'
        type: number
        mandatory: false
        default:
        description: page size
        ranges:
content_markdown: |-
                
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
                       items:[
                          {
                              id: 123,
                              type: 2,
                              currencyId: 2280,
                              currencyName: "btcsn",
                              amount: 0.01,
                              fee: 0.7511888,
                              feeCurrencyId: 11, 
                              feeCurrencyName: "usdt",
                              serial: 123,
                              status: 3,
                              password: 123456,
                              createTime: 1730967448000
                          }
                       ]
                    }
                }
        title: Response
        language: json    
---
