---
title: 查询用户KYC状态
position_number: 6
type: get
description: /openapi/invite/kyc/status
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
          "uid": 123456789,                //用户id
          "status": 2,                     //kyc状态(0-未认证，1-初级认证，2-高级认证，3-企业认证)
        }
      }
    title: Response
    language: json
---
