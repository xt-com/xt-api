---
title: 撤销计划委托
position_number: 2
type: post
description: /future/trade/v1/entrust/cancel-plan
parameters:
    -
        name: entrustId
        type: integer
        mandatory: true
        default: N/A
        description: 计划委托id
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
          "result": {},
          "returnCode": 0
        }
      title: Response
      language: json
---