---
title: Cancel Stop Limit
position_number: 8
type: post
description: /future/trade/v1/entrust/cancel-profit-stop
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
    -
        name: profitId
        type: integer
        mandatory: true
        default: N/A
        description: Stop limit ID
        ranges:
content_markdown: |-

                #### **Limit Flow Rules**

                200/s/apikey
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
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