---
title: Get follower info
position_number: 28
type: get
description: /future/copytrade/user/v1/copy-trade/leader-relation 	
parameters:
    -
       name: leaderAccountId
       type: number
       mandatory: true
       default:
       description: leader account
       ranges:

content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
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
                    "returnCode": 0,
                    "msgInfo": "success",
                    "error": null,
                    "result": {
                            "leaderAccountId": 0, // leader accountId
                            "symbols": "string", // symbol
                            "followLoss": 0, // follow loss
                            "followLossOperate": enum, // operatio(MARKET_SELL,LEADER_CLOSE,MANUAL_PROCESS)
                            "triggerProfitRate": 0, // trigger profit rate
                            "triggerStopRate": 0, // trigger stop rate
                            "cancel": Boolean, // is cancel (true=canceled, false=uncanceled)
                            "followDirection": 0, // direction:FORWARDREVERSE
                            "followType": 0, // flow type:FUND;RATE;MARGIN_RATE
                            "followVal": 0, // follow val
                            "autoFollowSymbol": Boolean // is auto follow new add symbol
                    }
                    }
        title: Response
        language: json
---
