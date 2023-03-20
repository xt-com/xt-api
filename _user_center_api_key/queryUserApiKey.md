---
title: Query user's apiKey (applicable to  master and sub account)
position_number: 1
type: get
description: /v4/user/account/api-key
parameters:
    -
        name: userAccountId
        type: string
        mandatory: false
        default:
        description: account id
        ranges:
    -
        name: keyName
        type: string
        mandatory: false
        default:
        description: apiKey name
        ranges:
    -
        name: isLock
        type: integer
        mandatory: false
        default:
        description: apiKey is locked or not
        ranges: 0：apiKey is not locked；1：apiKey is locked
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
                        "userAccountId": "1352123154435",                         //account id
                        "userAccountLevel": 1,                                    //account level: 1-master account; 2-sub account
                        "userId": 1352123154435,                                  //user id
                        "keyName": "abc",                                         //apiKey name
                        "bindIps": "",                                            //bind ip list
                        "accessKey": "b5e58714-2382-4e2f-8762-81b5ec9d363a",      //encryption key
                        "secretKey": "17aef63c0cba308089fae03e2b13a4794bd2d411",  //encryption string
                        "isLock": 0,                                              //isLock: 0-apiKey is not locked；1-apiKey is locked
                        "roleScopes": "QUERY_TRADE",                              //permissions code: QUERY_TRADE: trade is enabled; QUERY_NO_TRADE: trade is not enabled
                        "tags": null,                                             //tags
                        "createTime": "2023-02-17 05:41:43",                      //apiKey create time
                        "updateTime": "2023-02-17 05:41:43"                       //apiKey update time
                    }, 
                    {
                        "id": 2,                     
                        "userAccountId": "13523123154435",                        //account id
                        "userAccountLevel": 1,                                    //account level: 1-master account; 2-sub account
                        "userId": 1352123154435,                                  //user id
                        "keyName": "bcd",                                         //apiKey name
                        "bindIps": "",                                            //bind ip list
                        "accessKey": "b5e58714-2382-4e2f-8762-81b5ec9d363a",      //encryption key
                        "secretKey": "17aef63c0cba308089fae03e2b13a4794bd2d411",  //encryption string
                        "isLock": 0,                                              //isLock: 0-apiKey is not locked；1-apiKey is locked
                        "roleScopes": "QUERY_TRADE",                              //permissions code: QUERY_TRADE: trade is enabled; QUERY_NO_TRADE: trade is not enabled
                        "tags": null,                                             //tags
                        "createTime": "2023-02-17 05:41:43",                      //apiKey create time
                        "updateTime": "2023-02-17 05:41:43"                       //apiKey update time
                    }
                  ]
                }
        title: Response
        language: json
---
