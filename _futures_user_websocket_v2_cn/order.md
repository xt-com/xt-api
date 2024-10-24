---
title: 用户订单
position_number: 10
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
           "{order}@{listenKey}",
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
                    "topic": "order", 
                    "event": "order@123456", 
                    "data": {
                         "symbol":"btc_usdt",        // 交易对
                         "orderId": "1234",          // 订单id
                         "origQty": "34244",         // 下单数量
                         "avgPrice": "123",          // 成交均价
                         "price": "1111",            // 下单价格
                         "executedQty":"34244",      // 已成交数量
                         "orderSide": "BUY",         // 买卖方向
                         "positionSide": "LONG",     // LONG, SHORT
                         "marginFrozen":"123",       // 占用保证金
                         "sourceType":"default",     // DEFAULT:普通订单， ENTRUST:计划委托，PROFIR:止盈止损
                         "type" : "ORDER",           // 
                         "state": "",                // 订单状态 NEW：新建订单;未成交; PARTIALLY_FILLED：部分成交；PARTIALLY_CANCELED：部分撤销；FILLED：全部成交；CANCELED：已撤销；REJECTED：下单失败；EXPIRED：已过期
                         "createdTime": 1731231231,   // 下单时间
                         "leverage":20,              // 杠杆倍数
                         "positionType": "ISOLATED", // 仓位类型：CROSSED（全仓）；ISOLATED（逐仓）
                         "orderType:": "MARKET"      // 订单类型 LIMIT：限价, MARKET：市价
                       }
                }
        title: Response
        language: json
---
