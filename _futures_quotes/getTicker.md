---
title: Get Market Information for Specific Trading Pair
position_number: 7
type: get
description: /future/market/v1/public/q/ticker
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
            "a": "", //24h volume
            "c": "", //Latest price
            "h": "", //Highest price in 24 hours
            "l": "", //Lowest price in 24 hours
            "o": "", //The first transaction price 24 hours ago
            "r": "", //24h Price Fluctuation Limit
            "s": "", //Trading pair
            "t": 0, //Time
            "v": "" //24h turnover
          },
          "returnCode": 0
        }
      title: Response
      language: json
---