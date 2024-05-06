---
title: Modify user account apiKey
position_number: 3
type: put
description: /v4/user/account/api-key
parameters:
    -
        name: id
        type: string
        mandatory: true
        default:
        description: apiKey id
        ranges:
    -
        name: accessKey
        type: string
        mandatory: true
        default:
        description: access key
        ranges:  
    -
        name: keyName
        type: string
        mandatory: false
        default:
        description: apiKey name
        ranges:
    -
        name: bindIps
        type: string
        mandatory: false
        default:
        description: bind ip list, multiple can be separated by commas
        ranges:
    -
        name: roleScopes
        type: string
        mandatory: true
        default:
        description: permissions code
        ranges: QUERY：query is enabled; TRADE：spot and margin trade is enabled; WITHDRAW：withdraw is enabled; LEVER_LOAN：margin pledged is enabled; FUTURE：future trade is enabled; TRANSFER：transfer is enabled
    -
        name: tags
        type: string
        mandatory: false
        default:
        description: tags
        ranges:

content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String modifyApiKey(){


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
                  "result": {
                     "id": 4564,                                             //apiKey id
                     "userAccountId": "1626456841938669570",                 //account id
                     "userAccountLevel": 2,                                  //account level: 1-master account; 2-sub account
                     "userId": 1352123154435,                                //user id
                     "keyName": "123aaa",                                    //apiKey name
                     "bindIps": null,                                        //bind ip list
                     "accessKey": "99258227-f053-46a2-9b10-66c155eb705c",    //encryption key
                     "secretKey": "4b1839e11bf7a1c6de5f078bd9f4b6e0850da3cf",//encryption string
                     "isLock": 0,                                            //isLock: 0-apiKey is not locked；1-apiKey is locked
                     "roleScopes": "QUERY_TRADE",                            //permissions code: QUERY_TRADE: trade is enabled; QUERY_NO_TRADE: trade is not enabled
                     "tags": null,                                           //tags
                     "createTime": "2023-02-20 07:39:56.768",                //apiKey create time
                     "updateTime": "2023-02-20 07:39:56.768"                 //apiKey update time
                  }
                }
        title: Response
        language: json
---
