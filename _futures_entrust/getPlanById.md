---
title: See Trigger Orders base on EntrustId
position_number: 5
type: get
description: /future/trade/v1/entrust/plan-detail
parameters:
    -
        name: entrustId
        type: integer
        mandatory: true
        default: N/A
        description: Order ID
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
            "state": "", //Order state:NOT_TRIGGERED：New order (not triggered);TRIGGERING:Triggering;TRIGGERED:Triggered;USER_REVOCATION:User revocation;PLATFORM_REVOCATION:Platform revocation (rejection);EXPIRED:expired;UNFINISHED:Unfinished;HISTORY:(History)
            "stopPrice": 0, //Trigger price
            "symbol": "", //Trading pair
            "timeInForce": "", //有效方式
            "triggerPriceType": "" //触发价格类型
          },
          "returnCode": 0
        }
      title: Response
      language: json
---