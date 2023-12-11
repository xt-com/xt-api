---
title: Message
position_number: 11
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
           "{notify}@{listenKey}",
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
                    "topic": "notify", 
                    "event": "notify", 
                    "data": {
                           "symbol":"btc_usdt",
                           "positionType": "ISOLATED",  
                           "positionSide": "LONG",
                           "positionSize":"123",  // Position quantity
                           "notifyType": "WARN",  // Notification Type:WARN:Warning, about to be levelled,PARTIAL:Partially Liquidation,LIQUIDATION:Liquidation,ADL:ADL
                    }
                }
        title: Response
        language: json
---
