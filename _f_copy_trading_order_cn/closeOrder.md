---
title: 带单/跟单平仓
position_number: 12
type: post
description: /v1/copy-trade/close  	
parameters:
    -
        name: trackNo
        type: number
        mandatory: true
        default:
        description: 交易员带单特有单号
        ranges:
    -
        name: leaderOrder
        type: boolean
        mandatory: false
        default:
        description: 是否带单:true 带单,false 跟单
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
                        "result": boolean // true 成功 false 失败
                        }
        title: Response
        language: json
---
