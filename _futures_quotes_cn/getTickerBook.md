---
title: 获取指定交易对的买一卖一行情信息
position_number: 18
type: get
description: /future/market/v1/public/q/ticker/book
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
content_markdown: 注：**此方法不需要签名**
left_code_blocks:
    -
        code_block: "public void getTickerBokk() {\r\n\tString text = HttpUtil.get(URL + \"/data/api//future/market/v1/public/q/ticker/book?symbol=btc_usdt\");\r\n\tSystem.out.println(text);\r\n}"
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
          "ap": "", //卖一价格
          "aq": "", //卖一数量
          "bp": "", //买一价格
          "bq": "", //买一数量
          "s": "", //交易对
          "t": 0 //时间
        },
        "returnCode": 0
      }
    title: Response
    language: json
---