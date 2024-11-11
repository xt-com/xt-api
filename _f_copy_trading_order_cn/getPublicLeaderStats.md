---
title: 获取交易员带单情况
position_number: 25
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-stats
parameters:
   -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 交易员帐号
        ranges:
   -
        name: days
        type: number
        mandatory: false
        default:
        description: 天数
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result":{
                                "recentRate": 0, // 收益率
                                "totalEarnings": 0, // 总收益
                                "maxRetraction": 0, // 最大回撤
                                "followersEarnings": 0, // 跟单者收益
                                "winRate": 0, // 胜率
                                "totalTransactions": 0, // 交易次数
                                "profitCount": 0, // 盈利次数
                                "lossCount": 0, // 亏损次数
                                "avgProfitAmount": 0, // 平均盈利
                                "avgLossAmount": 0, // 平均亏损
                                "pnlRate": 0, // 盈亏比
                                "avgHoldTime": 0, // 平均持仓时间(秒)
                                "weeklyTradeFrequency": 0, // 交易频次(每周)
                                "followerTradeAmount": 0, // 带单规模(废弃)
                                "followerMargin": 0, // 带单规模
                                "tradeDays": 0, // 交易天数
                                "lastTradeTime": 0, // 最近交易时间
                        }
                        }
        title: Response
        language: json
---
