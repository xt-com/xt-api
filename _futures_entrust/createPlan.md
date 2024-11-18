---
title: Create Trigger Orders
position_number: 1
type: post
description: /future/trade/v1/entrust/create-plan
remark: Content-Type = application/x-www-form-urlencoded && application/json
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
        mandatory: true
        default: 
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
        name: entrustType
        type: string
        mandatory: true
        default: N/A
        description: >-
            Order type:TAKE_PROFIT(Take Profit Limit Order);STOP(Stop Limit Order);TAKE_PROFIT_MARKET(Take Profit Market Order);STOP_MARKET(Stop Loss Market Order)
        ranges: TAKE_PROFIT;STOP;TAKE_PROFIT_MARKET;STOP_MARKET
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
        name: stopPrice
        type: number
        mandatory: true
        default: N/A
        description: Trigger price
        ranges:
    -
        name: timeInForce
        type: string
        mandatory: true
        default: N/A
        description: Valid way:GTC;IOC;FOK;GTX, Market orders only support IOC
        ranges: GTC;IOC;FOK;GTX
    -
        name: triggerPriceType
        type: string
        mandatory: true
        default: N/A
        description: Trigger price type:INDEX_PRICE(Index price)；MARK_PRICE(Mark price)；LATEST_PRICE(latest price)
        ranges: INDEX_PRICE;MARK_PRICE;LATEST_PRICE
#    -
#        name: expireTime
#        type: integer
#        mandatory: false
#        default: N/A
#        description: Expiration time
#        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: Position side:LONG;SHORT
        ranges: LONG;SHORT
content_markdown: |-

                 #### **Limit Flow Rules**

                 200/s/apikey
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