---
title: 停止跟单
position_number: 24
type: post
description: /v1/copy-trade-account/copy-trade/cancel-follow
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 带单员账号id
        ranges:
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
                     "rc": 0,
                     "mc": "string",
                     "ma": [
                       {}
                     ],
                     "result": true
                   }
        title: Response
        language: json
---
