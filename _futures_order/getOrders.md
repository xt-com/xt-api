---
title: See Orders
position_number: 5
type: get
description: /future/trade/v1/order/list
parameters:
  - name: clientOrderId
    type: String
    mandatory: false
    default: N/A
    description: Client order ID
    ranges:
  - name: page
    type: integer
    mandatory: false
    default: 1
    description: Page
    ranges:
  - name: size
    type: integer
    mandatory: false
    default: 10
    description: Quantity of a single page
    ranges:
  - name: startTime
    type: integer
    mandatory: false
    default: N/A
    description: Start time
    ranges:
  - name: endTime
    type: integer
    mandatory: false
    default: N/A
    description: End time
    ranges:
  - name: state
    type: string
    mandatory: false
    default: NEW
    description: >-
      Order state:
      NEW：New order (unfilled);PARTIALLY_FILLED:Partial deal;PARTIALLY_CANCELED:Partial revocation;FILLED:Filled;CANCELED:Cancled;REJECTED:Order failed;EXPIRED：Expired;UNFINISHED:Unfinished;HISTORY:(History)
    ranges:
  - name: symbol
    type: string
    mandatory: false
    default: N/A
    description: Trading pair
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
          "items": [
            {
              "clientOrderId": "", //Client order ID
              "avgPrice": 0, //Average price
              "closePosition": false, //Whether to close all when order condition is triggered
              "closeProfit": 0, //Offset profit and loss
              "createdTime": 0, //Creat time
              "executedQty": 0, //Volume (Cont)
              "forceClose": false, //Is it a liquidation order
              "marginFrozen": 0, //Occupied margin
              "orderId": 0, //Order id
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
            }
          ],
          "page": 0,
          "ps": 0,
          "total": 0
        },
        "returnCode": 0
      }
    title: Response
    language: json
---