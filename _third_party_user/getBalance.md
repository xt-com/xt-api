---
title: Get User's Single Currency Fund Information
position_number: 2
type: get
description: /futures/user/v1/balance/detail
parameters:
    -
        name: coin
        type: string
        mandatory: true
        default: N/A
        description: Currency
        ranges:
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
          "result": {
            "availableBalance": 0, //Available balance
            "coin": "", //Currency
            "isolatedMargin": 0, //Frozen isolated margin
            "openOrderMarginFrozen": 0, //Frozen order
            "walletBalance": 0 //Balance
          },
          "returnCode": 0
        }
      title: Response
      language: json
---