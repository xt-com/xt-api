---
title: 撤销订单
position_number: 6
type: post
description: /future/trade/v1/order/cancel
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
  - name: orderId
    type: Integer
    mandatory: true
    default: N/A
    description: 订单id
    ranges:
content_markdown: |-

              #### **限流规则**

              200/s/apikey
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