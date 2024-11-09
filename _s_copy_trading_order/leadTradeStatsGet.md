---
title: Get lead trader stats
position_number: 25
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-stats
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader account id
        ranges:
    -
        name: days
        type: string
        mandatory: false
        default: 7
        description: query days
        ranges: 7,30,90,180,all
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
                     "ma": [
                       {}
                     ],
                     "mc": "string",
                     "rc": 0,
                     "result": {
                       "avgHoldTime": 0,           //average holding time (seconds)
                       "avgLossAmount": 0,         //average loss amount
                       "avgProfitAmount": 0,       //average profit amount
                       "followerMargin": 0,        //follower margin
                       "followersEarnings": 0,     //follower profit
                       "lastTradeTime": 0,         //latest trading time
                       "lossCount": 0,             //loss count
                       "maxRetraction": 0,         //max retraction
                       "pnlRate": "string",        //Profit and loss ratio
                       "profitCount": 0,           //profit count
                       "recentRate": 0,            //yield rate 
                       "totalEarnings": 0,         //total revenue
                       "totalTransactions": 0,     //total transactions
                       "tradeDays": 0,             //trade days
                       "weeklyTradeFrequency": 0,  //trading frequency (weekly)
                       "winRate": 0                //win rate
                     }
                   }
        title: Response
        language: json
---
