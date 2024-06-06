---
title: 取消跟随
position_number: 16
type: post
description: /v1/copy-trade/cancel-choose-leader
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 交易员accountId
        ranges:
    
content_markdown: >-
    #### **限流规则**

    10/s/apikey
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
                        "result": boolean // true 成功  false 失败
                        }
        title: Response
        language: json
---
