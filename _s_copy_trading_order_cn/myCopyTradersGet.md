---
title: 获取我的跟单员列表
position_number: 30
type: get
description: /v1/copy-trade-account/copy-trade/leader-followers
parameters:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: 分页查询方向
        ranges: PREV-上一页,NEXT-下一页
    -
        name: limit
        type: number
        mandatory: false
        default: 10
        description:  每页数量
        ranges: 1-100
    -
        name: id
        type: object
        mandatory: false
        default:
        description: 起始ID，例如 6216559590087220004
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
                       "hasNext": true,
                       "hasPrev": true,
                       "items": [
                         {
                           "accountId": 0,            //跟单员帐号id
                           "avatar": "string",        //头像
                           "days": 0,                 //跟单天数
                           "followMargin": 0,         //累计跟随本金
                           "followProfit": 0,         //累计跟随收益
                           "followProfitRate": 0,     //跟单收益率
                           "followerName": "string",  //跟随用户昵称
                           "id": 0,
                           "pageId": 0
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
