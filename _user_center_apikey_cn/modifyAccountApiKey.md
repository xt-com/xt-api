---
title: 修改用户账户apiKey
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
        description: apiKey名称
        ranges:
    -
        name: bindIps
        type: string
        mandatory: false
        default:
        description: 绑定ip 多个ip英文逗号分割
        ranges:
    -
        name: roleScopes
        type: string
        mandatory: true
        default:
        description: 权限code
        ranges: QUERY 查询权限开启,TRADE 现货及杠杆交易开启, WITHDRAW 提币权限开启, LEVER_LOAN 杠杆质押借币权限开启, FUTURE 合约交易开启, TRANSFER 划转权限开启
    -
        name: tags
        type: string
        mandatory: false
        default:
        description: 标签
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
                     "userAccountId": "1626456841938669570",                 //账户id
                     "userAccountLevel": 2,                                  //账户等级：1-主账户；2-子账户
                     "userId": 1352123154435,                                //用户id
                     "keyName": "123aaa",                                    //apiKey名称
                     "bindIps": null,                                        //绑定ip列表
                     "accessKey": "99258227-f053-46a2-9b10-66c155eb705c",    //加密key
                     "secretKey": "4b1839e11bf7a1c6de5f078bd9f4b6e0850da3cf",//加密串
                     "isLock": 0,                                            //是否锁定：0-否；1：是
                     "roleScopes": "QUERY_TRADE",                            //权限code: QUERY_TRADE: 开启交易权限; QUERY_NO_TRADE: 不开启交易权限
                     "tags": null,                                           //标签
                     "createTime": "2023-02-20 07:39:56.768",                //apiKey创建时间
                     "updateTime": "2023-02-20 07:39:56.768"                 //apiKey更新时间
                  }
                }
        title: Response
        language: json
---
