---
title: Get current lead order
position_number: 1
type: get
description: /v4/order/copy-trade/order/cur-leader-order
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: Trading pair, if not filled in, represents all
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    1/s/apikey
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
        code_block: |-
                  {
                    "rc": 0,
                    "mc": "string",
                    "ma": [
                      {}
                    ],
                    "result": [
                      {
                        "id": "string",
                        "orderId": "string",        //order id
                        "symbol": "string",         //symbol
                        "buySize": 0,               //buy quantity
                        "buyTime": 0,               //buy time
                        "buyPrice": 0,              //buy price
                        "sellSize": 0,              //sell quantity
                        "sellTime": 0,              //sell time
                        "sellPrice": 0,             //sell price
                        "profit": 0,                //profit
                        "profitRate": 0,            //profit rate
                        "triggerProfitPrice": 0,    //trigger profit price
                        "triggerStopPrice": 0,      //trigger stop price
                        "followCount": 0            //number of followers
                      }
                    ]
                  }
        title: Response
        language: json
---
