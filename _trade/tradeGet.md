---
title: Query trade
position_number: 1
type: get
description: /v4/trade
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: Trading pair, if not filled in, represents all
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: "SPOT, LEVER"
        ranges:
    -
        name: orderSide
        type: string
        mandatory: false
        default:
        description: BUY,SELL
        ranges:
    -
        name: orderType
        type: string
        mandatory: false
        default:
        description: LIMIT, MARKET
        ranges:
    -
        name: orderId
        type: number
        mandatory: false
        default:
        description: 
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: start id
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: query direction:PREV, NEXT
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '20'
        description: Limit number, max 100
        ranges:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: start time eg:1657682804112
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 
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
                    "hasPrev": true,
                    "hasNext": true,
                    "items": [
                      {
                        "symbol": "BTC_USDT",  
                        "tradeId": "6316559590087222001",  
                        "orderId": "6216559590087220004",  
                        "orderSide": "BUY",    
                        "orderType": "LIMIT",  
                        "bizType": "SPOT",    
                        "time": 1655958915583,  
                        "price": "40000",     
                        "quantity": "1.2",    
                        "quoteQty": "48000",   //amount
                        "baseCurrency": "BTC",  
                        "quoteCurrency": "USDT",  
                        "fee": "0.5",   
                        "feeCurrency": "USDT", 
                        "takerMaker": "taker"  //takerMaker
                      }
                    ]
                  }
                }
        title: Response
        language: json
---

