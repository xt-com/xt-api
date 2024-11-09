---
title: Get my copy setting
position_number: 22
type: get
description: /v1/copy-trade-account/copy-trade/follow-leader-config
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader account id
        ranges:  
content_markdown: >-
    #### **Limit Flow Rules**

    2/s/ip
left_code_blocks:
    -
        code_block:
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
                     "ma": [
                       {}
                     ],
                     "mc": "string",
                     "rc": 0,
                     "result": {
                       "autoFollowSymbol": true,                //auto follow new symbol or not
                       "followLoss": 0,                         //follow loss
                       "followLossOperate": "LEADER_CLOSE",     //follow loss operate.MARKET_SELL;LEADER_CLOSE;MANUAL_PROCESS
                       "followSymbols": [                       //follow symbols, comma separated (the symbols has been selected)
                            "string"
                       ],
                       "followType": "FUND",                    //follow type,FUND;RATE
                       "followVal": 0,                          //follow value, fund or rate value
                       "leaderSymbols": [                       //leader symbols, all copy trading symbols
                            "string"
                       ],
                       "profitRate": 0,                         //profit rate
                       "triggerProfitRate": 0,                  //trigger profit rate
                       "triggerStopRate": 0                     //trigger stop rate
                     }
                   }
        title: Response
        language: json
---
