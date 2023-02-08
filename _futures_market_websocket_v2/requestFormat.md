---
title: Request message format
position_number: 2
type:
description:
parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
                {
                    "method": "subscribe", 
                    "params": [
                        "{topic}@{arg},{arg}", 
                        "{topic}@{arg}"
                    ], 
                    "id": "{id}"    //call back ID
                }
        title: subscribe
        language: javascript
    -
        code_block: |-
                {
                    "method": "unsubscribe", 
                    "params": [
                        "{topic}@{arg},{arg}"
                    ], 
                    "id": "{id}"   //call back ID
                }
        title: unsubscribe
        language: javascript
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
