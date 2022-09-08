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
        code_block: "{\r\n    \"method\": \"subscribe\", \r\n    \"params\": [\r\n        \"{topic}@{arg},{arg}\", \r\n        \"{topic}@{arg}\"\r\n    ], \r\n    \"id\": \"{id}\"    //call back ID\r\n}"
        title: subscribe
        language: json
    -
        code_block: "{\r\n    \"method\": \"unsubscribe\", \r\n    \"params\": [\r\n        \"{topic}@{arg},{arg}\"\r\n    ], \r\n    \"id\": \"{id}\"   //call back ID\r\n}"
        title: unsubscribe
        language: json
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
