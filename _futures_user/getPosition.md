---
title: Get Position Information
position_number: 7
type: get
description: /future/user/v1/position/list
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: Trading pair (see the position information of all trading pairs if don't pass parameters)
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
          "result": [
            {
              "autoMargin": false, //Whether to automatically call margin
              "availableCloseSize": 0, //Available quantity (Cont)
              "closeOrderSize": 0, //Pending order quantity (Cont)
              "entryPrice": 0, //Open position average price
              "isolatedMargin": 0, //Isolated Margin
              "leverage": 0, //Leverage
              "openOrderMarginFrozen": 0, //Occupied open position margin
              "positionSide": "", //Position side
              "positionSize": 0, //Position quantity (Cont)
              "positionType": "", //Position type
              "realizedProfit": 0, //Realized profit and loss
              "symbol": "" //Trading pair
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---
