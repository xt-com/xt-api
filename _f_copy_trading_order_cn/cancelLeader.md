---
title: 取消带单员身份
position_number: 8
type: get
description: /v1/copy-trade/cancel-leader
parameters:

content_markdown: >-
    #### **限流规则**

    10/s/apikey
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
                    "result": boolean true // 取消成功 false 取消失败
                    }
        title: Response
        language: json
---
