---
title: 用户成交
position_number: 9
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
           "{trade}@{listenKey}",
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
                "topic": "trade", 
                "event": "trade@123456", 
                "data": {
                        "orderId":"12312312",     // 订单id
                        "clientOrderId":"123456", // 自定义订单id
                        "price":"34244",          // 价格
                        "quantity":"123",         // 数量
                        "marginUnfrozen":"123",   // 保证金解冻数量
                        "timestamp":1731231231,   // 时间戳
                        "symbol": "btc_usdt",     //交易对
                        "orderSide": "BUY",       //订单方向
                        "positionSide": "LONG",   //持仓方向
                        "isMaker": true,          //是否是maker,true:maker;false:taker
                        "fee": 0.0002             //手续费
                   }
            }
        title: Response
        language: json
---
