---
title: 下单
position_number: 1
type: post
description: /future/trade/v1/order/create
parameters:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default: N/A
        description: 自定义订单id
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: 交易对
        ranges:
    -
        name: orderSide
        type: string
        mandatory: true
        default: N/A
        description: 买卖方向：BUY;SELL
        ranges: BUY;SELL
    -
        name: orderType
        type: string
        mandatory: true
        default: N/A
        description: 订单类型：LIMIT；MARKET
        ranges: LIMIT；MARKET
    -
        name: origQty
        type: number
        mandatory: true
        default: N/A
        description: 数量（张）
        ranges:
    -
        name: price
        type: number
        mandatory: false
        default: N/A
        description: 价格
        ranges:
    -
        name: reduceOnly
        type: boolean
        mandatory: false
        default: false
        description: 只减仓
        ranges:
    -
        name: timeInForce
        type: string
        mandatory: false
        default: GTC
        description: 有效方式：GTC;IOC;FOK;GTX
        ranges: GTC;IOC;FOK;GTX
    -
        name: triggerProfitPrice
        type: number
        mandatory: false
        default: N/A
        description: 止盈价
        ranges:
    -
        name: triggerStopPrice
        type: number
        mandatory: false
        default: N/A
        description: 止损价
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: 仓位方向：LONG;SHORT
        ranges: LONG;SHORT
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
        title: Java
        language: java
right_code_blocks:
  - code_block: |-
      {
        "error": {
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": {},
        "returnCode": 0
      }
    title: Response
    language: json
---