---
title: 获取邀请用户的返佣信息
position_number: 10
type: get
description: /v4/referal/invite/commissions
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
        "rc": 0,
        "mc": "SUCCESS",
        "ma": [],
        "result": [
          {
            "exchangeUid": 6224154788385,              //用户交易所的UID
            "commissionDate": "2025-04-18",            //返佣日期
            "commission": 0.318247047,                 //返佣金额
            "commissionCurrency": "USDT",              //返佣币种, 默认USDT
            "commissionType": "trade",                 //返佣类型, 现货/合约/奖励等
            "commissionRate": 0.9000,                  //返佣比例 
            "tradingPair": "ETH_USDT",                 //交易对 
            "tradeType": "futures",                    //交易类型
            "tradeVolume": 982.2441,                   //交易量 
            "fee": 0.35360783,                         //手续费 
            "createdAt": "2025-04-18 00:00:00",        //记录时间 
            "commissionTimestamp": 1744934400000       //返佣时间戳 
          }
        ]
      }
    title: Response
    language: json
---
