---
title: Cancel Orders
position_number: 6
type: post
description: /future/trade/v1/order/cancel
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
  - name: orderId
    type: Integer
    mandatory: true
    default: N/A
    description: Order ID
    ranges:
content_markdown: |-

               #### **Limit Flow Rules**

               200/s/apikey
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