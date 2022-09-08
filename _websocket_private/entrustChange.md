---
title: Change of entrust
position_number: 6
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

    format: trigger

    eg: trigger
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"trigger\", \r\n    \"event\": \"trigger\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",                // symbol\r\n        \"t\": 1656043204763,             // time happened time\r\n        \"i\": \"6216559590087220004\",     // triggerId\r\n        \"st\": \"NEW\"                     // state\r\n    }\r\n}"
        title: push
        language: json
---
