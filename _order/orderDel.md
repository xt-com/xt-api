---
title: Cancell order
position_number: 3
type: delete
split: -------------------------------------
description: /v4/order/{orderId}
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default:
        description: 
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    100/s/apikey
left_code_blocks:
    -
        code_block: |-
            public String orderDel(){


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
                  "result": {
                    "cancelId": "6216559590087220004"
                  }
                }
        title: Response
        language: json
---
