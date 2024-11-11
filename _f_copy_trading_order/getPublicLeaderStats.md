---
title: Public get leader statistics
position_number: 25
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-stats
parameters:
   -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader accountId
        ranges:
   -
        name: days
        type: number
        mandatory: false
        default:
        description: days
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result":{
                        "recentRate": 0, // current rate
                        "totalEarnings": 0, // total current
                        "maxRetraction": 0, // max retraction
                        "followersEarnings": 0, // follower's earning
                        "winRate": 0, // win rate
                        "totalTransactions": 0, // total transactions
                        "profitCount": 0, // profit count
                        "lossCount": 0, // loss count
                        "avgProfitAmount": 0, // avg profit amount
                        "avgLossAmount": 0, // avg loss amount
                        "pnlRate": 0, // profit loss rate
                        "avgHoldTime": 0, // avg hold time
                        "weeklyTradeFrequency": 0, // trade frequency
                        "followerMargin": 0, // follower total margin
                        "tradeDays": 0, // total trade days
                        "lastTradeTime": 0, // last tradetime
                        }
                        }
        title: Response
        language: json
---
