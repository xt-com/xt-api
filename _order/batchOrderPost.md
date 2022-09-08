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
        description: Client batch number
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
        description: The longest number is 32 characters
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
        description: "SPOT, LEVER, FINANCE, FUTURES_U, FUTURES_C, FUTURES_ALL"
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
content_markdown: |-
    &nbsp;

    &nbsp;
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"items\": [  //订单id集合\r\n      {\r\n        \"orderId\": \"6216559590087220004\"\r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
