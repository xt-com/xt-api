---
title: 创建子账户
position_number: 2
type: post
description: /v4/user/account
parameters:
    -
        name: accountName
        type: string
        mandatory: true
        default:
        description: 子账户名
        ranges:

content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String createSubAccount(){


            }
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
                  "mc": "SUCCESS",
                  "ma": [
                    {}
                  ],
                  "result": true
                }
        title: Response
        language: json
---
