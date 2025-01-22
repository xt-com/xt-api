---
title: 查询代理商返佣数据
position_number: 7
type: get
description: /v4/referal/invite/agent/rebate/data
parameters:
  -
    name: startTime
    type: number
    mandatory: false
    default:
    description: 佣金入金数据开始时间
    ranges:
  -
    name: endTime
    type: number
    mandatory: false
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
    ranges: 1-spot 2-future
  -
    name: fromId
    type: number
    mandatory: false
    default:
    description: 分页查询开始id
    ranges:
  -
    name: direction
    type: string
    mandatory: false
    default: NEXT
    description: 上一页/下一页
    ranges: PREV, NEXT
  -
    name: limit
    type: int
    mandatory: false
    default: 10
    description: 每页数量，最大100
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
                  "amountCurrency": 666,              //币种金额
                  "commission": 23,                   //返佣金额
                  "currency": "usdt"                  //返佣币种
                  "date": "2025-01-22T09:57:01.601Z", //交易日期
                  "makerAmount": 32,                  //maker金额
                  "rate": 2,                          //返佣比例
                  "sourceType": 1,                    //1-直客 2-子代理
                  "state": 1,                         //返佣状态 0-正常 1-异常
                  "symbol": "btc_usdt",               //交易对
                  "takerAmount": 23,                  //taker金额
                  "totalCommissionUsdtAmount": 123,   //总佣金
                  "totalTradeUsdtAmount": 2222,       //总交易量
                  "type": 1,                          //1-spot 2-future
                  "usdtAmount": 243253,               //usdt金额
              }
           ]
        }
      }
    title: Response
    language: json
---
