---
title: Cancel Orders
position_number: 5
type: post
description: /future/trade/v1/order/cancel
parameters:
  - name: orderId
    type: Integer
    mandatory: true
    default: N/A
    description: Order ID
    ranges:
right_code_blocks:
  - code_block: |-
      {
        "error": {
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": "", //Order ID
        "returnCode": 0
      }
    title: Response
    language: json
---