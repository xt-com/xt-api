---
title: 申请交易员
position_number: 20
type: post
description: /future/copytrade/user/v1/copy-trade/apply-leader
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
                        "result": Boolean //true成功 false失败
                        }
        title: Response
        language: json
---
