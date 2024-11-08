---
title: Alter the automatical margin call
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
        description: Trading pair
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: Position side
        ranges: LONG;SHORT
    -
        name: autoMargin
        type: boolean
        mandatory: true
        default: N/A
        description: Whether to automatically call margin
        ranges: true;false
content_markdown: |-

               #### **Limit Flow Rules**

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