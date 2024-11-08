---
title: 获取用户单币种资金
position_number: 3
type: get
description: /future/user/v1/balance/detail
parameters:
    -
        name: coin
        type: string
        mandatory: true
        default: N/A
        description: 币种
        ranges:
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
          "result": {
            "availableBalance": 0,      //可用余额
            "coin": "",                 //币种
            "isolatedMargin": 0,        //逐仓保证金冻结
            "openOrderMarginFrozen": 0, //订单冻结
            "crossedMargin": 0,         //全仓起始保证金
            "bonus": 0,                 //体验金余额
            "coupon": 0,                //抵扣金余额
            "walletBalance": 0          //钱包余额
          },
          "returnCode": 0
        }
      title: Response
      language: json
---