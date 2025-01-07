---
title: 获取交易对的最新成交信息
position_number: 9
type: get
description: /future/market/v1/public/q/deal
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
    -
        name: num
        type: integer
        mandatory: false
        default: 50
        description: 数量
        ranges:
content_markdown: 注：**此方法不需要签名**
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
              "a": 0, //成交量
              "m": "", //买卖方向
              "p": 0, //成交价
              "s": "", //交易对
              "t": 0 //成交时间
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---