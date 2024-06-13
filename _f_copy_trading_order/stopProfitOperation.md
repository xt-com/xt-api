---
title: Add/update/cancel profit-stop order
position_number: 10
type: post
description: /future/copytrade/order/v1/copy-trade/update-profit-stop
parameters:
    -
        name: trackNo
        type: number
        mandatory: true
        default:
        description: trackNo
        ranges:
    -
        name: triggerPriceType
        type: string
        mandatory: true
        default:
        description: trigger Price Type
        ranges: LATEST_PRICE,MARK_PRICE
    -
        name: leaderOrder
        type: boolean
        mandatory: true
        default:
        description: is leader order
        ranges: true,false
    - 
        name: triggerProfitPrice
        type: number
        mandatory: false
        default:
        description: trigger profit price
        ranges:
    - 
        name: triggerStopPrice
        type: number
        mandatory: false
        default:
        description: trigger stop price
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

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
                        "result": Boolean // true=success false=fail
                        }
        title: Response
        language: json
---
