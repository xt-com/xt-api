---
title: 查询用户信息
position_number: 4
type: get
description: /openapi/invite/single/user/info
parameters:
  -
    name: uid
    type: number
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
          "uid": 123456789,                //用户id
          "registerTime": 1737095389000,   //注册时间
          "countryCode": "86",             //国家编码
          "mobile": "123****4567",         //手机号，脱敏处理
          "email": "639***3@gmail.com",    //邮箱，脱敏处理
          "riskControlStatus": 0,          //风控状态(0-未风控 1-已被风控)
          "kycStatus": 2,                  //kyc状态(0-未认证，1-初级认证，2-高级认证，3-企业认证)
          "registerInviteCode": 23456,     //注册邀请码
        }
      }
    title: Response
    language: json
---
