---
title: 查询用户资产
position_number: 7
type: get
description: /v4/referal/invite/user/balance
parameters:
  -
    name: uid
    type: number
    mandatory: true
    default:
    description: 用户ID
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
          "userId": 123456789,     //用户id
          "role": "PARTNER",       //角色
          "balance": 123456,       //资产数量
        }
      }
    title: Response
    language: json
---
