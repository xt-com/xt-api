---
title: 取消跟单
position_number: 3
type: post
description: /futures/user/v1/copy-trade/cancel-choose-leader
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 交易员账号id
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String cancelChooseLeaderPost(){


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
                      "mc": "string",
                      "ma": [
                        {}
                      ],
                      "result": true/false
                    }
        title: Response
        language: json
---
