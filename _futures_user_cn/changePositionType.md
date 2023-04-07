---
title: 修改持仓模式
position_number: 16
type: post
description: /future/user/v1/position/change-type
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: 仓位方向
        ranges: LONG;SHORT
    -
        name: positionType
        type: string
        mandatory: true
        default: N/A
        description: 仓位类型
        ranges: CROSSED;ISOLATED
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