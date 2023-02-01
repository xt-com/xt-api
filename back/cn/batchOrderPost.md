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
        description: 客户端批次号，正则：^[a-zA-Z0-9_]{4,32}$
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
        description: 客户端ID，正则：^[a-zA-Z0-9_]{4,32}$
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
            业务类型  SPOT-现货, LEVER-杠杆
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
content_markdown: >-
    #### **限流规则**

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
                    "batchId": "123",                       // 批次号 
                    "items": [                              //订单集合
                      {
                        "index": "0",                       // 下标，从0开始 
                        "clientOrderId": "123",             // 客户端订单ID 
                        "orderId": "123",                   // 订单ID 
                        "reject": "false",                  // 是否拒单 
                        "reason": "invalid price precision" // 拒单原因 
                      }
                    ]
                  }
                }
        title: Response
        language: json
---

