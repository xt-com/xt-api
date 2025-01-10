---
title: 查询小额资产转换列表
position_number: 3
type: get
description: /balance/convert/list
parameters:
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: '加密币 eg:  usdt'
        ranges: 
    -
        name: startTime
        type: number
        mandatory: true
        default:
        description: '开始时间'
        ranges:
    -
        name: endTime
        type: number
        mandatory: true
        default:
        description: '结束时间'
        ranges:

content_markdown: >-
    #### **限流规则**

    1/s/apikey
  
    #### **备注**
  
    只返回最新的100条数据
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
                                    "currency": "ADA",          // 币种名称
                                    "amount": "6.21",           // 数量
                                    "convertAmount": "6.21",    // 转换数量
                                    "convertCurrency": "XT",    // 转换币种
                                    "convertFee": "0.00035546", // 手续费
                                    "createTime": 1615985535000 // 操作时间
                                }
                            ]
                }
        title: Response
        language: json
---
