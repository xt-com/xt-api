---
title: Get Latest Transaction Information of Trading Pairs
position_number: 9
type: get
description: /future/market/v1/public/q/deal
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: Trading pair
        ranges:
    -
        name: num
        type: integer
        mandatory: false
        default: 50
        description: Quantity
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
          "result": [
            {
              "a": 0, //Volume
              "m": "", //Order side
              "p": 0, //Price
              "s": "", //Trading pair
              "t": 0 //Time
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---