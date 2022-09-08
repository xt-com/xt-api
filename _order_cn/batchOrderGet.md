---
title: 批量获取
position_number: 4
type: get
description: /v4/batch-order
parameters:
    -
        name: orderIds
        type: string
        mandatory: true
        default:
        description: '订单ID集合 eg:  ["6216559590087220004","6216559590087220004"]'
        ranges:
content_markdown: reponse 字段信息参考单笔订单获取接口
left_code_blocks:
    -
        code_block: |-
            public String batchOrderGet(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n      \"symbol\": \"BTC_USDT\",\r\n      \"orderId\": \"6216559590087220004\",\r\n      \"clientOrderId\": \"16559590087220001\",\r\n      \"baseCurrency\": \"string\",\r\n      \"quoteCurrency\": \"string\",\r\n      \"side\": \"BUY\",\r\n      \"type\": \"LIMIT\",\r\n      \"timeInForce\": \"GTC\",\r\n      \"price\": \"40000\",\r\n      \"origQty\": \"2\",\r\n      \"origQuoteQty\": \"48000\",\r\n      \"executedQty\": \"1.2\",\r\n      \"leavingQty\": \"string\",\r\n      \"tradeBase\": \"2\",\r\n      \"tradeQuote\": \"48000\",\r\n      \"avgPrice\": \"42350\",\r\n      \"fee\": \"string\",\r\n      \"feeCurrency\": \"string\",\r\n      \"state\": \"NEW\",\r\n      \"time\": 1655958915583,\r\n      \"updatedTime\": 1655958915583\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
