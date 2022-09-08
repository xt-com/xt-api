---
title: Change of balance
position_number: 5
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
    param

    format: balance

    eg: balance
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"balance\", \r\n    \"event\": \"balance\", \r\n    \"data\": {\r\n        \"t\": 1656043204763,   // time happened time\r\n        \"c\": \"btc\",           // currency\r\n        \"b\": \"123\",           // balance available balance\r\n        \"z\": \"SPOT\"           // bizType [SPOT,LEVER]\r\n    }\r\n}"
        title: push
        language: json
---
