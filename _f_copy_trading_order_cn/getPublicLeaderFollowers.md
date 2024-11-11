---
title: 获取交易员的跟单人信息
position_number: 28
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-follower-page
parameters:
    -
        name: type
        type: number
        mandatory: false
        default:
        description: 查询类型,1:明细,2:汇总
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对
        ranges:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 交易员帐号
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: 方向(NEXT, PREV)
        ranges: NEXT,PREV
    -
        name: limit
        type: number
        mandatory: false
        default:
        description: 翻页大小
        ranges: 10
    -
        name: id
        type: number
        mandatory: false
        default:
        description: id
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
                        "result": [
                                {
                                "accountId": 0, // 跟单员帐号id
                                "followerName": "string", // 跟随用户昵称
                                "avatar": "string", // 头像
                                "id": 0, // id
                                "pageId": 0, // pageId
                                "followMarginU": 0, // 累计跟随本金USDT
                                "followProfitU": 0, // 累计跟随收益USDT
                                "followProfitRate": 0, // 跟单收益率
                                "days": 0 // 跟单天数
                                }
                        ]
                        }
        title: Response
        language: json
---
