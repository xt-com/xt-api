---
title: Public get leader current orders
position_number: 21
type: get
description: /future/copytrade/public/order/v1/public/copy-trade/leader-order-page
parameters:
    -
        name: type
        type: number
        mandatory: false
        default:
        description: type(1:detail, 2:total)
        ranges: 1,2
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: symbol
        ranges:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader accountId
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: direction
        ranges: NEXT, PREV
    -
        name: limit
        type: number
        mandatory: false
        default:
        description: page size
        ranges: 10
    -
        name: id
        type: number
        mandatory: false
        default:
        description: id
        ranges:

content_markdown: >-
    #### **Limit Flow Rules**

    2/s/ip
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": [
                                {
                                "symbolName": "string", // symbol
                                "positionType": "string", // position type:CROSSED;ISOLATED
                                "positionSide": "string", // direction:LONG;SHORT
                                "openLeverage": 5, // leverage
                                "id": 0, // id
                                "orderId": 0, // order id
                                "trackNo": 0, // trackNo
                                "openTime": 0, // open time
                                "closeTime": 0, // close time
                                "entryPrice": 0, // position price
                                "openPrice": 0, // open price
                                "closePrice": 0, // close price
                                "profitRate": 0, // profit rate
                                "openMargin": 0, // open margin
                                "realizedPnl": 0, // realized pnl
                                "fee": 0, // fee
                                "openSize": 0, // open quantity
                                "closeSize": 0, // close quantity
                                "positionSize": 0, // position quantity
                                "closeOrderSize": 0, // close order quantity
                                "availableCloseSize": 0, // available close quantity
                                "triggerProfitPrice": 0, // trigger profit price
                                "triggerStopPrice": 0, // trigger stop price
                                "triggerPriceType": "string", // trigger price type:LATEST_PRICE,MARK_PRICE
                                "followOrderCount": 0 // follow order count
                                }
                        ]
                        }
        title: Response
        language: json
---
