---
title: Get User's Funds Information
position_number: 4
type: get
description: /future/user/v1/balance/list
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
          "result": [
            {
              "availableBalance": 0,      //Available balance
              "coin": "",                 //Currency
              "isolatedMargin": 0,        //Frozen isolated margin
              "openOrderMarginFrozen": 0, //Frozen order
              "crossedMargin": 0,         //Crossed Margin
              "bonus": 0,                 //Bouns
              "coupon": 0,                //Coupon
              "walletBalance": 0          //Balance
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---