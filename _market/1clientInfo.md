---
title: Get client ip
position_number: 2
type: get 
description: /v4/public/client
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
            public String getClient(){


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
                    "ip": 192.168.1.1  
                  }
                }
        title: Response
        language: json
---
