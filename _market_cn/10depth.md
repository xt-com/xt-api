---
title: 深度信息
position_number: 10
type: get
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
content_markdown:
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": {\r\n    \"timestamp\": 1662445330524,  //时间戳\r\n    \"lastUpdateId\": 137333589606963580,  //最后更新记录\r\n    \"bids\": [     //买盘([?][0]=价位;[?][1]=挂单量)\r\n      [\r\n        \"200.0000\",   //价位\r\n        \"0.996000\"    //挂单量\r\n      ],\r\n      [\r\n        \"100.0000\",\r\n        \"0.001000\"\r\n      ],\r\n      [\r\n        \"20.0000\",\r\n        \"10.000000\"\r\n      ]\r\n    ],\r\n    \"asks\": []    //卖盘([?][0]=价位;[?][1]=挂单量)\r\n  }\r\n}"
        title: Response
        language: json
---
