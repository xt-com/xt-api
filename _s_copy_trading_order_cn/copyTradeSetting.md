---
title: 查询我的跟单配置
position_number: 22
type: get
description: /v1/copy-trade-account/copy-trade/follow-leader-config
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 带单员id
        ranges:  
content_markdown: >-
    #### **限流规则**

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
                       "autoFollowSymbol": true,                //是否自动跟单新增币对
                       "followLoss": 0,                         //跟单止损
                       "followLossOperate": "LEADER_CLOSE",     //跟单止损仓位处理。MARKET_SELL;LEADER_CLOSE;MANUAL_PROCESS
                       "followSymbols": [                       //跟单市场,逗号分隔(跟单员已选交易对)
                            "string"
                       ],
                       "followType": "FUND",                    //跟单方式:FUND(固定保证金);RATE(按倍率跟单)
                       "followVal": 0,                          //保证金/倍率
                       "leaderSymbols": [                       //交易员带单交易对(可选交易对)
                            "string"
                       ],
                       "profitRate": 0,                         //交易员分润比例
                       "triggerProfitRate": 0,                  //单笔止盈
                       "triggerStopRate": 0                     //单笔止损
                     }
                   }
        title: Response
        language: json
---
