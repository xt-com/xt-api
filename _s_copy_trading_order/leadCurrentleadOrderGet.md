---
title: Get lead trader current lead order
position_number: 28
type: get
description: /v1/copy-trade-order/public/copy-trade/order/leader-order-page
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader account id
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: trading pair eg:btc_usdt. if null, defaults to all
        ranges:
    -
        name: type
        type: number
        mandatory: true
        default:
        description: type
        ranges: <a href="#leaderOrderRequestType">search type</a>, 1：detail;2：total
content_markdown: >-
    #### **Limit Flow Rules**

    2/s/ip
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
                          "id": "string",           //id
                          "orderId": "string",      //order id
                          "symbol": "string",       //symbol
                          "buySize": 0,             //buy size
                          "buyTime": 0,             //buy time
                          "buyPrice": 0,            //buy price
                          "sellSize": 0,            //sell size
                          "sellTime": 0,            //sell time
                          "sellPrice": 0,           //sell price
                          "profit": 0,              //profit
                          "profitRate": 0,          //profit rate
                          "triggerProfitPrice": 0,  //take profit price
                          "triggerStopPrice": 0,    //stop Loss Price
                          "followCount": 0          //follow count
                        }
                      ]
                    }
        title: Response
        language: json
---
