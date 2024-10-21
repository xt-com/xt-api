---
title: user Order
position_number: 10
type:
description: 

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
  subscribe:
  ```js
    {
       "method": "SUBSCRIBE/UNSUBSCRIBE",
       "params": [
           "{order}@{listenKey}",
        ],
       "id": "{id}"
    }
  ```

left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "order", 
                    "event": "order@123456", 
                    "data": {
                         "symbol":"btc_usdt",        // Trading pair
                         "orderId": "1234",          // Order Id
                         "origQty": "34244",         // Original Quantity
                         "avgPrice": "123",          // Quantity
                         "price": "1111",            // Average price
                         "executedQty":"34244",      // Volume (Cont)
                         "orderSide": "BUY",         // BUY, SELL
                         "timeInForce": "IOC",       // Valid way
                         "positionSide": "LONG",     // LONG, SHORT
                         "marginFrozen":"123",       // Occupied margin
                         "sourceType":"default",     //  DEFAULT:normal order,ENTRUST:plan commission,PROFIR:Take Profit and Stop Loss
                         "type" : "ORDER",           // 
                         "state": "FILLED",          // state:NEW：New order (unfilled);PARTIALLY_FILLED:Partial deal;PARTIALLY_CANCELED:Partial revocation;FILLED:Filled;CANCELED:Cancled;REJECTED:Order failed;EXPIRED：Expired
                         "createdTime": 1731231231,  // CreateTime
                         "leverage":20,              //leverage
                         "positionType": "ISOLATED", //position type:CROSSED;ISOLATED
                         "orderType:": "MARKET"      //Order Type [LIMIT;MARKET]
                       }
                }
        title: Response
        language: json
---
