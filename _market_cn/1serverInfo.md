---
title: 服务状态
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": {\r\n    \"serverTime\": 1662435658062  //服务器时间\r\n  }\r\n}"
        title: Response
        language: json
---
