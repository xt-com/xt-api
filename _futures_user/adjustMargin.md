---
title: Alter Margin
position_number: 9
type: post
description: /future/user/v1/position/margin
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: Trading pair
        ranges:
    -
        name: margin
        type: number
        mandatory: false
        default: N/A
        description: Quantity
        ranges:
    -
        name: positionSide
        type: string
        mandatory: false
        default: N/A
        description: Position side:LONG;SHORT
        ranges:
    -
        name: type
        type: string
        mandatory: false
        default: N/A
        description: Adjust direction (add isolated margin, reduce isolated margin)
        ranges: ADD;SUB
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