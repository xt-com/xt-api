---
title: 修改保证金
position_number: 10
type: post
description: /future/user/v1/position/margin
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
    -
        name: margin
        type: number
        mandatory: false
        default: N/A
        description: 数量
        ranges:
    -
        name: positionSide
        type: string
        mandatory: false
        default: N/A
        description: 持仓方向：LONG;SHORT
        ranges:
    -
        name: type
        type: string
        mandatory: false
        default: N/A
        description: 调整方向（ADD：增加逐仓保证金；SUB：减少逐仓保证金）
        ranges: ADD;SUB
content_markdown: |-

             #### **限流规则**

             200/s/apikey
left_code_blocks:
    -
        code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/user/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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