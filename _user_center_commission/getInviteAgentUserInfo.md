---
title: Get Invite Agent User Info
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
       {
          "rc": 0,
          "mc": "SUCCESS",
          "ma": [],
          "result": [
                {
                    "id": 48739,  
                    "userId": 6118530023996,  
                    "agentId": 5951540495512,  
                    "regDate": "2024-08-07",  
                    "agentLevel": 1,    
                    "lstLoginDeviceType": "web", 
                    "registerInviteCode": "BOAHBL",  
                    "totalAssetAmtU": 156.76358008000000000000,   
                    "depositAmtU1d": 0,  
                    "depositAmtUCw": 0,    
                    "depositAmtUCm": 0,   
                    "withdrawAmtU1d": 0,   
                    "withdrawAmtUCw": 0,   
                    "withdrawAmtUCm": 0,   
                    "fstDepositDate": "2025-06-13",   
                    "spotTradeAmtU1d": 0,  
                    "spotTradeAmtUCw": 25.76560000000000000000,   
                    "spotTradeAmtUCm": 25.76560000000000000000,  
                    "spotTradeFeeU1d": 0,    
                    "spotTradeFeeUCw": 0.05041839999999999500,    
                    "spotTradeFeeUCm": 0.05041839999999999500,   
                    "contractTradeAmtU1d": 0,    
                    "contractTradeAmtUCw": 0,   
                    "contractTradeAmtUCm": 0,   
                    "contractTradeFeeU1d": 0,    
                    "contractTradeFeeUCw": 0,    
                    "contractTradeFeeUCm": 0,    
                    "spotAffiliateDisburseU1d": 0,  
                    "spotAffiliateDisburseUCw": 0.03097008000000000000,   
                    "spotAffiliateDisburseUCm": 0.03097008000000000000, 
                    "contractAffiliateDisburseU1d": 0,   
                    "contractAffiliateDisburseUCw": 0,  
                    "contractAffiliateDisburseUCm": 0,   
                    "closeProfitU1d": 0,   
                    "closeProfitUCw": 0,  
                    "closeProfitUCm": 0,    
                    "userTradesTimes1d": "0",   
                    "userTradesTimesCw": "0",    
                    "userTradesTimesCm": "0",   
                    "userTransactionHours1d": "0",   
                    "userTransactionHoursCw": "0.5",   
                    "userTransactionHoursCm": "0.5",  
                    "tradesNumber1d": "0",   
                    "tradesNumberCw": "0.3333333333333333",   
                    "tradesNumberCm": "0.3333333333333333",   
                    "contractAvgLeverage1d": "0.00000000000000000000", 
                    "contractAvgLeverageCw": "0.00000000000000000000",   
                    "contractAvgLeverageCm": "0.00000000000000000000",    
                    "bizDate": "20250902",    
                    "adsUserAllSymbolTradeRespDTOList": [   
                        {
                            "symbolId": 9605,    
                            "symbol": "fet_usdt",   
                            "spotTradeAmtU1d": 0,   
                            "contractTradeAmtU1d": 0,   
                            "bizDate": "20250902",    
                            "spotTradeAmtUCw": 25.76560000000000000000,   
                            "spotTradeAmtUCm": 25.76560000000000000000,  
                            "contractTradeAmtUCw": 0,   
                            "contractTradeAmtUCm": 0   
                        }
                                                        ]
                }
                   ]
        }
    title: Response
    language: json
---
