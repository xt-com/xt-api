---
title: Cancel single track
position_number: 14
type: post
description: /future/trade/v1/entrust/cancel-track
remark: Content-Type = application/x-www-form-urlencoded
parameters:
    -
        name: trackId
        type: integer
        mandatory: true
        default: N/A
        description: track id
        ranges:
content_markdown: |-

                #### **Limit Flow Rules**

                200/s/apikey
left_code_blocks:
    -
        code_block: 
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