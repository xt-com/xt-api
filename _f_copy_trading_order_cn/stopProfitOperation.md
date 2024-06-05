---
title: 新增/修改/撤销带单跟单止盈止损
position_number: 8
type: get
description: /v1/copy-trade/update-profit-stop
parameters:
    -
        name: trackNo
        type: number
        mandatory: true
        default:
        description: 交易员带单特有单号
        ranges:
    -
        name: triggerPriceType
        type: string
        mandatory: true
        default:
        description: 触发价格类型:LATEST_PRICE,MARK_PRICE
        ranges:
    -
        name: leaderOrder
        type: boolean
        mandatory: true
        default:
        description: 是否带单:true 带单,false 跟单
        ranges:
    - 
        name: triggerProfitPrice
        type: number
        mandatory: false
        default:
        description: 止盈价
        ranges:
    - 
        name: triggerStopPrice
        type: number
        mandatory: false
        default:
        description: 止损价
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
