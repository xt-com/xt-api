---
title: 撤销所有订单
position_number: 6
type: post
description: /future/trade/v1/order/cancel-all
parameters:
  - name: symbol
    type: String
    mandatory: true
    default: N/A
    description: 交易对（不传时撤销所有交易对订单）
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