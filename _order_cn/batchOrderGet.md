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
        description: '订单ID集合，逗号分割 eg:  6216559590087220004,6216559590087220004'
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
        code_block: |-
                    {
                      "rc": 0,
                      "mc": "string",
                      "ma": [
                        {}
                      ],
                      "result": [
                        {
                          "symbol": "BTC_USDT",
                          "orderId": "6216559590087220004",
                          "clientOrderId": "16559590087220001",
                          "baseCurrency": "string",
                          "quoteCurrency": "string",
                          "side": "BUY",
                          "type": "LIMIT",
                          "timeInForce": "GTC",
                          "price": "40000",
                          "origQty": "2",
                          "origQuoteQty": "48000",
                          "executedQty": "1.2",
                          "leavingQty": "string",
                          "tradeBase": "2",
                          "tradeQuote": "48000",
                          "avgPrice": "42350",
                          "fee": "string",
                          "feeCurrency": "string",
                          "state": "NEW",
                          "time": 1655958915583,
                          "updatedTime": 1655958915583
                        }
                      ]
                    }
        title: Response
        language: json
---
