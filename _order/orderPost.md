---
title: Submit order
position_number: 2
type: post
description: /v4/order
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 
        ranges:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default:
        description: 'Pattern: ^[a-zA-Z0-9_]{4,32}$'
        ranges:
    -
        name: side
        type: string
        mandatory: true
        default:
        description: "BUY,SELL"
        ranges:
    -
        name: type
        type: string
        mandatory: true
        default:
        description: "order type:LIMIT,MARKET"
        ranges:
    -
        name: timeInForce
        type: string
        mandatory: true
        default:
        description: effective way:GTC, FOK, IOC, GTX
        ranges:
    -
        name: bizType
        type: string
        mandatory: true
        default:
        description: "SPOT, LEVER"
        ranges:
    -
        name: price
        type: number
        mandatory: false
        default:
        description: price. Required if it is the LIMIT price; blank if it is the MARKET price
        ranges:
    -
        name: quantity
        type: number
        mandatory: false
        default:
        description: quantity. Required if it is the LIMIT price or the order is placed at the market price by quantity
        ranges:
    -
        name: quoteQty
        type: number
        mandatory: false
        default:
        description: amount. Required if it is the LIMIT price or the order is the market price when placing an order by amount
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**
    
    50/s/apikey

left_code_blocks:
    -
        code_block: |-
            public String orderPost(){


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
                  "rc": 0,
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                    "orderId": "6216559590087220004"  
                  }
                }
        title: Response
        language: json
---
