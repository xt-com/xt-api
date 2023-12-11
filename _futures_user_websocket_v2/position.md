---
title: Change position
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
                       "contractType": "PERPUTUAL", //PERPUTUAL，DELIVERY
                       "positionType": "ISOLATED",  // "ISOLATED", "CROSSED"
                       "positionSide": "LONG",
                       "positionSize":"123",  // Position quantity
                       "closeOrderSize": "100",  //  Pending order quantity (Cont)
                       "availableCloseSize": "23",  //  Available quantity (Cont)
                       "realizedProfit": "123"   //  Realized profit and loss
                       "entryPrice":"213",   //  Open position average price
                       "isolatedMargin":"213",  //  Isolated Margin
                       "openOrderMarginFrozen": "123", //  Occupied open position margin
                       "underlyingType": ""// COIN_BASED, U_BASED
                       "leverage":20  // Leverage
                   }
            }
        title: Response
        language: json
---
