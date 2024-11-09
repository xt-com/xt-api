---
title: 获取带单员带单统计
position_number: 25
type: get
description: /v1/copy-trade-balance/public/copy-trade/leader-stats
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 带单员账号id
        ranges:
    -
        name: days
        type: string
        mandatory: false
        default: 7
        description: 查询天数
        ranges: 7,30,90,180,all
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
                       "avgHoldTime": 0,           //平均持仓时间(秒)
                       "avgLossAmount": 0,         //平均亏损
                       "avgProfitAmount": 0,       //平均盈利
                       "followerMargin": 0,        //带单规模
                       "followersEarnings": 0,     //跟单者收益
                       "lastTradeTime": 0,         //最近交易时间
                       "lossCount": 0,             //亏损次数
                       "maxRetraction": 0,         //最大回撤
                       "pnlRate": "string",        //盈亏比
                       "profitCount": 0,           //盈利次数
                       "recentRate": 0,            //收益率
                       "totalEarnings": 0,         //总收益
                       "totalTransactions": 0,     //交易次数
                       "tradeDays": 0,             //交易天数
                       "weeklyTradeFrequency": 0,  //交易频次(每周)
                       "winRate": 0                //胜率
                     }
                   }
        title: Response
        language: json
---
