---
title: 创建apiKey
position_number: 3
type: post
description: /user/account/api-key
parameters:

content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String createApiKey(){


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
                  "result": {
                     "userId": 12345678,                                       //user id
                     "accessKey": "99258227-f053-46a2-9b10-66c155eb705c",      //加密key
                     "secretKey": "4b1839e11bf7a1c6de5f078bd9f4b6e0850da3cf"   //加密串
                  }
                }
        title: Response
        language: json
---
