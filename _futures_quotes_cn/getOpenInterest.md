---
title: 获取交易对开仓量
position_number: 21
type: get
description: /future/market/v1/public/contract/open-interest
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
content_markdown: >-

  #### **限流规则**

  1/s/ip
  <br>
  注：此方法不需要签名
  
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
            "symbol": "", //交易对
            "openInterest": "", //开仓量
            "openInterestUsd": 0, //开仓价值
            "time": "", //时间
          },
          "returnCode": 0
        }
      title: Response
      language: json
---