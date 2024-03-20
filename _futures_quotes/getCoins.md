---
title: Get Trading Pair Currency
position_number: 2
type: get
description: /future/market/v1/public/symbol/coins

parameters:
  - name:
    content:
content_markdown: Note：This method does not require a signature.
left_code_blocks:
  - code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
        "result": [],
        "returnCode": 0
      }
    title: Response
    language: json
---