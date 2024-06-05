---
title: Follow copy trading
position_number: 23
type: post
description: /v4/account/copy-trade/follow
parameters:
    -
        name: leaderOrderId
        type: number
        mandatory: true
        default:
        description: leader order id
        ranges:
    -
        name: followType
        type: string
        mandatory: true
        default:
        description: follow type
        ranges: FUND;RATE
    -
        name: followVal
        type: number
        mandatory: true
        default:
        description: follow fund value or rate value
        ranges: 
    -
        name: followLoss
        type: number
        mandatory: false
        default:
        description: follow loss
        ranges:
    -
        name: followLossOperate
        type: string
        mandatory: true
        default:
        description: follow loss operate
        ranges: MARKET_SELL;LEADER_CLOSE;MANUAL_PROCESS 
    -
        name: triggerStopRate
        type: number
        mandatory: false
        default:
        description: single stop loss rate
        ranges: 
    -
        name: triggerProfitRate
        type: number
        mandatory: false
        default:
        description: single take profit rate
        ranges:
    -
        name: autoFollowSymbol
        type: bool
        mandatory: true
        default:
        description: auto follow symbol or not
        ranges:
    -
        name: symbols
        type: string
        mandatory: true
        default:
        description: copy trade symbols. e.g. xt_usdt,btc_usdt
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    10/s/apikey
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
                     "result": true
                   }
        title: Response
        language: json
---
