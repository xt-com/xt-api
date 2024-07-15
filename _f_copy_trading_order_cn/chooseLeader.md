---
title: 立即跟单
position_number: 15
type: post
description: /future/copytrade/user/v1/copy-trade/choose-leader
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 交易员accountId
        ranges:
    -
        name: symbols
        type: string
        mandatory: true
        default:
        description: 跟单合约交易对,逗号分隔
        ranges:
    -
        name: followType
        type: string
        mandatory: true
        default:
        description: 跟单类型:FUND(固定保证金);RATE(按倍率跟单);MARGIN_RATE(同比例跟单)
        ranges: FUND,RATE,MARGIN_RATE
    -
        name: followVal
        type: number
        mandatory: false
        default:
        description: 跟单本金/跟单比例
        ranges: 
    -
        name: triggerProfitRate
        type: number
        mandatory: false
        default:
        description: 止盈比率
        ranges:
    -
        name: triggerStopRate
        type: number
        mandatory: false
        default:
        description: 止损比率
        ranges:
    -
        name: followDirection
        type: string
        mandatory: false
        default:
        description: 跟单方向:正向:FORWARD;反向:REVERSE
        ranges: FORWARD,REVERSE
    -
        name: followLoss
        type: number
        mandatory: false
        default:
        description: 跟单止损
        ranges: 
    -
        name: autoFollowSymbol
        type: boolean
        mandatory: false
        default:
        description: 自动跟单新增合约市场 true是 false否
        ranges: true,false
    -
        name: followLossOperate
        type: enum
        mandatory: false
        default:
        description: 跟单止损仓位处理
        ranges: MARKET_SELL,LEADER_CLOSE,MANUAL_PROCESS

content_markdown: >-
    #### **限流规则**

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
                        "result": Boolean //true成功  false失败
                        }
        title: Response
        language: json
---
