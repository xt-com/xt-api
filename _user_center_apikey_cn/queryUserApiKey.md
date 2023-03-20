---
title: 查询用户apiKey（适用于主账户和子账户）
position_number: 1
type: get
description: /v4/user/account/api-key
parameters:
    -
        name: userAccountId
        type: string
        mandatory: false
        default:
        description: 账户id
        ranges:
    -
        name: keyName
        type: string
        mandatory: false
        default:
        description: apiKey名称
        ranges:
    -
        name: isLock
        type: integer
        mandatory: false
        default:
        description: 是否锁定
        ranges: 0：否；1：是
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String apiKeyGet(){


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
                        "id": 1,                     
                        "userAccountId": "1352123154435",                         //账户id
                        "userAccountLevel": 1,                                    //账户等级：1-主账户；2-子账户
                        "userId": 1352123154435,                                  //用户id
                        "keyName": "abc",                                         //apiKey名称
                        "bindIps": "",                                            //绑定ip列表
                        "accessKey": "b5e58714-2382-4e2f-8762-81b5ec9d363a",      //加密key
                        "secretKey": "17aef63c0cba308089fae03e2b13a4794bd2d411",  //加密串
                        "isLock": 0,                                              //是否锁定：0-否；1：是
                        "roleScopes": "QUERY_TRADE",                              //权限code: QUERY_TRADE: 开启交易权限; QUERY_NO_TRADE: 不开启交易权限
                        "tags": null,                                             //标签
                        "createTime": "2023-02-17 05:41:43",                      //apiKey创建时间
                        "updateTime": "2023-02-17 05:41:43"                       //apiKey更新时间
                    }, 
                    {
                        "id": 2,                     
                        "userAccountId": "13523123154435",                        //账户id
                        "userAccountLevel": 1,                                    //账户等级：1-主账户；2-子账户
                        "userId": 1352123154435,                                  //用户id
                        "keyName": "bcd",                                         //apiKey名称
                        "bindIps": "",                                            //绑定ip列表
                        "accessKey": "b5e58714-2382-4e2f-8762-81b5ec9d363a",      //加密key
                        "secretKey": "17aef63c0cba308089fae03e2b13a4794bd2d411",  //加密串
                        "isLock": 0,                                              //是否锁定：0-否；1：是
                        "roleScopes": "QUERY_TRADE",                              //权限code: QUERY_TRADE: 开启交易权限; QUERY_NO_TRADE: 不开启交易权限
                        "tags": null,                                             //标签
                        "createTime": "2023-02-17 05:41:43",                      //apiKey创建时间
                        "updateTime": "2023-02-17 05:41:43"                       //apiKey更新时间
                    }
                  ]
                }
        title: Response
        language: json
---
