---
title: Query user balance
position_number: 7
type: get
description: /v4/referal/invite/user/balance
parameters:
  -
    name: uid
    type: number
    mandatory: true
    default:
    description: User ID
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
          "userId": 123456789,     //User ID
          "role": "PARTNER",       //User role
          "balance": 123456,       //balance amount
        }
      }
    title: Response
    language: json
---
