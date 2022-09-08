---
title: Request message format
position_number: 2
type:
description: |+

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
    **param format**

    \{topic\}@\{arg\},\{arg\},…
left_code_blocks:
    -
        code_block: "{\r\n    \"method\": \"subscribe\", \r\n    \"params\": [\r\n        \"{topic}@{arg},{arg}\",    //event\r\n        \"{topic}@{arg}\"\r\n    ], \r\n    \"listenKey\": \"512312356123123123\",   //the listener Key, Apply through the rest interface\r\n    \"id\": \"{id}\"\r\n}"
        title: subscribe
        language: json
    -
        code_block: |-
            {
                "method": "unsubscribe", 
                "params": [
                    "{topic}@{arg},{arg}",    //event
                    "{topic}@{arg}"
                ], 
                "listenKey": "512312356123123123",   //the listener Key, Apply through the rest interface
                "id": "{id}"
            }
        title: unsubscribe
        language: json
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
