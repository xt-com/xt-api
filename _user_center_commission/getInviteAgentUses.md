---
title: Get Invite Agent User Info
position_number: 10
type: get
description: /v4/referal/invite/agent/user/info
parameters:
  -
    name: uid
    type: number
    mandatory: true
    default:
    description: user ID
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
            "exchangeUid": 6224154788385,              // User's exchange UID
            "commissionDate": "2025-04-18",            // Commission date
            "commission": 0.318247047,                 // Commission amount
            "commissionCurrency": "USDT",              // Commission currency, default is USDT
            "commissionType": "trade",                 // Commission type
            "commissionRate": 0.9000,                  // Commission rate
            "tradingPair": "ETH_USDT",                 // Trading pair
            "tradeType": "futures",                    // Trade type
            "tradeVolume": 982.2441,                   // Trade volume 
            "fee": 0.35360783,                         // Fee
            "createdAt": "2025-04-18 00:00:00",        // creation time
            "commissionTimestamp": 1744934400000       // Commission timestamp
          }
        ]
      }
    title: Response
    language: json
---
