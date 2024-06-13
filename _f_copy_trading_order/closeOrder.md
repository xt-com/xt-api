---
title: Close order
position_number: 12
type: post
description: /future/copytrade/order/v1/copy-trade/close  	
parameters:
    -
        name: trackNo
        type: number
        mandatory: true
        default:
        description: track no
        ranges:
    -
        name: leaderOrder
        type: boolean
        mandatory: false
        default:
        description: is leader's order
        ranges: true,false
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
