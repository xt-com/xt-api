---
title: List Open Order
position_number: 5.1
type: post
description: /future/trade/v1/order/list-open-order
parameters:
  - name: symbol
    type: string
    mandatory: false
    default: N/A
    description: Trading pair
    ranges:
content_markdown: |-

               #### **Limit Flow Rules**

               10/s/apikey
left_code_blocks:
  - code_block: |-
    title: Java
    language: java
right_code_blocks:
  - code_block: |-
          {
            "orderId": "538511221008857280",        // System order ID
            "clientOrderId": "myOrder123",          // User-defined order ID (if any)
            "symbol": "eth_usdt",                   // Trading pair
            "contractSize": 0.01,                   // Contract size
            "orderType": "LIMIT",                   // Order type: LIMIT/MARKET
            "orderSide": "BUY",                     // Order side: BUY/SELL
            "positionSide": "LONG",                 // Position side: LONG/SHORT
            "positionType": "ISOLATED",             // Position type: ISOLATED / CROSSED
            "timeInForce": "GTC",                   // Time in force: GTC/IOC/FOK
            "price": "4009.94",                     // Order price
            "origQty": "12",                        // Original quantity
            "avgPrice": "0",                        // Average executed price
            "executedQty": "0",                     // Executed quantity
            "marginFrozen": "80.48751569",          // Frozen margin
            "remark": null,                         // Remark
            "sourceId": null,                       // Source ID
            "sourceType": "DEFAULT",                // Source type, e.g. DEFAULT
            "leverage": 6,                          // Leverage
            "openPrice": null,                      // Open price (if any)
            "state": "NEW",                         // Order state: NEW / PARTIALLY_FILLED
            "createdTime": 1758093080143,           // Created timestamp (ms)
            "updatedTime": 1758093080371,           // Updated timestamp (ms)
            "welfareAccount": false,                // Whether welfare account
            "triggerPriceType": null,               // Trigger price type (if any)
            "triggerProfitPrice": null,             // Take-profit trigger price
            "profitDelegateOrderType": null,        // Take-profit delegate order type
            "profitDelegateTimeInForce": null,      // Take-profit time in force
            "profitDelegatePrice": null,            // Take-profit delegate price
            "triggerStopPrice": null,               // Stop-loss trigger price
            "stopDelegateOrderType": null,          // Stop-loss delegate order type
            "stopDelegateTimeInForce": null,        // Stop-loss time in force
            "stopDelegatePrice": null,              // Stop-loss delegate price
            "markPrice": "4543.73",                 // Mark price
            "desc": null                            // Description
          }
    title: Response
    language: json
---