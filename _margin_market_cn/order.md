---
title: 下单
position_number: 2
type: post
split: -------------------------------------
description: /v4/lever/order
parameters:
  -
    name: marketName
    type: string
    mandatory: true
    default:
    description: 交易对  例如：BTC_USDT
    ranges:
  -
    name: coinName
    type: string
    mandatory: true
    default:
    description: 币种，小写。 例如：btc
    ranges:
  -
    name: amount
    type: number
    mandatory: true
    default:
    description: 数量
    ranges:
  -
    name: type
    type: string
    mandatory: true
    default:
    description: <a href="#marginOrderTypeCn">类型</a>, LOAN/REPAY
    range:
  -
    name: media
    type: string
    mandatory: false
    default:
    description: 媒体 例如：btok
    range:
  -
    name: mediaChannel
    type: string
    mandatory: false
    default:
    description: 媒体渠道
      
content_markdown: |-
                #### **限流规则**

                30/s/apikey

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
                  "rc": 0,
                  "mc": "SUCCESS",
                  "ma": [],
                  "result": {}
                }
        title: Response
        language: json
---
