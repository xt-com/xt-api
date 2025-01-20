---
title: 查询用户资产
position_number: 3
type: get
description: /v4/referal/invite/user/balance
parameters:
  -
    name: uid
    type: string
    mandatory: true
    default:
    description: 用户id
    ranges:
content_markdown: >-

left_code_blocks:
  -
    code_block: |-
      
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
        "ma": [],
        "mc": "SUCCESS",
        "rc": 0,
        "result": {
          "userId": 123456789,                //用户id
          "role": "PARTNER",                  //用户角色
          "balance": 1234                     //兑U资产
        }
      }
    title: Response
    language: json
---
