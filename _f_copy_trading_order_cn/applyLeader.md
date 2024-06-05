---
title: 申请交易员
position_number: 8
type: post
description: /v1/copy-trade/apply-leader
parameters:
    -
        name: nickName
        type: string
        mandatory: true
        default:
        description: 昵称
        ranges:
    -
        name: images
        type: string
        mandatory: true
        default:
        description: 上传的图片
        ranges:

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
                        "result": boolean // true 成功  false 失败
                        }
        title: Response
        language: json
---
