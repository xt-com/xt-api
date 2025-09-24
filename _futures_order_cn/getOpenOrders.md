---
title: 获取当前委托订单列表
position_number: 5.1
type: get
description: /future/trade/v1/order/list-open-order
parameters:
  - name: symbol
    type: string
    mandatory: false
    default: N/A
    description: 交易对
    ranges:
content_markdown: |-

              #### **限流规则**

              10/s/apikey
left_code_blocks:
  - code_block: ""
    title: Java
    language: java
right_code_blocks:
  - code_block: |-
      {
        "orderId": "538511221008857280",        // 系统订单 ID
        "clientOrderId": "myOrder123",          // 用户自定义订单 ID（若有）
        "symbol": "eth_usdt",                   // 交易对
        "contractSize": 0.01,                   // 合约面值
        "orderType": "LIMIT",                   // 订单类型：LIMIT/MARKET
        "orderSide": "BUY",                     // 买卖方向：BUY/SELL
        "positionSide": "LONG",                 // 持仓方向：LONG/SHORT
        "positionType": "ISOLATED",             // 仓位模式：ISOLATED（逐仓）、CROSSED（全仓）
        "timeInForce": "GTC",                   // 有效方式：GTC/IOC/FOK
        "price": "4009.94",                     // 委托价格
        "origQty": "12",                        // 委托数量
        "avgPrice": "0",                        // 平均成交价
        "executedQty": "0",                     // 已成交数量
        "marginFrozen": "80.48751569",          // 冻结保证金
        "remark": null,                         // 备注
        "sourceId": null,                       // 来源 ID
        "sourceType": "DEFAULT",                // 来源类型，例如 DEFAULT
        "leverage": 6,                          // 杠杆倍数
        "openPrice": null,                      // 开仓价格（若有）
        "state": "NEW",                         // 订单状态：NEW:新建/PARTIALLY_FILLED：未完全成交
        "createdTime": 1758093080143,           // 创建时间戳（毫秒）
        "updatedTime": 1758093080371,           // 更新时间戳（毫秒）
        "welfareAccount": false,                // 是否为福利账号
        "triggerPriceType": null,               // 触发价格类型（若有）
        "triggerProfitPrice": null,             // 止盈触发价格
        "profitDelegateOrderType": null,        // 止盈委托订单类型
        "profitDelegateTimeInForce": null,      // 止盈订单有效方式
        "profitDelegatePrice": null,            // 止盈委托价格
        "triggerStopPrice": null,               // 止损触发价格
        "stopDelegateOrderType": null,          // 止损委托订单类型
        "stopDelegateTimeInForce": null,        // 止损订单有效方式
        "stopDelegatePrice": null,              // 止损委托价格
        "markPrice": "4543.73",                 // 标记价格
        "desc": null                            // 描述
      }
    title: Response
    language: json
---