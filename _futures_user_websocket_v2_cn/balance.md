---
title: 余额变更
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
                     "underlyingType":1, //  1:币本位，2:U本位
                     "walletBalance":"123", // 钱包余额
                     "openOrderMarginFrozen":"123", // 订单冻结
                     "isolatedMargin":"213",  // 逐仓保证金
                     "crossedMargin":"0" //全仓保证金
                   }  
            }
        title: Response
        language: json
---
