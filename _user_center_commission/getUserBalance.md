---
title: Get user balance
position_number: 3
type: get
description: /v4/referal/invite/user/balance
parameters:
  -
    name: uid
    type: string
    mandatory: true
    default:
    description: user id
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
          "userId": 123456789,                //user id
          "role": "PARTNER",                  //user role
          "balance": 1234                     //balance converted to USDT
        }
      }
    title: Response
    language: json
---
