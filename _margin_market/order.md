---
title: Create order
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
    description: trading pair  eg:BTC_USDT
    ranges:
  -
    name: coinName
    type: string
    mandatory: true
    default:
    description:  coin name,lower case.  e.g. btc
    ranges:
  -
    name: amount
    type: number
    mandatory: true
    default:
    description: 'eg: 8000'
    ranges:
  -
    name: type
    type: string
    mandatory: true
    default:
    description: <a href="#marginOrderType">type</a>, LOAN/REPAY
    range:
  -
    name: media
    type: string
    mandatory: false
    default:
    description: media eg:btok
    range:
  -
    name: mediaChannel
    type: string
    mandatory: false
    default:
    description: media channel 
      
content_markdown: |-
                #### **Limit Flow Rules**

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
