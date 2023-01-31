---
title: Create Orders
position_number: 1
type: post
description: /future/trade/v1/order/create
parameters:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default: N/A
        description: Client order ID
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: Trading pair
        ranges:
    -
        name: orderSide
        type: string
        mandatory: true
        default: N/A
        description: Order side:BUY;SELL
        ranges: BUY;SELL
    -
        name: orderType
        type: string
        mandatory: true
        default: N/A
        description: Order type:LIMIT；MARKET
        ranges: LIMIT；MARKET
    -
        name: origQty
        type: number
        mandatory: true
        default: N/A
        description: Quantity (Cont)
        ranges:
    -
        name: price
        type: number
        mandatory: false
        default: N/A
        description: Price
        ranges:
    -
        name: reduceOnly
        type: boolean
        mandatory: false
        default: false
        description: Reduce only
        ranges:
    -
        name: timeInForce
        type: string
        mandatory: false
        default: GTC
        description: Valid way:GTC;IOC;FOK;GTX
        ranges: GTC;IOC;FOK;GTX
    -
        name: triggerProfitPrice
        type: number
        mandatory: false
        default: N/A
        description: Stop profit price
        ranges:
    -
        name: triggerStopPrice
        type: number
        mandatory: false
        default: N/A
        description: Stop loss price
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: Position side:LONG;SHORT
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