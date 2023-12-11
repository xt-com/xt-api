---
title: 仓位变更
position_number: 8
type:
description: 

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
  subscribe:
  ```js
    {
       "method": "SUBSCRIBE/UNSUBSCRIBE",
       "params": [
           "{position}@{listenKey}",
        ],
       "id": "{id}"
    }
  ```

left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "position", 
                "event": "position@123456", 
                "data": {
                       "symbol":"btc_usdt",
                       "contractType": "PERPUTUAL", //合约类型，PERPUTUAL，DELIVERY
                       "positionType": "ISOLATED",  // "ISOLATED", "CROSSED"
                       "positionSide": "LONG",
                       "positionSize":"123",  // 持仓数量
                       "closeOrderSize": "100",  //  平仓挂单数量
                       "availableCloseSize": "23",  //  可平仓张数
                       "realizedProfit": "123"   //  已实现盈亏
                       "entryPrice":"213",   //  开仓均价
                       "isolatedMargin":"213",  //  逐仓保证金
                       "openOrderMarginFrozen": "123", //  开仓订单占用保证金
                       "underlyingType": ""// COIN_BASED, U_BASED
                       "leverage":20  // 杠杆倍数
                   }
            }
        title: Response
        language: json
---
