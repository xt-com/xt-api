---
title: 获取币种信息
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
        code_block: |-
                {
                  "rc": 0,
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": [
                    {
                       "id": 11,            //币种id
                      "currency": "usdt",   //币种名称
                      "fullName": "usdt",   //币种全称
                      "logo": null,         //币种logo
                      "cmcLink": null,      //cmc链接
                      "weight": 100,        //权重
                      "maxPrecision": 6,    //精度
                      "depositStatus": 1,   //充值状态(0关闭 1开放)
                      "withdrawStatus": 1,  //提现状态(0关闭 1开放)
                      "convertEnabled": 1,  //小额资产兑换开关[0=关;1=开]
                      "transferEnabled": 1  //划转开关[0=关;1=开]
                    }
                  ]
                }
        title: Response
        language: json
---

