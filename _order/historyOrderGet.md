---
title: Query historical orders
position_number: 9
type: get
description: /v4/history-order
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: Trading pair, if not filled in, represents all
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: "SPOT, LEVER"
        ranges:
    -
        name: side
        type: string
        mandatory: false
        default:
        description: BUY,SELL
        ranges:
    -
        name: type
        type: string
        mandatory: false
        default:
        description: LIMIT, MARKET
        ranges:
    -
        name: state
        type: string
        mandatory: false
        default:
        description: order <a href="#orderStatus">state</a>, <br> PARTIALLY_FILLED,<br> FILLED,   CANCELED,<br> REJECTED,EXPIRED
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: start id
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: query direction:PREV, NEXT
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '20'
        description: Limit number, max 100
        ranges:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: eg:1657682804112
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 
        ranges:
    -
        name: hiddenCanceled
        type: bool
        mandatory: false
        default:
        description: 
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    10/s/apikey
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
              "rc": 0,
              "mc": "string",
              "ma": [
                {}
              ],
              "result": {
                "hasPrev": true,
                "hasNext": true,
                "items": [   //For field information, refer to the Get single interface
                  {
                    "symbol": "BTC_USDT",
                    "orderId": "6216559590087220004",
                    "clientOrderId": "16559590087220001",
                    "baseCurrency": "string",
                    "quoteCurrency": "string",
                    "side": "BUY",
                    "type": "LIMIT",
                    "timeInForce": "GTC",
                    "price": "40000",
                    "origQty": "2",
                    "origQuoteQty": "48000",
                    "executedQty": "1.2",
                    "leavingQty": "string",
                    "tradeBase": "2",
                    "tradeQuote": "48000",
                    "avgPrice": "42350",
                    "fee": "string",
                    "feeCurrency": "string",
                    "state": "NEW",
                    "time": 1655958915583,
                    "updatedTime": 1655958915583
                  }
                ]
              }
            }
        title: Response
        language: json
---
