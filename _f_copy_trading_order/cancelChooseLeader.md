---
title: Cancel follow leader
position_number: 16
type: post
description: /v1/copy-trade/cancel-choose-leader
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader accountId
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
