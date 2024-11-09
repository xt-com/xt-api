---
title: 获取我的带单员
position_number: 21
type: get
description: /v1/copy-trade-account/copy-trade/my-leaders
parameters:
    -
        name: type
        type: number
        mandatory: true
        default:
        description: 带单员类型
        ranges:  <a href="#leaderTypeCn">带单员类型</a>，1：当前带单员; 2：历史带单员
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
        description:  每页的数量
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
                           "accountId": 0,        //带单员账号
                           "avatar": "string",    //头像
                           "followMargin": 0,     //跟随本金
                           "followProfit": 0,     //跟随收益
                           "id": 0,               //用于分页查询的id
                           "leaderName": "string" //带单员昵称
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
