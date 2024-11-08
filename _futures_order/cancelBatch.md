---
title: Cancel All Orders
position_number: 7
type: post
description: /future/trade/v1/order/cancel-all
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
  - name: symbol
    type: String
    mandatory: true
    default: N/A
    description: Trading pair (cancel all trading pair orders if pass "")
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
        "result": true,
        "returnCode": 0
      }
    title: Response
    language: json
---