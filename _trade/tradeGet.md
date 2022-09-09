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
        description: "SPOT, LEVER, FINANCE, FUTURES_U, FUTURES_C, FUTURES_ALL"
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"hasPrev\": true,\r\n    \"hasNext\": true,\r\n    \"items\": [\r\n      {\r\n        \"symbol\": \"BTC_USDT\",  \r\n        \"tradeId\": \"6316559590087222001\",  \r\n        \"orderId\": \"6216559590087220004\",  \r\n        \"orderSide\": \"BUY\",    \r\n        \"orderType\": \"LIMIT\",  \r\n        \"bizType\": \"SPOT\",    \r\n        \"time\": 1655958915583,  \r\n        \"price\": \"40000\",     \r\n        \"quantity\": \"1.2\",    \r\n        \"quoteQty\": \"48000\",   //amount\r\n        \"baseCurrency\": \"BTC\",  \r\n        \"quoteCurrency\": \"USDT\",  \r\n        \"fee\": \"0.5\",   \r\n        \"feeCurrency\": \"USDT\", \r\n        \"takerMaker\": \"taker\"  //takerMaker\r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
