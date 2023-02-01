---
title: Cancel All Trigger Orders
position_number: 3
type: post
description: /future/trade/v1/entrust/cancel-all-plan
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: Trading pair (cancel all trading pair orders if don't pass parameters)
        ranges:
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
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