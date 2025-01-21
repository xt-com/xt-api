---
title: 批量查询用户信息
position_number: 5
type: get
description: /v4/referal/multi/single/user/info
parameters:
  -
    name: uidList
    type: array
    mandatory: false
    default:
    description: 用户ID集合
    ranges: 
  -
    name: pageNum
    type: number
    mandatory: false
    default: 1
    description: 页码
    ranges:
  -
    name: pageSize
    type: number
    mandatory: false
    default: 10
    description: 页数
    ranges: 最大不能超过100
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
                  "uid": 123456789,                //用户id
                  "registerTime": 1737095389000,   //注册时间
                  "countryCode": "86",             //国家编码
                  "mobile": "123****4567",         //手机号，脱敏处理
                  "email": "639***3@gmail.com",    //邮箱，脱敏处理
                  "riskControlStatus": 0,          //风控状态(0-未风控 1-已被风控)
                  "kycStatus": 2,                  //kyc状态(0-未认证，1-初级认证，2-高级认证，3-企业认证)
                  "registerInviteCode": 23456,     //注册邀请码
               }
           ]
        }
      }
    title: Response
    language: json
---
