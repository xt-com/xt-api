---
title: 撤销订单
position_number: 5
type: post
description: /future/trade/v1/order/cancel
parameters:
  - name: orderId
    type: Integer
    mandatory: true
    default: N/A
    description: 订单id
    ranges:
right_code_blocks:
  - code_block: |-
      {
        "error": {
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": "", //订单id
        "returnCode": 0
      }
    title: Response
    language: json
---