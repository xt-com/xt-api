---
title: 修改止盈止损
position_number: 12
type: post
description: /future/trade/v1/entrust/update-profit-stop
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
  - name: profitId
    type: integer
    mandatory: true
    default: N/A
    description: 止盈止损id
    ranges:
  - name: triggerProfitPrice
    type: number
    mandatory: false
    default: N/A
    description: 止盈触发价s
    ranges:
  - name: triggerStopPrice
    type: number
    mandatory: false
    default: N/A
    description: 止损触发价
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
        "result": {},
        "returnCode": 0
      }
    title: Response
    language: json
---