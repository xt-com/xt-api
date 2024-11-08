---
title: See Order History
position_number: 1.1
type: get
description: /future/trade/v1/order/list-history
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: "Trading pairs (queries all trading pairs if not passed)\t"
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: "Direction（PREV:Previous page；NEXT:Next page）\t"
        ranges: PREV;NEXT
    -
        name: id
        type: integer
        mandatory: false
        default: N/A
        description: id
        ranges:
    -
        name: limit
        type: integer
        mandatory: false
        default: 10
        description: "Limit\t"
        ranges:
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: Start time
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description: End time
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
          "hasNext": false, //Is there a next page
          "hasPrev": false, //Is there a previous page
          "items": [ //Datasheets
            {
              "clientOrderId": "", //Client order ID
              "avgPrice": 0, //Average price
              "closePosition": false, //Whether to close all when order condition is triggered
              "closeProfit": 0, //Offset profit and loss
              "createdTime": 0, //Creat time
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
            }
          ]
        },
        "returnCode": 0
      }
    title: Response
    language: json
---