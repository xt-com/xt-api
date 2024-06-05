---
title: 带单/跟单一键平仓
position_number: 8
type: post
description: /v1/copy-trade/close-all  	
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 市场名称
        ranges:
    -
        name: closeLongShortType
        type: string
        mandatory: false
        default:
        description: 平仓方向:LONG;SHORT;BOTH
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
