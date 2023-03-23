---
title: 交易员列表 
position_number: 4
type: get
description: /public/futures/user/v1/public/copy-trade/leader-detail-v2
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 交易员账号id
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String leaderDetailGet(){


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
                           "avatar": "",                //头像
                           "currentFollowNumber": 0,    //当前跟随人数
                           "displayEquity": false,      //是否展示权益
                           "displayPosition": false,    //是否展示持仓量
                           "followNumber": 0,           //累计跟随人数
                           "label": [],                 //标签
                           "leadDays": 0,               //入驻时间(天)
                           "level": 0,                  //等级
                           "levelName": "",             //等级名称
                           "maxFollowerSize": 0,        //最大跟随人数
                           "nickName": "",              //昵称
                           "profitRate": 0,             //分润比例
                           "totalRights": 0             //总权益
                      }
                    }
        title: Response
        language: json
---
