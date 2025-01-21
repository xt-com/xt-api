---
title: Query user KYC status
position_number: 6
type: get
description: /v4/referal/invite/kyc/status
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
          "uid": 123456789,                //User ID
          "status": 2,                     //KYC Status (0 - Not Verified, 1 - Basic Verification, 2 - Advanced Verification, 3 - Corporate Verification)
        }
      }
    title: Response
    language: json
---
