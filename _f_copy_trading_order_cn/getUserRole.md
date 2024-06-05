---
title: 获取用户觉得
position_number: 11
type: get
description: /v4/account/copy-trade/user-status
parameters:
 
content_markdown: >-
    #### **限流规则**

    1/s/apikey
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                  "ma": [
                    {}
                  ],
                  "mc": "string",
                  "rc": 0,
                  "result": "string"        //LEADER：带单员、FOLLOWER：跟单员、NONE：无身份
                }
        title: Response
        language: json
---
