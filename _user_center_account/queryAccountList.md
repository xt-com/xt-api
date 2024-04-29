---
title: Query account list（applicable to  master and sub account）
position_number: 1
type: get
description: /v4/user/account
parameters:
    -
        name: accountId
        type: string
        mandatory: false
        default:
        description: account id
        ranges:
    -
        name: accountName
        type: string
        mandatory: false
        default:
        description: account name
        ranges:
    -
        name: level
        type: integer
        mandatory: false
        default:
        description: account level
        ranges: 1:master account; 2:sub account
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
                        "id": "1352123154436",                     //account id
                        "accountName": "master1",                  //account name
                        "userId": 1352123154435,                   //user id
                        "level": 1,                                //account level: 1-master account; 2-sub account
                        "createTime": "2022-04-19 02:02:42",       //account creation time
                        "updateTime": "2022-04-19 02:02:42"        //account update time
                    }, 
                    {
                        "id": "1626456841938669570",               //account id
                        "accountName": "first1",                   //account name
                        "userId": 1352123154436,                   //user id
                        "level": 2,                                //account level: 1-master account; 2-sub account
                        "createTime": "2023-02-17 05:41:43",       //account creation time
                        "updateTime": "2023-02-17 05:41:43"        //account update time
                    }
                  ]
                }
        title: Response
        language: json
---
