---
title: 获取用户单币种资金
position_number: 2
type: get
description: /futures/user/v1/balance/detail
parameters:
    -
        name: coin
        type: string
        mandatory: true
        default: N/A
        description: 币种
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
            "availableBalance": 0, //可用余额
            "coin": "", //币种
            "isolatedMargin": 0, //逐仓保证金冻结
            "openOrderMarginFrozen": 0, //订单冻结
            "walletBalance": 0 //钱包余额
          },
          "returnCode": 0
        }
      title: Response
      language: json
---