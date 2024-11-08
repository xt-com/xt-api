---
title: Close All
position_number: 12
type: post
description: /future/user/v1/position/close-all
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
          "result": true,
          "returnCode": 0
        }
      title: Response
      language: json
---