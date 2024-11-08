---
title: Get User's Account Flow Information
position_number: 5
type: get
description: /future/user/v1/balance/bills
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
        code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/user/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
                "afterAmount": 0, //Balance after change
                "amount": 0, //Quantity
                "coin": "", //Currency
                "createdTime": 0, //Time
                "id": 0, //id
                "side": "", //ADD:transfer in;SUB:transfer out
                "symbol": "", //Trading pair
                "type": "" //EXCHANGE:transfer;CLOSE_POSITION:Offset profit and loss;TAKE_OVER:position takeover;QIANG_PING_MANAGER:Liquidation management fee (fee);FUND:Fund Fee;FEE:Fee(Open position, liquidation, Forced liquidation);ADL:Adl;TAKE_OVER:position takeover;MERGE:Position Merge
              }
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---