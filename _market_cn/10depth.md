---
title: 获取深度数据
position_number: 3
type: get
split: -------------------------------------
description: /v4/public/depth
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对  eg:btc_usdt
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '50'
        description: 数量
        ranges: 1~500
content_markdown: >-
    #### **限流规则**

    200/s/ip



left_code_blocks:
    -
        code_block: |-
            public String depth(){


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
                  "mc": "SUCCESS",
                  "ma": [],
                  "result": {
                    "timestamp": 1662445330524,          //时间戳
                    "lastUpdateId": 137333589606963580,  //最后更新记录
                    "bids": [                            //买盘([?][0]=价位;[?][1]=挂单量)
                      [
                        "200.0000",                      //价位
                        "0.996000"                       //挂单量
                      ],
                      [
                        "100.0000",
                        "0.001000"
                      ],
                      [
                        "20.0000",
                        "10.000000"
                      ]
                    ],
                    "asks": []                          //卖盘([?][0]=价位;[?][1]=挂单量)
                  }
                }
        title: Response
        language: json
---
