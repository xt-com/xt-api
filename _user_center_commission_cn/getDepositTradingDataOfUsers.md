---
title: 查询该用户充值及交易数据
position_number: 2
type: get
description: /v4/referal/invite/user/data
parameters:
  -
    name: startTime
    type: number
    mandatory: false
    default:
    description: 开始时间
    ranges:
  -
    name: endTime
    type: number
    mandatory: false
    default:
    description: 结束时间
    ranges:
  -
    name: uid
    type: number
    mandatory: true
    default:
    description: 查询的用户id
    ranges:
content_markdown: >-

left_code_blocks:
  -
    code_block: |-
      public String getDepositTradingDataOfUsers(){


      }
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
          "deposit": true,                    //是否充值
          "depositDetails": [
              {
                  "amount": 100,              //充值数量
                  "amountU": 100,             //充值兑U数量
                  "currency": "USDT",         //充值币种
                  "timestamp": 1721962593000  //充值时间
              }
          ],
          "trade": true,                      //是否交易
          "tradeAmount": 1000.1234            //交易兑U数量
        }
      }
    title: Response
    language: json
---
