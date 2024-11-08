---
title: 撤销所有订单
position_number: 7
type: post
description: /future/trade/v1/order/cancel-all
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
  - name: symbol
    type: String
    mandatory: true
    default: N/A
    description: 交易对（传空字符串撤销所有交易对订单）
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
        "result": true,
        "returnCode": 0
      }
    title: Response
    language: json
---