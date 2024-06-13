---
title: adjust leverage
position_number: 32
type: post
description: /future/copytrade/order/v1/position/adjust-leverage
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: symbol
        ranges:
    -
        name: leverage
        type: number
        mandatory: true
        default:
        description: leverage
        ranges:
    -
        name: positionSide
        type: enum
        mandatory: false
        default:
        description: direction
        ranges: LONG,SHORT,BOTH

content_markdown: >-
    #### **Limit Flow Rules**

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
                        "result": Boolean //true=success false=fail
                        }
        title: Response
        language: json
---
