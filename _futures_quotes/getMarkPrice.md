---
title: Get Mark Price for Single Trading Pair
position_number: 13
type: get
description: /future/market/v1/public/q/symbol-mark-price
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: Trading pair
        ranges:
content_markdown: Note：This method does not require a signature.
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
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
          "result": {
            "p": 0, //Price
            "s": "", //Trading pair
            "t": 0 //Time
          },
          "returnCode": 0
        }
      title: Response
      language: json
---