---
title: Delete user account apiKey
position_number: 4
type: delete
description: /v4/user/account/api-key
parameters:
    -
        name: accessKey
        type: string
        mandatory: true
        default:
        description: encryption key
        ranges:
    -
        name: apikeyId
        type: string
        mandatory: true
        default:
        description: apiKey id
        ranges:

content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String deleteApiKey(){


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
                  "result": true    //true: success; false/null: unsuccess
                }
        title: Response
        language: json
---
