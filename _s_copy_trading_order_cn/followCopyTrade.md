---
title: 立即跟单/跟单设置
position_number: 23
type: post
description: /v1/copy-trade-account/copy-trade/follow
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 带单员accountId
        ranges:
    -
        name: followType
        type: string
        mandatory: true
        default:
        description: 跟单方式
        ranges: <a href="#followTypeCn">跟单类型</a>, FUND(固定保证金);RATE(按倍率跟单)
    -
        name: followVal
        type: number
        mandatory: true
        default:
        description: 保证金/倍率
        ranges: 
    -
        name: followLoss
        type: number
        mandatory: false
        default:
        description: 跟单止损
        ranges:
    -
        name: followLossOperate
        type: string
        mandatory: true
        default:
        description: 跟单止损仓位处理
        ranges: <a href="#followLossOperateCn">跟单止损仓位处理类型</a>, MARKET_SELL;LEADER_CLOSE;MANUAL_PROCESS 
    -
        name: triggerStopRate
        type: number
        mandatory: false
        default:
        description: 单笔止损
        ranges: 
    -
        name: triggerProfitRate
        type: number
        mandatory: false
        default:
        description: 单笔止盈
        ranges:
    -
        name: autoFollowSymbol
        type: bool
        mandatory: true
        default:
        description: 自动跟单新增币对
        ranges:
    -
        name: symbols
        type: string
        mandatory: true
        default:
        description: 跟单市场,逗号分隔，例如 xt_usdt,btc_usdt
        ranges:
content_markdown: >-
    #### **限流规则**

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
