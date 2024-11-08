---
title: 获取用户阶梯费率
position_number: 8
type: get
description: /future/user/v1/user/step-rate
parameters:
    -
content_markdown: |-

               #### **限流规则**

               200/s/apikey
left_code_blocks:
    -
        code_block: "public void getStepRate() {\r\n\tString text = HttpUtil.get(URL + \"/future/user/v1/user/step-rate\");\r\n\tSystem.out.println(text);\r\n}"
        title: Java
        language: java
right_code_blocks:
    - code_block: |-
        {
          "error": {
            "code": "",
            "msg": ""
          },
          "msgInfo": "success",
          "result": {
            "makerFee":"0.00004",
            "takerFee": "0.00001"
          },
          "returnCode": 0
        }
      title: Response
      language: json
---
