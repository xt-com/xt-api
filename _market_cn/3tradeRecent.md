---
title: 查询近期成交列表
position_number: 5
type: get
description: /v4/public/trade/recent
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '200'
        description: 数量
        ranges: 1，1000
content_markdown: >-
    #### **限流规则**

    100/s/ip

left_code_blocks:
    -
        code_block: |-
            public String tradeRecent(){


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
                  "result": [
                    {
                      "i": 0,           //ID
                      "t": 0,           //成交时间(time)
                      "p": "string",    //成交价(price)
                      "q": "string",    //成交量(quantity)
                      "v": "string",    //成交额(volume)
                      "b": true         //方向(buyerMaker)
                    }
                  ]
                }
        title: Response
        language: json
---
