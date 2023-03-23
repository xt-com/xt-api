---
title: 我的交易员 
position_number: 6
type: get
description: /futures/user/v1/copy-trade/follower-leaders-page
parameters:
    -
        name: type
        type: number
        mandatory: true
        default:
        description: 查询类型,1:当前跟随,2:历史跟随
        ranges:
    -
        name: id
        type: number
        mandatory: false
        default:
        description: 分页标识id
        ranges:
    - 
        name: direction
        type: String
        mandatory: true
        default: NEXT
        description: 分页方向
        ranges: NEXT/PREV
    -
        name: limit
        type: number
        mandatory: true
        default: 10
        description: 分页大小
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String myLeadersGet(){


            }
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
                      "result": {
                          "hasPrev": false,   //上一页
                          "hasNext": false,   //下一页
                          "items": [{
                                     "accountId": 0,           //交易员账号id
                                     "avatar": "",             //交易员头像
                                     "cancel": false,          //跟随状态：false跟随中，true已取消
                                     "followMarginU": 0,       //累计跟随本金,USDT
                                     "followProfitU": 0,       //累计跟随收益,USDT
                                     "id": 0,
                                     "leaderName": "",         //交易员名称
                                     "level": 0,               //交易员等级
                                     "levelName": ""           //交易员等级名称
                                 }] 
                      }
                    }
        title: Response
        language: json
---
