---
title: 用户业务系统间划转
position_number: 1
type: post
description: /v4/balance/transfer
parameters:
    -
        name: bizId
        type: string
        mandatory: true
        default:
        description: 唯一id 用作重复请求幂等
        ranges: 最大长度为128
    -
        name: from
        type: enum
        mandatory: true
        default:
        description: 划出业务账户
        ranges: <a href="#bizTypeCn">bizType 枚举</a>
    -
        name: to
        type: enum
        mandatory: true
        default:
        description: 划入业务账户
        ranges: <a href="#bizTypeCn">bizType 枚举</a>
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: 币种名称必须全部小写（usdt，btc）
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 划转交易对必须全部小写（划入划出有一方是杠杆此字段必传）
        ranges:
    -
        name: amount
        type: bigDecimal
        mandatory: true
        default:
        description: 划转的数量
        ranges:

content_markdown: >-


left_code_blocks:
    -
        code_block: |-
            public String transferPost(){


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
                  "ma": [],
                  "result": 123456  //返回的划转唯一id 建议存储用来对账
                }
        title: Response
        language: json
---
