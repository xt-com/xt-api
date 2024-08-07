---
title: Get batch
position_number: 4
type: get
description: /v4/batch-order
parameters:
    -
        name: orderIds
        type: string
        mandatory: true
        default:
        description: 'order Ids eg:  6216559590087220004, <br>6216559590087220004'
        ranges:
content_markdown: reponse field information, refer to the Get single interface
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
                          "deductServices":[{   //Fee deduction list (if set XT deduction fee and the deduction occurs, use this field to represent the trade fee. Otherwise, use the original fee and feeCurrency fields to represent the trade fee). 
                                                "fee":"0.1",     
                                                "feeCurrency":"xt"
                                            },
                                            {   
                                                "fee":"0.001",
                                                "feeCurrency":"btc"
                                            }],
                          "time": 1655958915583,
                          "ip": "127.0.0.1",
                          "updatedTime": 1655958915583
                        }
                      ]
                    }
        title: Response
        language: json
---
