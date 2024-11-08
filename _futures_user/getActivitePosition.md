---
title: Get active position information
position_number: 7
type: get
description: /future/user/v1/position
parameters:
  -
    name: symbol
    type: string
    mandatory: false
    default: N/A
    description: Trading pairs (query the position information of all trading pairs when not uploaded)
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
          "args": [],
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": [
          {
            "autoMargin": false, // Whether to automatically call margin
            "availableCloseSize": 0, // Available quantity (Cont)
            "breakPrice": 0, // Blowout price
            "calMarkPrice": 0, // Calculated mark price
            "closeOrderSize": 0, // Quantity of open order (Cont)
            "contractType": "", // Contract Types: PERPETUAL (Perpetual Contract), PREDICT (Predict Contract)
            "entryPrice": 0, // Average opening price
            "floatingPL": 0, // Unrealized profit or loss
            "isolatedMargin": 0, // Warehouse-by-warehouse margin
            "leverage": 0, // Leverage ratio
            "openOrderMarginFrozen": 0, // Occupation of deposit for opening order
            "openOrderSize": 0, // Opening warehouse orders occupied
            "positionSide": "", // Position direction
            "positionSize": 0, // Position quantity (Cont)
            "positionType": "", // Position type: CROSSED (full position); ISOLATED (warehouse by warehouse)
            "profitId": 0, // Take profit and stop loss id
            "realizedProfit": 0, // Realized profit and loss
            "symbol": "", // trading pair
            "triggerPriceType": "", // Trigger price type 1. Index price 2: Mark price (reasonable price); 3: Latest price
            "triggerProfitPrice": 0, // Take profit trigger price
            "triggerStopPrice": 0, // Stop loss trigger price
            "welfareAccount": true
          }
        ],
        "returnCode": 0
      }
    title: Response
    language: json
---
