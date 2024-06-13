---
title: 调整杠杆倍数
position_number: 32
type: post
description: /future/copytrade/order/v1/position/adjust-leverage
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 市场
        ranges:
    -
        name: leverage
        type: number
        mandatory: true
        default:
        description: 杠杆倍数
        ranges:
    -
        name: positionSide
        type: PositionSide
        mandatory: false
        default:
        description: 仓位方向
        ranges: LONG,SHORT,BOTH

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
                        "result": Boolean //true成功 false失败
                        }
        title: Response
        language: json
---
