---
title: 获取用户角色
position_number: 11
type: get
description: /v1/copy-trade-account/copy-trade/user-status
parameters:
 
content_markdown: >-
    #### **限流规则**

    2/s/ip
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
