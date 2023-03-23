---
title: 交易员的跟单员列表
position_number: 5
type: get
description: /public/futures/user/v1/public/copy-trade/leader-follower-page
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 交易员帐号
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
            public String myFollowersGet(){


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
                                    "accountId": 0,            //跟单员帐号id
                                    "avatar": "",              //头像
                                    "days": 0,                //跟单天数
                                    "followMarginU": 0,       //累计跟单本金
                                    "followProfitRate": 0,    //跟单收益率
                                    "followProfitU": 0,      //累计跟随收益
                                    "followerName": "",      //跟随用户昵称
                                    "id": 0                    
                                 }] 
                      }
                    }
        title: Response
        language: json
---
