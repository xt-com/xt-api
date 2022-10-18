---
title: Get server time
position_number: 1
type: get 
description: /v4/public/time
parameters:
    -
        name:
        type: number
        mandatory: false
        default:
        description:
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String getServerInfo(){


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
                  "ma": [],
                  "result": {
                    "serverTime": 1662435658062  
                  }
                }
        title: Response
        language: json
---
