---
title: 获取跟单员信息
position_number: 28
type: get
description: /future/copytrade/user/v1/copy-trade/leader-relation 	
parameters:
    -
       name: leaderAccountId
       type: number
       mandatory: true
       default:
       description: 交易员账号
       ranges:

content_markdown: >-
    #### **限流规则**

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
                            "leaderAccountId": 0, // 交易员accountId
                            "symbols": "string", // 市场
                            "followLoss": 0, // 跟单止损
                            "followLossOperate": enum, // 跟单止损仓位处理 MARKET_SELL,LEADER_CLOSE,MANUAL_PROCESS
                            "triggerProfitRate": 0, // 止盈比率
                            "triggerStopRate": 0, // 止损比率
                            "cancel": Boolean, // 是否已取消跟随
                            "followDirection": 0, // 跟单方向:正向:FORWARD;反向:REVERSE
                            "followType": 0, // 跟单类型:FUND(固定保证金);RATE(按倍率跟单);MARGIN_RATE(同比例跟单)
                            "followVal": 0, // 跟单本金/跟单比例
                            "autoFollowSymbol": Boolean // 自动跟单新增合约市场 true是 false否
                    }
                    }
        title: Response
        language: json
---
