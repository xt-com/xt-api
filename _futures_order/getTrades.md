---
title: See Transaction Details
position_number: 1.1
type: get
description: /future/trade/v1/order/trade-list
parameters:
    -
        name: orderId
        type: integer
        mandatory: false
        default: N/A
        description: Order ID
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: Trading pair
        ranges:
    -
        name: page
        type: integer
        mandatory: false
        default: 1
        description: "Page\t"
        ranges:
    -
        name: size
        type: integer
        mandatory: false
        default: 10
        description: "Quantity of a single page\t"
        ranges:
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: start time
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description: end time
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
            "items": [
              {
                "fee": 0,                //Fee
                "feeCoin": "",           //Currency of fee
                "orderId": 0,            //Order ID
                "execId": 0,             //Trade ID
                "price": 0,              //Price
                "quantity": 0,           //Volume
                "symbol": "",            //Trading pair
                "timestamp": 0,          //Time
                "takerMaker": "TAKER"    //taker or maker
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