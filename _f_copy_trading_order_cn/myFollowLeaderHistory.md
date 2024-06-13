---
title: 我的带单员(历史跟随)
position_number: 18
type: get
description: /future/copytrade/user/v1/copy-trade/follower-leaders-page
parameters:
    -
        name: type
        type: number
        mandatory: false
        default:
        description: 查询类型,1:当前跟随,2:历史跟随
        ranges: 1,2
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
                        "result": {
                               "hasPrev": false,
                               "hasNext": false,
                                "items": [
                                        {
                                        "leaderName": "string", // 交易员名称
                                        "avatar": "string", // 头像
                                        "accountId": 0, // 交易员id
                                        "id": 0, // id
                                        "level": 0, // 当前等级
                                        "levelName": "string", // 当前等级名称
                                        "followMarginU": 0, // 累计跟随本金,USDT
                                        "followProfitU": 0, // 累计跟随收益,USDT
                                        "cancel": Boolean // 状态：0跟随中，1已取消
                                         }
                                  ]
                        }
        title: Response
        language: json
---
