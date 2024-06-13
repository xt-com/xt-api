---
title: Close all orders
position_number: 11
type: post
description: /future/copytrade/order/v1/copy-trade/close-all  	
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: symbol
        ranges:
    -
        name: closeLongShortType
        type: string
        mandatory: false
        default:
        description: direction
        ranges: LONG,SHORT,BOTH
content_markdown: >-
    #### **Limit Flow Rules**

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
                        "result": Boolean //true=success false=fail
                        }
        title: Response
        language: json
---
