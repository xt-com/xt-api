---
title: 带单/跟单一键平仓
position_number: 11
type: post
description: /future/copytrade/order/v1/copy-trade/close-all  	
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
        ranges: LONG,SHORT,BOTH
content_markdown: >-
    #### **限流规则**

    5/s/apikey
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
                        "result": Boolean //true成功 false失败
                        }
        title: Response
        language: json
---
