---
title: See Stop Limit base on Profitld
position_number: 11
type: get
description: /future/trade/v1/entrust/profit-detail
parameters:
    -
        name: profitId
        type: integer
        mandatory: true
        default: N/A
        description: Stop limit ID
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
            "createdTime": 0, //Time
            "entryPrice": 0, //Open position average price
            "executedQty": 0, //Actual transaction
            "isolatedMargin": 0, //Isolated Margin
            "origQty": 0, //Quantity (Cont)
            "positionSide": "", //Position side
            "positionSize": 0, //Position quantity (Cont)
            "profitId": 0, //Order ID
            "state": "", //Order state:NOT_TRIGGERED：New order (not triggered);TRIGGERING:Triggering;TRIGGERED:Triggered;USER_REVOCATION:User revocation;PLATFORM_REVOCATION:Platform revocation (rejection);EXPIRED:expired;
            "symbol": "", //Trading pair
            "triggerProfitPrice": 0, //Stop profit price
            "triggerStopPrice": 0 //Stop loss price
          },
          "returnCode": 0
        }
      title: Response
      language: json
---