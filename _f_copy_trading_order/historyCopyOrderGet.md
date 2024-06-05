---
title: Get historical copy order
position_number: 3
type: get
description: /v4/order/copy-trade/order/his-follower-order
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
                         "orderId": "string",           //order id
                         "symbol": "string",            //symbol
                         "buySize": 0,                  //buy quantity
                         "buyTime": 0,                  //buy time
                         "buyPrice": 0,                 //buy price
                         "sellSize": 0,                 //sell quantity
                         "sellTime": 0,                 //sell time
                         "sellPrice": 0,                //sell price
                         "profit": 0,                   //profit
                         "profitRate": 0,               //profit rate
                         "triggerProfitPrice": 0,       //trigger profit price
                         "triggerStopPrice": 0,         //trigger stop price
                         "leaderOrderId": "string",     //leader order id
                         "leaderNickname": "string",    //leader nickname
                         "leaderAvatar": "string"       //leader avatar
                       }
                     ]
                   }
        title: Response
        language: json
---
