---
title: get invite agent user info
position_number: 10
type: get
description: /v4/referal/invite/agent/user/info
parameters:
  -
    name: uidList
    type: List<Long>
    mandatory: true
    default:
    description: uid list, e.g：[6118530023996, 6118530023997]
    ranges:
  -
    name: startTime
    type: number
    mandatory: true
    default:
    description: start time， e.g：20250902
    ranges:
  -
    name: endTime
    type: number
    mandatory: true
    default:
    description: end time， e.g：20250905
    ranges:
  -
    name: fromId
    type: number
    mandatory: true
    default:
    description: from id，e.g：48739
    ranges:
  -
    name: direction
    type: String
    mandatory: true
    default:
    description: query direction: PREV, NEXT
    ranges: PREV、NEXT
  -
    name: limit
    type: number
    mandatory: true
    default:
    description: query page size limit，e.g：100
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
            [
              {
                  "id": 48739,  // Auto-increment primary key
                  "userId": 6118530023996,  // User ID
                  "agentId": 5951540495512,  // Agent ID (superior agent)
                  "regDate": "2024-08-07",  // Registration date
                  "agentLevel": 1,  // Agent level
                  "lstLoginDeviceType": "web",  // Recent login device type
                  "registerInviteCode": "BOAHBL",  // Registration invitation code
                  "totalAssetAmtU": 156.76358008000000000000,  // Total balance of all accounts converted to U
                  "depositAmtU1d": 0,  // Daily deposit amount
                  "depositAmtUCw": 0,  // Natural week deposit amount
                  "depositAmtUCm": 0,  // Natural month deposit amount
                  "withdrawAmtU1d": 0,  // Daily withdrawal amount
                  "withdrawAmtUCw": 0,  // Natural week withdrawal amount
                  "withdrawAmtUCm": 0,  // Natural month withdrawal amount
                  "fstDepositDate": "2025-06-13",  // First deposit date
                  "spotTradeAmtU1d": 0,  // Daily spot trading amount
                  "spotTradeAmtUCw": 25.76560000000000000000,  // Natural week spot trading amount
                  "spotTradeAmtUCm": 25.76560000000000000000,  // Natural month spot trading amount
                  "spotTradeFeeU1d": 0,  // Daily spot trading fee
                  "spotTradeFeeUCw": 0.05041839999999999500,  // Natural week spot trading fee
                  "spotTradeFeeUCm": 0.05041839999999999500,  // Natural month spot trading fee
                  "contractTradeAmtU1d": 0,  // Daily contract trading amount
                  "contractTradeAmtUCw": 0,  // Natural week contract trading amount
                  "contractTradeAmtUCm": 0,  // Natural month contract trading amount
                  "contractTradeFeeU1d": 0,  // Daily contract trading fee
                  "contractTradeFeeUCw": 0,  // Natural week contract trading fee
                  "contractTradeFeeUCm": 0,  // Natural month contract trading fee
                  "spotAffiliateDisburseU1d": 0,  // Daily estimated spot rebate
                  "spotAffiliateDisburseUCw": 0.03097008000000000000,  // Natural week estimated spot rebate
                  "spotAffiliateDisburseUCm": 0.03097008000000000000,  // Natural month estimated spot rebate
                  "contractAffiliateDisburseU1d": 0,  // Daily estimated contract rebate
                  "contractAffiliateDisburseUCw": 0,  // Natural week estimated contract rebate
                  "contractAffiliateDisburseUCm": 0,  // Natural month estimated contract rebate
                  "closeProfitU1d": 0,  // Daily closed profit and loss
                  "closeProfitUCw": 0,  // Natural week closed profit and loss
                  "closeProfitUCm": 0,  // Natural month closed profit and loss
                  "userTradesTimes1d": "0",  // User's daily transaction time span
                  "userTradesTimesCw": "0",  // User's natural week transaction time span
                  "userTradesTimesCm": "0",  // User's natural month transaction time span
                  "userTransactionHours1d": "0",  // User's daily transaction hours
                  "userTransactionHoursCw": "0.5",  // User's natural week transaction hours
                  "userTransactionHoursCm": "0.5",  // User's natural month transaction hours
                  "tradesNumber1d": "0",  // Daily number of trades
                  "tradesNumberCw": "0.3333333333333333",  // Natural week number of trades
                  "tradesNumberCm": "0.3333333333333333",  // Natural month number of trades
                  "contractAvgLeverage1d": "0.00000000000000000000",  // Daily average leverage multiple
                  "contractAvgLeverageCw": "0.00000000000000000000",  // Natural week average leverage multiple
                  "contractAvgLeverageCm": "0.00000000000000000000",  // Natural month average leverage multiple
                  "bizDate": "20250902",  // Business date
                  "adsUserAllSymbolTradeRespDTOList": [  // List of user's trading details by symbol
                      {
                          "symbolId": 9605,  // Symbol ID
                          "symbol": "fet_usdt",  // Symbol name
                          "spotTradeAmtU1d": 0,  // Daily spot trading volume
                          "contractTradeAmtU1d": 0,  // Daily contract trading volume
                          "bizDate": "20250902",  // Business date
                          "spotTradeAmtUCw": 25.76560000000000000000,  // Weekly spot trading volume
                          "spotTradeAmtUCm": 25.76560000000000000000,  // Monthly spot trading volume
                          "contractTradeAmtUCw": 0,  // Weekly contract trading volume
                          "contractTradeAmtUCm": 0  // Monthly contract trading volume
                      }
                  ]
              }
            ]
    title: Response
    language: json
---
