---
title: Get lead trader historical lead order
position_number: 29
type: get
description: /v1/copy-trade-order/public/copy-trade/order/leader-order-history
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
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: query direction
        ranges: PREV-previous page,NEXT-next page
    -
        name: limit
        type: number
        mandatory: false
        default: 10
        description:  number of pages
        ranges: 1-100
    -
        name: id
        type: object
        mandatory: false
        default:
        description: start ID，e.g. 6216559590087220004
        ranges:    
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
