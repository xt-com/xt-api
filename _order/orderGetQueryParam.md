---
title: Get single by query param
position_number: 1
type: get
description: /v4/order
parameters:
    -
        name: orderId
        type: number
        mandatory: false
        default:
        description: 
        ranges:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default:
        description: 
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String orderGet(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"symbol\": \"BTC_USDT\",   \r\n    \"orderId\": \"6216559590087220004\",  \r\n    \"clientOrderId\": \"16559590087220001\",  \r\n    \"baseCurrency\": \"string\",   \r\n    \"quoteCurrency\": \"string\",   \r\n    \"side\": \"BUY\",   //order side:BUY,SELL\r\n    \"type\": \"LIMIT\",  //order type  LIMIT,MARKET \r\n    \"timeInForce\": \"GTC\",  //effective way:GTC,IOC,FOK,GTX\r\n    \"price\": \"40000\",   \r\n    \"origQty\": \"2\",     //original quantity\r\n    \"origQuoteQty\": \"48000\",  //original amount\r\n    \"executedQty\": \"1.2\",   //executed quantity\r\n    \"leavingQty\": \"string\",  //The quantity to be executed (if the order is cancelled or the order is rejected, the value is 0)\r\n    \"tradeBase\": \"2\",      //transaction quantity\r\n    \"tradeQuote\": \"48000\",  //transaction amount\r\n    \"avgPrice\": \"42350\",    //average transaction price\r\n    \"fee\": \"string\",   //handling fee\r\n    \"feeCurrency\": \"string\",   \r\n    \"state\": \"NEW\",    //order stat NEW,PARTIALLY_FILLED,FILLED,CANCELED,REJECTED,EXPIRED\r\n    \"time\": 1655958915583,   //order time\r\n    \"updatedTime\": 1655958915583  \r\n  }\r\n}"
        title: Response
        language: json
---
