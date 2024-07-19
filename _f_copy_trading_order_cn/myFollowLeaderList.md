---
title: 我跟随的交易员列表(当前跟随)
position_number: 17
type: get
description: /future/copytrade/user/v1/copy-trade/my-follow-list
parameters:
    
content_markdown: >-
    #### **限流规则**

    2/s/apikey
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": [number,number] //交易员accountId
                        }
        title: Response
        language: json
---
