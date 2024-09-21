---
title: 单笔改单（限价）
position_number: 5
type: put
description: /v4/order/{orderId}
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default:
        description: 订单号
        ranges:
    -
        name: price
        type: number
        mandatory: true
        default:
        description: 价格
        ranges:
    -
        name: quantity
        type: number
        mandatory: true
        default:
        description: 数量
        ranges:
          
content_markdown: >-
  
    #### **限流规则**

    50/s/apikey

left_code_blocks:
    -
        code_block: |-
            public String orderPost(){


            }
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
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                    "orderId": "6216559590087220004",   //订单ID
                    "modifyId": "407329711723834560"    //修改ID
                  }
                }
        title: Response
        language: json
---
