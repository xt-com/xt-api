---
title: 获取交易员/跟单员设置信息
position_number: 9
type: get
description: /future/copytrade/user/v1/copy-trade/user-settings
parameters:

content_markdown: >-
    #### **限流规则**

    2/s/apikey
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
                    "returnCode": 0,
                    "msgInfo": "success",
                    "error": null,
                    "result": {
                            "id": 0, // id
                            "intro": "string", // 简介
                            "followCapitalMin": 0, // 最小跟单本金
                            "labelIds": 0, // 标签id,逗号分割;例:1,2,3,4
                            "label": [ // 标签
                             {
                                "id": 0, // 标签id
                                "label": "string", // 标签说明
                              }
                            ], 
                            "autoUnfollow": Boolean, // 是否自动取消跟随
                            "displayEquity": Boolean, // 显示总权益：true:展示,false:不展示
                            "displayPosition": Boolean, // 显示持仓量：true:展示,false:不展示
                            "openLeader": Boolean // 开启带单
                      }
                    }
        title: Response
        language: json
---
