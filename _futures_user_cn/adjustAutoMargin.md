---
title: 修改自动追加保证金
position_number: 11
type: post
display: 0
description: /future/user/v1/position/auto-margin
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
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: 仓位方向
        ranges: LONG;SHORT
    -
        name: autoMargin
        type: boolean
        mandatory: true
        default: N/A
        description: 是否开启自动追加保证金
        ranges: true;false
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