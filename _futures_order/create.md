---
title: Create Orders
position_number: 1
type: post
description: /future/trade/v1/order/create
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
#    -
#        name: reduceOnly
#        type: boolean
#        mandatory: false
#        default: false
#        description: Reduce only
#        ranges:
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
content_markdown: |-
  #### **OrigQty Calculation Formula**

  ###### **Formula**  

  origQty = Truncate ((Balance * Percent * Leverage ) / (Mark_price * Contract_size))

  ###### **Explain**

      Truncate : take the integer part 

      Balance : (walletBalance - openOrderMarginFrozen) , api: /future/user/v1/compat/balance/list  

      Percent : user input , exp: 0.2 

      Leverage : leverage your want , exp: 20 

      Mark_price : current symobl mark price , exp: 88888 (btc_usdt) 

      Contract_size : contractSize , api: /future/market/v1/public/symbol/detail , Contract multiplier(face value)  

  ###### **Example**
  truncate(10000 * 0.2 * 20 / 88888 / 0.0001) = 4500

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