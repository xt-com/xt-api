---
title: 获取杠杆借贷列表
position_number: 2
type: get
split: -------------------------------------
description: /v4/lever/loan
parameters:
  -
    name: symbol
    type: string
    mandatory: true
    default:
    description: 市场
    ranges:
  -
    name: startTime
    type: long
    mandatory: true
    default:
    description: 开始时间
    ranges:
  -
    name: endTime
    type: long
    mandatory: true
    default:
    description: 结束时间
    ranges:
  -
    name: fromId
    type: long
    mandatory: false
    default:
    description: 分页开始id
    ranges:
  -
    name: direction
    type: string
    mandatory: true
    default:
    description: 分页方向  NEXT/PREV
    ranges:
  -
    name: limit
    type: int
    mandatory: false
    default: 20
    description: 页数
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
                  "mc": "SUCCESS",
                  "ma": [{}],
                  "result": {
                      "hasNext": true,               //是否有下一页
                      "hasPrev": true,               //是否有上一页
                      "items":[{
                           "id": "string",           //id
                           "amount": 0,              //数量
                           "currency": "string",     //币种
                           "currencyId": 0,          //币种 id
                           "symbol": "string",       //市场
                           "symbolId": 0,            //市场 id
                           "createTime": 0           //创建时间
                      }]
                  }
                }
        title: Response
        language: json
---
