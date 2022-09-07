---
title: 币种列表
position_number: 1
type: get
description: /v4/public/currencies
parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown:
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [\r\n    {\r\n       \"id\": 11,  //币种id\r\n      \"currency\": \"usdt\", //币种名称\r\n      \"fullName\": \"usdt\",  //币种全称\r\n      \"logo\": null,   //币种logo\r\n      \"cmcLink\": null,  //cmc链接\r\n      \"weight\": 100,    //权重\r\n      \"maxPrecision\": 6,  //精度\r\n      \"depositStatus\": 1,  //充值状态(0关闭 1开放)\r\n      \"withdrawStatus\": 1,  //提现状态(0关闭 1开放)\r\n      \"convertEnabled\": 1,  //小额资产兑换开关[0=关;1=开]\r\n      \"transferEnabled\": 1  //划转开关[0=关;1=开]\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
