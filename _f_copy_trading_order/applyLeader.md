---
title: Apply for lead trading
position_number: 20
type: post
description: /v1/copy-trade/apply-leader
parameters:
    -
        name: nickName
        type: string
        mandatory: true
        default:
        description: nickname
        ranges:
    -
        name: images
        type: string
        mandatory: true
        default:
        description: image
        ranges:

content_markdown: >-
    #### **Limit Flow Rules**

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
                        "result": boolean // true=success  false=fail
                        }
        title: Response
        language: json
---
