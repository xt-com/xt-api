---
title: Cancel All Orders
position_number: 6
type: post
description: /future/trade/v1/order/cancel-all
parameters:
  - name: symbol
    type: String
    mandatory: true
    default: N/A
    description: Trading pair (cancel all trading pair orders if don't pass parameters)
    ranges:
right_code_blocks:
  - code_block: |-
      {
        "error": {
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": true,
        "returnCode": 0
      }
    title: Response
    language: json
---