---
title: Get ADL Information
position_number: 13
type: get
description: /future/user/v1/position/adl
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
              "longQuantile": 0, //long position adl
              "shortQuantile": 0, //Short position adl
              "symbol": "" //Trading pair
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---