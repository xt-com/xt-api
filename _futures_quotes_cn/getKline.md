---
title: 获取交易对的k线信息
position_number: 15
type: get
description: /future/market/v1/public/q/kline
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
    -
        name: interval
        type: string
        mandatory: true
        default: N/A
        description: 时间间隔
        ranges: 1m;5m;15m;30m;1h;4h;1d;1w
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: 起始时间
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description: 结束时间
        ranges:
    -
        name: limit
        type: integer
        mandatory: false
        default: N/A
        description: 限制条数
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
              "c": 0, //结束价
              "h": 0, //最高价
              "l": 0, //最低价
              "o": 0, //开始价
              "s": "", //交易对
              "t": 0, //时间
              "v": 0 //成交额
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---