---
title: 获取历史分润明细
position_number: 15
type: get
description: /v1/copy-trade-balance/copy-trade/share-profit/his-detail
parameters:
    -
        name: time
        type: number
        mandatory: true
        default:
        description: 分润时间，例如 1717545600000
        ranges: 
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
                           "amount": 0,            //分润金额
                           "avatar": "string",     //跟单员头像
                           "id": 0,                //用于分页查询的id
                           "name": "string"        //跟单员昵称
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
