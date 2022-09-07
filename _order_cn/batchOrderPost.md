---
title: 批量下单
position_number: 5
type: post
description: /v4/batch-order
parameters:
    -
        name: clientBatchId
        type: string
        mandatory: false
        default:
        description: 客户端批次号
        ranges:
    -
        name: items
        type: array
        mandatory: true
        default:
        description: 集合
        ranges:
    -
        name: item.symbol
        type: string
        mandatory: true
        default:
        description: 交易对
        ranges:
    -
        name: item.clientOrderId
        type: string
        mandatory: false
        default:
        description: 客户端ID(最长32位)
        ranges:
    -
        name: item.side
        type: string
        mandatory: true
        default:
        description: 订单方向 BUY-买,SELL-卖
        ranges:
    -
        name: item.type
        type: string
        mandatory: true
        default:
        description: '订单类型  LIMIT-现价,MARKET-市价 '
        ranges:
    -
        name: item.timeInForce
        type: string
        mandatory: true
        default:
        description: 有效方式  GTC,IOC,FOK,GTX
        ranges:
    -
        name: item.bizType
        type: string
        mandatory: true
        default:
        description: >-
            业务类型  SPOT-现货, LEVER-杠杆, FINANCE-理财, FUTURES_U-合约U本位,
            FUTURES_C-合约币本位, FUTURES_ALL-全币种合约
        ranges:
    -
        name: item.price
        type: number
        mandatory: false
        default:
        description: 价格。现价必填; 市价不填
        ranges:
    -
        name: item.quantity
        type: number
        mandatory: false
        default:
        description: 数量。现价必填；市价按数量下单时必填
        ranges:
    -
        name: item.quoteQty
        type: number
        mandatory: false
        default:
        description: 金额。现价不填；市价按金额下单时必填
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
