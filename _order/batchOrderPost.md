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
    #### **Gateway Current Limit**
    
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
        code_block: "{\r\n  \"clientBatchId\": \"51232\",\r\n  \"items\": [\r\n    {\r\n      \"symbol\": \"BTC_USDT\",\r\n      \"clientOrderId\": \"16559590087220001\",\r\n      \"side\": \"BUY\",\r\n      \"type\": \"LIMIT\",\r\n      \"timeInForce\": \"GTC\",\r\n      \"bizType\": \"SPOT\",\r\n      \"price\": 40000,\r\n      \"quantity\": 2,\r\n      \"quoteQty\": 80000\r\n    }\r\n  ]\r\n}"
        title: Request
        language: json
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"batchId\": \"123\", \r\n    \"items\": [   \r\n      {\r\n        \"index\": \"0\", // start with 0 \r\n        \"clientOrderId\": \"123\", \r\n        \"orderId\": \"123\", \r\n        \"reject\": \"false\", \r\n        \"reason\": \"invalid price precision\" \r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
