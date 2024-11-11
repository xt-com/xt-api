---
title: 获取交易员交易偏好
position_number: 26
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-symbol-prefer
parameters:
   -
        name: accountId
        type: number
        mandatory: true
        default:
        description: 交易员帐号
        ranges:
   -
        name: recentDays
        type: number
        mandatory: false
        default:
        description: 天数
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result":{
                                "index": 0, // 
                                "symbol": "string", // 交易对
                                "count": 0, // 最大回撤
                                "percentage": 0, // 占比
                                "pnl": 0 // 交易盈亏
                        }
                        }
        title: Response
        language: json
---
