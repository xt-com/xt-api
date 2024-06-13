---
title: Get leverage list
position_number: 31
type: get
description: /future/copytrade/order/v1/position/list
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: symbol
        ranges:
    -
        name: welfareAccountVersion
        type: string
        mandatory: false
        default:
        description: version
        ranges:

content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
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
                                    "symbol": "string", //symbol
                                    "positionType": "string",//position type:CROSSED;ISOLATED
                                    "positionSide": "string",//direction
                                    "contractType": "string",//contract type：PERPETUAL、PREDICT
                                    "positionSize": 0,// position size
                                    "closeOrderSize": 0,//close order size
                                    "availableCloseSize": 0,//available close size
                                    "entryPrice": 0,//open price
                                    "openOrderSize": 0,//open order size
                                    "isolatedMargin": 0,// isolated margin
                                    "openOrderMarginFrozen": 0,//open order margin frozen
                                    "realizedProfit": 0,//realized pnl
                                    "autoMargin": false,//is auto add margin
                                    "leverage": 0, // leverage
                                    "profitId": 0,//profit order id
                                    "triggerPriceType": 0,//trigger price type 1index price 2mark price 3deal price
                                    "triggerProfitPrice": 0,//trigger profit price
                                    "triggerStopPrice": 0,//trigger stop price
                                    "welfareAccount": boolean //is welfare account
                                   }
                          ]
                        }
        title: Response
        language: json
---
