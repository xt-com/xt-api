---
title: 带单员信息
position_number: 7
type: get
description: /future/copytrade/user/v1/copy-trade/leader-detail
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
                            "nickName": "string", // 名称
                            "avatar": "string", // 头像
                            "intro": "string", // 简介
                            "leadDays": 0, // 入驻时间
                            "levelId": 0, // 当前等级id
                            "level": 0, // 当前等级
                            "levelName": "string", // 当前等级名称
                            "label": ["string"], // 标签
                            "followNumber": 0, // 累计跟随人数
                            "currentFollowNumber": 0, // 当前跟随人数
                            "maxFollowerSize": 0, // 最多跟随人数
                            "profitRate": 0, // 交易员分润比例
                            "platformProfitRate": 0, // 平台分润比例
                            "totalRights": 0, // 总权益
                            "displayEquity": Boolean, // 是否展示权益
                            "displayPosition": Boolean // 是否展示持仓量
                      }
                    }
        title: Response
        language: json
---
