---
title: Get depth data
position_number: 10
type: get
description: /v4/public/depth
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: trading pair  eg:btc_usdt
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '50'
        description: 
        ranges: 1~500
content_markdown: >-
    #### **Gateway Current Limit**
    
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": {\r\n    \"timestamp\": 1662445330524,  \r\n    \"lastUpdateId\": 137333589606963580,  //Last updated record\r\n    \"bids\": [     //buy order([?][0]=price;[?][1]=pending order volume)\r\n      [\r\n        \"200.0000\",   //price\r\n        \"0.996000\"    //pending order volume\r\n      ],\r\n      [\r\n        \"100.0000\",\r\n        \"0.001000\"\r\n      ],\r\n      [\r\n        \"20.0000\",\r\n        \"10.000000\"\r\n      ]\r\n    ],\r\n    \"asks\": []    //sell order([?][0]=price;[?][1]=pending order volume)\r\n  }\r\n}"
        title: Response
        language: json
---
