---
title: Submit batch order
position_number: 5
type: post
description: /v4/batch-order
parameters:
    -
        name: clientBatchId
        type: string
        mandatory: false
        default:
        description: 'Client batch number. Pattern: ^[a-zA-Z0-9_]{4,32}$'
        ranges:
    -
        name: items
        type: array
        mandatory: true
        default:
        description: array
        ranges:
    -
        name: item.symbol
        type: string
        mandatory: true
        default:
        description: 
        ranges:
    -
        name: item.clientOrderId
        type: string
        mandatory: false
        default:
        description: 'Pattern: ^[a-zA-Z0-9_]{4,32}$'
        ranges:
    -
        name: item.side
        type: string
        mandatory: true
        default:
        description: "BUY,SELL"
        ranges:
    -
        name: item.type
        type: string
        mandatory: true
        default:
        description: "order type:LIMIT,MARKET"
        ranges:
    -
        name: item.timeInForce
        type: string
        mandatory: true
        default:
        description: effective way:GTC, FOK, IOC, GTX
        ranges:
    -
        name: item.bizType
        type: string
        mandatory: true
        default:
        description: "SPOT, LEVER"
        ranges:
    -
        name: item.price
        type: number
        mandatory: false
        default:
        description: price. Required if it is the LIMIT price; blank if it is the MARKET price
        ranges:
    -
        name: item.quantity
        type: number
        mandatory: false
        default:
        description: quantity. Required if it is the LIMIT price or the order is placed at the market price by quantity
        ranges:
    -
        name: item.quoteQty
        type: number
        mandatory: false
        default:
        description: amount. Required if it is the LIMIT price or the order is the market price when placing an order by amount
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**
    
    30/s/apikey


left_code_blocks:
    -
        code_block: |-
            public String batchOrderPost(){


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
                  "clientBatchId": "51232",
                  "items": [
                    {
                      "symbol": "BTC_USDT",
                      "clientOrderId": "16559590087220001",
                      "side": "BUY",
                      "type": "LIMIT",
                      "timeInForce": "GTC",
                      "bizType": "SPOT",
                      "price": 40000,
                      "quantity": 2,
                      "quoteQty": 80000
                    }
                  ]
                }
        title: Request
        language: json
    -
        code_block: |-
                {
                  "rc": 0,
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                    "batchId": "123", 
                    "items": [   
                      {
                        "index": "0", // start with 0 
                        "clientOrderId": "123", 
                        "orderId": "123", 
                        "reject": "false", 
                        "reason": "invalid price precision" 
                      }
                    ]
                  }
                }
        title: Response
        language: json
---

