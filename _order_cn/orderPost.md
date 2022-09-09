---
title: 单笔下单
position_number: 2
type: post
description: /v4/order
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对
        ranges:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default:
        description: 客户端ID(最长32位)
        ranges:
    -
        name: side
        type: string
        mandatory: true
        default:
        description: "买卖方向 \_BUY-买,SELL-卖"
        ranges:
    -
        name: type
        type: string
        mandatory: true
        default:
        description: "订单类型 \_LIMIT-现价,MARKET-市价\_"
        ranges:
    -
        name: timeInForce
        type: string
        mandatory: true
        default:
        description: 有效方式 GTC, FOK, IOC, GTX
        ranges:
    -
        name: bizType
        type: string
        mandatory: true
        default:
        description: >-
            业务类型  SPOT-现货, LEVER-杠杆
        ranges:
    -
        name: price
        type: number
        mandatory: false
        default:
        description: 价格。现价必填; 市价不填
        ranges:
    -
        name: quantity
        type: number
        mandatory: false
        default:
        description: 数量。现价必填；市价按数量下单时必填
        ranges:
    -
        name: quoteQty
        type: number
        mandatory: false
        default:
        description: 金额。现价不填；市价按金额下单时必填
        ranges:
content_markdown:
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"orderId\": \"6216559590087220004\"   //订单ID\r\n  }\r\n}"
        title: Response
        language: json
---
