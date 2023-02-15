---
title: 交易员列表 
position_number: 1
type: get
description: /public/futures/user/v1/public/copy-trade/third/leader-list
parameters:
    -
        name: appId
        type: String
        mandatory: true
        default:
        description: app id
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
            public String leadersGet(){


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
                                  "accountId": 1920361759199,       //交易员id
                                  "nickName": "跟单王",       //交易员昵称
                                  "recentMonthWinRate": "0.3333",   //最近一个月的胜率
                                  "followerCount": "2",             //跟随总数
                                  "maxFollowerSize": 6,             //最大跟随人数
                                  "avatar": ""                     //头像
                                 }] 
                      }
                    }
        title: Response
        language: json
---
