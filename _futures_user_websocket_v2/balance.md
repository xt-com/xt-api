---
title: Balance change
position_number: 7
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
                 "{balance}@{listenKey}",
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
                "topic": "balance", 
                "event": "balance@123456", 
                "data": {
                     "coin":"usdt",
                     "underlyingType":1, //  1:Coin-M,2:USDT-M
                     "walletBalance":"123", // Balance
                     "openOrderMarginFrozen":"123", // Frozen order
                     "isolatedMargin":"213",  // Isolated Margin
                     "crossedMargin":"0" //Crossed Margin
                   }  
            }
        title: Response
        language: json
---
