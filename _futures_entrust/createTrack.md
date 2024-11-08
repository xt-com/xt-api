---
title: Create track
position_number: 13
type: post
description: /future/trade/v1/entrust/create-track
remark: Content-Type = application/x-www-form-urlencoded
parameters:
    -
        name: callback
        type: string
        mandatory: true
        default: N/A
        description: Callback range configuration
        ranges: FIXED;PROPORTION
    -
        name: callbackVal
        type: number
        mandatory: true
        default: N/A
        description: Callback value
        ranges: Greater than 0
    -
        name: orderSide
        type: string
        mandatory: true
        default: N/A
        description: Order side
        ranges: BUY;SELL
    -
        name: origQty
        type: number
        mandatory: true
        default: N/A
        description: Original quantity(count)
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: Position side:LONG;SHORT
        ranges: BOTH;LONG;SHORT
    -
        name: positionType
        type: string
        mandatory: true
        default: N/A
        description: Position type
        ranges: CROSSED;ISOLATED
    - 
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: Trading pair
        ranges: 
    -
        name: triggerPriceType
        type: string
        mandatory: true
        default: N/A
        description: Trigger price type:INDEX_PRICE(Index price)；MARK_PRICE(Mark price)；LATEST_PRICE(latest price)
        ranges: INDEX_PRICE;MARK_PRICE;LATEST_PRICE
    -
        name: activationPrice
        type: number
        mandatory: false
        default: N/A
        description: Activation price
        ranges:
    -
        name: clientMedia
        type: string
        mandatory: false
        default: N/A
        description: Client media
        ranges:
    -
        name: clientMediaChannel
        type: string
        mandatory: false
        default: N/A
        description: Client media channel
        ranges:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default: N/A
        description: client order id
        ranges:
    -
        name: expireTime
        type: integer
        mandatory: false
        default: N/A
        description: expire time
        ranges:
content_markdown: |-

                 #### **Limit Flow Rules**

                 200/s/apikey
left_code_blocks:
    -
        code_block: 
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
          "result": {},
          "returnCode": 0
        }
      title: Response
      language: json
---