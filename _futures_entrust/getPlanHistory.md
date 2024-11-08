---
title: See Trigger Orders History
position_number: 6
type: get
description: /future/trade/v1/entrust/plan-list-history
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
    -
        code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
                "closePosition": false, //Whether triggered to close all
                "createdTime": 0, //Create time
                "entrustId": 0, //Order ID
                "entrustType": "", //Order type
                "marketOrderLevel": 0, //Best market price
                "orderSide": "", //Order side
                "ordinary": true,
                "origQty": 0, //Quantity (Cont)
                "positionSide": "", //Position side
                "price": 0, //Order price
                "state": "", //Order state:NOT_TRIGGERED：New order (not triggered);TRIGGERING:Triggering;TRIGGERED:Triggered;USER_REVOCATION:User revocation;PLATFORM_REVOCATION:Platform revocation (rejection);EXPIRED:expired
                "stopPrice": 0, //Trigger price
                "symbol": "", //Trading pair
                "timeInForce": "", //Valid way
                "triggerPriceType": "" //Trigger price type
              }
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---