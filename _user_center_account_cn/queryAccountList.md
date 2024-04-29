---
title: 查询账户列表（适用于主账户和子账户）
position_number: 1
type: get
description: /v4/user/account
parameters:
    -
        name: accountId
        type: string
        mandatory: false
        default:
        description: 账户id
        ranges:
    -
        name: accountName
        type: string
        mandatory: false
        default:
        description: 账户名
        ranges:
    -
        name: level
        type: integer
        mandatory: false
        default:
        description: 账户等级
        ranges: 1：主账户；2：子账户
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String accountGet(){


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
                  "mc": "SUCCESS",
                  "ma": [
                    {}
                  ],
                  "result": [
                    {
                        "id": "1352123154436",                     //账户id
                        "accountName": "master1",                  //账户名
                        "userId": 1352123154435,                   //用户id
                        "level": 1,                                //账户等级：1-主账户；2-子账户
                        "createTime": "2022-04-19 02:02:42",       //账户创建时间
                        "updateTime": "2022-04-19 02:02:42"        //账户更新时间
                    }, 
                    {
                        "id": "1626456841938669570",               //账户id
                        "accountName": "first1",                   //账户名
                        "userId": 1352123154436,                   //用户id
                        "level": 2,                                //账户等级：1-主账户；2-子账户
                        "createTime": "2023-02-17 05:41:43",       //账户创建时间
                        "updateTime": "2023-02-17 05:41:43"        //账户更新时间
                    }
                  ]
                }
        title: Response
        language: json
---
