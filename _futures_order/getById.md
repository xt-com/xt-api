---
title: See Orders by ID
position_number: 4
type: get
description: /future/trade/v1/order/detail
parameters:
  - name: orderId
    type: integer
    mandatory: true
    default: N/A
    description: Order ID
    ranges:
content_markdown: |-

               #### **Limit Flow Rules**

               200/s/apikey
left_code_blocks:
  - code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
        "result": {
          "avgPrice": 0, //Average price
          "closePosition": false, //Whether to close all when order condition is triggered
          "closeProfit": 0, //Offset profit and loss
          "createdTime": 0, //Create time
          "executedQty": 0, //Volume (Cont)
          "forceClose": false, //Is it a liquidation order
          "marginFrozen": 0, //Occupied margin
          "orderId": 0, //Order ID
          "orderSide": "", //Order side
          "orderType": "", //Order type
          "origQty": 0, //Quantity (Cont)
          "positionSide": "", //Position side
          "price": 0, //Order price
          "sourceId": 0, //Triggering conditions ID
          "state": "", //Order state:NEW：New order (unfilled);PARTIALLY_FILLED:Partial deal;PARTIALLY_CANCELED:Partial revocation;FILLED:Filled;CANCELED:Cancled;REJECTED:Order failed;EXPIRED：Expired
          "symbol": "", //Trading pair
          "timeInForce": "", //Valid type
          "triggerProfitPrice": 0, //TP trigger price
          "triggerStopPrice": 0 //SL trigger price
        },
        "returnCode": 0
      }
    title: Response
    language: json
---