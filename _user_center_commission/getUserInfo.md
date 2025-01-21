---
title: Query user information
position_number: 4
type: get
description: /v4/referal/invite/single/user/info
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
          "registerTime": 1737095389000,   //Registration Time
          "countryCode": "86",             //Country code
          "mobile": "123****4567",         //Phone number, desensitization
          "email": "639***3@gmail.com",    //Email address, desensitization
          "riskControlStatus": 0,          //Risk Control Status (0 - No Risk Control, 1 - Risk Controlled)
          "kycStatus": 2,                  //KYC Status (0 - Not Verified, 1 - Basic Verification, 2 - Advanced Verification, 3 - Corporate Verification)
          "registerInviteCode": 23456,     //Registration Invitation Code
        }
      }
    title: Response
    language: json
---
