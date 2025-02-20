---
title: Batch query user information
position_number: 5
type: get
description: /v4/referal/invite/multi/user/info
parameters:
  -
    name: uidList
    type: array
    mandatory: true
    default:
    description: User ID list
    ranges: 
  -
    name: fromId
    type: number
    mandatory: false
    default:
    description: Starting ID
    ranges:
  -
    name: direction
    type: string
    mandatory: false
    default: NEXT
    description: query direction
    ranges: PREV, NEXT
  -
    name: limit
    type: int
    mandatory: false
    default: 10
    description: Limit number, max 100
    ranges: 1<=limit<=100
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
           "totalCount": 1,
           "pageCount": 20,
           "items": [
               {
                  "uid": 123456789,                //User ID
                  "registerTime": 1737095389000,   //Registration Time
                  "countryCode": "86",             //Country code
                  "mobile": "123****4567",         //Phone number, desensitization
                  "email": "639***3@gmail.com",    //Email address, desensitization
                  "riskControlStatus": 0,          //Risk Control Status (0 - No Risk Control, 1 - Risk Controlled)
                  "kycStatus": 2,                  //KYC Status (0 - Not Verified, 1 - Basic Verification, 2 - Advanced Verification, 3 - Corporate Verification)
                  "registerInviteCode": 23456,     //Registration Invitation Code
               }
           ]
         }
      }
    title: Response
    language: json
---
