---
title: 获取带单员详情
position_number: 20
type: get
description: /v1/copy-trade-account/public/copy-trade/leader-detail
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 带单员账号id
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
                      "avatar": "string",        //头像
                      "currentFollowNumber": 0,  //当前跟随人数
                      "displayEquity": true,     //是否展示总资产
                      "displayQuantity": true,   //是否展示买入数量
                      "fansNum": 0,              //粉丝数
                      "followNumber": 0,         //累计跟随人数
                      "label": [                 //标签
                        "string"
                      ],
                      "leadDays": 0,             //入驻时间
                      "leaderIntro": "string",   //带单简介
                      "level": 0,                //当前等级
                      "levelId": 0,              //等级id
                      "levelName": "string",     //当前等级名称
                      "maxFollowerSize": 0,      //最多跟随人数
                      "nickName": "string",      //昵称
                      "profitRate": 0,           //分润比例
                      "totalRights": 0           //总资产
                    }
                  }
        title: Response
        language: json
---
