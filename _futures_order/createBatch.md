---
title: Bulk Orders
position_number: 2
type: post
description: /future/trade/v1/order/create-batch
parameters:
  - name: list
    type: string
    mandatory: true
    default: N/A
    description: List collection of order data
    ranges:
left_code_blocks:
  - code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
    title: Java
    language: java
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