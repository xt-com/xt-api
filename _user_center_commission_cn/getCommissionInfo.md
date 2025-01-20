---
title: 查询代理商返佣数据
position_number: 7
type: get
description: /openapi/multi/single/user/info
parameters:
  -
    name: startTime
    type: number
    mandatory: true
    default:
    description: 佣金入金数据开始时间
    ranges:
  -
    name: endTime
    type: number
    mandatory: true
    default:
    description: 佣金入金数据结束时间
    ranges:
  -
    name: inviteCode
    type: string
    mandatory: false
    default:
    description: 注册邀请码
    ranges:
  -
    name: type
    type: number
    mandatory: true
    default:
    description: 佣金类型
    ranges: 1-spot 2-future 3-etf
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
                  "totalCommissionUsdtAmount": 123,   //总佣金
                  "totalTradeUsdtAmount": 2222,       //总交易量
                  "type": 1,                          //1-spot 2-future 3-etf
                  "sourceType": 1,                    //1-直客 2-子代理
                  "state": 1,                         //返佣状态
                  "date": 1736870400000 ,             //交易日期
                  "rate": 2,                          //返佣比例
                  "symbol": "btc_usdt",               //交易对
                  "takerAmount": 23,                  //taker金额
                  "makerAmount": 32,                  //maker金额
                  "amountCurrency": 666,              //币种金额
                  "usdtAmount": 243253,               //usdt金额
                  "commission": 23,                   //返佣金额
                  "currency": "usdt"                  //返佣币种
              }
           ]
        }
      }
    title: Response
    language: json
---
