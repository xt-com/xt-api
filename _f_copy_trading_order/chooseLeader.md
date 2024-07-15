---
title: Choose leader
position_number: 15
type: post
description: /future/copytrade/user/v1/copy-trade/choose-leader
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader accountId
        ranges:
    -
        name: symbols
        type: string
        mandatory: true
        default:
        description: symbol
        ranges:
    -
        name: followType
        type: string
        mandatory: true
        default:
        description: follow type
        ranges: FUND,RATE,MARGIN_RATE
    -
        name: followVal
        type: number
        mandatory: false
        default:
        description: 
        ranges: 
    -
        name: triggerProfitRate
        type: number
        mandatory: false
        default:
        description: profit rate
        ranges:
    -
        name: triggerStopRate
        type: number
        mandatory: false
        default:
        description: stop rate
        ranges:
    -
        name: followDirection
        type: string
        mandatory: false
        default:
        description: direction
        ranges: FORWARD,REVERSE
    -
        name: followLoss
        type: number
        mandatory: false
        default:
        description: follow loss
        ranges: 
    -
        name: autoFollowSymbol
        type: boolean
        mandatory: false
        default:
        description: is auto follow symbol
        ranges: true,false
    -
        name: followLossOperate
        type: enum
        mandatory: false
        default:
        description: follow loss operation
        ranges: MARKET_SELL,LEADER_CLOSE,MANUAL_PROCESS

content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
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
                        "result": Boolean //true=success false=fail
                        }
        title: Response
        language: json
---
