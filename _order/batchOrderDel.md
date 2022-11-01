---
title: Cancell batch order
position_number: 6
type: delete
split: -------------------------------------
description: /v4/batch-order
parameters:
    -
        name: clientBatchId
        type: string
        mandatory: false
        default:
        description: client batch id
        ranges:
    -
        name: orderIds
        type: array
        mandatory: true
        default:
        description: [6216559590087220004,6216559590087220005]
        ranges:
content_markdown: The parameters are placed in the body in the form of json
left_code_blocks:
    -
        code_block: |-
            public String batchOrderDel(){


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
                  "result": {}
                }
        title: Response
        language: json
---
